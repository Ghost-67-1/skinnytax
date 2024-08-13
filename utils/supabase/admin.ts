// @ts-nocheck
import { toDateTime } from '@/utils/helpers';
import { stripe } from '@/utils/stripe/config';
import { User, UserJSON } from '@clerk/nextjs/dist/types/server';
import { createClient } from '@supabase/supabase-js';
import Stripe from 'stripe';
import type { Database, Tables, TablesInsert } from 'types_db';

type Product = Tables<'products'>;
type Price = Tables<'prices'>;

// Change to control trial period length
const TRIAL_PERIOD_DAYS = 0;

// Note: supabaseAdmin uses the SERVICE_ROLE_KEY which you must only use in a secure server-side context
// as it has admin privileges and overwrites RLS policies!
const supabaseAdmin = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_ROLE_KEY || ''
);

const upsertProductRecord = async (product: Stripe.Product) => {
  const productData: Product = {
    id: product.id,
    active: product.active,
    name: product.name,
    description: product.description ?? null,
    image: product.images?.[0] ?? null,
    metadata: product.metadata
  };

  const { error: upsertError } = await supabaseAdmin
    .from('products')
    .upsert([productData]);
  if (upsertError)
    throw new Error(`Product insert/update failed: ${upsertError.message}`);
  console.log(`Product inserted/updated: ${product.id}`);
};

const upsertPriceRecord = async (
  price: Stripe.Price,
  retryCount = 0,
  maxRetries = 3
) => {
  const priceData: Price = {
    id: price.id,
    product_id: typeof price.product === 'string' ? price.product : '',
    active: price.active,
    currency: price.currency,
    type: price.type,
    unit_amount: price.unit_amount ?? null,
    interval: price.recurring?.interval ?? null,
    interval_count: price.recurring?.interval_count ?? null,
    trial_period_days: price.recurring?.trial_period_days ?? TRIAL_PERIOD_DAYS,
    description: null,
    metadata: null
  };

  const { error: upsertError } = await supabaseAdmin
    .from('prices')
    .upsert([priceData]);

  if (upsertError?.message.includes('foreign key constraint')) {
    if (retryCount < maxRetries) {
      console.log(`Retry attempt ${retryCount + 1} for price ID: ${price.id}`);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      await upsertPriceRecord(price, retryCount + 1, maxRetries);
    } else {
      throw new Error(
        `Price insert/update failed after ${maxRetries} retries: ${upsertError.message}`
      );
    }
  } else if (upsertError) {
    throw new Error(`Price insert/update failed: ${upsertError.message}`);
  } else {
    console.log(`Price inserted/updated: ${price.id}`);
  }
};

const deleteProductRecord = async (product: Stripe.Product) => {
  const { error: deletionError } = await supabaseAdmin
    .from('products')
    .delete()
    .eq('id', product.id);
  if (deletionError)
    throw new Error(`Product deletion failed: ${deletionError.message}`);
  console.log(`Product deleted: ${product.id}`);
};

const deletePriceRecord = async (price: Stripe.Price) => {
  const { error: deletionError } = await supabaseAdmin
    .from('prices')
    .delete()
    .eq('id', price.id);
  if (deletionError)
    throw new Error(`Price deletion failed: ${deletionError.message}`);
  console.log(`Price deleted: ${price.id}`);
};

const upsertCustomerToSupabase = async (uuid: string, customerId: string) => {
  const { error: upsertError } = await supabaseAdmin
    .from('customers')
    .upsert([{ id: uuid, stripe_customer_id: customerId }]);

  if (upsertError)
    throw new Error(
      `Supabase customer record creation failed: ${upsertError.message}`
    );

  return customerId;
};

const createCustomerInStripe = async (uuid: string, email: string) => {
  const customerData = { metadata: { supabaseUUID: uuid }, email: email };
  const newCustomer = await stripe.customers.create(customerData);
  if (!newCustomer) throw new Error('Stripe customer creation failed.');

  return newCustomer.id;
};

const createOrRetrieveCustomer = async ({
  email,
  uuid
}: {
  email: string;
  uuid: string;
}) => {
  // Check if the customer already exists in Supabase
  const { data: existingSupabaseCustomer, error: queryError } =
    await supabaseAdmin
      .from('customers')
      .select('*')
      .eq('id', uuid)
      .maybeSingle();

  if (queryError) {
    throw new Error(`Supabase customer lookup failed: ${queryError.message}`);
  }

  // Retrieve the Stripe customer ID using the Supabase customer ID, with email fallback
  let stripeCustomerId: string | undefined;
  if (existingSupabaseCustomer?.stripe_customer_id) {
    const existingStripeCustomer = await stripe.customers.retrieve(
      existingSupabaseCustomer.stripe_customer_id
    );
    stripeCustomerId = existingStripeCustomer.id;
  } else {
    // If Stripe ID is missing from Supabase, try to retrieve Stripe customer ID by email
    const stripeCustomers = await stripe.customers.list({ email: email });
    stripeCustomerId =
      stripeCustomers.data.length > 0 ? stripeCustomers.data[0].id : undefined;
  }

  // If still no stripeCustomerId, create a new customer in Stripe
  const stripeIdToInsert = stripeCustomerId
    ? stripeCustomerId
    : await createCustomerInStripe(uuid, email);
  if (!stripeIdToInsert) throw new Error('Stripe customer creation failed.');

  if (existingSupabaseCustomer && stripeCustomerId) {
    // If Supabase has a record but doesn't match Stripe, update Supabase record
    if (existingSupabaseCustomer.stripe_customer_id !== stripeCustomerId) {
      const { error: updateError } = await supabaseAdmin
        .from('customers')
        .update({ stripe_customer_id: stripeCustomerId })
        .eq('id', uuid);

      if (updateError)
        throw new Error(
          `Supabase customer record update failed: ${updateError.message}`
        );
      console.warn(
        `Supabase customer record mismatched Stripe ID. Supabase record updated.`
      );
    }
    // If Supabase has a record and matches Stripe, return Stripe customer ID
    return stripeCustomerId;
  } else {
    console.warn(
      `Supabase customer record was missing. A new record was created.`
    );

    // If Supabase has no record, create a new record and return Stripe customer ID
    const upsertedStripeCustomer = await upsertCustomerToSupabase(
      uuid,
      stripeIdToInsert
    );
    if (!upsertedStripeCustomer)
      throw new Error('Supabase customer record creation failed.');

    return upsertedStripeCustomer;
  }
};

/**
 * Copies the billing details from the payment method to the customer object.
 */
const copyBillingDetailsToCustomer = async (
  uuid: string,
  payment_method: Stripe.PaymentMethod
) => {
  //Todo: check this assertion
  const customer = payment_method.customer as string;
  const { name, phone, address } = payment_method.billing_details;
  if (!name || !phone || !address) return;
  //@ts-ignore
  await stripe.customers.update(customer, { name, phone, address });
  const { error: updateError } = await supabaseAdmin
  // @ts-ignore
  .from('users')
  // @ts-ignore
    .update({
      billing_address: { ...address },
      payment_method: { ...payment_method[payment_method.type] }
    })
    .eq('id', uuid);
  if (updateError)
    throw new Error(`Customer update failed: ${updateError.message}`);
};

const manageSubscriptionStatusChange = async (
  subscriptionId: string,
  customerId: string,
  createAction = false
) => {
  // Get customer's UUID from mapping table.
  const { data: customerData, error: noCustomerError } = await supabaseAdmin
    .from('customers')
    .select('id')
    .eq('stripe_customer_id', customerId)
    .single();

  if (noCustomerError)
    throw new Error(`Customer lookup failed: ${noCustomerError.message}`);

  const { id: uuid } = customerData!;

  const subscription = await stripe.subscriptions.retrieve(subscriptionId, {
    expand: ['default_payment_method']
  });
  // Upsert the latest status of the subscription object.
  // @ts-ignore
  const subscriptionData: TablesInsert<'subscriptions'> = {
    id: subscription.id,
    user_id: uuid,
    metadata: subscription.metadata,
    status: subscription.status,
    price_id: subscription.items.data[0].price.id,
    //TODO check quantity on subscription
    // @ts-ignore
    quantity: subscription.quantity,
    cancel_at_period_end: subscription.cancel_at_period_end,
    cancel_at: subscription.cancel_at
      ? toDateTime(subscription.cancel_at).toISOString()
      : null,
    canceled_at: subscription.canceled_at
      ? toDateTime(subscription.canceled_at).toISOString()
      : null,
    current_period_start: toDateTime(
      subscription.current_period_start
    ).toISOString(),
    current_period_end: toDateTime(
      subscription.current_period_end
    ).toISOString(),
    created: toDateTime(subscription.created).toISOString(),
    ended_at: subscription.ended_at
      ? toDateTime(subscription.ended_at).toISOString()
      : null,
    trial_start: subscription.trial_start
      ? toDateTime(subscription.trial_start).toISOString()
      : null,
    trial_end: subscription.trial_end
      ? toDateTime(subscription.trial_end).toISOString()
      : null
  };
  const { error: upsertError } = await supabaseAdmin
  // @ts-ignore
    .from('subscriptions')
    .upsert([subscriptionData]);
  if (upsertError)
    throw new Error(
      `Subscription insert/update failed: ${upsertError.message}`
    );
  console.log(
    `Inserted/updated subscription [${subscription.id}] for user [${uuid}]`
  );

  // For a new subscription copy the billing details to the customer object.
  // NOTE: This is a costly operation and should happen at the very end.
  if (createAction && subscription.default_payment_method && uuid)
    //@ts-ignore
    await copyBillingDetailsToCustomer(
      uuid,
      subscription.default_payment_method as Stripe.PaymentMethod
    );
};

const createUser = async (user: UserJSON) => {
  // @ts-ignore
  const { data, error } = await supabaseAdmin.from('users').insert([
    {
      id: user.id,
      email: user.email_addresses[0].email_address,
      full_name: user.first_name + ' ' + user.last_name,
      avatar_url: user.image_url
    }
  ]);
  if (error) {
    throw error;
  }
  return data;
};

const updateUser = async (user: UserJSON) => {
  const { data, error } = await supabaseAdmin
  // @ts-ignore
  .from('users')
  // @ts-ignore
    .update({
      full_name: `${user.first_name}  ${user.last_name}`,
      avatar_url: user.image_url || null
    })
    .eq('id', user.id);
  if (error) {
    throw error;
  }
  return data;
};

const deleteUser = async (id: string) => {
  // @ts-ignore
  const { error } = await supabaseAdmin.from('users').delete().eq('id', id);
  if (error) {
    throw error;
  }
};


const insertPersonalInformation = async (body: []) => {
  // @ts-ignore
  const { data, error } = await supabaseAdmin.from('personal_information').insert(body)
  if (error) {
    throw error
  }
  return data
}

const updatePersonalInformation = async (body: {}, id) => {
  // @ts-ignore
  const { data, error } = await supabaseAdmin.from('personal_information').update(body).eq('id', id)
  if (error) {
    throw error
  }
  return data
}

const getPersonalInformation = async (userId: string) => {
  // @ts-ignore
  const { data, error } = await supabaseAdmin.from('personal_information').select('*').eq('user_id', userId)
  if (error) {
    throw error
  }
  return data
}

const insertOtherPersonalInformation = async (body: {}) => {
  // @ts-ignore
  const { data, error } = await supabaseAdmin.from('other_personal_information').insert([body])
  if (error) {
    throw error
  }
  return data
}

const updateOtherPersonalInformation = async (body: {}, id) => {
  // @ts-ignore
  const { data, error } = await supabaseAdmin.from('other_personal_information').update(body).eq('id', id)
  if (error) {
    throw error
  }
  return data
}

const getOtherPersonalInformation = async (userId: string) => {
  // @ts-ignore
  const { data, error } = await supabaseAdmin.from('other_personal_information').select('*').eq('user_id', userId)
  if (error) {
    throw error
  }
  return data
}

const insertDecisionsPersonalInformation = async (body: []) => {
  // @ts-ignore
  const { data, error } = await supabaseAdmin.from('user_discussion_information').insert(body)
  if (error) {
    throw error
  }
  return data
}

const updateDecisionsPersonalInformation = async (body: {}, id) => {
  // @ts-ignore
  const { data, error } = await supabaseAdmin.from('user_discussion_information').update(body).eq('id', id)
  if (error) {
    throw error
  }
  return data
}

const getDecisionsPersonalInformation = async (userId: string) => {
  // @ts-ignore
  const { data, error } = await supabaseAdmin.from('user_discussion_information').select('*').eq('user_id', userId)
  if (error) {
    throw error
  }
  return data
}

const insertChildInformation = async (body: any[]) => {
  // @ts-ignore
  const { data, error } = await supabaseAdmin.from('child_information').insert(body)
  if (error) {
    throw error
  }
  return data
}


const updateChildInformation = async (body: {}, id) => {
  // @ts-ignore
  const { data, error } = await supabaseAdmin.from('child_information').update(body).eq('id', id)
  if (error) {
    throw error
  }
  return data
}

const getChildInformation = async (userId: string) => {
  // @ts-ignore
  const { data, error } = await supabaseAdmin.from('child_information').select('*').eq('user_id', userId)
  if (error) {
    throw error
  }
  return data
}

const insertChildOtherInformation = async (body: []) => {
  // @ts-ignore
  const { data, error } = await supabaseAdmin.from('child_other_information').insert(body)
  if (error) {
    throw error
  }
  return data
}

const updateChildOtherInformation = async (body: {}, id) => {
  // @ts-ignore
  const { data, error } = await supabaseAdmin.from('child_other_information').update(body).eq('id', id)
  if (error) {
    throw error
  }
  return data
}

const getChildOtherInformation = async (userId: string) => {
  // @ts-ignore
  const { data, error } = await supabaseAdmin.from('child_other_information').select('*').eq('user_id', userId)
  if (error) {
    throw error
  }
  return data
}

const insertChildAdviserInformation = async (body: []) => {
  // @ts-ignore
  const { data, error } = await supabaseAdmin.from('child_advisor').insert(body)
  if (error) {
    throw error
  }
  return data
}

const updateChildAdviserInformation = async (body: {}, id) => {
  // @ts-ignore
  const { data, error } = await supabaseAdmin.from('child_advisor').update(body).eq('id', id)
  if (error) {
    throw error
  }
  return data
}

const getChildAdviserInformation = async (userId: string) => {
  // @ts-ignore
  const { data, error } = await supabaseAdmin.from('child_advisor').select('*').eq('user_id', userId)
  if (error) {
    throw error
  }
  return data
}

const insertCoupleInformation = async (body: {}) => {
  // @ts-ignore
  const { data, error } = await supabaseAdmin.from('married_information').insert([body])
  if (error) {
    throw error
  }
  return data
}

const updateCoupleInformation = async (body: {}, id) => {
  // @ts-ignore
  const { data, error } = await supabaseAdmin.from('married_information').update(body).eq('id', id)
  if (error) {
    throw error
  }
  return data
}

const getCoupleInformation = async (userId: string) => {
  // @ts-ignore
  const { data, error } = await supabaseAdmin.from('married_information').select('*').eq('user_id', userId)
  if (error) {
    throw error
  }
  return data
}

const insertFinancial_information = async (body: {}) => {
  // @ts-ignore
  const { data, error } = await supabaseAdmin.from('financial_information').insert([body])
  if (error) {
    throw error
  }
  return data
}
const insert_promissory_notes_and_trust_deeds = async (body: {}) => {
  // @ts-ignore
  const { data, error } = await supabaseAdmin.from('promissory_notes_and_trust_deeds').insert([body])
  if (error) {
    throw error
  }
  return data
}
const insert_real_estate_information = async (body: {}) => {
  // @ts-ignore
  const { data, error } = await supabaseAdmin.from('real_estate_information').insert([body])
  if (error) {
    throw error
  }
  return data
}
const insert_ira_accounts_and_retirement_plans = async (body: {}) => {
  // @ts-ignore
  const { data, error } = await supabaseAdmin.from('ira_accounts_and_retirement_plans').insert([body])
  if (error) {
    throw error
  }
  return data
}
const insert_life_insurance = async (body: {}) => {
  // @ts-ignore
  const { data, error } = await supabaseAdmin.from('life_insurance').insert([body])
  if (error) {
    throw error
  }
  return data
}


export {
  upsertProductRecord,
  upsertPriceRecord,
  deleteProductRecord,
  deletePriceRecord,
  createOrRetrieveCustomer,
  manageSubscriptionStatusChange,
  createUser,
  updateUser,
  deleteUser,
  insertPersonalInformation,
  insertOtherPersonalInformation,
  insertDecisionsPersonalInformation,
  insertChildInformation,
  insertChildOtherInformation,
  insertCoupleInformation,
  insertChildAdviserInformation,
  insertFinancial_information,
  insert_promissory_notes_and_trust_deeds,
  insert_real_estate_information,
  insert_ira_accounts_and_retirement_plans,
  insert_life_insurance,
  getPersonalInformation,
  getOtherPersonalInformation,
  getDecisionsPersonalInformation,
  getChildInformation,
  getChildOtherInformation,
  getCoupleInformation,
  getChildAdviserInformation,
  updatePersonalInformation,
  updateOtherPersonalInformation,
  updateDecisionsPersonalInformation,
  updateChildInformation,
  updateChildOtherInformation,
  updateChildAdviserInformation,
};


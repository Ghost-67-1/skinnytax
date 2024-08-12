'use server';

import Stripe from 'stripe';
import { stripe } from '@/utils/stripe/config';
import { createClient } from '@/utils/supabase/server';
import { createOrRetrieveCustomer } from '@/utils/supabase/admin';
import {
  getURL,
  getErrorRedirect,
  calculateTrialEndUnixTimestamp
} from '@/utils/helpers';
import { Tables } from '@/types_db';
import { currentUser } from '@clerk/nextjs/server';
import { getCurrentSubscriptionId } from '../supabase/queries';

// @ts-ignore
type Price = Tables<'prices'>;

type CheckoutResponse = {
  errorRedirect?: string;
  sessionId?: string;
  subscriptionId?: string;
};

export async function checkoutWithStripe(
  price: Price,
  redirectPath: string = '/account',
  isChangePlan: boolean = false // Add the isChangePlan flag
): Promise<CheckoutResponse> {
  try {
    const user = await currentUser();

    if (!user) {
      throw new Error('Could not get user session.');
    }

    let customer: string;
    try {
      customer = await createOrRetrieveCustomer({
        uuid: user.id || '',
        email: user.emailAddresses[0]?.emailAddress || ''
      });
    } catch (err) {
      console.error(err);
      throw new Error('Unable to access customer record.');
    }

    if (isChangePlan) {
      // Update the existing subscription
      const supabase = await createClient();
      let subscription;
      try {
        // Assuming you have a function to get the current subscription ID
        const subscriptionId = await getCurrentSubscriptionId(
          supabase,
          user.id
        );
        if (!subscriptionId) {
          throw new Error('No active subscription found.');
        }
        const subscription1 =
          await stripe.subscriptions.retrieve(subscriptionId);
        // subscription = await stripe.subscriptions.cancel(subscriptionId, {
        //   cancellation_details: { comment: 'Changed plan' },
        //   prorate: true
        // });
        subscription = await stripe.subscriptions.update(subscriptionId, {
          items: [
            {
              id: subscription1.items.data[0].id,
              // @ts-ignore
              price: price.id
            }
          ],
          trial_end: 'now'
        });
        console.log('🚀 ~ subscription:', subscription);
      } catch (err) {
        console.error(err);
        throw new Error('Unable to update subscription.');
      }

      if (subscription) {
        return { subscriptionId: subscription.id };
      } else {
        throw new Error('Unable to update subscription.');
      }
    } else {
      // Create a new checkout session
      let params: Stripe.Checkout.SessionCreateParams = {
        allow_promotion_codes: true,
        billing_address_collection: 'required',
        customer,
        customer_update: {
          address: 'auto'
        },
        line_items: [
          {
            // @ts-ignore
            price: price?.id,
            quantity: 1
          }
        ],
        cancel_url: getURL(),
        success_url: getURL(redirectPath),
        mode: 'subscription',
        subscription_data: {
          // @ts-ignore
          trial_end: calculateTrialEndUnixTimestamp(price?.trial_period_days)
        }
      };

      let session;
      try {
        session = await stripe.checkout.sessions.create(params);
      } catch (err) {
        console.error(err);
        throw new Error('Unable to create checkout session.');
      }

      if (session) {
        return { sessionId: session.id };
      } else {
        throw new Error('Unable to create checkout session.');
      }
    }
  } catch (error) {
    if (error instanceof Error) {
      return {
        errorRedirect: getErrorRedirect(
          redirectPath,
          error.message,
          'Please try again later or contact a system administrator.'
        )
      };
    } else {
      return {
        errorRedirect: getErrorRedirect(
          redirectPath,
          'An unknown error occurred.',
          'Please try again later or contact a system administrator.'
        )
      };
    }
  }
}

export async function cancelSubscription(
  subscriptionId: string,
  redirectPath: string
) {
  try {
    const subscription = await stripe.subscriptions.update(subscriptionId, {
      cancel_at_period_end: true
    });

    return { subscription };
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      return {
        errorRedirect: getErrorRedirect(
          redirectPath,
          error.message,
          'Please try again later or contact a system administrator.'
        )
      };
    } else {
      return {
        errorRedirect: getErrorRedirect(
          redirectPath,
          'An unknown error occurred.',
          'Please try again later or contact a system administrator.'
        )
      };
    }
  }
}

export async function createStripePortal(currentPath: string) {
  try {
    // const supabase = createClient();
    const user = await currentUser();

    if (!user) {
      // if (error) {
      // console.error(error);
      // }
      throw new Error('Could not get user session.');
    }

    let customer;
    try {
      customer = await createOrRetrieveCustomer({
        uuid: user.id || '',
        email: user.emailAddresses[0]?.emailAddress || ''
      });
    } catch (err) {
      console.error(err);
      throw new Error('Unable to access customer record.');
    }

    if (!customer) {
      throw new Error('Could not get customer.');
    }

    try {
      const { url } = await stripe.billingPortal.sessions.create({
        customer,
        return_url: getURL('/account')
      });
      if (!url) {
        throw new Error('Could not create billing portal');
      }
      return url;
    } catch (err) {
      console.error(err);
      throw new Error('Could not create billing portal');
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      return getErrorRedirect(
        currentPath,
        error.message,
        'Please try again later or contact a system administrator.'
      );
    } else {
      return getErrorRedirect(
        currentPath,
        'An unknown error occurred.',
        'Please try again later or contact a system administrator.'
      );
    }
  }
}

/** 
* USERS
* Note: This table contains user data. Users should only be able to view and update their own data.
*/
create table users (
  -- UUID from auth.users
  id text not null primary key,
  full_name text,
  avatar_url text,
  email text unique not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  -- The customer's billing address, stored in JSON format.
  billing_address jsonb,
  -- Stores your customer's payment instruments.
  payment_method jsonb
);
alter table users enable row level security;
create policy "Can view own user data." on users for select using (true);
create policy "Can update own user data." on users for update using (true);

/**
* CUSTOMERS
* Note: this is a private table that contains a mapping of user IDs to Stripe customer IDs.
*/
create table customers (
  -- UUID from auth.users
  id text not null primary key,
  -- The user's customer ID in Stripe. User must not be able to update this.
  stripe_customer_id text
);
alter table customers enable row level security;
-- No policies as this is a private table that the user must not have access to.

/** 
* PRODUCTS
* Note: products are created and managed in Stripe and synced to our DB via Stripe webhooks.
*/
create table products (
  -- Product ID from Stripe, e.g. prod_1234.
  id text primary key,
  -- Whether the product is currently available for purchase.
  active boolean,
  -- The product's name, meant to be displayable to the customer. Whenever this product is sold via a subscription, name will show up on associated invoice line item descriptions.
  name text,
  -- The product's description, meant to be displayable to the customer. Use this field to optionally store a long form explanation of the product being sold for your own rendering purposes.
  description text,
  -- A URL of the product image in Stripe, meant to be displayable to the customer.
  image text,
  -- Set of key-value pairs, used to store additional information about the object in a structured format.
  metadata jsonb
);
alter table products enable row level security;
create policy "Allow public read-only access." on products for select using (true);

/**
* PRICES
* Note: prices are created and managed in Stripe and synced to our DB via Stripe webhooks.
*/
create type pricing_type as enum ('one_time', 'recurring');
create type pricing_plan_interval as enum ('day', 'week', 'month', 'year');
create table prices (
  -- Price ID from Stripe, e.g. price_1234.
  id text primary key,
  -- The ID of the prduct that this price belongs to.
  product_id text references products, 
  -- Whether the price can be used for new purchases.
  active boolean,
  -- A brief description of the price.
  description text,
  -- The unit amount as a positive integer in the smallest currency unit (e.g., 100 cents for US$1.00 or 100 for ¥100, a zero-decimal currency).
  unit_amount bigint,
  -- Three-letter ISO currency code, in lowercase.
  currency text check (char_length(currency) = 3),
  -- One of `one_time` or `recurring` depending on whether the price is for a one-time purchase or a recurring (subscription) purchase.
  type pricing_type,
  -- The frequency at which a subscription is billed. One of `day`, `week`, `month` or `year`.
  interval pricing_plan_interval,
  -- The number of intervals (specified in the `interval` attribute) between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months.
  interval_count integer,
  -- Default number of trial days when subscribing a customer to this price using [`trial_from_plan=true`](https://stripe.com/docs/api#create_subscription-trial_from_plan).
  trial_period_days integer,
  -- Set of key-value pairs, used to store additional information about the object in a structured format.
  metadata jsonb
);
alter table prices enable row level security;
create policy "Allow public read-only access." on prices for select using (true);

/**
* SUBSCRIPTIONS
* Note: subscriptions are created and managed in Stripe and synced to our DB via Stripe webhooks.
*/
create type subscription_status as enum ('trialing', 'active', 'canceled', 'incomplete', 'incomplete_expired', 'past_due', 'unpaid', 'paused');
create table subscriptions (
  -- Subscription ID from Stripe, e.g. sub_1234.
  id text primary key,
  user_id text not null,
  -- The status of the subscription object, one of subscription_status type above.
  status subscription_status,
  -- Set of key-value pairs, used to store additional information about the object in a structured format.
  metadata jsonb,
  -- ID of the price that created this subscription.
  price_id text references prices,
  -- Quantity multiplied by the unit amount of the price creates the amount of the subscription. Can be used to charge multiple seats.
  quantity integer,
  -- If true the subscription has been canceled by the user and will be deleted at the end of the billing period.
  cancel_at_period_end boolean,
  -- Time at which the subscription was created.
  created timestamp with time zone default timezone('utc'::text, now()) not null,
  -- Start of the current period that the subscription has been invoiced for.
  current_period_start timestamp with time zone default timezone('utc'::text, now()) not null,
  -- End of the current period that the subscription has been invoiced for. At the end of this period, a new invoice will be created.
  current_period_end timestamp with time zone default timezone('utc'::text, now()) not null,
  -- If the subscription has ended, the timestamp of the date the subscription ended.
  ended_at timestamp with time zone default timezone('utc'::text, now()),
  -- A date in the future at which the subscription will automatically get canceled.
  cancel_at timestamp with time zone default timezone('utc'::text, now()),
  -- If the subscription has been canceled, the date of that cancellation. If the subscription was canceled with `cancel_at_period_end`, `canceled_at` will still reflect the date of the initial cancellation request, not the end of the subscription period when the subscription is automatically moved to a canceled state.
  canceled_at timestamp with time zone default timezone('utc'::text, now()),
  -- If the subscription has a trial, the beginning of that trial.
  trial_start timestamp with time zone default timezone('utc'::text, now()),
  -- If the subscription has a trial, the end of that trial.
  trial_end timestamp with time zone default timezone('utc'::text, now())
);
alter table subscriptions enable row level security;
create policy "Can only view own subs data." on subscriptions for select using (true);

/**
 * REALTIME SUBSCRIPTIONS
 * Only allow realtime listening on public tables.
 */
drop publication if exists supabase_realtime;
create publication supabase_realtime for table products, prices;


create type gender_type as enum ('male', 'female', 'other');
create type spouse_type as enum ('S1', 'S2');
create type user_discussion_type as enum ('medical', 'financial');

-- Personal Information table
create table personal_information (
  id serial primary key,
  user_id text references users(id),
  spouse spouse_type,
  date_of_birth date,
  gender gender_type,
  us_citizen boolean,
  phone varchar(20),
  retired boolean,
  occupation varchar(50),
  employer varchar(50),
  work_phone varchar(20),
  previously_married boolean,
  assisted_living_care boolean,
  military_veteran boolean,
  SSN varchar(20)
);
alter table personal_information enable row level security;
create policy "Can view own personal information." on personal_information for select using (true);
create policy "Can update own personal information." on personal_information for update using (true);

-- Other Personal Information table
create table other_personal_information (
  id serial primary key,
  user_id text references users(id),
  personal_information_id int references personal_information(id),
  home_address varchar(100),
  mail_at_this_address boolean,
  city varchar(50),
  state varchar(50),
  zip varchar(10),
  country varchar(50),
  employer_address varchar(100),
  employer_city varchar(50),
  employer_state varchar(50),
  employer_zip varchar(10),
  home_phone_number varchar(20),
  fax varchar(20)
);
alter table other_personal_information enable row level security;
-- Add policies if necessary for other_personal_information table

-- User Discussion Information table
create table user_discussion_information (
  id serial primary key,
  user_id text references users(id),
  personal_information_id int references personal_information(id),
  full_name varchar(100),
  primary_phone boolean,
  cell_phone varchar(20),
  us_citizen boolean,
  discussion user_discussion_type
);
alter table user_discussion_information enable row level security;
-- Add policies if necessary for user_discussion_information table

-- Child Information table
create table child_information (
  id serial primary key,
  personal_information_id int references personal_information(id),
  full_name varchar(100),
  date_of_birth date,
  child_position varchar(100),
  gender gender_type,
  parents int references personal_information(id),
  home_address varchar(100),
  home_phone varchar(20),
  work_phone varchar(20),
  email varchar(100),
  marital_status varchar(100),
  earn_money boolean,
  living_trust boolean
);
alter table child_information enable row level security;
create policy "Can view own child information." on child_information for select using (true);
create policy "Can update own child information." on child_information for update using (true);

-- Child Other Information table
create table child_other_information (
  id serial primary key,
  children_get_along boolean,
  child_dead boolean,
  names varchar(100),
  children_have_stepchildren boolean,
  age_of_grandchildren varchar(100),
  age_of_great_grandchildren varchar(100),
  medical_problems boolean,
  exclude_children_from_estate varchar(100),
  trust_with_a_deceased_spouse boolean
);
alter table child_other_information enable row level security;
-- Add policies if necessary for child_other_information table

-- Employment Details table
create table employment_details (
  id serial primary key,
  user_id text references users(id),
  company_name varchar(100),
  job_title varchar(100),
  start_date date,
  end_date date
);
alter table employment_details enable row level security;
create policy "Can view own employment details." on employment_details for select using (true);
create policy "Can update own employment details." on employment_details for update using (true);

-- Financial Information table
create table financial_information (
  id serial primary key,
  user_id text references users(id),
  income decimal(15, 2),
  assets decimal(15, 2),
  liabilities decimal(15, 2)
);
alter table financial_information enable row level security;
create policy "Can view own financial information." on financial_information for select using (true);
create policy "Can update own financial information." on financial_information for update using (true);

-- Financial Information Table
CREATE TABLE financial_information (
  id SERIAL PRIMARY KEY,
  user_id TEXT REFERENCES users(id) ON DELETE CASCADE,
  s1_annual_gross_income NUMERIC(12, 2),
  s2_annual_gross_income NUMERIC(12, 2),
  pod BOOLEAN DEFAULT FALSE,
  pod_person TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE financial_information ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Can view own financial information." 
  ON financial_information 
  FOR SELECT 
  USING (true);

CREATE POLICY "Can update own financial information." 
  ON financial_information 
  FOR UPDATE 
  USING (true);

-- Financial Ownership Type Enum
CREATE TYPE financial_ownership_type AS ENUM ('S1', 'S2', 'Joint', 'Trust');

-- Financial Account Type Enum
CREATE TYPE financial_account_type AS ENUM ('Checking', 'Saving', 'CD');

-- Financial Assets Type Enum
CREATE TYPE financial_assets_type AS ENUM ('credit_unions', 'stocks', 'mutual_funds');

-- Financial Assets Information Table
CREATE TABLE financial_assets_information (
  id SERIAL PRIMARY KEY,
  user_id TEXT REFERENCES users(id) ON DELETE CASCADE,
  financial_information_id INT REFERENCES financial_information(id) ON DELETE CASCADE,
  name TEXT,
  ownership financial_ownership_type,
  account_type financial_account_type,
  approx_value NUMERIC(12, 2),
  shares INT DEFAULT 0,
  assets_type financial_assets_type,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE financial_assets_information ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Can view own financial assets information." 
  ON financial_assets_information 
  FOR SELECT 
  USING (true);

CREATE POLICY "Can update own financial assets information." 
  ON financial_assets_information 
  FOR UPDATE 
  USING (true);

-- Promissory Notes Table
CREATE TABLE promissory_notes (
  id SERIAL PRIMARY KEY,
  user_id TEXT REFERENCES users(id) ON DELETE CASCADE,
  name TEXT,
  original_amount NUMERIC(12, 2),
  balance_due NUMERIC(12, 2),
  secured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE promissory_notes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Can view own promissory notes." 
  ON promissory_notes 
  FOR SELECT 
  USING (true);

CREATE POLICY "Can update own promissory notes." 
  ON promissory_notes 
  FOR UPDATE 
  USING (true);

-- Children Financial Information Table
CREATE TABLE children_financial_information (
  id SERIAL PRIMARY KEY,
  name TEXT,
  financial_information_id INT REFERENCES financial_information(id) ON DELETE CASCADE,
  earn_amount NUMERIC(12, 2) DEFAULT 0,
  reduce_child_share BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE children_financial_information ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Can view own children financial information." 
  ON children_financial_information 
  FOR SELECT 
  USING (financial_information_id IN (SELECT id FROM financial_information WHERE true));

CREATE POLICY "Can update own children financial information." 
  ON children_financial_information 
  FOR UPDATE 
  USING (financial_information_id IN (SELECT id FROM financial_information WHERE true));


CREATE TABLE real_estate_information (
  id SERIAL PRIMARY KEY,
  user_id TEXT REFERENCES users(id) ON DELETE CASCADE,
  address TEXT,
  original_cost INT,
  current_value INT,
  debt_or_mortgage BOOLEAN DEFAULT FALSE,
  net_value INT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE real_estate_information ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Can view own real estate information." 
  ON real_estate_information 
  FOR SELECT 
  USING (true);

CREATE POLICY "Can update own real estate information." 
  ON real_estate_information 
  FOR UPDATE 
  USING (true);

CREATE TABLE other_real_estate_information (
  id SERIAL PRIMARY KEY,
  user_id TEXT REFERENCES users(id) ON DELETE CASCADE,
  annual_rental INT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);


CREATE TYPE IRA_owner_type AS ENUM ('S1', 'S2');
CREATE TABLE IRA_accounts(
  id SERIAL PRIMARY KEY,
  user_id TEXT REFERENCES users(id) ON DELETE CASCADE,
  custodian TEXT,
  owner IRA_owner_type,
  type TEXT,
  primary_beneficiary TEXT,
  secondary_beneficiary TEXT,
  approx_value NUMERIC(12, 2),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
)
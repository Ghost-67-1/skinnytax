
-- Financial Information table
create table financial_information (
  id serial primary key,
  user_id text references users(id),
  s1_annual_gross_income int,
  s2_annual_gross_income int,
  POD boolean,
  POD_person text,
  
);
alter table financial_information enable row level security;
create policy "Can view own financial information." on financial_information for select using (true);
create policy "Can update own financial information." on financial_information for update using (true);
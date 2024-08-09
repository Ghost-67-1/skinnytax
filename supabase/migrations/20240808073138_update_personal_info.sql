ALTER TABLE personal_information
ADD COLUMN full_name varchar(255),
ADD COLUMN legal_aka varchar(255);

ALTER TABLE other_personal_information
DROP COLUMN personal_information_id,
DROP COLUMN employer_address,
DROP COLUMN employer_city,
DROP COLUMN employer_state,
DROP COLUMN employer_zip,
DROP COLUMN country;

create type child_advisor_type as enum ('financial', 'cpa');
create table child_advisor(
    id serial primary key,
    user_id text references users(id),
    full_name varchar(100),
    phone_number varchar(20),
    home_address varchar(100),
    type child_advisor_type,
)


create table married_information(
    id serial primary key,
    user_id text references users(id),
    date_of_marriage date,
    no_of_children int,
    community_property boolean,
    valuable_gifts boolean,
    future_inheritances_as_community_property boolean,
    substantial_assets boolean,
    post_marital_agreement boolean
)
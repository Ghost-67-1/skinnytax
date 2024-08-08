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

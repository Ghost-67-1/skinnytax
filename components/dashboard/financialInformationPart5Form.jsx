'use client'
import React, { Fragment, useState } from 'react'
import CustomInput from '../CustomInputs';
import axios from 'axios';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { RiArrowRightSLine } from 'react-icons/ri'
import { toast } from 'react-toastify';
import P2BankAndSaving from '../P2/P2BankAndSaving';
import P2StocksOrBonds from '../P2/P2StocksOrBonds';
import P2MutualFunds from '../P2/P2MutualFunds';
const personalInformationPart1 = [
  {
    name: 'Information about you (S1)',
    id: 'S1',
    fields: [
      {
        id: 'S1_full_name',
        label: 'Your Full Name',
        type: 'text',
        placeholder: 'Your Name',
        required: true,
        className: 'col-md-4 col-sm-6'
      },
      {
        id: 'S1_legal_aka',
        label: 'Legal AKA(if any)',
        type: 'text',
        placeholder: 'AKA',
        required: true,
        className: 'col-md-4 col-sm-6'
      },
      {
        id: 'S1_date_of_birth',
        label: 'Date of Birth',
        type: 'date',
        placeholder: 'xx-xx-xxxx',
        required: true,
        className: 'col-md-4 col-sm-6'
      },
      {
        id: 'S1_us_citizen',
        label: 'US Citizen',
        type: 'radio',
        required: true,
        className: 'col-md-12 col-sm-12',
        options: [
          { value: 'Yes', label: 'Yes' },
          { value: 'No', label: 'No' }
        ],
        defaultValue: 'No'
      },
      {
        id: 'S1_phone',
        label: 'Cell Phone',
        type: 'number',
        placeholder: '+1(---)-(--)-(--)',
        required: true,
        className: 'col-md-4 col-sm-6'
      },
      {
        id: 'S1_email',
        label: 'Personal Email',
        type: 'email',
        placeholder: 'abc123@gmail.com',
        required: true,
        className: 'col-md-8 col-sm-12'
      },
      {
        id: 'S1_retired',
        label: 'Are You Retired?',
        type: 'radio',
        required: true,
        className: 'col-md-8 col-sm-12',
        options: [
          { value: 'Yes', label: 'yes' },
          { value: 'No', label: 'No' }
        ],
        defaultValue: 'No'
      },
      // {
      //     id: 'S1_retiredate',
      //     label: 'if not, when?',
      //     type: 'date',
      //     placeholder: 'xx-xx-xxxx',
      //     // required: true,
      //     className: 'col-md-4 col-sm-6'
      // },
      {
        id: 'S1_occupation',
        label: 'Occupation (or prior one, if retired)',
        type: 'text',
        placeholder: 'Occupation',
        required: true,
        className: 'col-md-8 col-sm-8'
      },
      {
        id: 'S1_employer',
        label: 'Employer',
        type: 'text',
        placeholder: 'Type Your Last Work CEO Name Here',
        required: true,
        className: 'col-md-8 col-sm-12'
      },
      {
        id: 'S1_work_phone',
        label: 'Work Phone',
        type: 'number',
        placeholder: '+1(---)-(--)-(--)',
        required: true,
        className: 'col-md-4 col-sm-6'
      },
      {
        id: 'S1_previously_married',
        label: 'Where You Previously Married?',
        type: 'radio',
        required: true,
        className: 'col-md-8 col-sm-12',
        options: [
          { value: 'Yes', label: 'yes' },
          { value: 'No', label: 'No' }
        ],
        defaultValue: 'No'
      },
      {
        id: 'S1_assisted_living_care',
        label:
          'Are You(or your spouse) receiving home care or assisted living care?',
        type: 'radio',
        required: true,
        className: 'col-md-8 col-sm-12',
        options: [
          { value: 'Yes', label: 'yes' },
          { value: 'No', label: 'No' }
        ],
        defaultValue: 'No'
      },
      {
        id: 'S1_military_veteran',
        label: 'Are You(or your spouse) a military veteran?',
        type: 'radio',
        required: true,
        className: 'col-md-8 col-sm-12',
        options: [
          { value: 'Yes', label: 'yes' },
          { value: 'No', label: 'No' }
        ],
        defaultValue: 'No'
      },
      {
        id: 'S1_ssn',
        label: 'SSN',
        type: 'text',
        placeholder: 'Enter Your SSN',
        required: true,
        className: 'col-md-5 col-sm-6'
      }
    ]
  },
  {
    name: 'Information about your spouse (S2)',
    id: 'S2',
    fields: [
      {
        id: 'S2_full_name',
        label: 'Your Full Name',
        type: 'text',
        placeholder: 'Your Name',
        // required: true,
        className: 'col-md-4 col-sm-6'
      },
      {
        id: 'S2_legal_aka',
        label: 'Legal AKA(if any)',
        type: 'text',
        placeholder: 'AKA',
        // required: true,
        className: 'col-md-4 col-sm-6'
      },
      {
        id: 'S2_date_of_birth',
        label: 'Date of Birth',
        type: 'date',
        placeholder: 'xx-xx-xxxx',
        // required: true,
        className: 'col-md-4 col-sm-6'
      },
      {
        id: 'S2_us_citizen',
        label: 'Us Citizen',
        type: 'radio',
        required: true,
        className: 'col-md-12 col-sm-12',
        options: [
          { value: 'Yes', label: 'Yes' },
          { value: 'No', label: 'No' }
        ],
        defaultValue: 'No'
      },
      {
        id: 'S2_phone',
        label: 'Cell Phone',
        type: 'number',
        placeholder: '+1(---)-(--)-(--)',
        required: true,
        className: 'col-md-4 col-sm-6'
      },
      {
        id: 'S2_email',
        label: 'Personal Email',
        type: 'email',
        placeholder: 'abc123@gmail.com',
        required: true,
        className: 'col-md-8 col-sm-12'
      },
      {
        id: 'S2_retired',
        label: 'Are You Retired?',
        type: 'radio',
        required: true,
        className: 'col-md-8 col-sm-12',
        options: [
          { value: 'Yes', label: 'yes' },
          { value: 'No', label: 'No' }
        ],
        defaultValue: 'No'
      },
      // {
      //     id: 'S2_retiredate',
      //     label: 'if not, when?',
      //     type: 'date',
      //     placeholder: 'xx-xx-xxxx',
      //     // required: true,
      //     className: 'col-md-4 col-sm-6'
      // },
      {
        id: 'S2_occupation',
        label: 'Occupation (or prior one, if retired)',
        type: 'text',
        placeholder: 'Occupation',
        required: true,
        className: 'col-md-8 col-sm-12'
      },
      {
        id: 'S2_employer',
        label: 'Employer',
        type: 'text',
        placeholder: 'Type Your Last Work CEO Name Here',
        required: true,
        className: 'col-md-8 col-sm-12'
      },
      {
        id: 'S2_work_phone',
        label: 'Work Phone',
        type: 'number',
        placeholder: '+1(---)-(--)-(--)',
        required: true,
        className: 'col-md-4 col-sm-6'
      },
      {
        id: 'S2_previously_married',
        label: 'Where You Previously Married?',
        type: 'radio',
        required: true,
        className: 'col-md-8 col-sm-12',
        options: [
          { value: 'Yes', label: 'yes' },
          { value: 'No', label: 'No' }
        ],
        defaultValue: 'No'
      },
      {
        id: 'assisted_living_care',
        label:
          'Are You(or your spouse) receiving home care or assisted living care?',
        type: 'radio',
        required: true,
        className: 'col-md-8 col-sm-12',
        options: [
          { value: 'Yes', label: 'yes' },
          { value: 'No', label: 'No' }
        ],
        defaultValue: 'No'
      },
      {
        id: 'S2_military_veteran',
        label: 'Are You(or your spouse) a military veteran?',
        type: 'radio',
        // required: true,
        className: 'col-md-8 col-sm-12',
        options: [
          { value: 'Yes', label: 'yes' },
          { value: 'No', label: 'No' }
        ],
        defaultValue: 'No'
      },
      {
        id: 'S2_ssn',
        label: 'SSN',
        type: 'text',
        placeholder: 'Enter Your SSN',
        required: true,
        className: 'col-md-5 col-sm-6'
      }
    ]
  },
  {
    name: 'Other information',
    id: 'other',
    fields: [
      {
        id: 'S3_home_address',
        label: 'Home Address',
        type: 'text',
        placeholder: 'Your Address',
        required: true,
        className: 'col-md-6 col-sm-12'
      },
      {
        id: 'S3_mail_at_this_address',
        label: 'Can You Receive Mail at This address?',
        type: 'radio',
        required: true,
        className: 'col-md-6 col-sm-12',
        options: [
          { value: 'Yes', label: 'yes' },
          { value: 'No', label: 'No' }
        ],
        defaultValue: 'No'
      },
      {
        id: 'S3_city',
        label: 'City',
        type: 'text',
        placeholder: 'Enter City You Living',
        required: true,
        className: 'col-md-6 col-sm-12'
      },
      {
        id: 'S3_state',
        label: 'State',
        type: 'text',
        placeholder: 'Missisipi',
        required: true,
        className: 'col-md-3 col-sm-6'
      },
      {
        id: 'S3_zip',
        label: 'Zip Code',
        type: 'number',
        placeholder: '-- -- -- -- --',
        required: true,
        className: 'col-md-3 col-sm-6'
      },
      {
        id: 'S3_home_phone_number',
        label: 'Home Phone Number',
        type: 'number',
        placeholder: 'xx-xxxx-xx-xx',
        required: true,
        className: 'col-md-4 col-sm-6'
      },
      {
        id: 'S3_fax',
        label: 'Fax',
        type: 'number',
        placeholder: 'xx-xxxx-xx-xx',
        required: true,
        className: 'col-md-6 col-sm-12'
      }
    ]
  },
  {
    name: 'financial',
    id: 'decission_1',
    fields: [
      {
        id: 'S4_full_name',
        label: 'Full Name',
        type: 'text',
        placeholder: 'Enter Your Name',
        required: true,
        className: 'col-md-4 col-sm-6'
      },
      {
        id: 'S4_primary_phone',
        label: 'Primary',
        type: 'number',
        placeholder: '+1(---)-(--)-(--)',
        required: true,
        className: 'col-md-4 col-sm-6'
      },
      {
        id: 'S4_cell_phone',
        label: 'Cell Phone',
        type: 'number',
        placeholder: '+1(---)-(--)-(--)',
        required: true,
        className: 'col-md-4 col-sm-6'
      },
      {
        id: 'S4_us_citizen',
        label: 'Us Citizen',
        type: 'radio',
        required: true,
        className: 'col-md-4 col-sm-6',
        options: [
          { value: 'Yes', label: 'Yes' },
          { value: 'No', label: 'No' }
        ],
        defaultValue: 'No'
      }
    ]
  },
  {
    name: 'medical',
    id: 'decission_2',
    fields: [
      {
        id: 'S5_full_name',
        label: 'Full Name',
        type: 'text',
        placeholder: 'Enter Your Name',
        required: true,
        className: 'col-md-4 col-sm-6'
      },
      {
        id: 'S5_primary_phone',
        label: 'Primary',
        type: 'number',
        placeholder: '+1(---)-(--)-(--)',
        required: true,
        className: 'col-md-4 col-sm-6'
      },
      {
        id: 'S5_cell_phone',
        label: 'Cell Phone',
        type: 'number',
        placeholder: '+1(---)-(--)-(--)',
        required: true,
        className: 'col-md-4 col-sm-6'
      },
      {
        id: 'S5_us_citizen',
        label: 'Us Citizen',
        type: 'radio',
        required: true,
        className: 'col-md-4 col-sm-6',
        options: [
          { value: 'Yes', label: 'Yes' },
          { value: 'No', label: 'No' }
        ],
        defaultValue: 'No'
      }
    ]
  }
];
const PersonalInformationForm = ({ handleNext }) => {


  const [data, setData] = useState({
    s1_annual_gross_income: 0,
    s2_annual_gross_income: 0,
    bslcu: [],
    pod_bslcu: false,
    pod_person_bslcu: "",
    sb: [],
    mfba: [],
    pod_mfba: false,
    pod_person_mfba: "",
    sell_any: false,
  })
  const [loading, setLoading] = useState(false);
  const initialFormValues = personalInformationPart1
    .flatMap((config) => config.fields.map((field) => ({ [field.id]: '' })))
    .reduce((acc, curr) => ({ ...acc, ...curr }), {});

  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({});
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value
    }));
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = {};

    // Iterate over each section and each field within the section
    personalInformationPart1.forEach((section) => {
      section.fields.forEach((field) => {
        // Check if the field is required and the value is empty
        if (field.required && !formValues[field.id].trim()) {
          valid = false;
          newErrors[field.id] = `${field.label} is required`;
        }

        // Additional specific validations
        switch (field.type) {
          case 'email':
            if (
              formValues[field.id] &&
              !/\S+@\S+\.\S+/.test(formValues[field.id])
            ) {
              valid = false;
              newErrors[field.id] = 'Email address is invalid';
            }
            break;
          case 'date':
            // Example: Validate format or logical date issues
            if (
              formValues[field.id] &&
              !/^\d{4}-\d{2}-\d{2}$/.test(formValues[field.id])
            ) {
              valid = false;
              newErrors[field.id] = 'Date format is invalid';
            }
            break;
          case 'number':
            if (formValues[field.id] && isNaN(Number(formValues[field.id]))) {
              valid = false;
              newErrors[field.id] = 'Must be a number';
            }
            break;
          case 'text':
            // Add specific text validations if necessary
            break;
          case 'radio':
            // Example: Ensure a choice is made if required
            if (field.required && !formValues[field.id]) {
              valid = false;
              newErrors[field.id] =
                `Please select an option for ${field.label}`;
            }
            break;
          default:
            // No default validation
            break;
        }
      });
    });

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const groupedFormValues = personalInformationPart1.reduce(
    //   (acc, config) => {
    //     const sectionValues = config.fields.reduce((sectionAcc, field) => {
    //       sectionAcc[field.id] = formValues[field.id];
    //       return sectionAcc;
    //     }, {});
    //     // if (config.id === 'financial' || config.name === 'medical') {
    //     // acc['other'][config.name] = sectionValues;
    //     // } else {
    //     acc[config.id] = sectionValues;
    //     // }
    //     return acc;
    //   },
    //   { other: {} }
    // );
    // console.log('Form submitted with values:', groupedFormValues);

    // // Validate form before submitting
    // if (!validateForm()) {
    //   console.log('Validation failed');
    //   return; // Stop the form submission if validation fails
    // }
    console.log('Form submitted with values:', formValues);

    try {
      setLoading(true);
      const response = await axios.post('/api/financial-information', data);
      toast.success(response.data.message);
      handleNext(1)
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error(error?.response?.data?.message || 'Error submitting form');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard-inner">
      <form onSubmit={handleSubmit} className="form">
        <div className="row">
          <div>
            <div style={{ border: '1px solid black' }}>
              <h4>Bank, Savings, Loans and Credit Unionsssss</h4>
              <p>
                These are accounts not in an IRA. You can list IRA and other
                retirement accounts in the next steps
              </p>
            </div>
            <P2BankAndSaving saveData={(_data) => { setData({ ...data, bslcu: _data }) }} />
            <div style={{ border: '1px solid black' }}>
              <h4>Stocks or Bonds</h4>
              <p>
                These include certificates you actually hold. You can list Mutual
                Funds in the list below
              </p>
            </div>
            <div style={{ border: '1px solid black' }}>
              <P2StocksOrBonds saveData={(_data) => { setData({ ...data, sb: _data }) }} />
              <h4>Mutual Funds or Brokerage Accounts</h4>
              <p>
                These are accounts not in an IRA. You can list IRA and other
                retirement accounts in the next steps
              </p>
            </div>

            <P2MutualFunds saveData={(_data) => { setData({ ...data, mfba: _data }) }} />
          </div>
        </div>
        <div className="dashboard-footer">
          <div className="row">
            <div className="col-md-6 align-self-center">
              <div className="next-step-card">
                <div className="text-wrapper">
                  <span>Next Step </span>
                  <span className="total-text">1 of 3</span>
                </div>
                <strong>Children and family</strong>
              </div>
            </div>

            <div className="col-md-6 text-end align-self-center">
              <div className="continue-btn-wrapper">
                <div className="arrow-icon">
                  <RiArrowLeftSLine />
                </div>
                <div className="wp-block-button wp-block-button__link_green">
                  <button
                    type="submit"
                    disabled={loading}
                    className="wp-block-button__link wp-element-button"
                  >
                    {loading ? 'Saving...' : 'Save And Continue'}
                    <RiArrowRightSLine />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default PersonalInformationForm
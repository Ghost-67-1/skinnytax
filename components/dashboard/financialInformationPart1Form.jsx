'use client'
import React, { Fragment, useState } from 'react'
import CustomInput from '../CustomInputs';
import axios from 'axios';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { RiArrowRightSLine } from 'react-icons/ri'
import { toast } from 'react-toastify';
import P2BankAndSaving from '../../components/P2/P2BankAndSaving';
import P2StocksOrBonds from '../../components/P2/P2StocksOrBonds';
import P2MutualFunds from '../../components/P2/P2MutualFunds';
const financialInformationPart1 = [
  {
    name: 'Banking Information',
    id: 'Bank',
    fields: [
      {
        id: 'institutionName',
        label: 'Name of Institution',
        type: 'text',
        placeholder: 'Type Here',
        required: true,
        className: 'col-md-4 col-sm-6'
      },
      {
        id: 'ownership',
        label: 'Ownership',
        type: 'radio',
        required: true,
        className: 'col-md-12 col-sm-12',
        options: [
          { value: 'S-1', label: 'S-1' },
          { value: 'S-2', label: 'S-2' },
          { value: 'Joint', label: 'Joint' },
          { value: 'Trust', label: 'Trust' }
        ],
        defaultValue: 'S-1'
      },
      {
        id: 'accountType',
        label: 'Account Type',
        type: 'select',
        required: true,
        className: 'col-md-4 col-sm-6',
        options: [
          { value: 'Checking', label: 'Checking' },
          { value: 'Saving', label: 'Saving' },
          { value: 'CD', label: 'CD' }
        ],
        defaultValue: 'Checking'
      },
      {
        id: 'balance',
        label: 'Approx. Balance',
        type: 'text',
        placeholder: '',
        required: true,
        className: 'col-md-4 col-sm-6 text-end'
      }
    ]
  },
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
  const initialFormValues = financialInformationPart1
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

  // const validateForm = () => {
  //   let valid = true;
  //   let newErrors = {};

  //   // Iterate over each section and each field within the section
  //   personalInformationPart1.forEach((section) => {
  //     section.fields.forEach((field) => {
  //       // Check if the field is required and the value is empty
  //       if (field.required && !formValues[field.id].trim()) {
  //         valid = false;
  //         newErrors[field.id] = `${field.label} is required`;
  //       }

  //       // Additional specific validations
  //       switch (field.type) {
  //         case 'email':
  //           if (
  //             formValues[field.id] &&
  //             !/\S+@\S+\.\S+/.test(formValues[field.id])
  //           ) {
  //             valid = false;
  //             newErrors[field.id] = 'Email address is invalid';
  //           }
  //           break;
  //         case 'date':
  //           // Example: Validate format or logical date issues
  //           if (
  //             formValues[field.id] &&
  //             !/^\d{4}-\d{2}-\d{2}$/.test(formValues[field.id])
  //           ) {
  //             valid = false;
  //             newErrors[field.id] = 'Date format is invalid';
  //           }
  //           break;
  //         case 'number':
  //           if (formValues[field.id] && isNaN(Number(formValues[field.id]))) {
  //             valid = false;
  //             newErrors[field.id] = 'Must be a number';
  //           }
  //           break;
  //         case 'text':
  //           // Add specific text validations if necessary
  //           break;
  //         case 'radio':
  //           // Example: Ensure a choice is made if required
  //           if (field.required && !formValues[field.id]) {
  //             valid = false;
  //             newErrors[field.id] =
  //               `Please select an option for ${field.label}`;
  //           }
  //           break;
  //         default:
  //           // No default validation
  //           break;
  //       }
  //     });
  //   });

  //   setErrors(newErrors);
  //   return valid;
  // };

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
            <div className='title-main-wrapper mb-3'>
              <strong>Bank, Savings, Loans and Credit Unions</strong><br></br>
              <span>
                These are accounts not in an IRA. You can list IRA and other
                retirement accounts in the next steps
              </span>
            </div>
            <P2BankAndSaving saveData={(_data) => { setData({ ...data, bslcu: _data }) }} />
            <div className='title-main-wrapper mb-3'>
              <strong>Stocks or Bonds</strong><br></br>
              <span>
                These include certificates you actually hold. You can list Mutual
                Funds in the list below
              </span>
            </div>
            <div className='title-main-wrapper mb-3'>
              <P2StocksOrBonds saveData={(_data) => { setData({ ...data, sb: _data }) }} />
              <strong>Mutual Funds or Brokerage Accounts</strong><br></br>
              <span>
                These are accounts not in an IRA. You can list IRA and other
                retirement accounts in the next steps
              </span>
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
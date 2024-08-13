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
    name: 'Other Assets',
    id: 'assets',
    fields: [
      {
        id: 'inheritance',
        label: 'Are You expecting any inheritance soon?',
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
        id: 'inheritance_refrence',
        label: 'If so, from whom?',
        type: 'text',
        placeholder: 'Enter Name',
        required: true,
        className: 'col-md-4 col-sm-6'
      },
      {
        id: 'amount',
        label: 'Approximately how much?',
        type: 'text',
        placeholder: 'Enter Amount',
        required: true,
        className: 'col-md-8 col-sm-12'
      },
      {
        id: 'valueable_items',
        label: 'Please list usually valueable personal items such as art, coins, jewelry, collections, etc',
        type: 'textarea',
        placeholder: 'Place Holder',
        required: true,
        className: 'col-md-8 col-sm-12'
      },
      {
        id: 'valueable_items_2',
        label: 'Please list usually valueable personal items such as art, coins, jewelry, collections, etc',
        type: 'textarea',
        placeholder: 'Place Holder',
        required: true,
        className: 'col-md-8 col-sm-12'
      },
    ]
  },
  {
    name: 'Miscellaneous Information',
    id: 'Miscellaneous',
    fields: [
      {
        id: 'hobby',
        label: 'What are your favourite hobbies?',
        type: 'textarea',
        placeholder: 'Place Holder',
        required: true,
        className: 'col-md-8 col-sm-12'
      },
      {
        id: 'spouse_hobby',
        label: "What are your spouse's favourite hobbies?",
        type: 'textarea',
        placeholder: 'Place Holder',
        required: true,
        className: 'col-md-8 col-sm-12'
      },
      {
        id: 'deposit_box',
        label: 'Dou you have a safety deposit box?',
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
        id: 'deposit_location',
        label: 'If yes, where is it located?',
        type: 'text',
        placeholder: 'Type Address Here',
        required: true,
        className: 'col-md-4 col-sm-6'
      },
      {
        id: 'unit',
        label: 'Dou you have a strong Unit?',
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
        id: 'unit_location',
        label: 'If yes, where is it located?',
        type: 'text',
        placeholder: 'Type Address Here',
        required: true,
        className: 'col-md-4 col-sm-6'
      },
      {
        id: 'local_groups',
        label: 'Are you(or your spouse) a part of any local groups, clubs, or organizations?',
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
        id: 'local_address',
        label: 'If so, which ones?',
        type: 'text',
        placeholder: 'Type Address Here',
        required: true,
        className: 'col-md-4 col-sm-6'
      },
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


  const handleSubmit = async (e) => {
    e.preventDefault();
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
          {personalInformationPart1.flatMap((config) => (
            <>
              <div className="title-main-wrapper mb-3">
                <strong className="large">{config.name}</strong>
              </div>
              {config.fields.map((fieldConfig) => (
                <Fragment key={fieldConfig.id}>
                  <CustomInput
                    key={fieldConfig.id}
                    id={fieldConfig.id}
                    label={fieldConfig.label}
                    setFieldValue={setFieldValue}
                    type={fieldConfig.type}
                    handleBlur={handleBlur}
                    value={values[fieldConfig.id]}
                    onChange={handleChange}
                    placeholder={fieldConfig.placeholder}
                    required={fieldConfig.required}
                    options={fieldConfig.options}
                    className={fieldConfig.className}
                    error={errors[fieldConfig.id]}
                    visible={touched[fieldConfig.id]}
                  />
                </Fragment>
              ))}
            </>
          ))}
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
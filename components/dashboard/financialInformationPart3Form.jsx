'use client'
import React, { Fragment, useState } from 'react'
import CustomInput from '../CustomInputs';
import axios from 'axios';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { RiArrowRightSLine } from 'react-icons/ri'
import { toast } from 'react-toastify';

const personalInformationPart3 = [
  {
    name: 'Real Estate',
    id: 'Estate',
    fields: [
      {
        id: 'property_address',
        label: 'Property Address',
        type: 'text',
        placeholder: 'Type Here',
        required: true,
        className: 'col-md-4 col-sm-6'
      },
      {
        id: 'cost',
        label: 'Original Cost',
        type: 'number',
        placeholder: 'Type Here',
        required: true,
        className: 'col-md-4 col-sm-6'
      },
      {
        id: 'current_value',
        label: 'Current Value',
        type: 'text',
        placeholder: 'Type Here',
        required: true,
        className: 'col-md-4 col-sm-6'
      },
      {
        id: 'debt',
        label: 'Debt or Mortage',
        type: 'text',
        placeholder: 'Type Here',
        required: true,
        className: 'col-md-4 col-sm-6'
      },
      {
        id: 'net_value',
        label: 'Net Value',
        type: 'text',
        placeholder: 'Type Here',
        required: true,
        className: 'col-md-4 col-sm-6'
      },
    ]
  },
];
const PersonalInformationForm = ({ handleNext }) => {


  const [data, setData] = useState({
    real_estate: {
      properties: [],
      debt_or_mortgage: false,
      net_annual_cashflow_on_rental_real_estate: 0,
      consider_community_property: false,
      receive_gifts_or_inheritances_after_marriage: false,
      come_with_substantial_assets_after_marriage: false,
      have_pre_marital_or_post_marital_agreement: false,
    },
    life_insurance: {
      insurances: [],
      have_long_term_care_insurance: false,
      have_parent_or_other_assistive_living: false
    },
    ira_accounts_and_retirement_plans: {
      accounts: [],
      future_retirement_income_concern: false
    }
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
      const response = await axios.post('/api/real-estate_accounts-retirements_insurance', data);
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

          debt_or_mortgage
          net_annual_cashflow_on_rental_real_estate
          consider_community_property
          receive_gifts_or_inheritances_after_marriage
          come_with_substantial_assets_after_marriage
          have_pre_marital_or_post_marital_agreement
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
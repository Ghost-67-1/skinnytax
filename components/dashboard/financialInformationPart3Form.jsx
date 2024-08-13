'use client'
import React, { Fragment, useState } from 'react'
import CustomInput from '../CustomInputs';
import axios from 'axios';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { RiArrowRightSLine } from 'react-icons/ri'
import { toast } from 'react-toastify';
import { Formik } from 'formik';
import * as yup from 'yup';


const personalInformationPart1 = [
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
        className: 'col-md-8 col-sm-6'
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
  const initialFormValues = personalInformationPart3
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

  const formSchema = yup.object().shape({
    ...personalInformationPart3
      .flatMap((config) => config.fields)
      .reduce((acc, field) => {
        acc[field.id] = field.validate;
        return acc;
      }, {})
  });

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
      <div className="form">
        <Formik
          initialValues={initialFormValues}
          onSubmit={handleSubmit}
          enableReinitialize
          validationSchema={formSchema}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            setFieldValue,
            values,
            errors,
            touched
          }) => {
            return (
              <>
                <div className="row">
                  {personalInformationPart3.flatMap((config) => (
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
                      <button
                        // onClick={handleButtonClick}
                        type="button"
                        className="btn btn-success mt-3"
                      >
                        Add Property
                      </button>
                    </>
                  ))}
                </div>
                <div className="dashboard-footer">
                  <div className="row">
                    <div className="col-md-6 align-self-center">
                      <div className="next-step-card">
                        <div className="text-wrapper">
                          <span>Next Step </span>
                          <span className="total-text">3 of 5</span>
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
                            onClick={handleSubmit}
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
              </>
            );
          }}
        </Formik>
      </div>
    </div>
  )
}

export default PersonalInformationForm

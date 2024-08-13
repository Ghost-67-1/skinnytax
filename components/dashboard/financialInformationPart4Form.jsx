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
import { Formik } from 'formik';
import * as yup from 'yup';


const personalInformationPart4 = [
  {
    name: 'Non-Qualified Annuities (Not a Retirement Plan)',
    id: 'qualified_annuities',
    fields: [
      {
        id: 'company',
        label: 'Name of Insurance Company',
        type: 'text',
        placeholder: 'Type Here',
        required: true,
        className: 'col-md-8 col-sm-6'
      },
      {
        id: 'owner',
        label: 'Owner',
        type: 'text',
        placeholder: 'Type Here',
        required: true,
        className: 'col-md-4 col-sm-6'
      },
      {
        id: 'p_beneficienry',
        label: 'Primary Beneficienry',
        type: 'text',
        placeholder: 'Type Here',
        required: true,
        className: 'col-md-4 col-sm-6'
      },
      {
        id: 's_beneficienry',
        label: 'Secondary Beneficienry',
        type: 'text',
        placeholder: 'Type Here',
        required: true,
        className: 'col-md-4 col-sm-6'
      },
      {
        id: 'total_value',
        label: 'Total Value',
        type: 'text',
        placeholder: 'Type Here',
        required: true,
        className: 'col-md-4 col-sm-6'
      },
      {
        id: 'company_2',
        label: 'Name of Insurance Company',
        type: 'text',
        placeholder: 'Type Here',
        required: true,
        className: 'col-md-8 col-sm-6'
      },
      {
        id: 'owner_2',
        label: 'Owner',
        type: 'text',
        placeholder: 'Type Here',
        required: true,
        className: 'col-md-4 col-sm-6'
      },
      {
        id: 'p_beneficienry_2',
        label: 'Primary Beneficienry',
        type: 'text',
        placeholder: 'Type Here',
        required: true,
        className: 'col-md-4 col-sm-6'
      },
      {
        id: 's_beneficienry_2',
        label: 'Secondary Beneficienry',
        type: 'text',
        placeholder: 'Type Here',
        required: true,
        className: 'col-md-4 col-sm-6'
      },
      {
        id: 'total_value_2',
        label: 'Total Value',
        type: 'text',
        placeholder: 'Type Here',
        required: true,
        className: 'col-md-4 col-sm-6'
      },
      {
        id: 'company_3',
        label: 'Name of Insurance Company',
        type: 'text',
        placeholder: 'Type Here',
        required: true,
        className: 'col-md-8 col-sm-6'
      },
      {
        id: 'owner_3',
        label: 'Owner',
        type: 'text',
        placeholder: 'Type Here',
        required: true,
        className: 'col-md-4 col-sm-6'
      },
      {
        id: 'p_beneficienry_3',
        label: 'Primary Beneficienry',
        type: 'text',
        placeholder: 'Type Here',
        required: true,
        className: 'col-md-4 col-sm-6'
      },
      {
        id: 's_beneficienry_3',
        label: 'Secondary Beneficienry',
        type: 'text',
        placeholder: 'Type Here',
        required: true,
        className: 'col-md-4 col-sm-6'
      },
      {
        id: 'total_value_3',
        label: 'Total Value',
        type: 'text',
        placeholder: 'Type Here',
        required: true,
        className: 'col-md-4 col-sm-6'
      },
    ],
  },
  {
    name: 'Limited or General Partnership',
    id: 'Partnership',
    fields: [
      {
        id: 'name',
        label: 'Name of Partnership',
        type: 'text',
        placeholder: 'Type Here',
        required: true,
        className: 'col-md-8 col-sm-12'
      },
      {
        id: 'deposit_box',
        label: 'Partnership Type',
        type: 'radio',
        required: true,
        className: 'col-md-4 col-sm-12',
        options: [
          { value: 'Limited', label: 'Limited' },
          { value: 'General', label: 'General' }
        ],
        defaultValue: 'No'
      },
      {
        id: 'ownership',
        label: 'OwnerShip',
        type: 'text',
        placeholder: 'Type Here',
        required: true,
        className: 'col-md-4 col-sm-12'
      },
      {
        id: 'market_value',
        label: 'Total Market Value',
        type: 'text',
        placeholder: 'Type Here',
        required: true,
        className: 'col-md-4 col-sm-12'
      },
      {
        id: 'name_2',
        label: 'Name of Partnership',
        type: 'text',
        placeholder: 'Type Here',
        required: true,
        className: 'col-md-8 col-sm-12'
      },
      {
        id: 'deposit_box_2',
        label: 'Partnership Type',
        type: 'radio',
        required: true,
        className: 'col-md-4 col-sm-12',
        options: [
          { value: 'Limited', label: 'Limited' },
          { value: 'General', label: 'General' }
        ],
        defaultValue: 'No'
      },
      {
        id: 'ownership_2',
        label: 'OwnerShip',
        type: 'text',
        placeholder: 'Type Here',
        required: true,
        className: 'col-md-4 col-sm-12'
      },
      {
        id: 'market_value_2',
        label: 'Total Market Value',
        type: 'text',
        placeholder: 'Type Here',
        required: true,
        className: 'col-md-4 col-sm-12'
      },
    ],
  },
];
const PersonalInformationForm = ({ handleNext, handlePrevious }) => {


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
  const [initialFormValues, setInitialFormValues] = useState(
    personalInformationPart4
      .flatMap((config) => config.fields.map((field) => ({ [field.id]: '' })))
      .reduce((acc, curr) => ({ ...acc, ...curr }), {})
  );

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
    ...personalInformationPart4
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
                  {personalInformationPart4.flatMap((config) => (
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
                          <span className="total-text">4 of 5</span>
                        </div>
                        <strong>Children and family</strong>
                      </div>
                    </div>

                    <div className="col-md-6 text-end align-self-center">
                      <div className="continue-btn-wrapper">
                        <div className="arrow-icon" onClick={handlePrevious}>
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
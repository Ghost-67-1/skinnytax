'use client'
import React, { Fragment, useState } from 'react'
import CustomInput from '../CustomInputs';
import axios from 'axios';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { RiArrowRightSLine } from 'react-icons/ri'
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { Formik } from 'formik';


const personalInformationPart5 = [
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
        defaultValue: 'No',
        validate: yup.string().required('Inheritance is required')
      },
      {
        id: 'inheritance_refrence',
        label: 'If so, from whom?',
        type: 'text',
        placeholder: 'Enter text',
        required: true,
        className: 'col-md-6 col-sm-6',
        validate: yup.string().required('Inheritance Reference is required')
      },
      {
        id: 'amount',
        label: 'Approximately how much?',
        type: 'text',
        placeholder: 'Enter Amount',
        required: true,
        className: 'col-md-6 col-sm-12',
        validate: yup.string().required('Amount is required')
      },
      {
        id: 'valueable_items',
        label: 'Please list usually valueable personal items such as art, coins, jewelry, collections, etc',
        type: 'textarea',
        placeholder: 'Add list',
        required: true,
        className: 'col-md-12 col-sm-12',
        validate: yup.string().required('Valueable personal items is required')
      },
      {
        id: 'valueable_items_2',
        label: 'Please list usually valueable personal items such as art, coins, jewelry, collections, etc',
        type: 'textarea',
        placeholder: 'Add list',
        required: true,
        className: 'col-md-12 col-sm-12',
        validate: yup.string().required('Valueable personal items is required')
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
        placeholder: 'Enter your hobbies',
        required: true,
        className: 'col-md-6 col-sm-12',
        validate: yup.string().required('Favourite hobbies is required')
      },
      {
        id: 'spouse_hobby',
        label: "What are your spouse's favourite hobbies?",
        type: 'textarea',
        placeholder: 'Enter your spouses hobbies',
        required: true,
        className: 'col-md-6 col-sm-12',
        validate: yup.string().required('Spouse Favourite hobbies is required')
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
        defaultValue: 'No',
        validate: yup.string().required('Safety deposit box is required')
      },
      {
        id: 'deposit_location',
        label: 'If yes, where is it located?',
        type: 'text',
        placeholder: 'Enter your Address',
        required: true,
        className: 'col-md-8 col-sm-6',
        validate: yup.string().required('Deposit Location is required')
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
        defaultValue: 'No',
        validate: yup.string().required('Unit is required')
      },
      {
        id: 'unit_location',
        label: 'If yes, where is it located?',
        type: 'text',
        placeholder: 'Enter your Address',
        required: true,
        className: 'col-md-8 col-sm-6',
        validate: yup.string().required('Unit Location is required')
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
        defaultValue: 'No',
        validate: yup.string().required('Local groups is required')
      },
      {
        id: 'local_address',
        label: 'If so, which ones?',
        type: 'text',
        placeholder: 'Enter your Organization name',
        required: true,
        className: 'col-md-8 col-sm-6',
        validate: yup.string().required('Local address is required')
      },
    ]
  },
];
const PersonalInformationForm = ({ handleNext }) => {


  const [loading, setLoading] = useState(false);
  const [initialFormValues, setInitialFormValues] = useState(
    personalInformationPart5
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
    ...personalInformationPart5
      .flatMap((config) => config.fields)
      .reduce((acc, field) => {
        acc[field.id] = field.validate;
        return acc;
      }, {})
  });

  const handleSubmit = async (data) => {
    console.log('Form submitted with values:', data);

    // try {
    //   setLoading(true);
    //   const response = await axios.post('/api/financial-information', data);
    //   toast.success(response.data.message);
    //   handleNext(1)
    // } catch (error) {
    //   console.error('Error submitting form:', error);
    //   toast.error(error?.response?.data?.message || 'Error submitting form');
    // } finally {
    //   setLoading(false);
    // }
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
                  {personalInformationPart5.flatMap((config) => (
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
                          <span className="total-text">1 of 5</span>
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
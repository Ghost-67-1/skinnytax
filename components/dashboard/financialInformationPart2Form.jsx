'use client'
import React, { Fragment, useState } from 'react'
import CustomInput from '../CustomInputs';
import axios from 'axios';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { RiArrowRightSLine } from 'react-icons/ri'
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { Formik } from 'formik';


const personalInformationPart2 = [
  {
    name: 'Promissory Notes & Trust Deeds Owed to You',
    id: 'debtors',
    fields: [
      {
        id: 'debtor_name_1',
        label: 'Name of Debtor',
        type: 'text',
        placeholder: 'Debtor Name',
        required: true,
        className: 'col-md-3 col-sm-6',
        validate: yup.string().required('Name of Debtor is required'),
      },
      {
        id: 'amount_1',
        label: 'Original Amount',
        type: 'number',
        placeholder: 'Original Amount',
        required: true,
        className: 'col-md-3 col-sm-6',
        validate: yup.string().required('Original Amount is required'),
      },
      {
        id: 'due_1',
        label: 'Balance Due',
        type: 'number',
        placeholder: 'Balance Due',
        required: true,
        className: 'col-md-3 col-sm-6',
        validate: yup.string().required(' Balance Due is required'),
      },
      {
        id: 'secured_by_dot_1',
        label: 'Secured By DOT',
        type: 'radio',
        required: true,
        className: 'col-md-3 col-sm-12',
        options: [
          { value: 'Yes', label: 'Yes' },
          { value: 'No', label: 'No' }
        ],
        defaultValue: 'Yes',
        validate: yup.string().required('Secured By DOT is required'),
      },
      {
        id: 'debtor_name_2',
        label: 'Name of Debtor',
        type: 'text',
        placeholder: 'Debtor Name',
        required: true,
        className: 'col-md-3 col-sm-6',
        validate: yup.string().required('Name of Debtor is required'),
      },
      {
        id: 'amount_2',
        label: 'Original Amount',
        type: 'number',
        placeholder: 'Original Amount',
        required: true,
        className: 'col-md-3 col-sm-6',
        validate: yup.string().required('Original Amount is required'),
      },
      {
        id: 'due_2',
        label: 'Balance Due',
        type: 'number',
        placeholder: 'Balance Due',
        required: true,
        className: 'col-md-3 col-sm-6',
        validate: yup.string().required(' Balance Due is required'),
      },
      {
        id: 'secured_by_dot_2',
        label: 'Secured By DOT',
        type: 'radio',
        required: true,
        className: 'col-md-3 col-sm-12',
        options: [
          { value: 'Yes', label: 'Yes' },
          { value: 'No', label: 'No' }
        ],
        defaultValue: 'Yes',
        validate: yup.string().required('Secured By DOT is required'),
      }
    ]
  },
  {
    name: 'Children Information',
    id: 'children',
    fields: [
      {
        id: 'is_debt_owed_by_children',
        label: 'Do any of your children owe you money?',
        type: 'radio',
        required: true,
        className: 'col-md-12 col-sm-12',
        options: [
          { value: 'Yes', label: 'Yes' },
          { value: 'No', label: 'No' }
        ],
        defaultValue: 'No',
        validate: yup.string().required('Do any of your children owe you money is required'),
      },
      {
        id: 'child_name_1',
        label: 'Who?',
        type: 'text',
        placeholder: 'Child Name',
        required: true,
        className: 'col-md-4 col-sm-6',
        validate: yup.string().required('Child Name is required'),
      },
      {
        id: 'amount_3',
        label: 'How Much?',
        type: 'number',
        placeholder: 'Amount',
        required: true,
        className: 'col-md-4 col-sm-6',
        validate: yup.string().required('Amount is required'),
      },
      {
        id: 'reduce_by_owed_1',
        label: 'Reduced Child share by amount owed?',
        type: 'radio',
        required: true,
        className: 'col-md-4 col-sm-12',
        options: [
          { value: 'Yes', label: 'Yes' },
          { value: 'No', label: 'No' }
        ],
        defaultValue: 'No',
        validate: yup.string().required('Reduced Child share by amount owed is required'),
      },
      {
        id: 'child_name_2',
        label: 'Who?',
        type: 'text',
        placeholder: 'Child Name',
        required: true,
        className: 'col-md-4 col-sm-6',
        validate: yup.string().required('Child Name is required'),
      },
      {
        id: 'amount_4',
        label: 'How Much?',
        type: 'number',
        placeholder: 'Amount',
        required: true,
        className: 'col-md-4 col-sm-6',
        validate: yup.string().required('Amount is required'),
      },
      {
        id: 'reduce_by_owed_2',
        label: 'Reduced Child share by amount owed?',
        type: 'radio',
        required: true,
        className: 'col-md-4 col-sm-12',
        options: [
          { value: 'Yes', label: 'Yes' },
          { value: 'No', label: 'No' }
        ],
        defaultValue: 'No',
        validate: yup.string().required('Reduced Child share by amount owed is required'),
      }
    ]
  }
];

const PersonalInformationForm = ({ handleNext }) => {
  const [loading, setLoading] = useState(false);
  const [initialFormValues, setInitialFormValues] = useState(
    personalInformationPart2
      .flatMap((config) => config.fields.map((field) => ({ [field.id]: '' })))
      .reduce((acc, curr) => ({ ...acc, ...curr }), {})
  );

  const formSchema = yup.object().shape({
    ...personalInformationPart2
      .flatMap((config) => config.fields)
      .reduce((acc, field) => {
        acc[field.id] = field.validate;
        return acc;
      }, {})
  });

  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({});
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value
    }));
  };

  const handleSubmit = async (data) => {
   console.log(data)
    // try {
    //   setLoading(true);
    //   const response = await axios.post('/api/promissory-and-trust', data);
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
                  {personalInformationPart2.flatMap((config) => (
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
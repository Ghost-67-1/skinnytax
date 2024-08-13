'use client'
import React, { Fragment, useEffect, useState } from 'react'
import CustomInput from '../CustomInputs';
import axios from 'axios';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { RiArrowRightSLine } from 'react-icons/ri'
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { Formik } from 'formik';

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
          // required: true,
          validate: yup.string().required('Name is required'),
          className: 'col-md-4 col-sm-6'
        },
        {
          id: 'S1_legal_aka',
          label: 'Legal AKA(if any)',
          type: 'text',
          placeholder: 'AKA',
          // required: true,
          validate: yup.string().required('Legal AKA is required'),
          className: 'col-md-4 col-sm-6'
        },
        {
          id: 'S1_date_of_birth',
          label: 'Date of Birth',
          type: 'date',
          placeholder: 'xx-xx-xxxx',
          // required: true,
          validate: yup.string().required('Date of Birth is required'),
          className: 'col-md-4 col-sm-6'
        },
        {
          id: 'S1_us_citizen',
          label: 'US Citizen',
          type: 'radio',
          // required: true,
          validate: yup.string().required('US Citizen is required'),
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
          // required: true,
          validate: yup.string().required('Cell Phone is required'),
          className: 'col-md-4 col-sm-6'
        },
        {
          id: 'S1_email',
          label: 'Personal Email',
          type: 'email',
          placeholder: 'abc123@gmail.com',
          // required: true,
          validate: yup.string().required('Personal Email is required'),
          className: 'col-md-8 col-sm-12'
        },
        {
          id: 'S1_retired',
          label: 'Are You Retired?',
          type: 'radio',
          // required: true,
          validate: yup.string().required('Retired is required'),
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
          // required: true,
          validate: yup.string().required('Occupation is required'),
          className: 'col-md-8 col-sm-8'
        },
        {
          id: 'S1_employer',
          label: 'Employer',
          type: 'text',
          placeholder: 'Type Your Last Work CEO Name Here',
          // required: true,
          validate: yup.string().required('Employer is required'),
          className: 'col-md-8 col-sm-12'
        },
        {
          id: 'S1_work_phone',
          label: 'Work Phone',
          type: 'number',
          placeholder: '+1(---)-(--)-(--)',
          // required: true,
          validate: yup.string().required('Work phone is required'),
          className: 'col-md-4 col-sm-6'
        },
        {
          id: 'S1_previously_married',
          label: 'Where You Previously Married?',
          type: 'radio',
          // required: true,
          validate: yup.string().required('Previously Married is required'),
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
          // required: true,
          validate: yup.string().required(
            'Are You(or your spouse) receiving home care or assisted living care?'
          ),
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
          // required: true,
          validate: yup.string().required(
            'Are You(or your spouse) a military veteran?'
          ),
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
          // required: true,
          validate: yup.string().required('SSN is required'),
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
          validate: yup.string().required('Full Name is required'),
          className: 'col-md-4 col-sm-6'
        },
        {
          id: 'S2_legal_aka',
          label: 'Legal AKA(if any)',
          type: 'text',
          placeholder: 'AKA',
          // required: true,
          validate: yup.string().required('Legal AKA is required'),
          className: 'col-md-4 col-sm-6'
        },
        {
          id: 'S2_date_of_birth',
          label: 'Date of Birth',
          type: 'date',
          placeholder: 'xx-xx-xxxx',
          // required: true,
          validate: yup.string().required('Date of Birth is required'),
          className: 'col-md-4 col-sm-6'
        },
        {
          id: 'S2_us_citizen',
          label: 'Us Citizen',
          type: 'radio',
          // required: true,
          validate: yup.string().required('Us Citizen is required'),
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
          // required: true,
          validate: yup.string().required('Cell Phone is required'),
          className: 'col-md-4 col-sm-6'
        },
        {
          id: 'S2_email',
          label: 'Personal Email',
          type: 'email',
          placeholder: 'abc123@gmail.com',
          // required: true,
          validate: yup.string().required('Personal Email is required'),
          className: 'col-md-8 col-sm-12'
        },
        {
          id: 'S2_retired',
          label: 'Are You Retired?',
          type: 'radio',
          // required: true,
          validate: yup.string().required('Are You Retired?'),
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
          // required: true,
          validate: yup.string().required('Occupation is required'),
          className: 'col-md-8 col-sm-12'
        },
        {
          id: 'S2_employer',
          label: 'Employer',
          type: 'text',
          placeholder: 'Type Your Last Work CEO Name Here',
          // required: true,
          validate: yup.string().required('Employer is required'),
          className: 'col-md-8 col-sm-12'
        },
        {
          id: 'S2_work_phone',
          label: 'Work Phone',
          type: 'number',
          placeholder: '+1(---)-(--)-(--)',
          // required: true,
          validate: yup.string().required('Work Phone is required'),
          className: 'col-md-4 col-sm-6'
        },
        {
          id: 'S2_previously_married',
          label: 'Where You Previously Married?',
          type: 'radio',
          // required: true,
          validate: yup.string().required('Where You Previously Married?'),
          className: 'col-md-8 col-sm-12',
          options: [
            { value: 'Yes', label: 'yes' },
            { value: 'No', label: 'No' }
          ],
          defaultValue: 'No'
        },
        {
          id: 'S2_assisted_living_care',
          label:
            'Are You(or your spouse) receiving home care or assisted living care?',
          type: 'radio',
          // required: true,
          validate: yup.string().required(
            'Are You(or your spouse) receiving home care or assisted living care?'
          ),
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
          validate: yup.string().required(
            'Are You(or your spouse) a military veteran?'
          ),
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
          // required: true,
          validate: yup.string().required('SSN is required'),
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
          // required: true,
          validate: yup.string().required('Home Address is required'),
          className: 'col-md-6 col-sm-12'
        },
        {
          id: 'S3_mail_at_this_address',
          label: 'Can You Receive Mail at This address?',
          type: 'radio',
          // required: true,
          validate: yup.string().required('Can You Receive Mail at This address?'),
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
          // required: true,
          validate: yup.string().required('City is required'),
          className: 'col-md-6 col-sm-12'
        },
        {
          id: 'S3_state',
          label: 'State',
          type: 'text',
          placeholder: 'Missisipi',
          // required: true,
          validate: yup.string().required('State is required'),
          className: 'col-md-3 col-sm-6'
        },
        {
          id: 'S3_zip',
          label: 'Zip Code',
          type: 'number',
          placeholder: '-- -- -- -- --',
          // required: true,
          validate: yup.string().required('Zip Code is required'),
          className: 'col-md-3 col-sm-6'
        },
        {
          id: 'S3_home_phone_number',
          label: 'Home Phone Number',
          type: 'number',
          placeholder: 'xx-xxxx-xx-xx',
          // required: true,
          validate: yup.string().required('Home Phone Number is required'),
          className: 'col-md-4 col-sm-6'
        },
        {
          id: 'S3_fax',
          label: 'Fax',
          type: 'number',
          placeholder: 'xx-xxxx-xx-xx',
          // required: true,
          validate: yup.string().required('Fax is required'),
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
          // required: true,
          validate: yup.string().required('Full Name is required'),
          className: 'col-md-4 col-sm-6'
        },
        {
          id: 'S4_primary_phone',
          label: 'Primary',
          type: 'number',
          placeholder: '+1(---)-(--)-(--)',
          // required: true,
          validate: yup.string().required('Primary is required'),
          className: 'col-md-4 col-sm-6'
        },
        {
          id: 'S4_cell_phone',
          label: 'Cell Phone',
          type: 'number',
          placeholder: '+1(---)-(--)-(--)',
          // required: true,
          validate: yup.string().required('Cell Phone is required'),
          className: 'col-md-4 col-sm-6'
        },
        {
          id: 'S4_us_citizen',
          label: 'Us Citizen',
          type: 'radio',
          // required: true,
          validate: yup.string().required('Us Citizen is required'),
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
          // required: true,
          validate: yup.string().required('Full Name is required'),
          className: 'col-md-4 col-sm-6'
        },
        {
          id: 'S5_primary_phone',
          label: 'Primary',
          type: 'number',
          placeholder: '+1(---)-(--)-(--)',
          // required: true,
          validate: yup.string().required('Primary is required'),
          className: 'col-md-4 col-sm-6'
        },
        {
          id: 'S5_cell_phone',
          label: 'Cell Phone',
          type: 'number',
          placeholder: '+1(---)-(--)-(--)',
          // required: true,
          validate: yup.string().required('Cell Phone is required'),
          className: 'col-md-4 col-sm-6'
        },
        {
          id: 'S5_us_citizen',
          label: 'Us Citizen',
          type: 'radio',
          // required: true,
          validate: yup.string().required('Us Citizen is required'),
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
const PersonalInformationForm = ({handleNext}) => {
  const [loading, setLoading] = useState(false);
  const [alreadyHaveData, setAlreadyHaveData] = useState(false);
    const [initialFormValues, setInitialFormValues] = useState(personalInformationPart1
    .flatMap((config) => config.fields.map((field) => ({ [field.id]: '' })))
    .reduce((acc, curr) => ({ ...acc, ...curr }), {}));
  const handleSubmit = async (data) => {
    setLoading(true);
    // if(alreadyHaveData){
    //   handleNext(1)
    //   return
    // }
    // const groupedFormValues = personalInformationPart1.reduce(
    //   (acc, config) => {
    //     const sectionValues = config.fields.reduce((sectionAcc, field) => {
    //       sectionAcc[field.id] = data[field.id];
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

    try {
      const response = await axios.post('/api/information', data);
      toast.success(response.data.message);
      handleNext(1)
    } catch (error) {
      console.error('Error submitting form:', error);
    toast.error(error?.response?.data?.message|| 'Error submitting form');
    } finally {
      setLoading(false);
    }
  };

  const formSchema = yup.object().shape({
    ...personalInformationPart1.flatMap((config) => config.fields)
    .reduce((acc, field) => {
      acc[field.id] =field.validate
      return acc;
    }, {})
  })
  useEffect(()=>{
    axios.get('/api/information').then((res)=>{
      // res?.data 
      if(Object.keys(res?.data?.data).length > 0){
        setInitialFormValues(res?.data?.data)
        setAlreadyHaveData(true)
      }
      console.log("Data is here ", res?.data)
    })
  },[])
  return (
    <div className="dashboard-inner">
    <div className="form">
      <Formik initialValues={initialFormValues}
          onSubmit={handleSubmit}
          enableReinitialize
          validationSchema={formSchema}>
   {({
            handleSubmit,
            handleChange,
            handleBlur,
            setFieldValue,
            values,
            errors,
            touched
          }) => {
              return(
              <>
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
              </>)}}
                  </Formik>
  </div>
  </div>
  )
}

export default PersonalInformationForm
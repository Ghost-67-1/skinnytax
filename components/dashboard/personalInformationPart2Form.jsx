'use client';
import React, { useEffect, useState } from 'react';
import CustomInput from '../CustomInputs';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { RiArrowRightSLine } from 'react-icons/ri';
import axios from 'axios';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { Formik } from 'formik';

const childInputConfigs = [
  {
    name: 'Children and family',
    id: 'Child',
    fields: [
      {
        id: 'S10_full_name',
        label: 'Full Name',
        type: 'text',
        placeholder: 'Your Name',
        validate: yup.string().required('Name is required'),
        // required: true,
        className: 'col-md-4 col-sm-6'
      },
      {
        id: 'S10_date_of_birth',
        label: 'Date of Birth',
        type: 'date',
        placeholder: 'xx-xx-xxxx',
        validate: yup.string().required('Date of Birth is required'),
        // required: true,
        className: 'col-md-4 col-sm-6'
      },
      {
        id: 'S10_child_position',
        label: 'No. of Children',
        type: 'number',
        placeholder: 'Add Number',
        validate: yup.string().required('No. of Children is required'),
        // required: true,
        className: 'col-md-4 col-sm-6'
      },
      {
        id: 'S10_gender',
        label: 'Gender',
        type: 'radio',
        validate: yup.string().required('Gender is required'),
        // required: true,
        className: 'col-md-4 col-sm-6',
        options: [
          { value: 'Yes', label: 'Male' },
          { value: 'No', label: 'Female' }
        ]
      },
      {
        id: 'S10_parents',
        label: 'Parent',
        type: 'radio',
        validate: yup.string().required('Parent is required'),
        // required: true,
        className: 'col-md-6 col-sm-6',
        options: [
          { value: 'Others', label: 'Ours' },
          { value: 'Yes', label: 'S-1' },
          { value: 'No', label: 'S-2' }
        ]
      },
      {
        id: 'S10_home_address',
        label: 'Home address',
        type: 'text',
        placeholder: 'Address',
        validate: yup.string().required('Home address is required'),
        // required: true,
        className: 'col-md-8 col-sm-8'
      },
      {
        id: 'S10_home_phone',
        label: 'Home phone',
        type: 'number',
        placeholder: '+1(---)-(--)-(--)',
        validate: yup.string().required('Home phone is required'),
        // required: true,
        className: 'col-md-5 col-sm-6'
      },
      {
        id: 'S10_work_phone',
        label: 'Work phone',
        type: 'number',
        placeholder: '+1(---)-(--)-(--)',
        validate: yup.string().required('Work phone is required'),
        // required: true,
        className: 'col-md-4 col-sm-6'
      },
      {
        id: 'S10_email',
        label: 'Email',
        type: 'email',
        placeholder: 'abc123@gmail.com',
        // required: true,
        validate: yup.string().required('Email is required'),
        className: 'col-md-8 col-sm-12'
      },
      // {
      //     id: 'S10_status',
      //     label: 'Marital Status',
      //     type: 'text',
      //     placeholder: 'Enter your Marital Status',
      //     required: true,
      //     className: 'col-md-4 col-sm-12'
      // },
      {
        id: 'S10_marital_status',
        label: 'Marital Status',
        type: 'radio',
        // required: true,
        validate: yup.string().required('Marital Status is required'),
        className: 'col-md-4 col-sm-12',
        options: [
          { value: 'Yes', label: 'yes' },
          { value: 'No', label: 'No' }
        ]
      },
      {
        id: 'S10_earn_money',
        label: 'Are you concerned with this child’s ability to manage money?',
        type: 'radio',
        validate: yup
          .string()
          .required(
            'Are you concerned with this child’s ability to manage money?'
          ),
        // required: true,
        className: 'col-md-8 col-sm-12',
        options: [
          { value: 'Yes', label: 'yes' },
          { value: 'No', label: 'No' }
        ]
      },
      {
        id: 'S10_living_trust',
        label: 'Does this child have a Living Trust?',
        type: 'radio',
        validate: yup.string().required('Does this child have a Living Trust?'),
        // required: true,
        className: 'col-md-5 col-sm-6',
        options: [
          { value: 'Yes', label: 'yes' },
          { value: 'No', label: 'No' }
        ]
      },
      {
        id: 'S10_is_prepared_by_us',
        label: 'If so, was it prepared by us?',
        type: 'radio',
        validate: yup.string().required('If so, was it prepared by us?'),
        // required: true,
        className: 'col-md-5 col-sm-6',
        options: [
          { value: 'Yes', label: 'yes' },
          { value: 'No', label: 'No' }
        ]
      }
    ]
  }
];

const inputConfigs = [
  {
    name: 'Other information',
    id: 'other',
    fields: [
      {
        id: 'S7_children_get_along',
        label: 'Do all of your children get along?',
        type: 'radio',
        validate: yup.string().required('Do all of your children get along?'),
        // required: true,
        className: 'col-md-12 col-sm-12',
        options: [
          { value: 'Yes', label: 'Yes' },
          { value: 'No', label: 'No' }
        ]
      },
      {
        id: 'S7_child_dead',
        label: 'Do you have any deceased children?',
        type: 'radio',
        // required: true,
        className: 'col-md-5 col-sm-12',
        validate: yup.string().required('Do you have any deceased children?'),
        options: [
          { value: 'Yes', label: 'Yes' },
          { value: 'No', label: 'No' }
        ]
      },
      {
        id: 'S7_living',
        label: 'If so, do they have any living children and/or grandchildren?',
        type: 'radio',
        // required: true,
        className: 'col-md-7 col-sm-12',
        validate: yup
          .string()
          .required(
            'If so, do they have any living children and/or grandchildren?'
          ),
        options: [
          { value: 'Yes', label: 'Yes' },
          { value: 'No', label: 'No' }
        ]
      },
      {
        id: 'S7_names',
        label: 'Names',
        type: 'text',
        placeholder: 'Your Name',
        // required: true,
        validate: yup.string().required('Names is required'),
        className: 'col-md-12 col-sm-12'
      },
      {
        id: 'S7_children_have_stepchildren',
        label: 'Do any of your children have stepchildren?',
        type: 'radio',
        // required: true,
        validate: yup
          .string()
          .required('Do any of your children have stepchildren?'),
        className: 'col-md-12 col-sm-12',
        options: [
          { value: 'Yes', label: 'Yes' },
          { value: 'No', label: 'No' }
        ]
      },
      {
        id: 'S7_age_of_grandchildren',
        label: 'Youngest',
        type: 'number',
        placeholder: '18',
        // required: true,
        validate: yup.string().required('Youngest is required'),
        className: 'col-md-4 col-sm-6'
      },
      {
        id: 'S7_age_of_great_grandchildren',
        label: 'Oldest',
        type: 'number',
        placeholder: '25',
        // required: true,
        validate: yup.string().required('Oldest is required'),
        className: 'col-md-4 col-sm-6'
      },
      {
        id: 'S7_medical_problems',
        label:
          'Do any children, grandchildren or great-grandchildren have major medical problems?',
        type: 'radio',
        // required: true,
        validate: yup
          .string()
          .required(
            'Do any children, grandchildren or great-grandchildren have major medical problems?'
          ),
        className: 'col-md-12 col-sm-12',
        options: [
          { value: 'Yes', label: 'Yes' },
          { value: 'No', label: 'No' }
        ]
      },
      {
        id: 'S7_is_exclude_children_from_estate',
        label:
          'Do you want to exclude anyone from receiving any portion of your estate?',
        type: 'radio',
        // required: true,
        className: 'col-md-12 col-sm-12',
        validate: yup
          .string()
          .required(
            'Do you want to exclude anyone from receiving any portion of your estate?'
          ),
        options: [
          { value: 'Yes', label: 'Yes' },
          { value: 'No', label: 'No' }
        ]
      },
      {
        id: 'S7_exclude_children_from_estate',
        label: 'If so, whom?',
        type: 'text',
        placeholder: 'If so, whom?',
        // required: true,
        validate: yup.string().required('If so, whom?'),
        className: 'col-md-6 col-sm-12'
      },
      {
        id: 'S7_trust_with_a_deceased_spouse',
        label: 'Do you (or your spouse) have a trust with a deceased spouse?',
        type: 'radio',
        // required: true,
        validate: yup
          .string()
          .required(
            'Do you (or your spouse) have a trust with a deceased spouse?'
          ),
        className: 'col-md-12 col-sm-12',
        options: [
          { value: 'Yes', label: 'Yes' },
          { value: 'No', label: 'No' }
        ]
      }
    ]
  },
  {
    name: 'CPA or Tax Preparer',
    id: 'cpa_tax',
    fields: [
      {
        id: 'S8_full_name',
        label: 'Full Name',
        type: 'text',
        placeholder: 'Enter Your Name',
        // required: true,
        validate: yup.string().required('Full Name is required'),
        className: 'col-md-4 col-sm-6'
      },
      {
        id: 'S8_phone_number',
        label: 'Phone number',
        type: 'number',
        placeholder: '+1(---)-(--)-(--)',
        // required: true,
        validate: yup.string().required('Phone number is required'),
        className: 'col-md-4 col-sm-6'
      },
      {
        id: 'S8_home_address',
        label: 'Home adress',
        type: 'text',
        placeholder: 'Enter your home address',
        // required: true,
        validate: yup.string().required('Home address is required'),
        className: 'col-md-8 col-sm-12'
      }
    ]
  },
  {
    name: 'Financial Advisor',
    id: 'financial',
    fields: [
      {
        id: 'S9_full_name',
        label: 'Full Name',
        type: 'text',
        placeholder: 'Enter Your Name',
        // required: true,
        validate: yup.string().required('Full Name is required'),
        className: 'col-md-4 col-sm-6'
      },
      {
        id: 'S9_phone_number',
        label: 'Phone number',
        type: 'number',
        placeholder: '+1(---)-(--)-(--)',
        // required: true,
        validate: yup.string().required('Phone number is required'),
        className: 'col-md-4 col-sm-6'
      },
      {
        id: 'S9_home_address',
        label: 'Home adress',
        type: 'text',
        placeholder: 'Enter your home address',
        // required: true,
        validate: yup.string().required('Home address is required'),
        className: 'col-md-8 col-sm-12'
      }
    ]
  }
];

function ChildForm({ handleNext }) {
  const [loading, setLoading] = useState(false);
  const [alreadyHaveData, setAlreadyHaveData] = useState(false);
  const [formSections, setFormSections] = useState(inputConfigs);
  const [childFormSections, setChildFormSections] = useState(childInputConfigs);

  const handleButtonClick = () => {
    const newSection = { ...childInputConfigs[childInputConfigs.length-1] };
    newSection.id = `Child-${childFormSections.length}`;
    newSection.name = 'Children and family';
    newSection.fields = newSection.fields.map((field, index) => ({
      ...field,
      id: `S${+(field.id.split('S')[1].split('_')[0])+1}_${field.id.split('_').slice(1).join('_')}`,
    }));
    setChildFormSections((prevSections) => [...prevSections, newSection]);
  };

  const [initialFormValues, setInitialFormValues] = useState([...inputConfigs, ...childInputConfigs]
    .flatMap((config) => config.fields)
    .reduce((acc, field) => {
      acc[field.id] = '';
      return acc;
    }, {}));

  const handleSubmit = async (data) => {
    setLoading(true);
    // e.preventDefault();
    // if(alreadyHaveData){
    //     handleNext(1)
    //     return
    //   }
    // const groupedFormValues = formSections.reduce((acc, config) => {
    //   const sectionValues = config.fields.reduce((sectionAcc, field) => {
    //     sectionAcc[field.id] = data[field.id];
    //     return sectionAcc;
    //   }, {});
    //   acc[config.id] = sectionValues;
    //   return acc;
    // }, {});

    // const groupedChildFormValues = {
    //   Child_information: childFormSections.map((config) => {
    //     const sectionValues = config.fields.reduce((sectionAcc, field) => {
    //       sectionAcc[field.id] = data[field.id];
    //       return sectionAcc;
    //     }, {});

    //     return {
    //       sectionId: config.id,
    //       sectionName: config.name,
    //       fields: sectionValues
    //     };
    //   })
    // };

    // const combinedValues = {
    //   ...groupedFormValues,
    //   ...groupedChildFormValues
    // };

    // console.log('Form submitted with values:', combinedValues);

    try {
      const response = await axios.post('/api/childForm', data);
      handleNext(2);
      toast.success(response.data.message || 'Form submitted successfully');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error(error?.response?.data?.message || 'Error submitting form');
    } finally {
      setLoading(false);
    }
  };
  const formSchema = yup.object().shape({
    ...[...formSections, ...childFormSections].flatMap((config) => config.fields)
    .reduce((acc, field) => {
      acc[field.id] =field.validate
      return acc;
    }, {})
  });
  useEffect(()=>{
    axios.get('/api/childForm').then((res)=>{
        if(Object.keys(res?.data?.data).length > 0){
            setInitialFormValues(res?.data?.data)
            setAlreadyHaveData(true)
        }
    })
  },[])
  
  return (
    <div className="dashboard-inner">
      <div className="form">
        <Formik
          initialValues={initialFormValues}
          onSubmit={handleSubmit}
          validationSchema={formSchema}
          enableReinitialize
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
              return(
              <>
                <div className="row">
                  {childFormSections.map((config, index) => (
                    <React.Fragment key={config.id}>
                      <div className="title-main-wrapper mb-3">
                        <strong className="large">
                          {index + 1 + ': ' + config.name}
                        </strong>
                      </div>
                      {config.fields.map((fieldConfig) => (
                        <>
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
                         
                        </>
                      ))}
                    </React.Fragment>
                  ))}
                  <button
                    onClick={handleButtonClick}
                    type="button"
                    className="btn btn-success mt-3"
                  >
                    Add Child
                  </button>
                  {formSections.map((config) => (
                    <React.Fragment key={config.id}>
                      <div className="title-main-wrapper mb-3">
                        <strong className="large">{config.name}</strong>
                      </div>
                      {config.fields.map((fieldConfig) => (
                          <>
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
                          </>
                      ))}
                    </React.Fragment>
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
                            {loading ? 'Saving...' : 'Save And Continue'}{' '}
                            <RiArrowRightSLine />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          }
        </Formik>
      </div>
    </div>
  );
}

export default ChildForm;

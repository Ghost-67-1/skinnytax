'use client'
import React, { useState } from 'react';
import CustomInput from '../../components/CustomInputs';
import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";
import axios from 'axios';
import { toast } from 'react-toastify';


const childInputConfigs = [
    {
        name: "Children and family",
        id: 'Child',
        fields: [
            {
                id: 'S6_full_name',
                label: 'Full Name',
                type: 'text',
                placeholder: 'Your Name',
                // required: true,
                className: 'col-md-4 col-sm-6'
            },
            {
                id: 'S6_date_of_birth',
                label: 'Date of Birth',
                type: 'date',
                placeholder: 'xx-xx-xxxx',
                // required: true,
                className: 'col-md-4 col-sm-6'
            },
            {
                id: 'S6_child_position',
                label: 'No. of Children',
                type: 'number',
                placeholder: 'Add Number',
                // required: true,
                className: 'col-md-4 col-sm-6'
            },
            {
                id: 'S6_gender',
                label: 'Gender',
                type: 'radio',
                // required: true,
                className: 'col-md-4 col-sm-6',
                options: [
                    { value: 'Yes', label: 'Male' },
                    { value: 'No', label: 'Female' },
                ]
            },
            {
                id: 'S6_parents',
                label: 'Parent',
                type: 'radio',
                // required: true,
                className: 'col-md-6 col-sm-6',
                options: [
                    { value: 'Others', label: 'Ours' },
                    { value: 'Yes', label: 'S-1' },
                    { value: 'No', label: 'S-2' },
                ]
            },
            {
                id: 'S6_home_address',
                label: 'Home address',
                type: 'text',
                placeholder: 'Address',
                // required: true,
                className: 'col-md-8 col-sm-8'
            },
            {
                id: 'S6_home_phone',
                label: 'Home phone',
                type: 'number',
                placeholder: '+1(---)-(--)-(--)',
                // required: true,
                className: 'col-md-5 col-sm-6'
            },
            {
                id: 'S6_work_phone',
                label: 'Work phone',
                type: 'number',
                placeholder: '+1(---)-(--)-(--)',
                // required: true,
                className: 'col-md-4 col-sm-6'
            },
            {
                id: 'S6_email',
                label: 'Email',
                type: 'email',
                placeholder: 'abc123@gmail.com',
                // required: true,
                className: 'col-md-8 col-sm-12'
            },
            // {
            //     id: 'S6_status',
            //     label: 'Marital Status',
            //     type: 'text',
            //     placeholder: 'Enter your Marital Status',
            //     required: true,
            //     className: 'col-md-4 col-sm-12'
            // },
            {
                id: 'S6_marital_status',
                label: 'Marital Status',
                type: 'radio',
                // required: true,
                className: 'col-md-4 col-sm-12',
                options: [
                    { value: 'Yes', label: 'yes' },
                    { value: 'No', label: 'No' },
                ]
            },
            {
                id: 'S6_earn_money',
                label: 'Are you concerned with this child’s ability to manage money?',
                type: 'radio',
                // required: true,
                className: 'col-md-8 col-sm-12',
                options: [
                    { value: 'Yes', label: 'yes' },
                    { value: 'No', label: 'No' },
                ]
            },
            {
                id: 'S6_living_trust',
                label: 'Does this child have a Living Trust?',
                type: 'radio',
                // required: true,
                className: 'col-md-5 col-sm-6',
                options: [
                    { value: 'Yes', label: 'yes' },
                    { value: 'No', label: 'No' },
                ]
            },
            {
                id: 'S6_prepared',
                label: 'If so, was it prepared by us?',
                type: 'radio',
                // required: true,
                className: 'col-md-5 col-sm-6',
                options: [
                    { value: 'Yes', label: 'yes' },
                    { value: 'No', label: 'No' },
                ]
            },
        ]
    },
]

const inputConfigs = [
    {
        name: "Other information",
        id: 'other',
        fields: [
            {
                id: 'S7_children_get_along',
                label: 'Do all of your children get along?',
                type: 'radio',
                // required: true,
                className: 'col-md-12 col-sm-12',
                options: [
                    { value: 'Yes', label: 'Yes' },
                    { value: 'No', label: 'No' },
                ]
            },
            {
                id: 'S7_child_dead',
                label: 'Do you have any deceased children?',
                type: 'radio',
                required: true,
                className: 'col-md-5 col-sm-12',
                options: [
                    { value: 'Yes', label: 'Yes' },
                    { value: 'No', label: 'No' },
                ]
            },
            {
                id: 'S7_living',
                label: 'If so, do they have any living children and/or grandchildren?',
                type: 'radio',
                required: true,
                className: 'col-md-7 col-sm-12',
                options: [
                    { value: 'Yes', label: 'Yes' },
                    { value: 'No', label: 'No' },
                ]
            },
            {
                id: 'S7_names',
                label: 'Names',
                type: 'text',
                placeholder: 'Your Name',
                required: true,
                className: 'col-md-12 col-sm-12'
            },
            {
                id: 'S7_children_have_stepchildren',
                label: 'Do any of your children have stepchildren?',
                type: 'radio',
                required: true,
                className: 'col-md-12 col-sm-12',
                options: [
                    { value: 'Yes', label: 'Yes' },
                    { value: 'No', label: 'No' },
                ]
            },
            {
                id: 'S7_age_of_grandchildren',
                label: 'Youngest',
                type: 'number',
                placeholder: '18',
                required: true,
                className: 'col-md-4 col-sm-6'
            },
            {
                id: 'S7_age_of_great_grandchildren',
                label: 'Oldest',
                type: 'number',
                placeholder: '25',
                required: true,
                className: 'col-md-4 col-sm-6'
            },
            {
                id: 'S7_medical_problems',
                label: 'Do any children, grandchildren or great-grandchildren have major medical problems?',
                type: 'radio',
                required: true,
                className: 'col-md-12 col-sm-12',
                options: [
                    { value: 'Yes', label: 'Yes' },
                    { value: 'No', label: 'No' },
                ]
            },
            {
                id: 'S7_is_exclude_children_from_estate',
                label: 'Do you want to exclude anyone from receiving any portion of your estate?',
                type: 'radio',
                required: true,
                className: 'col-md-12 col-sm-12',
                options: [
                    { value: 'Yes', label: 'Yes' },
                    { value: 'No', label: 'No' },
                ]
            },
            {
                id: 'S7_exclude_children_from_estate',
                label: 'If so, whom?',
                type: 'text',
                placeholder: 'If so, whom?',
                required: true,
                className: 'col-md-6 col-sm-12'
            },
            {
                id: 'S7_trust_with_a_deceased_spouse',
                label: 'Do you (or your spouse) have a trust with a deceased spouse?',
                type: 'radio',
                required: true,
                className: 'col-md-12 col-sm-12',
                options: [
                    { value: 'Yes', label: 'Yes' },
                    { value: 'No', label: 'No' },
                ]
            },
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
                required: true,
                className: 'col-md-4 col-sm-6'
            },
            {
                id: 'S8_phone_number',
                label: 'Phone number',
                type: 'number',
                placeholder: '+1(---)-(--)-(--)',
                required: true,
                className: 'col-md-4 col-sm-6'
            },
            {
                id: 'S8_home_address',
                label: 'Home adress',
                type: 'text',
                placeholder: 'Enter your home address',
                required: true,
                className: 'col-md-8 col-sm-12'
            },
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
                required: true,
                className: 'col-md-4 col-sm-6'
            },
            {
                id: 'S9_phone_number',
                label: 'Phone number',
                type: 'number',
                placeholder: '+1(---)-(--)-(--)',
                required: true,
                className: 'col-md-4 col-sm-6'
            },
            {
                id: 'S9_home_address',
                label: 'Home adress',
                type: 'text',
                placeholder: 'Enter your home address',
                required: true,
                className: 'col-md-8 col-sm-12'
            },
        ]
    },
];

function ChildForm({handleNext}) {
    const [loading, setLoading] = useState(false);
    const [formSections, setFormSections] = useState(inputConfigs);
    const [childFormSections, setChildFormSections] = useState(childInputConfigs);

    const handleButtonClick = () => {
        const newSection = { ...childInputConfigs[0] };
        newSection.id = `Child-${childFormSections.length}`;
        newSection.name = 'Children and family';
        newSection.fields = newSection.fields.map((field, index) => ({
            ...field,
            id: `s${childFormSections.length}-${index + 1}`,
        }));
        setChildFormSections((prevSections) => [...prevSections, newSection]);
    };

    const initialFormValues = [...inputConfigs, ...childInputConfigs]
        .flatMap(config => config.fields)
        .reduce((acc, field) => {
            acc[field.id] = '';
            return acc;
        }, {});

    const [formValues, setFormValues] = useState(initialFormValues);
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [id]: value,
        }));
    };

    const validateForm = () => {
      let valid = true;
      let newErrors = {};
  
      // Iterate over each section and each field within the section
      [...inputConfigs, ...childInputConfigs].forEach((section) => {
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
        setLoading(true);
        e.preventDefault();

        const groupedFormValues = formSections.reduce((acc, config) => {
            const sectionValues = config.fields.reduce((sectionAcc, field) => {
                sectionAcc[field.id] = formValues[field.id];
                return sectionAcc;
            }, {});
            acc[config.id] = sectionValues;
            return acc;
        }, {});

        const groupedChildFormValues = {
            Child_information: childFormSections.map((config) => {
                const sectionValues = config.fields.reduce((sectionAcc, field) => {
                    sectionAcc[field.id] = formValues[field.id];
                    return sectionAcc;
                }, {});

                return {
                    sectionId: config.id,
                    sectionName: config.name,
                    fields: sectionValues,
                };
            }),
        };


        const combinedValues = {
            ...groupedFormValues,
            ...groupedChildFormValues,
        };

        console.log('Form submitted with values:', combinedValues);

        try {
            const response = await axios.post('/api/childForm', combinedValues);
            handleNext(2);
            toast.success(response.data.message|| 'Form submitted successfully');
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error(error?.response?.data?.message|| 'Error submitting form');
        } finally {
            setLoading(false);
        }
    };
    return (
      <div className="dashboard-inner">
      <form onSubmit={handleSubmit} className="form">
          <div className='row'>
              {childFormSections.map((config, index) => (
                  <React.Fragment key={config.id}>
                      <div className="title-main-wrapper mb-3">
                          <strong className="large">{index + 1 + ': ' + config.name}</strong>
                      </div>
                      {config.fields.map(fieldConfig => (
                          <CustomInput
                              key={fieldConfig.id}
                              id={fieldConfig.id}
                              label={fieldConfig.label}
                              type={fieldConfig.type}
                              value={formValues[fieldConfig.id]}
                              onChange={handleInputChange}
                              placeholder={fieldConfig.placeholder}
                              required={fieldConfig.required}
                              options={fieldConfig.options}
                              className={fieldConfig.className}
                          />
                      ))}
                  </React.Fragment>
              ))}
              <button onClick={handleButtonClick} type='button' className="btn btn-success mt-3">
                  Add Child
              </button>
              {formSections.map((config) => (
                  <React.Fragment key={config.id}>
                      <div className="title-main-wrapper mb-3">
                          <strong className="large">{config.name}</strong>
                      </div>
                      {config.fields.map(fieldConfig => (
                          <CustomInput
                              key={fieldConfig.id}
                              id={fieldConfig.id}
                              label={fieldConfig.label}
                              type={fieldConfig.type}
                              value={formValues[fieldConfig.id]}
                              onChange={handleInputChange}
                              placeholder={fieldConfig.placeholder}
                              required={fieldConfig.required}
                              options={fieldConfig.options}
                              className={fieldConfig.className}
                          />
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
                              <button type="submit" disabled={loading} className='wp-block-button__link wp-element-button'>{loading ? 'Saving...' : 'Save And Continue'} <RiArrowRightSLine /></button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </form>
  </div>
    );
}

export default ChildForm;

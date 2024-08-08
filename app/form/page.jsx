'use client'
import React, { useState } from 'react';
import CustomInput from '../../components/CustomInputs';

import FormProgressStepper from '@/components/FormProgressStepper'
import { IoSearchOutline } from "react-icons/io5";
import sideBarSearchFlipIcon from '../../assets/images/icons/side-bar-search-flip-icon.svg';
import Image from 'next/image';
import { FaRegFolder } from "react-icons/fa";

import Instructionbox from '@/components/Instructionbox'
import Forminput from '@/components/Forminput'
import Warningbox from '@/components/Warningbox'
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";
import { LuAlertTriangle } from "react-icons/lu";
import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";


const inputConfigs = [
    {
        name: "Information about you (S1)",
        fields: [
            {
                id: 'S1_username',
                label: 'Your Full Name',
                type: 'text',
                placeholder: 'Your Name',
                required: true,
                className: 'col-md-4 col-sm-6'
            },
            {
                id: 'S1_legalAKA',
                label: 'Legal AKA(if any)',
                type: 'text',
                placeholder: 'AKA',
                required: true,
                className: 'col-md-4 col-sm-6'
            },
            {
                id: 'S1_date',
                label: 'Date of Birth',
                type: 'date',
                placeholder: 'xx-xx-xxxx',
                required: true,
                className: 'col-md-4 col-sm-6'
            },
            {
                id: 'S1_citizen',
                label: 'Us Citizen',
                type: 'radio',
                required: true,
                className: 'col-md-12 col-sm-12',
                options: [
                    { value: 'Yes', label: 'Yes' },
                    { value: 'No', label: 'No' },
                ]
            },
            {
                id: 'S1_phone',
                label: 'Cell Phone',
                type: 'number',
                placeholder: '+1(---)-(--)-(--)',
                required: true,
                className: 'col-md-4 col-sm-6'
            },
            {
                id: 'S1_email',
                label: 'Personal Email',
                type: 'email',
                placeholder: 'abc123@gmail.com',
                required: true,
                className: 'col-md-8 col-sm-12'
            },
            {
                id: 'S1_retired',
                label: 'Are You Retired?',
                type: 'radio',
                required: true,
                className: 'col-md-8 col-sm-12',
                options: [
                    { value: 'Yes', label: 'yes' },
                    { value: 'No', label: 'No' },
                ]
            },
            {
                id: 'S1_retiredate',
                label: 'if not, when?',
                type: 'date',
                placeholder: 'xx-xx-xxxx',
                required: true,
                className: 'col-md-4 col-sm-6'
            },
            {
                id: 'S1_occupation',
                label: 'Occupation (or prior one, if retired)',
                type: 'text',
                placeholder: 'Occupation',
                required: true,
                className: 'col-md-8 col-sm-8'
            },
            {
                id: 'S1_employer',
                label: 'Employer',
                type: 'text',
                placeholder: 'Type Your Last Work CEO Name Here',
                required: true,
                className: 'col-md-8 col-sm-12'
            },
            {
                id: 'S1_workphone',
                label: 'Work Phone',
                type: 'number',
                placeholder: '+1(---)-(--)-(--)',
                required: true,
                className: 'col-md-4 col-sm-6'
            },
            {
                id: 'S1_married',
                label: 'Where You Previously Married?',
                type: 'radio',
                required: true,
                className: 'col-md-8 col-sm-12',
                options: [
                    { value: 'Yes', label: 'yes' },
                    { value: 'No', label: 'No' },
                ]
            },
            {
                id: 'S1_care',
                label: 'Are You(or your spouse) receiving home care or assisted living care?',
                type: 'radio',
                required: true,
                className: 'col-md-8 col-sm-12',
                options: [
                    { value: 'Yes', label: 'yes' },
                    { value: 'No', label: 'No' },
                ]
            },
            {
                id: 'S1_veteran',
                label: 'Are You(or your spouse) a military veteran?',
                type: 'radio',
                required: true,
                className: 'col-md-8 col-sm-12',
                options: [
                    { value: 'Yes', label: 'yes' },
                    { value: 'No', label: 'No' },
                ]
            },
            {
                id: 'S1_ssn',
                label: 'SSN',
                type: 'text',
                placeholder: 'Enter Your SSN',
                required: true,
                className: 'col-md-5 col-sm-6'
            },
        ]
    },
    {
        name: "Information about your spouse (S2)",
        fields: [
            {
                id: 'S2_username',
                label: 'Your Full Name',
                type: 'text',
                placeholder: 'Your Name',
                required: true,
                className: 'col-md-4 col-sm-6'
            },
            {
                id: 'S2_legalAKA',
                label: 'Legal AKA(if any)',
                type: 'text',
                placeholder: 'AKA',
                required: true,
                className: 'col-md-4 col-sm-6'
            },
            {
                id: 'S2_date',
                label: 'Date of Birth',
                type: 'date',
                placeholder: 'xx-xx-xxxx',
                required: true,
                className: 'col-md-4 col-sm-6'
            },
            {
                id: 'S2_citizen',
                label: 'Us Citizen',
                type: 'radio',
                required: true,
                className: 'col-md-12 col-sm-12',
                options: [
                    { value: 'Yes', label: 'Yes' },
                    { value: 'No', label: 'No' },
                ]
            },
            {
                id: 'S2_phone',
                label: 'Cell Phone',
                type: 'number',
                placeholder: '+1(---)-(--)-(--)',
                required: true,
                className: 'col-md-4 col-sm-6'
            },
            {
                id: 'S2_email',
                label: 'Personal Email',
                type: 'email',
                placeholder: 'abc123@gmail.com',
                required: true,
                className: 'col-md-8 col-sm-12'
            },
            {
                id: 'S2_retired',
                label: 'Are You Retired?',
                type: 'radio',
                required: true,
                className: 'col-md-8 col-sm-12',
                options: [
                    { value: 'Yes', label: 'yes' },
                    { value: 'No', label: 'No' },
                ]
            },
            {
                id: 'S2_retiredate',
                label: 'if not, when?',
                type: 'date',
                placeholder: 'xx-xx-xxxx',
                required: true,
                className: 'col-md-4 col-sm-6'
            },
            {
                id: 'S2_occupation',
                label: 'Occupation (or prior one, if retired)',
                type: 'text',
                placeholder: 'Occupation',
                required: true,
                className: 'col-md-8 col-sm-12'
            },
            {
                id: 'S2_employer',
                label: 'Employer',
                type: 'text',
                placeholder: 'Type Your Last Work CEO Name Here',
                required: true,
                className: 'col-md-8 col-sm-12'
            },
            {
                id: 'S2_workphone',
                label: 'Work Phone',
                type: 'number',
                placeholder: '+1(---)-(--)-(--)',
                required: true,
                className: 'col-md-4 col-sm-6'
            },
            {
                id: 'S2_married',
                label: 'Where You Previously Married?',
                type: 'radio',
                required: true,
                className: 'col-md-8 col-sm-12',
                options: [
                    { value: 'Yes', label: 'yes' },
                    { value: 'No', label: 'No' },
                ]
            },
            {
                id: 'S2_care',
                label: 'Are You(or your spouse) receiving home care or assisted living care?',
                type: 'radio',
                required: true,
                className: 'col-md-8 col-sm-12',
                options: [
                    { value: 'Yes', label: 'yes' },
                    { value: 'No', label: 'No' },
                ]
            },
            {
                id: 'S2_veteran',
                label: 'Are You(or your spouse) a military veteran?',
                type: 'radio',
                required: true,
                className: 'col-md-8 col-sm-12',
                options: [
                    { value: 'Yes', label: 'yes' },
                    { value: 'No', label: 'No' },
                ]
            },
            {
                id: 'S2_ssn',
                label: 'SSN',
                type: 'text',
                placeholder: 'Enter Your SSN',
                required: true,
                className: 'col-md-5 col-sm-6'
            },
        ]
    },
    {
        name: 'Other information',
        fields: [
            {
                id: 'S3_address',
                label: 'Home Address',
                type: 'text',
                placeholder: 'Your Address',
                required: true,
                className: 'col-md-6 col-sm-12'
            },
            {
                id: 'S3_receive_email',
                label: 'Can You Receive Mail at This address?',
                type: 'radio',
                required: true,
                className: 'col-md-6 col-sm-12',
                options: [
                    { value: 'Yes', label: 'yes' },
                    { value: 'No', label: 'No' },
                ]
            },
            {
                id: 'S3_city',
                label: 'City',
                type: 'text',
                placeholder: 'Enter City You Living',
                required: true,
                className: 'col-md-6 col-sm-12'
            },
            {
                id: 'S3_state',
                label: 'State',
                type: 'text',
                placeholder: 'Missisipi',
                required: true,
                className: 'col-md-3 col-sm-6'
            },
            {
                id: 'S3_zipcode',
                label: 'Zip Code',
                type: 'number',
                placeholder: '-- -- -- -- --',
                required: true,
                className: 'col-md-3 col-sm-6'
            },
            {
                id: 'S3_homephone',
                label: 'Home Phone Number',
                type: 'number',
                placeholder: 'xx-xxxx-xx-xx',
                required: true,
                className: 'col-md-4 col-sm-6'
            },
            {
                id: 'S3_fax',
                label: 'Fax',
                type: 'number',
                placeholder: 'xx-xxxx-xx-xx',
                required: true,
                className: 'col-md-6 col-sm-12'
            },
        ]
    },
    {
        name: 'financial',
        fields: [
            {
                id: 'S4_username',
                label: 'Full Name',
                type: 'text',
                placeholder: 'Enter Your Name',
                required: true,
                className: 'col-md-4 col-sm-6'
            },
            {
                id: 'S4_primary',
                label: 'Primary',
                type: 'number',
                placeholder: '+1(---)-(--)-(--)',
                required: true,
                className: 'col-md-4 col-sm-6'
            },
            {
                id: 'S4_cellphone',
                label: 'Cell Phone',
                type: 'number',
                placeholder: '+1(---)-(--)-(--)',
                required: true,
                className: 'col-md-4 col-sm-6'
            },
            {
                id: 'S4_citizen',
                label: 'Us Citizen',
                type: 'radio',
                required: true,
                className: 'col-md-4 col-sm-6',
                options: [
                    { value: 'Yes', label: 'Yes' },
                    { value: 'No', label: 'No' },
                ]
            },
        ]
    },
    {
        name: 'medical',
        fields: [
            {
                id: 'S5_username',
                label: 'Full Name',
                type: 'text',
                placeholder: 'Enter Your Name',
                required: true,
                className: 'col-md-4 col-sm-6'
            },
            {
                id: 'S5_primary',
                label: 'Primary',
                type: 'number',
                placeholder: '+1(---)-(--)-(--)',
                required: true,
                className: 'col-md-4 col-sm-6'
            },
            {
                id: 'S5_cellphone',
                label: 'Cell Phone',
                type: 'number',
                placeholder: '+1(---)-(--)-(--)',
                required: true,
                className: 'col-md-4 col-sm-6'
            },
            {
                id: 'S5_citizen',
                label: 'Us Citizen',
                type: 'radio',
                required: true,
                className: 'col-md-4 col-sm-6',
                options: [
                    { value: 'Yes', label: 'Yes' },
                    { value: 'No', label: 'No' },
                ]
            },
        ]
    }
];

function InputForm() {
    const initialFormValues = inputConfigs.flatMap(config =>
        config.fields.map(field => ({ [field.id]: '' }))
    ).reduce((acc, curr) => ({ ...acc, ...curr }), {});

    const [formValues, setFormValues] = useState(initialFormValues);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [id]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const groupedFormValues = inputConfigs.reduce((acc, config) => {
            const sectionValues = config.fields.reduce((sectionAcc, field) => {
                sectionAcc[field.id] = formValues[field.id];
                return sectionAcc;
            }, {});
            if (config.name === 'financial' || config.name === 'medical') {
                acc['other'][config.name] = sectionValues;
            } else {
                acc[config.name] = sectionValues;
            }
            return acc;
        }, { other: {} });

        console.log('Form submitted with values:', groupedFormValues);
    };
    return (
        <>
            <div className="form-dashboard-page">
                <div className="medium-1 container">
                    <Instructionbox />
                    {/* <Forminput/>
            <Warningbox/> */}
                    <div className="form-dashboard-inner">
                        <div className="form-side-bar">
                            <div>
                            <div className="main-title-wrapper">
                                <div className="search-bar-wrapper">
                                    <div className="form-group">
                                        <IoSearchOutline className='search-icon' />
                                        <input type="text" className="form-control" placeholder='Search' />
                                    </div>
                                    <Image src={sideBarSearchFlipIcon} alt='sideBarSearchFlipIcon' className='sideBarSearchFlipIcon' />
                                </div>
                            </div>
                            <div className="main-list-wrapper">
                                <ul className='list'>
                                    <li>
                                        <div className="main-wrapper">
                                            <FaRegFolder />
                                            <p>Part one:<span className="clr"> Step 1</span></p>
                                        </div>
                                        <ul className="dropdown-wrapper">
                                            <li>
                                                <FaRegFolder />
                                                <span> Information about you (S1)</span>
                                            </li>
                                            <li>
                                                <FaRegFolder />
                                                <span>IInformation about your spouse (S2)</span>
                                            </li>
                                            <li>
                                                <FaRegFolder />
                                                <span>Other information</span>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div className="main-wrapper">
                                            <FaRegFolder />
                                            <p>Part one:<span className="clr"> Step 1</span></p>
                                        </div>
                                        <ul className="dropdown-wrapper">
                                            <li>
                                                <FaRegFolder />
                                                <span> Information about you (S1)</span>
                                            </li>
                                            <li>
                                                <FaRegFolder />
                                                <span>IInformation about your spouse (S2)</span>
                                            </li>
                                            <li>
                                                <FaRegFolder />
                                                <span>Other information</span>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div className="main-wrapper">
                                            <FaRegFolder />
                                            <p>Part one:<span className="clr"> Step 1</span></p>
                                        </div>
                                        <ul className="dropdown-wrapper">
                                            <li>
                                                <FaRegFolder />
                                                <span> Information about you (S1)</span>
                                            </li>
                                            <li>
                                                <FaRegFolder />
                                                <span>IInformation about your spouse (S2)</span>
                                            </li>
                                            <li>
                                                <FaRegFolder />
                                                <span>Other information</span>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div className="main-wrapper">
                                            <FaRegFolder />
                                            <p>Part one:<span className="clr"> Step 1</span></p>
                                        </div>
                                        <ul className="dropdown-wrapper">
                                            <li>
                                                <FaRegFolder />
                                                <span> Information about you (S1)</span>
                                            </li>
                                            <li>
                                                <FaRegFolder />
                                                <span>IInformation about your spouse (S2)</span>
                                            </li>
                                            <li>
                                                <FaRegFolder />
                                                <span>Other information</span>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            </div>
                            <div className="side-bar-footer">
                                <span className="text">System info status</span>
                                <ul className="list-icon">
                                    <li><IoShieldCheckmarkOutline style={{ color: 'rgba(4, 158, 117, 1)' }} /></li>
                                    <li><MdOutlineCancel style={{ color: 'rgba(250, 69, 71, 1)' }} /></li>
                                    <li><LuAlertTriangle style={{ color: 'rgba(242, 153, 74, 1)' }} /></li>
                                </ul>
                            </div>
                        </div>
                        <div className="form-dashboard">
                            <div className="progress-bar-main-wrapper">
                                <FormProgressStepper />
                            </div>
                            <div className="dashboard-inner">
                                
                                <form onSubmit={handleSubmit} className="form">
                                    <div className='row'>
                                        {inputConfigs.flatMap(config =>
                                        <>
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
                                            </>
                                        )}
                                    </div>
                                    {/* <div className="wp-block-button">
                                        <button type="submit" className='wp-block-button__link wp-element-button'>Submit</button>
                                    </div> */}
                                </form>
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
                                                <div className="wp-block-button">
                                                    <button type="submit" className='wp-block-button__link wp-element-button'>Submit <RiArrowRightSLine/></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}

export default InputForm;

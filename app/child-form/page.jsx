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
        name: "Children and family",
        fields: [
            {
                id: 'S6_username',
                label: 'Full Name',
                type: 'text',
                placeholder: 'Your Name',
                required: true,
                className: 'col-md-4 col-sm-6'
            },
            {
                id: 'S6_date',
                label: 'Date of Birth',
                type: 'date',
                placeholder: 'xx-xx-xxxx',
                required: true,
                className: 'col-md-4 col-sm-6'
            },
            {
                id: 'S6_number',
                label: 'No. of Children',
                type: 'number',
                placeholder: 'Add Number',
                required: true,
                className: 'col-md-4 col-sm-6'
            },
            {
                id: 'S6_gender',
                label: 'Gender',
                type: 'radio',
                required: true,
                className: 'col-md-4 col-sm-6',
                options: [
                    { value: 'Yes', label: 'Male' },
                    { value: 'No', label: 'Female' },
                ]
            },
            {
                id: 'S6_parent',
                label: 'Parent',
                type: 'radio',
                required: true,
                className: 'col-md-6 col-sm-6',
                options: [
                    { value: 'Others', label: 'Ours' },
                    { value: 'Yes', label: 'S-1' },
                    { value: 'No', label: 'S-2' },
                ]
            },
            {
                id: 'S6_address',
                label: 'Home address',
                type: 'text',
                placeholder: 'Address',
                required: true,
                className: 'col-md-8 col-sm-8'
            },
            {
                id: 'S6_phone',
                label: 'Home phone',
                type: 'number',
                placeholder: '+1(---)-(--)-(--)',
                required: true,
                className: 'col-md-5 col-sm-6'
            },
            {
                id: 'S6_work-phone',
                label: 'Work phone',
                type: 'number',
                placeholder: '+1(---)-(--)-(--)',
                required: true,
                className: 'col-md-4 col-sm-6'
            },
            {
                id: 'S6_email',
                label: 'Email',
                type: 'email',
                placeholder: 'abc123@gmail.com',
                required: true,
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
                id: 'S6_status',
                label: 'Marital Status',
                type: 'radio',
                required: true,
                className: 'col-md-4 col-sm-12',
                options: [
                    { value: 'Yes', label: 'yes' },
                    { value: 'No', label: 'No' },
                ]
            },
            {
                id: 'S6_money',
                label: 'Are you concerned with this child’s ability to manage money?',
                type: 'radio',
                required: true,
                className: 'col-md-8 col-sm-12',
                options: [
                    { value: 'Yes', label: 'yes' },
                    { value: 'No', label: 'No' },
                ]
            },
            {
                id: 'S6_living',
                label: 'Does this child have a Living Trust?',
                type: 'radio',
                required: true,
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
                required: true,
                className: 'col-md-5 col-sm-6',
                options: [
                    { value: 'Yes', label: 'yes' },
                    { value: 'No', label: 'No' },
                ]
            },
        ]
    },

    {
        name: "Other information",
        fields: [
            {
                id: 'S7_gender',
                label: 'Do all of your children get along?',
                type: 'radio',
                required: true,
                className: 'col-md-12 col-sm-12',
                options: [
                    { value: 'Yes', label: 'Yes' },
                    { value: 'No', label: 'No' },
                ]
            },
            {
                id: 'S7_decreased',
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
                id: 'S7_username',
                label: 'Names',
                type: 'text',
                placeholder: 'Your Name',
                required: true,
                className: 'col-md-12 col-sm-12'
            },
            {
                id: 'S7_stepchildren',
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
                id: 'S7_youngest',
                label: 'Youngest',
                type: 'number',
                placeholder: '18',
                required: true,
                className: 'col-md-4 col-sm-6'
            },
            {
                id: 'S7_oldest',
                label: 'Oldest',
                type: 'number',
                placeholder: '25',
                required: true,
                className: 'col-md-4 col-sm-6'
            },
            {
                id: 'S7_problems',
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
                id: 'S7_estate',
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
                id: 'S7_whom',
                label: 'If so, whom?',
                type: 'text',
                placeholder: 'If so, whom?',
                required: true,
                className: 'col-md-6 col-sm-12'
            },
            {
                id: 'S7_trust',
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
        fields: [
            {
                id: 'S8_username',
                label: 'Full Name',
                type: 'text',
                placeholder: 'Enter Your Name',
                required: true,
                className: 'col-md-4 col-sm-6'
            },
            {
                id: 'S8_phone',
                label: 'Phone number',
                type: 'number',
                placeholder: '+1(---)-(--)-(--)',
                required: true,
                className: 'col-md-4 col-sm-6'
            },
            {
                id: 'S8_adress',
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
        fields: [
            {
                id: 'S9_username',
                label: 'Full Name',
                type: 'text',
                placeholder: 'Enter Your Name',
                required: true,
                className: 'col-md-4 col-sm-6'
            },
            {
                id: 'S9_phone',
                label: 'Phone number',
                type: 'number',
                placeholder: '+1(---)-(--)-(--)',
                required: true,
                className: 'col-md-4 col-sm-6'
            },
            {
                id: 'S9_adress',
                label: 'Home adress',
                type: 'text',
                placeholder: 'Enter your home address',
                required: true,
                className: 'col-md-8 col-sm-12'
            },
        ]
    },
];

function ChildForm() {
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
                                                <div className="wp-block-button wp-block-button__link_green">
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

export default ChildForm;

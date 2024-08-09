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
import axios from 'axios';


const inputConfigs = [
    {
        name: "For Married Couples Only",
        id: 'marry_couple',
        fields: [
            {
                id: 'S6_date_of_marriage',
                label: 'Date of Marraige',
                type: 'date',
                placeholder: 'xx-xx-xxxx',
                // required: true,
                className: 'col-md-6 col-sm-6'
            },
            {
                id: 'S6_no_of_children',
                label: 'No. of Children',
                type: 'number',
                placeholder: '+1(---)-(--)-(--)',
                // required: true,
                className: 'col-md-6 col-sm-6'
            },
            {
                id: 'S6_community_property',
                label: 'Do you and your spouse consider all of your assets community property?',
                type: 'radio',
                // required: true,
                className: 'col-sm-12',
                options: [
                    { value: 'Yes', label: 'yes' },
                    { value: 'No', label: 'No' },
                ]
            },
            {
                id: 'S6_valuable_gifts',
                label: 'Do you and your spouse receive any valueable gifts or inheritances after marriage?',
                type: 'radio',
                // required: true,
                className: 'col-sm-12',
                options: [
                    { value: 'Yes', label: 'yes' },
                    { value: 'No', label: 'No' },
                ]
            },
            {
                id: 'S6_future_inheritances_as_community_property',
                label: 'Would you consider future inheritances as community property?',
                type: 'radio',
                // required: true,
                className: 'col-sm-12',
                options: [
                    { value: 'Yes', label: 'yes' },
                    { value: 'No', label: 'No' },
                ]
            },
            {
                id: 'S6_substantial_assets',
                label: 'Do you and your spouse come into your marriage with any substantial assets?',
                type: 'radio',
                // required: true,
                className: 'col-sm-12',
                options: [
                    { value: 'Yes', label: 'yes' },
                    { value: 'No', label: 'No' },
                ]
            },
            {
                id: 'S6_post_marital_agreement',
                label: 'Do you havea pre-martial or post-martial agreement?(if yes, please bring it)',
                type: 'radio',
                // required: true,
                className: 'col-sm-12',
                options: [
                    { value: 'Yes', label: 'yes' },
                    { value: 'No', label: 'No' },
                ]
            },
        ]
    },
];

function ChildForm() {
    const [message, setMessage] = useState();

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        const groupedFormValues = inputConfigs.reduce((acc, config) => {
            const sectionValues = config.fields.reduce((sectionAcc, field) => {
                sectionAcc[field.id] = formValues[field.id];
                return sectionAcc;
            }, {});
            acc[config.id] = sectionValues;
            return acc;
        }, { other: {} });

        console.log('Form submitted with values:', groupedFormValues);
        try {
            const response = await axios.post('/api/marryForm', groupedFormValues);
            setMessage(response.data.message);
        } catch (error) {
            console.error('Error submitting form:', error);
            setMessage('Error submitting form');
        }
    };
    return (
        <>
            <div className="form-dashboard-page">
                <div className="medium-1 container">
                    <Instructionbox />
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
                                    <div className="dashboard-footer">
                                        <div className="row">
                                            <div className="col-md-6 align-self-center">
                                                <div className="next-step-card">
                                                    <div className="text-wrapper">
                                                        <span>Next Step </span>
                                                        <span className="total-text">3 of 3</span>
                                                    </div>
                                                    <strong>Part 2: Financial Information</strong>
                                                </div>
                                            </div>
                                            <div className="col-md-6 text-end align-self-center">
                                                <div className="continue-btn-wrapper">
                                                    <div className="arrow-icon">
                                                        <RiArrowLeftSLine />
                                                    </div>
                                                    <div className="wp-block-button wp-block-button__link_green">
                                                        <button type="submit" className='wp-block-button__link wp-element-button'>Save And Continue <RiArrowRightSLine /></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}

export default ChildForm;

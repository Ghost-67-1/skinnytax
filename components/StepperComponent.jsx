// components/Stepper.js
'use client'

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Accordion from 'react-bootstrap/Accordion';
import { TextField, Button, InputAdornment } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';

import graphImg from '../assets/images/graph-report-img.png'
import consultationImg from '../assets/images/consultation-report-icon.png'

import { FaGear } from "react-icons/fa6";
import { FaFileImport } from "react-icons/fa";
import { IoIosPersonAdd } from "react-icons/io";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegSmile } from "react-icons/fa";
import { HiOutlineEmojiSad } from "react-icons/hi";

import DonutChartComponent from './DonutChartComponent'
import HalfDoughnutChart from './HalfDoughnutChart'
import ReportBarChart from './ReportBarChart'

const StepperComponent = () => {

    const currencies = [
        {
            value: 'Single',
            label: 'Single',
        },
        {
            value: 'Single',
            label: 'Single',
        },
        {
            value: 'Single',
            label: 'Single',
        },
        {
            value: 'Single',
            label: 'Single',
        },
    ];

    const steps = [
        { label: 'Calculator', icon: <FaGear /> },
        { label: 'Report', icon: <FaFileImport /> },
        { label: 'Consultation', icon: <IoIosPersonAdd /> },
    ];

    const [currentStep, setCurrentStep] = useState(0);

    const nextStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };



    return (
        <div className='stepper-component-main-wrapper'>
            <div className="container">
                <div className={`stepperContainer`}>
                    <div className={`steps`}>
                        {steps.map((step, index) => (
                            <div key={index} className={`step`}>
                                <div className={`circle ${index === currentStep ? 'active' : ''}`}>
                                    {step.icon}
                                </div>
                                <div className={`label`}>{step.label}</div>
                            </div>
                        ))}
                    </div>
                    <div className={`content`}>
                        {currentStep === 0 && <div className="calculator-step-main-wrapper">
                            <div className="accordion-wrapper">
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Income Tax</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="description">
                                                <p>    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.</p>
                                            </div>
                                            <div className="form-wrapper">
                                                <form action="#">
                                                    <div className="row">
                                                        <div className="col-md-4 mb-5">
                                                            <div className="form-group has-padding">
                                                                <TextField label="Income" id="outlined-start-adornment" sx={{ m: 1, width: '25ch' }} InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment>, }} />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4 mb-5">
                                                            <div className="form-group">
                                                                <TextField
                                                                    id="outlined-select-currency"
                                                                    select
                                                                    label="Filing Status"
                                                                    defaultValue="Single"
                                                                //   helperText="Please select your currency"
                                                                >
                                                                    {currencies.map((option) => (
                                                                        <MenuItem key={option.value} value={option.value}>
                                                                            {option.label}
                                                                        </MenuItem>
                                                                    ))}
                                                                </TextField>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4 mb-5">
                                                            <div className="form-group">
                                                                <TextField
                                                                    id="outlined-select-currency"
                                                                    select
                                                                    label="State"
                                                                    defaultValue="Single"
                                                                //   helperText="Please select your currency"
                                                                >
                                                                    {currencies.map((option) => (
                                                                        <MenuItem key={option.value} value={option.value}>
                                                                            {option.label}
                                                                        </MenuItem>
                                                                    ))}
                                                                </TextField>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4 mb-5">
                                                            <div className="form-group">
                                                                <TextField
                                                                    id="outlined-select-currency"
                                                                    select
                                                                    label="Itemized Deduction"
                                                                    defaultValue="Single"
                                                                //   helperText="Please select your currency"
                                                                >
                                                                    {currencies.map((option) => (
                                                                        <MenuItem key={option.value} value={option.value}>
                                                                            {option.label}
                                                                        </MenuItem>
                                                                    ))}
                                                                </TextField>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4 mb-5">
                                                            <div className="form-group">
                                                                <TextField
                                                                    id="outlined-select-currency"
                                                                    select
                                                                    label="Total 401(k) Contributions"
                                                                    defaultValue="Single"
                                                                //   helperText="Please select your currency"
                                                                >
                                                                    {currencies.map((option) => (
                                                                        <MenuItem key={option.value} value={option.value}>
                                                                            {option.label}
                                                                        </MenuItem>
                                                                    ))}
                                                                </TextField>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4 mb-5">
                                                            <div className="form-group">
                                                                <TextField
                                                                    id="outlined-select-currency"
                                                                    select
                                                                    label="Total IRA Contributions"
                                                                    defaultValue="Single"
                                                                //   helperText="Please select your currency"
                                                                >
                                                                    {currencies.map((option) => (
                                                                        <MenuItem key={option.value} value={option.value}>
                                                                            {option.label}
                                                                        </MenuItem>
                                                                    ))}
                                                                </TextField>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Capital Gains Tax</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="description">
                                                <p>    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.</p>
                                            </div>
                                            <div className="form-wrapper">
                                                <form action="#">
                                                    <div className="row">
                                                        <div className="col-md-4 mb-5">
                                                            <div className="form-group has-padding">
                                                                <TextField label="Income" id="outlined-start-adornment" sx={{ m: 1, width: '25ch' }} InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment>, }} />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4 mb-5">
                                                            <div className="form-group">
                                                                <TextField
                                                                    id="outlined-select-currency"
                                                                    select
                                                                    label="Filing Status"
                                                                    defaultValue="Single"
                                                                //   helperText="Please select your currency"
                                                                >
                                                                    {currencies.map((option) => (
                                                                        <MenuItem key={option.value} value={option.value}>
                                                                            {option.label}
                                                                        </MenuItem>
                                                                    ))}
                                                                </TextField>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4 mb-5">
                                                            <div className="form-group">
                                                                <TextField
                                                                    id="outlined-select-currency"
                                                                    select
                                                                    label="State"
                                                                    defaultValue="Single"
                                                                //   helperText="Please select your currency"
                                                                >
                                                                    {currencies.map((option) => (
                                                                        <MenuItem key={option.value} value={option.value}>
                                                                            {option.label}
                                                                        </MenuItem>
                                                                    ))}
                                                                </TextField>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4 mb-5">
                                                            <div className="form-group">
                                                                <TextField
                                                                    id="outlined-select-currency"
                                                                    select
                                                                    label="Itemized Deduction"
                                                                    defaultValue="Single"
                                                                //   helperText="Please select your currency"
                                                                >
                                                                    {currencies.map((option) => (
                                                                        <MenuItem key={option.value} value={option.value}>
                                                                            {option.label}
                                                                        </MenuItem>
                                                                    ))}
                                                                </TextField>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4 mb-5">
                                                            <div className="form-group">
                                                                <TextField
                                                                    id="outlined-select-currency"
                                                                    select
                                                                    label="Total 401(k) Contributions"
                                                                    defaultValue="Single"
                                                                //   helperText="Please select your currency"
                                                                >
                                                                    {currencies.map((option) => (
                                                                        <MenuItem key={option.value} value={option.value}>
                                                                            {option.label}
                                                                        </MenuItem>
                                                                    ))}
                                                                </TextField>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4 mb-5">
                                                            <div className="form-group">
                                                                <TextField
                                                                    id="outlined-select-currency"
                                                                    select
                                                                    label="Total IRA Contributions"
                                                                    defaultValue="Single"
                                                                //   helperText="Please select your currency"
                                                                >
                                                                    {currencies.map((option) => (
                                                                        <MenuItem key={option.value} value={option.value}>
                                                                            {option.label}
                                                                        </MenuItem>
                                                                    ))}
                                                                </TextField>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>QSBS Tax</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="description">
                                                <p>    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.</p>
                                            </div>
                                            <div className="form-wrapper">
                                                <form action="#">
                                                    <div className="row">

                                                        <div className="col-md-4 mb-5">
                                                            <div className="form-group">
                                                                <TextField
                                                                    id="outlined-select-currency"
                                                                    select
                                                                    label="Purchase Price"
                                                                    defaultValue="Single"
                                                                //   helperText="Please select your currency"
                                                                >
                                                                    {currencies.map((option) => (
                                                                        <MenuItem key={option.value} value={option.value}>
                                                                            {option.label}
                                                                        </MenuItem>
                                                                    ))}
                                                                </TextField>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4 mb-5">
                                                            <div className="form-group">
                                                                <TextField
                                                                    id="outlined-select-currency"
                                                                    select
                                                                    label="Sales Price "
                                                                    defaultValue="Single"
                                                                //   helperText="Please select your currency"
                                                                >
                                                                    {currencies.map((option) => (
                                                                        <MenuItem key={option.value} value={option.value}>
                                                                            {option.label}
                                                                        </MenuItem>
                                                                    ))}
                                                                </TextField>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4 mb-5">
                                                            <div className="form-group">
                                                                <TextField
                                                                    id="outlined-select-currency"
                                                                    select
                                                                    label="2022 Taxable Income"
                                                                    defaultValue="Single"
                                                                //   helperText="Please select your currency"
                                                                >
                                                                    {currencies.map((option) => (
                                                                        <MenuItem key={option.value} value={option.value}>
                                                                            {option.label}
                                                                        </MenuItem>
                                                                    ))}
                                                                </TextField>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4 mb-5">
                                                            <div className="form-group">
                                                                <TextField
                                                                    id="outlined-select-currency"
                                                                    select
                                                                    label="Holding Period"
                                                                    defaultValue="Single"
                                                                //   helperText="Please select your currency"
                                                                >
                                                                    {currencies.map((option) => (
                                                                        <MenuItem key={option.value} value={option.value}>
                                                                            {option.label}
                                                                        </MenuItem>
                                                                    ))}
                                                                </TextField>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </form>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>}
                        {currentStep === 1 && <div className="report-step-main-wrapper">
                            <div className="report-inner-wrapper">
                                <div className="main-content-wrapper">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="circular-chart-wrapper">
                                                <DonutChartComponent />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="report-categoray-info-wrapper">
                                                <div className="info-text">
                                                    <p className="large">Category</p>
                                                    <p className="large">Details</p>
                                                </div>
                                                <div className="info-text">
                                                    <strong >Federal taxes</strong>
                                                </div>
                                                <div className="info-text">
                                                    <p>Marginal tax rate</p>
                                                    <p>22%</p>
                                                </div>
                                                <div className="info-text">
                                                    <p>Effective tax rate</p>
                                                    <p>10.94%</p>
                                                </div>
                                                <div className="info-text">
                                                    <p>Federal income tax</p>
                                                    <p>$7,660</p>
                                                </div>
                                                <div className="info-text">
                                                    <strong>State taxes</strong>
                                                </div>
                                                <div className="info-text">
                                                    <p>Marginal tax rate</p>
                                                    <p>5.85%</p>
                                                </div>
                                                <div className="info-text">
                                                    <p>Effective tax rate</p>
                                                    <p>10.94%</p>
                                                </div>
                                                <div className="info-text">
                                                    <p>State tax</p>
                                                    <p>$3,413</p>
                                                </div>
                                                <div className="info-text">
                                                    <p>Gross Income</p>
                                                    <p>$70,000</p>
                                                </div>
                                                <div className="info-text">
                                                    <p>Total income tax</p>
                                                    <p>-$7,660 + $3,413</p>
                                                </div>
                                                <div className="info-text">
                                                    <strong className='large'>After-Tax Income</strong>
                                                    <strong className='large'>$58,926</strong>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="desclimer">
                                        <strong>Disclaimer:</strong>
                                        <p>Calculations are estimates based on tax rates as of Jan. 2023 and data from the Tax Foundation. These rates are subject to change. Check the IRS website for the latest information about income taxes and your state tax website for state-specific information. Our calculator doesn't consider both 401k and IRA deductions due to the tax law limitations. Please note, the amount of your IRA deductions may vary. You should speak with a tax professional to determine your tax situation.</p>
                                    </div>
                                </div>
                                <div className="title-wrapper">
                                    <strong>Qualified Small Business tax</strong>
                                </div>
                                <div className="main-content-wrapper">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="report-categoray-info-wrapper">
                                                <div className="info-text">
                                                    <p className="large">Category</p>
                                                    <p className="large">Details</p>
                                                </div>
                                                <div className="info-text">
                                                    <strong >Federal taxes</strong>
                                                </div>
                                                <div className="info-text">
                                                    <p>Marginal tax rate</p>
                                                    <p>22%</p>
                                                </div>
                                                <div className="info-text">
                                                    <p>Effective tax rate</p>
                                                    <p>10.94%</p>
                                                </div>
                                                <div className="info-text">
                                                    <p>Federal income tax</p>
                                                    <p>$7,660</p>
                                                </div>
                                                <div className="info-text">
                                                    <strong>State taxes</strong>
                                                </div>
                                                <div className="info-text">
                                                    <p>Marginal tax rate</p>
                                                    <p>5.85%</p>
                                                </div>
                                                <div className="info-text">
                                                    <p>Effective tax rate</p>
                                                    <p>10.94%</p>
                                                </div>
                                                <div className="info-text">
                                                    <p>State tax</p>
                                                    <p>$3,413</p>
                                                </div>
                                                <div className="info-text">
                                                    <p>Gross Income</p>
                                                    <p>$70,000</p>
                                                </div>
                                                <div className="info-text">
                                                    <p>Total income tax</p>
                                                    <p>-$7,660 + $3,413</p>
                                                </div>
                                                <div className="info-text">
                                                    <strong className='large'>After-Tax Income</strong>
                                                    <strong className='large'>$58,926</strong>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="info-content-wrapper">
                                                <strong className="large">Helpful notes</strong>
                                                <p>The "Date Received Shares" depends on what type of equity you hold, which you can find in your Carta account.</p>
                                                <ul className="list">
                                                    <li>RSAS or founder stock = grant date or purchase date (if subject to a vesting
                                                        schedule, assuming you filed 83(b) election)</li>
                                                    <li>Options (ISOS and NSOS) = exercise date</li>
                                                    <li>RSUS = settlement date</li>
                                                </ul>
                                                <p>The "Date Received Shares" depends on what type of equity you hold, which you can find in your Carta account.</p>
                                                <ul className="list">
                                                    <li>RSAS or founder stock = grant date or purchase date (if subject to a vesting
                                                        schedule, assuming you filed 83(b) election)</li>
                                                    <li>Options (ISOS and NSOS) = exercise date</li>
                                                    <li>RSUS = settlement date</li>
                                                </ul>
                                                <p>The "Date Received Shares" depends on what type of equity you hold, which you can find in your Carta account.</p>
                                                <ul className="list">
                                                    <li>RSAS or founder stock = grant date or purchase date (if subject to a vesting
                                                        schedule, assuming you filed 83(b) election)</li>
                                                    <li>Options (ISOS and NSOS) = exercise date</li>
                                                    <li>RSUS = settlement date</li>
                                                    <li>RSAS or founder stock = grant date or purchase date (if subject to a vesting
                                                        schedule, assuming you filed 83(b) election)</li>
                                                    <li>RSAS or founder stock = grant date or purchase date (if subject to a vesting
                                                        schedule, assuming you filed 83(b) election)</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="desclimer">
                                        <strong>Calculator assumptions:</strong>
                                        <p>The calculator assumes the company requirements for QSBS were met when the shares were acquired. The calculator uses the highest tax rates for both short-term capital gains at 37% and long- term capital gains at 20%. The calculator also assumes shares were acquired after 9/28/2010 and the company was a qualified small business on the day the shares were acquired.</p>
                                    </div>
                                    <div className="desclimer">
                                        <strong>Disclosure:</strong>
                                        <p>This calculator is provided for your informational purposes only by eShares, Inc. dba Carta, Inc. ("Carta"). Carta does not provide legal, tax, or financial advice, and the use of this calculator is not a substitute for such professional advice or services nor should it be used as a basis for any decision or action that may affect your business or interests. USE OF THIS CALCULATOR IS ENTIRELY AT YOUR OWN RISK, AND CARTA ASSUMES NO LIABILITY FOR THE USE OF OR RELIANCE ON THIS CALCULATOR. Carta does not guarantee this calculator's applicability or accuracy in regard to your particular circumstances. This calculator is provided "as is" without warranty of any kind, either express, implied, or statutory, including without limitation, warranties of merchantability, fitness for a particular purpose, satisfactory purpose, title or noninfringement. Some jurisdictions do not allow the exclusion of implied warranties, so these exclusions may not apply to you. ©2023 eShares Inc., d/b/a Carta Inc. ("Carta"). All rights reserved. Reproduction prohibited."</p>
                                    </div>
                                </div>
                                <div className="title-wrapper">
                                    <strong>Charitable Reminder unitrust tax</strong>
                                </div>
                                <div className="main-content-wrapper">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h2>Your Benefits</h2>
                                            <div className="report-categoray-info-wrapper">
                                                <div className="info-text">
                                                    <strong>Category</strong>
                                                    <strong>Details</strong>
                                                </div>
                                                <div className="info-text">
                                                    <p>Charitable Deduction</p>
                                                    <p>22%</p>
                                                </div>
                                                <div className="info-text">
                                                    <p>Payment Rate</p>
                                                    <p>10.94%</p>
                                                </div>
                                                <div className="info-text">
                                                    <p>First Years Income</p>
                                                    <p>$7,660</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <h2>Your Situation</h2>
                                            <div className="report-categoray-info-wrapper">
                                                <div className="info-text">
                                                    <strong>Category</strong>
                                                    <strong>Details</strong>
                                                </div>
                                                <div className="info-text">
                                                    <p>Charitable Deduction</p>
                                                    <p>22%</p>
                                                </div>
                                                <div className="info-text">
                                                    <p>Payment Rate</p>
                                                    <p>10.94%</p>
                                                </div>
                                                <div className="info-text">
                                                    <p>First Years Income</p>
                                                    <p>$7,660</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="desclimer">
                                        <strong>Calculator :</strong>
                                        <p>The calculator assumes the company requirements for QSBS were met when the shares were acquired.</p>
                                    </div>

                                </div>
                                <div className="title-wrapper">
                                    <strong>Estate Tax</strong>
                                </div>
                                <div className="main-content-wrapper">
                                    <div className="desclimer">
                                        <strong>Your current estate is estimated at $1,306,400.00.</strong>
                                        <p>Your current estate estimated at $1,306,400.00 includes your total assets and life insurance minus your liabilities and expenses at death. Your estate taxes are estimated at $0.00 leaving your heirs with $1,306,400.00 based on the information you supplied.</p>
                                        <p className='text-center'>* If you were to die in 2024 your $1,180,000.00 estate will be distributed as follows:</p>

                                    </div>
                                    <div className="chart-wrapper">
                                        <HalfDoughnutChart />
                                    </div>
                                    <p></p>
                                    <h2>Results Summar</h2>
                                    <div className="report-categoray-info-wrapper">
                                        <div className="info-text">
                                            <p className="large">Description</p>
                                            <p className="large">Value</p>
                                        </div>
                                        <div className="info-text">
                                            <p>Marital status</p>
                                            <p>22%</p>
                                        </div>
                                        <div className="info-text">
                                            <p>Total assets</p>
                                            <p>10.94%</p>
                                        </div>
                                        <div className="info-text">
                                            <p>Total life insurance</p>
                                            <p>$7,660</p>
                                        </div>
                                        <div className="info-text">
                                            <p>Total liabilities</p>
                                            <p>5.85%</p>
                                        </div>
                                        <div className="info-text">
                                            <p>Charitable contributions</p>
                                            <p>10.94%</p>
                                        </div>
                                        <div className="info-text">
                                            <p>Expenses at death</p>
                                            <p>$3,413</p>
                                        </div>
                                        <div className="info-text">
                                            <p>Total estate</p>
                                            <p>$70,000</p>
                                        </div>
                                        <div className="info-text">
                                            <p>Transfer to spouse</p>
                                            <p>-$7,660 + $3,413</p>
                                        </div>
                                        <div className="info-text">
                                            <p>2024 Estate tax exemption</p>
                                            <p>-$7,660 + $3,413</p>
                                        </div>
                                        <div className="info-text">
                                            <p>Used gift exemption</p>
                                            <p>-$7,660 + $3,413</p>
                                        </div>
                                        <div className="info-text">
                                            <p>Estate subject to taxes</p>
                                            <p>-$7,660 + $3,413</p>
                                        </div>
                                        <div className="info-text">
                                            <p>Estate taxes</p>
                                            <p>-$7,660 + $3,413</p>
                                        </div>
                                        <div className="info-text">
                                            <strong className='large'>Total to heirs</strong>
                                            <strong className='large'>$58,926</strong>
                                        </div>
                                    </div>
                                    <div className="desclimer">
                                        <strong>Estate value and tax projections</strong>
                                        <p>Your total estate is estimated at $1,306,400.00 after expenses, but before taxes. If your assets were to grow at an annual rate of -13% and your liabilities change at an annual rate of 2%, you would have a net worth of $890,531.50 after 3 years.</p>
                                    </div>
                                </div>
                                <div className="chart-wrapper my-5">
                                    <ReportBarChart />
                                </div>
                                <div className="main-content-wrapper">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h2>Assete and Insurence </h2>
                                            <div className="report-categoray-info-wrapper">
                                                <div className="info-text">
                                                    <p className='large'>Description</p>
                                                    <p className='large'>Value</p>
                                                </div>
                                                <div className="info-text">
                                                    <p>Home</p>
                                                    <p>22%</p>
                                                </div>
                                                <div className="info-text">
                                                    <p>Other real estate</p>
                                                    <p>10.94%</p>
                                                </div>
                                                <div className="info-text">
                                                    <p>Automobiles</p>
                                                    <p>$7,660</p>
                                                </div>
                                                <div className="info-text">
                                                    <p>Other vehicles</p>
                                                    <p>$7,660</p>
                                                </div>
                                                <div className="info-text">
                                                    <p>Jewelry</p>
                                                    <p>$7,660</p>
                                                </div>
                                                <div className="info-text">
                                                    <p>Household items</p>
                                                    <p>$7,660</p>
                                                </div>
                                                <div className="info-text">
                                                    <p>Checking and savings</p>
                                                    <p>$7,660</p>
                                                </div>
                                                <div className="info-text">
                                                    <p>Retirement accounts</p>
                                                    <p>$7,660</p>
                                                </div>
                                                <div className="info-text">
                                                    <p>Savings bonds</p>
                                                    <p>$7,660</p>
                                                </div>
                                                <div className="info-text">
                                                    <p>Bonds</p>
                                                    <p>$7,660</p>
                                                </div>
                                                <div className="info-text">
                                                    <p>Mutual funds</p>
                                                    <p>$7,660</p>
                                                </div>
                                                <div className="info-text">
                                                    <p>Stocks</p>
                                                    <p>$7,660</p>
                                                </div>
                                                <div className="info-text">
                                                    <p>Cash value of life insurance</p>
                                                    <p>$7,660</p>
                                                </div>
                                                <div className="info-text">
                                                    <p>Cash</p>
                                                    <p>$7,660</p>
                                                </div>
                                                <div className="info-text">
                                                    <p>Other</p>
                                                    <strong>$7,660</strong>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <h2>Liabilities and Expenses </h2>
                                            <div className="report-categoray-info-wrapper">
                                                <div className="info-text">
                                                    <p className='large'>Description</p>
                                                    <p className='large'>Value</p>
                                                </div>
                                                <div className="info-text">
                                                    <p>Home mortgage principal</p>
                                                    <p>22%</p>
                                                </div>
                                                <div className="info-text">
                                                    <p>Other mortgage principal</p>
                                                    <p>10.94%</p>
                                                </div>
                                                <div className="info-text">
                                                    <p>Auto loans</p>
                                                    <p>$7,660</p>
                                                </div>
                                                <div className="info-text">
                                                    <p>Student loans</p>
                                                    <p>$7,660</p>
                                                </div>
                                                <div className="info-text">
                                                    <p>Other loans</p>
                                                    <p>$7,660</p>
                                                </div>
                                                <div className="info-text">
                                                    <p>Credit card debt</p>
                                                    <p>$7,660</p>
                                                </div>
                                                <div className="info-text">
                                                    <p>Probate costs at 2%</p>
                                                    <p>$7,660</p>
                                                </div>
                                                <div className="info-text">
                                                    <p>Funeral expenses</p>
                                                    <p>$7,660</p>
                                                </div>
                                                <div className="info-text">
                                                    <p>Total liabilities & expenses</p>
                                                    <strong>$7,660</strong>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="desclimer">
                                        <strong>Calculator :</strong>
                                        <p>The calculator assumes the company requirements for QSBS were met when the shares were acquired.</p>
                                    </div>

                                </div>
                                <h2>Assete and Insurence </h2>
                                <div className="table-wrapper">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Year</th>
                                                <th>Estate</th>
                                                <th>Exemption</th>
                                                <th>Estate Taxes</th>
                                                <th>Remaining for Heirs</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>2024</td>
                                                <td>$1,306,400.00</td>
                                                <td>$13,610,000.00</td>
                                                <td>$0.00</td>
                                                <td>$1,306,400.00</td>
                                            </tr>
                                            <tr>
                                                <td>2024</td>
                                                <td>$1,306,400.00</td>
                                                <td>$13,610,000.00</td>
                                                <td>$0.00</td>
                                                <td>$1,306,400.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="desclimer">
                                    <p>The calculator assumes the company requirements for QSBS were met when the shares were acquired.</p>
                                </div>
                                <div className="desclimer">
                                    <p>Estate tax planning is very important to preserving your wealth for future generations. Knowing your potential estate tax liability is a great place to start your estate tax plan. Use this calculator to project the value of your estate, and the associated estate tax, for the next ten years. This calculator uses the rules passed into law as part of the "2017 Tax Cuts and Jobs Act.</p>
                                    <p>Please be aware that certain estate planning documents, which are beyond the scope of this calculator, may be necessary in order for assets to be distributed according to your wishes.</p>
                                </div>
                                <div className="title-wrapper">
                                    <strong>Carried Interest Tax</strong>
                                </div>
                                <div className="main-content-wrapper">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="report-categoray-info-wrapper">
                                                <div className="info-text">
                                                    <p className='large'>Description</p>
                                                    <p className='large'>Result</p>
                                                </div>
                                                <div className="info-text">
                                                    <p>Initial Value</p>
                                                    <p>22%</p>
                                                </div>
                                                <div className="info-text">
                                                    <p>Final Value</p>
                                                    <p>10.94%</p>
                                                </div>
                                                <div className="info-text">
                                                    <p>Fund Return</p>
                                                    <p>$7,660</p>
                                                </div>
                                                <div className="info-text">
                                                    <p>Hurdle Rate</p>
                                                    <p>$7,660</p>
                                                </div>
                                                <div className="info-text">
                                                    <p>Carried Interest</p>
                                                    <p>$7,660</p>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="info-content-wrapper">
                                                <p className="ex-large">Carry Distribution</p>
                                                <h3 className="ex-large yellow">$420,.00</h3>
                                                <p className='small'>With this carried interest calculator, we aim to help you to calculate the carry distribution and carried interest of an investment fund. The carried interest is the share of the profit that investors pay to their portfolio manager. Hence, it is essential to understand the carried interest calculation. We have prepared this document to help you understand what carried interest is and how to calculate carried interest. Besides, we will also explain the definition of the carried interest tax loophole.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>}
                        {currentStep === 2 && <div className="consultation-step-main-wrapper">
                            <div className="consultation-inner-wrapper">
                                <div class="consultation-cards-main my-5">
                                    <h2 class="mb-3">Download Reports</h2>
                                    <div class="row">
                                        <div class="col-md-6 mb-4">
                                            <div class="consultation-card-wrapper">
                                                <div class="card-body">
                                                    <div className="text">
                                                        <h5 class="card-title">Graph Report</h5>
                                                        <p class="card-text">Detailed graphical analysis.</p>
                                                    </div>
                                                    <div className="icon">
                                                        <Image src={graphImg} alt="graphImg" />
                                                    </div>
                                                </div>
                                                <div className="btn-wrapper">
                                                    <a href="#" class="btn btn-text"><FaCloudDownloadAlt /> Download</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-4">
                                            <div class="consultation-card-wrapper">
                                                <div class="card-body">
                                                    <div className="text">
                                                        <h5 class="card-title">Consultation Report</h5>
                                                        <p class="card-text">Comprehensive consultation findings.</p>
                                                    </div>
                                                    <div className="icon">
                                                        <Image src={consultationImg} alt="graphImg" />
                                                    </div>
                                                </div>
                                                <div className="btn-wrapper">
                                                    <a href="#" class="btn btn-text"><FaCloudDownloadAlt /> Download</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="consultation-table-main">
                                    <h2 class="mb-4">Report Details</h2>
                                    <div className="table-wrapper">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Date</th>
                                                    <th>Plan Selected</th>
                                                    <th>Consulted</th>
                                                    <th style={{ textAlign: 'center' }}>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>John Smith</td>
                                                    <td>example@example.com</td>
                                                    <td>1st April, 2023</td>
                                                    <td>$400</td>
                                                    <td><span class="badge badge-success"><FaRegSmile />Consulted</span></td>
                                                    <td style={{ textAlign: 'center' }}><button class="btn btn-light btn-sm"><BsThreeDotsVertical /></button></td>
                                                </tr>
                                                <tr>
                                                    <td>John Smith</td>
                                                    <td>example@example.com</td>
                                                    <td>1st April, 2023</td>
                                                    <td>$400</td>
                                                    <td><span class="badge badge-secondary not"><HiOutlineEmojiSad />Not Consulted</span></td>
                                                    <td style={{ textAlign: 'center' }}><button class="btn btn-light btn-sm"><BsThreeDotsVertical /></button></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>}
                    </div>
                    <div className={`buttons`}>
                        <div className="wp-block-button">
                        <button onClick={prevStep} disabled={currentStep === 0} className='wp-block-button__link wp-element-button'>
                            Previous
                        </button>
                        </div>
                        <div className="wp-block-button">
                        <button onClick={nextStep} disabled={currentStep === steps.length - 1} className='wp-block-button__link wp-element-button'>
                            Next
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StepperComponent;

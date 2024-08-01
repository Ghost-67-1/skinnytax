// components/Stepper.js
'use client'

import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { TextField, Button, InputAdornment } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';

import { FaGear } from "react-icons/fa6";
import { FaFileImport } from "react-icons/fa";
import { IoIosPersonAdd } from "react-icons/io";

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
                        {currentStep === 1 && <div className="report-step-main-wrapper">Manual Content for Import</div>}
                        {currentStep === 2 && <div className="consultation-step-main-wrapper">Manual Content for Add Person</div>}
                    </div>
                    <div className={`buttons`}>
                        <button onClick={prevStep} disabled={currentStep === 0}>
                            Previous
                        </button>
                        <button onClick={nextStep} disabled={currentStep === steps.length - 1}>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StepperComponent;

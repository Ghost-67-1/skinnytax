// components/Stepper.js
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Accordion from 'react-bootstrap/Accordion';
import { TextField, Button, InputAdornment } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';

import graphImg from '../assets/images/graph-report-img.png';
import consultationImg from '../assets/images/consultation-report-icon.png';

import { FaGear } from 'react-icons/fa6';
import { FaFileImport } from 'react-icons/fa';
import { IoIosPersonAdd } from 'react-icons/io';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaRegSmile } from 'react-icons/fa';
import { HiOutlineEmojiSad } from 'react-icons/hi';

import DonutChartComponent from './DonutChartComponent';
import HalfDoughnutChart from './HalfDoughnutChart';
import ReportBarChart from './ReportBarChart';
import InputComponent from './InputComponent';
import Report from './report';


const StepperComponent = ({getMatchsubscription}) => {
  const [reports, setReports] = useState({
    Compound_Interest_Calculator: false,
    Annualized_Return_Calculator: false,
    Present_Value_Calculator: false,
    Investment_Time_Calculator: false,
    Break_Even_Point_Calculator: false,
    Markup_Calculator: false,
    Event_Probability_Calculator: false,
    Price_to_Earnings_Ratio_Calculator: false,
    dollarCostAverage: false
  });
  console.log('🚀 ~ StepperComponent ~ reports:', reports);
  const calculators = [
    {
      name: 'Compound Interest Calculator',
      description:
        'Calculate the compound interest of an investment or determine how long your invested money can last. Additionally, logged in users can save their calculations.',
      fields: [
        {
          label: 'Initial Value',
          type: "number",
          name: "initialValue",
          placeholder: "Enter the value",
          icon: "$",
          onChange: () => { }
        },
        {
          label: 'Contributions',
          type: "number",
          name: "contributions",
          placeholder: "Enter the value",
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-piggy-bank h-4 w-4 text-success" aria-hidden="true"><path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z"></path><path d="M2 9v1c0 1.1.9 2 2 2h1"></path><path d="M16 11h0"></path></svg>,
          onChange: () => { }
        },
        {
          label: 'Contribution Frequency',
          type: "select",
          name: "contributionFrequency",
          placeholder: "Enter the value",
          options: [{ label: "Monthly", value: 12 }, { label: "Annually", value: 1 }],
          onChange: () => { }
        },
        {
          label: 'Annual interest rate',
          type: "number",
          name: "annualInterestRate",
          placeholder: "Enter the value",
          icon: "%",
          onChange: () => { }
        },
        {
          label: 'Compound Interval',
          type: "select",
          name: "compoundInterval",
          placeholder: "Enter the value",
          options: [{ label: "Monthly", value: 12 }, { label: "Annually", value: 1 }],
          onChange: () => { }
        },
        {
          label: 'Duration',
          type: "number",
          name: "duration",
          placeholder: "Enter the value",
          // icon: "%",
          onChange: () => { }
        },
        {
          label: 'Duration Type',
          type: "select",
          name: "durationType",
          placeholder: "Enter the value",
          options: [{ label: "Monthly", value: 12 }, { label: "Quarters", value: 3 }, { label: "Years", value: 1 }],
          onChange: () => { }
        },
      ],
      calculate: (e) => {
        e.preventDefault()

        const formData = new FormData(e.target);
        const formValues = {};

        // Dynamically extract form values
        for (let [name, value] of formData.entries()) {
          formValues[name] = value;
        }
        console.log('🚀 ~ StepperComponent ~ formValues:', formValues);
        const {
          initialValue: startingBalance,
          contributionFrequency,
          durationType: durationMultiplier,
          contributions: contribution,
          contributionMultiplier = 1,
          annualInterestRate: interestRate,
          compoundInterval: compoundFrequency,
          duration
        } = formValues;

        // Compounded Interest for Principal
        // CI = P(1 + r/n)^(nt)

        // Future Value of a Series
        // FV = PMT * (((1 + r / n) ** (n * t) - 1) / (r / n))

        // Total amount
        // T = CI + FV

        // Where:
        // PMT = addition freq / compound freq
        // CI = the future value of the investment/loan, including interest
        // P = Principal investment amount (the initial deposit or loan amount)
        // r = Annual interest rate (decimal)
        // n = Compound frequency per year
        // t = Investment time in years

        const depositting = contributionMultiplier > -1;

        const PMT = contributionMultiplier * contribution * (contributionFrequency / compoundFrequency);
        const P = startingBalance;
        const r = interestRate / 100;
        const n = compoundFrequency;
        const t = (duration * durationMultiplier) / 12;

        const CI = P * (1 + r / n) ** (n * t);
        const FV = PMT * (((1 + r / n) ** (n * t) - 1) / (r / n));
        const T = CI + FV;
        const APY = ((1 + r / n) ** n - 1) * 100;

        const additionalContributions =
          contributionMultiplier * contribution * contributionFrequency * t;

        const totalContribution = additionalContributions + P;
        const totalProfit = T - totalContribution;

        // If no rate is provides show the future future value of investment
        const noRateT = additionalContributions + P;

        const totalReturnPercent =
          (totalProfit /
            (Math.abs(depositting ? additionalContributions : 0) +
              startingBalance)) *
          100;
        setReports({
          Compound_Interest_Calculator: {
            startingBalance,
            compoundFrequency,
            contribution,
            contributionFrequency,
            contributionMultiplier,
            interestRate,
            duration,
            durationMultiplier,
            totalContribution,
            futureValue: r !== 0 ? T : noRateT,
            totalProfit,
            totalReturn: APY,
            principal: P,
            additionalContributions,
            depositting,
            totalReturnPercent,
          },
          Annualized_Return_Calculator: false,
          Present_Value_Calculator: false,
          Investment_Time_Calculator: false,
          Break_Even_Point_Calculator: false,
          Markup_Calculator: false,
          Event_Probability_Calculator: false,
          Price_to_Earnings_Ratio_Calculator: false,
          dollarCostAverage: false
        });
      }
    },
    {
      name: 'Annualized Return Calculator',
      fields: [
        {
          label: 'Initial Value',
          type: 'number',
          name: 'startingBalance',
          placeholder: 'Enter the value',
          icon: '$',
          onChange: () => {}
        },
        {
          label: 'Ending Value',
          type: 'number',
          name: 'endingBalance',
          placeholder: '1000',
          icon: '$',
          onChange: () => {}
        },
        {
          label: 'Duration',
          type: 'number',
          name: 'duration',
          placeholder: '10',
          icon: '',
          onChange: () => {}
        },
        {
          label: 'Duration Type',
          type: 'select',
          name: 'durationMultiplier',
          options: [
            { label: 'Years', value: 12 },
            { label: 'Quarters', value: 1 },
            { label: 'Months', value: 2 }
          ],
          placeholder: '10',
          icon: '',
          onChange: () => {}
        }
      ],

      calculate: (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const formValues = {};

        // Dynamically extract form values
        for (let [name, value] of formData.entries()) {
          formValues[name] = value;
        }
        const { startingBalance, endingBalance, duration, durationMultiplier } =
          formValues;

        // Time in years
        const t = (duration * durationMultiplier) / 12;
        const Annualized_Return_Calculator =
          ((endingBalance / startingBalance) ** (1 / t) - 1) * 100;
        const percentReturn =
          ((endingBalance - startingBalance) / startingBalance) * 100;

        setReports({
          Annualized_Return_Calculator: {
            startingBalance,
            endingBalance,
            duration,
            durationMultiplier,
            Annualized_Return_Calculator,
            percentReturn
          },
          Compound_Interest_Calculator: false,
          Annualized_Return_Calculator: false,
          Present_Value_Calculator: false,
          Investment_Time_Calculator: false,
          Break_Even_Point_Calculator: false,
          Markup_Calculator: false,
          Event_Probability_Calculator: false,
          Price_to_Earnings_Ratio_Calculator: false,
          dollarCostAverage: false
        });
      },
      description:
        'Calculate the annualized return (CAGR), total percent return, and total profit of an investment. Additionally, logged in users can save their calculations.'
    },
    {
      name: 'Present Value Calculator',
      fields: [
        {
          label: 'Future Value',
          type: 'number',
          name: 'startingBalance',
          placeholder: 'Enter the value',
          icon: '$',
          onChange: () => {}
        },
        {
          label: 'Discount Rate',
          type: 'number',
          name: 'discountRate',
          placeholder: '1000',
          icon: '%',
          onChange: () => {}
        },
        {
          label: 'Duration',
          type: 'number',
          name: 'duration',
          placeholder: '10',
          icon: '',
          onChange: () => {}
        },
        {
          label: 'Duration Type',
          type: 'select',
          name: 'durationMultiplier',
          options: [
            { label: 'Years', value: 12 },
            { label: 'Quarters', value: 1 },
            { label: 'Months', value: 2 }
          ],
          placeholder: '10',
          icon: '',
          onChange: () => {}
        }
      ],
      calculate: (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const formValues = {};

        // Dynamically extract form values
        for (let [name, value] of formData.entries()) {
          formValues[name] = value;
        }
        const { startingBalance, discountRate, duration, durationMultiplier } =
          formValues;

        // PV = FV * (1 / (1 + r) ^ n)
        const FV = startingBalance;
        const r = discountRate / 100;
        const n = (duration * durationMultiplier) / 12;
        const PV = FV * (1 / (1 + r) ** n);

        setReports({
          Present_Value_Calculator: {
            startingBalance,
            discountRate,
            duration,
            durationMultiplier,
            Present_Value_Calculator: PV
          },
          Compound_Interest_Calculator: false,
          Annualized_Return_Calculator: false,
          Investment_Time_Calculator: false,
          Break_Even_Point_Calculator: false,
          Markup_Calculator: false,
          Event_Probability_Calculator: false,
          Price_to_Earnings_Ratio_Calculator: false,
          dollarCostAverage: false
        });
      },
      name: 'Present Value Calculator',
      description:
        'Calculate the present value of an investment with a specified discount rate. Additionally, logged in users can save their calculations.'
    },
    {
      name: 'Investment Time Calculator',
      fields: [
        {
          label: 'Initial Value',
          type: 'number',
          name: 'startingBalance',
          placeholder: 'Enter the value',
          icon: '$',
          onChange: () => {}
        },
        {
          label: 'Ending Value',
          type: 'number',
          name: 'endingBalance',
          placeholder: '1000',
          icon: '$',
          onChange: () => {}
        },
        {
          label: 'Annual interest rate',
          type: 'number',
          name: 'annualInterestRate',
          placeholder: '10',
          icon: '%',
          onChange: () => {}
        }
      ],
      calculate: (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formValues = {};
        for (let [name, value] of formData.entries()) {
          formValues[name] = value;
        }
        const { startingBalance, endingBalance, annualInterestRate } =
          formValues;

        const r = annualInterestRate / 100;
        const T = Math.log(endingBalance / startingBalance) / Math.log(1 + r);

        setReports({
          Investment_Time_Calculator: {
            startingBalance,
            endingBalance,
            annualInterestRate,
            yearsRequired: T,
            monthsRequired: T * 12,
            daysRequired: T * 365
          },
          Compound_Interest_Calculator: false,
          Annualized_Return_Calculator: false,
          Present_Value_Calculator: false,
          Break_Even_Point_Calculator: false,
          Markup_Calculator: false,
          Event_Probability_Calculator: false,
          Price_to_Earnings_Ratio_Calculator: false,
          dollarCostAverage: false
        });
      },
      description:
        'Calculate the amount of time needed to grow an investment to a certain future value given an annual interest rate. Additionally, logged in users can save their calculations.'
    },
    {
      name: 'Break Even Point Calculator',
      fields: [
        {
          label: 'Fixed Costs',
          type: 'number',
          name: 'fixedCosts',
          placeholder: 'Enter the value',
          icon: '$',
          onChange: () => {}
        },
        {
          label: 'Variable Cost Per Unit',
          type: 'number',
          name: 'variableCostPerUnit',
          placeholder: '1000',
          icon: '$',
          onChange: () => {}
        },
        {
          label: 'Price Per Unit',
          type: 'number',
          name: 'pricePerUnit',
          placeholder: '10',
          icon: '$',
          onChange: () => {}
        }
      ],

      calculate: (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formValues = {};
        for (let [name, value] of formData.entries()) {
          formValues[name] = value;
        }
        const { fixedCosts, variableCostPerUnit, pricePerUnit } = formValues;

        // BEP = Fixed costs / (Sales price per unit – Variable cost per unit)
        const BEP = fixedCosts / (pricePerUnit - variableCostPerUnit);
        // Break even point in currency
        const BEPM = BEP * pricePerUnit;

        // Contribution margin
        const CM = pricePerUnit - variableCostPerUnit;
        const CMP = (CM / pricePerUnit) * 100;
        setReports({
          Break_Even_Point_Calculator: {
            fixedCosts,
            variableCostPerUnit,
            pricePerUnit,
            Break_Even_Point_CalculatorUnits: BEP,
            Break_Even_Point_CalculatorMoney: BEPM,
            contributionMarginMoney: CM,
            contributionMarginPercent: CMP
          },
          Compound_Interest_Calculator: false,
          Annualized_Return_Calculator: false,
          Present_Value_Calculator: false,
          Investment_Time_Calculator: false,
          Markup_Calculator: false,
          Event_Probability_Calculator: false,
          Price_to_Earnings_Ratio_Calculator: false,
          dollarCostAverage: false
        });
      },
      description:
        'Calculate the point at which total cost equals total revenue, indicating neither profit nor loss for your business. Additionally, logged in users can save their calculations.'
    },
    {
      name: 'Markup Calculator',
      fields: [
        {
          label: 'Cost',
          type: 'number',
          name: 'cost',
          placeholder: 'Enter the value',
          icon: '$',
          onChange: () => {}
        },
        {
          label: 'Sales Price',
          type: 'number',
          name: 'salesPrice',
          placeholder: '1000',
          icon: '$',
          onChange: () => {}
        }
      ],

      calculate: (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formValues = {};
        for (let [name, value] of formData.entries()) {
          formValues[name] = value;
        }
        const { cost, salesPrice } = formValues;

        const profit = salesPrice - cost;
        const Markup_Calculator = (profit / cost) * 100;

        setReports({
          Markup_Calculator: { cost, salesPrice, profit, Markup_Calculator },
          Compound_Interest_Calculator: false,
          Annualized_Return_Calculator: false,
          Investment_Time_Calculator: false,
          Break_Even_Point_Calculator: false,
          Event_Probability_Calculator: false,
          Price_to_Earnings_Ratio_Calculator: false,
          dollarCostAverage: false
        });
      },
      description:
        'Calculate the difference between the cost and the selling price of your product. Additionally, logged in users can save their calculations.'
    },
    {
      name: 'Event Probability Calculator',
      fields: [
        {
          label: 'Event Probability',
          type: 'number',
          name: 'eventProbabilityPercent',
          placeholder: 'Enter the value',
          icon: '%',
          onChange: () => {}
        },
        {
          label: 'Total Attempts',
          type: 'number',
          name: 'eventTries',
          placeholder: '1000',
          // icon: "$",
          onChange: () => {}
        }
      ],

      calculate: (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formValues = {};
        for (let [name, value] of formData.entries()) {
          formValues[name] = value;
        }
        const { eventProbabilityPercent, eventTries: T } = formValues;
        const P = eventProbabilityPercent / 100;

        const AOP = 1 - (1 - P) ** T;
        const EOP = T * P * (1 - P) ** (T - 1);
        const MOP = AOP - EOP;

        setReports({
          Event_Probability_Calculator: {
            ...formValues,
            atLeastOnceProbabilityPercent: AOP * 100,
            moreThanOnceProbabilityPercent: MOP * 100,
            exactlyOnceProbabilityPercent: EOP * 100
          },
          Compound_Interest_Calculator: false,
          Annualized_Return_Calculator: false,
          Investment_Time_Calculator: false,
          Break_Even_Point_Calculator: false,
          Markup_Calculator: false,
          Price_to_Earnings_Ratio_Calculator: false,
          dollarCostAverage: false
        });
      },
      description:
        'Calculate the probability of an event occurring at least once, more than once, or exactly once in a given number of attempts. Additionally, logged in users can save their calculations.'
    },
    {
      name: 'Price to Earnings Ratio Calculator',
      fields: [
        {
          label: 'Share Price',
          type: 'number',
          name: 'sharePrice',
          placeholder: 'Enter the value',
          icon: '$',
          onChange: () => {}
        },
        {
          label: 'Earnings per Share',
          type: 'number',
          name: 'earningsPerShare',
          placeholder: '1000',
          icon: '$',
          onChange: () => {}
        }
      ],
      calculate: (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formValues = {};
        for (let [name, value] of formData.entries()) {
          formValues[name] = value;
        }
        const { sharePrice, earningsPerShare } = formValues;

        const peRatio = sharePrice / earningsPerShare;

        setReports({
          Price_to_Earnings_Ratio_Calculator: {
            sharePrice,
            earningsPerShare,
            peRatio
          },
          Compound_Interest_Calculator: false,
          Annualized_Return_Calculator: false,
          Investment_Time_Calculator: false,
          Break_Even_Point_Calculator: false,
          Markup_Calculator: false,
          Event_Probability_Calculator: false,
          dollarCostAverage: false
        });
      },
      description:
        'Calculate the price-to-earnings (P/E) ratio of a company to determine if its stock is overvalued or undervalued. Additionally, logged in users can save their calculations.'
    },
    {
      name: 'Dollar Cost Average Calculator',
      fields: [
        {
          label: 'Initial Investment',
          type: 'number',
          name: 'initialInvestment',
          placeholder: 'Enter the value',
          icon: '$',
          onChange: () => {}
        },
        {
          label: 'Share Price',
          type: 'number',
          name: 'sharePrice',
          placeholder: 'Enter the value',
          icon: '$',
          onChange: () => {}
        },
        {
          label: 'Deposit',
          type: 'number',
          name: 'deposit',
          placeholder: 'Enter the value',
          icon: '$',
          onChange: () => {}
        },
        {
          label: 'Deposit Frequency',
          type: 'select',
          name: 'depositFrequency',
          placeholder: 'Enter the value',
          options: [
            { label: 'Weekly', value: 54 },
            { label: 'Monthly', value: 12 },
            { label: 'Quarterly', value: 3 },
            { label: 'Yearly', value: 1 }
          ],
          onChange: () => {}
        },
        {
          label: 'Annual interest rate',
          type: 'number',
          name: 'annualInterestRate',
          placeholder: 'Enter the value',
          icon: '%',
          onChange: () => {}
        },
        {
          label: 'Compound Interval',
          type: 'select',
          name: 'compoundInterval',
          placeholder: 'Enter the value',
          options: [
            { label: 'Monthly', value: 12 },
            { label: 'Annually', value: 1 }
          ],
          onChange: () => {}
        },
        {
          label: 'Duration',
          type: 'number',
          name: 'duration',
          placeholder: 'Enter the value',
          // icon: "%",
          onChange: () => {}
        },
        {
          label: 'Duration Type',
          type: 'select',
          name: 'durationType',
          placeholder: 'Enter the value',
          options: [
            { label: 'Monthly', value: 12 },
            { label: 'Quarters', value: 3 },
            { label: 'Years', value: 1 }
          ],
          onChange: () => {}
        }
      ],
      description:
        'Calculate the average cost of an investment over a time period, given an interest rate, initial investment amount and a series of periodic investments. Additionally, logged in users can save their calculations.'
    }
  ];

  const filteredCalculators = getMatchsubscription.name === "Personal" ? calculators.slice(0, 2) :
    getMatchsubscription.name === "Professionals" ? calculators.slice(0, 4) :
      getMatchsubscription.name === "Business" ? calculators.slice(0, 6) :
        calculators;

  console.log("getMatchsubscription11", filteredCalculators)

  const currencies = [
    {
      value: 'Single',
      label: 'Single'
    },
    {
      value: 'Single',
      label: 'Single'
    },
    {
      value: 'Single',
      label: 'Single'
    },
    {
      value: 'Single',
      label: 'Single'
    }
  ];

  const steps = [
    { label: 'Calculator', icon: <FaGear /> },
    { label: 'Report', icon: <FaFileImport /> },
    { label: 'Consultation', icon: <IoIosPersonAdd /> }
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
    <div className="stepper-component-main-wrapper">
      <div className="container">
        <div className={`stepperContainer py-5`}>
          <div className={`steps`}>
            {steps.map((step, index) => (
              <div key={index} className={`step`}>
                <div
                  className={`circle ${index === currentStep ? 'active' : ''}`}
                >
                  {step.icon}
                </div>
                <div className={`label`}>{step.label}</div>
              </div>
            ))}
          </div>
          <div className={`content`}>
            {currentStep === 0 && (
              <div className="calculator-step-main-wrapper">
                <div className="accordion-wrapper">
                  <Accordion defaultActiveKey="0">
                    {filteredCalculators.map((calculator, index) => {
                      const keyName = calculator.name.split(' ').join('_');
                      return (
                        <Accordion.Item eventKey={index}>
                          <Accordion.Header>{calculator.name}</Accordion.Header>
                          <Accordion.Body>
                            <div className="description">
                              <p>{calculator.description}</p>
                            </div>
                            <div className="form-wrapper">
                              <form onSubmit={calculator.calculate}>
                                <div className="row">
                                  {Array.isArray(calculator?.fields) &&
                                    calculator?.fields?.map((field, index) => (
                                      <div className="col-md-4 mb-5">
                                        <div className="form-group has-padding">
                                          <InputComponent
                                            type={field.type}
                                            placeholder={field.placeholder}
                                            icon={field.icon}
                                            name={field.name}
                                            label={field.label}
                                            onChange={field.onChange}
                                            options={field.options}
                                          />
                                          {/* <TextField label="Income" id="outlined-start-adornment" sx={{ m: 1, width: '25ch' }} InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment>, }} /> */}
                                        </div>
                                      </div>
                                    ))}
                                </div>
                                <button type="submit" className='wp-block-button__link wp-element-button'> Calculate</button>
                              </form>
                            </div>
                            {reports[keyName] && (
                              <Report report={reports[keyName]} />
                            )}
                          </Accordion.Body>
                        </Accordion.Item>
                      );
                    })}
                  </Accordion>
                </div>
              </div>
            )}
            {currentStep === 1 && (
              <div className="report-step-main-wrapper">
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
                            <strong>Federal taxes</strong>
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
                            <strong className="large">After-Tax Income</strong>
                            <strong className="large">$58,926</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="desclimer">
                      <strong>Disclaimer:</strong>
                      <p>
                        Calculations are estimates based on tax rates as of Jan.
                        2023 and data from the Tax Foundation. These rates are
                        subject to change. Check the IRS website for the latest
                        information about income taxes and your state tax
                        website for state-specific information. Our calculator
                        doesn't consider both 401k and IRA deductions due to the
                        tax law limitations. Please note, the amount of your IRA
                        deductions may vary. You should speak with a tax
                        professional to determine your tax situation.
                      </p>
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
                            <strong>Federal taxes</strong>
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
                            <strong className="large">After-Tax Income</strong>
                            <strong className="large">$58,926</strong>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="info-content-wrapper">
                          <strong className="large">Helpful notes</strong>
                          <p>
                            The "Date Received Shares" depends on what type of
                            equity you hold, which you can find in your Carta
                            account.
                          </p>
                          <ul className="list">
                            <li>
                              RSAS or founder stock = grant date or purchase
                              date (if subject to a vesting schedule, assuming
                              you filed 83(b) election)
                            </li>
                            <li>Options (ISOS and NSOS) = exercise date</li>
                            <li>RSUS = settlement date</li>
                          </ul>
                          <p>
                            The "Date Received Shares" depends on what type of
                            equity you hold, which you can find in your Carta
                            account.
                          </p>
                          <ul className="list">
                            <li>
                              RSAS or founder stock = grant date or purchase
                              date (if subject to a vesting schedule, assuming
                              you filed 83(b) election)
                            </li>
                            <li>Options (ISOS and NSOS) = exercise date</li>
                            <li>RSUS = settlement date</li>
                          </ul>
                          <p>
                            The "Date Received Shares" depends on what type of
                            equity you hold, which you can find in your Carta
                            account.
                          </p>
                          <ul className="list">
                            <li>
                              RSAS or founder stock = grant date or purchase
                              date (if subject to a vesting schedule, assuming
                              you filed 83(b) election)
                            </li>
                            <li>Options (ISOS and NSOS) = exercise date</li>
                            <li>RSUS = settlement date</li>
                            <li>
                              RSAS or founder stock = grant date or purchase
                              date (if subject to a vesting schedule, assuming
                              you filed 83(b) election)
                            </li>
                            <li>
                              RSAS or founder stock = grant date or purchase
                              date (if subject to a vesting schedule, assuming
                              you filed 83(b) election)
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="desclimer">
                      <strong>Calculator assumptions:</strong>
                      <p>
                        The calculator assumes the company requirements for QSBS
                        were met when the shares were acquired. The calculator
                        uses the highest tax rates for both short-term capital
                        gains at 37% and long- term capital gains at 20%. The
                        calculator also assumes shares were acquired after
                        9/28/2010 and the company was a qualified small business
                        on the day the shares were acquired.
                      </p>
                    </div>
                    <div className="desclimer">
                      <strong>Disclosure:</strong>
                      <p>
                        This calculator is provided for your informational
                        purposes only by eShares, Inc. dba Carta, Inc.
                        ("Carta"). Carta does not provide legal, tax, or
                        financial advice, and the use of this calculator is not
                        a substitute for such professional advice or services
                        nor should it be used as a basis for any decision or
                        action that may affect your business or interests. USE
                        OF THIS CALCULATOR IS ENTIRELY AT YOUR OWN RISK, AND
                        CARTA ASSUMES NO LIABILITY FOR THE USE OF OR RELIANCE ON
                        THIS CALCULATOR. Carta does not guarantee this
                        calculator's applicability or accuracy in regard to your
                        particular circumstances. This calculator is provided
                        "as is" without warranty of any kind, either express,
                        implied, or statutory, including without limitation,
                        warranties of merchantability, fitness for a particular
                        purpose, satisfactory purpose, title or noninfringement.
                        Some jurisdictions do not allow the exclusion of implied
                        warranties, so these exclusions may not apply to you.
                        ©2023 eShares Inc., d/b/a Carta Inc. ("Carta"). All
                        rights reserved. Reproduction prohibited."
                      </p>
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
                      <p>
                        The calculator assumes the company requirements for QSBS
                        were met when the shares were acquired.
                      </p>
                    </div>
                  </div>
                  <div className="title-wrapper">
                    <strong>Estate Tax</strong>
                  </div>
                  <div className="main-content-wrapper">
                    <div className="desclimer">
                      <strong>
                        Your current estate is estimated at $1,306,400.00.
                      </strong>
                      <p>
                        Your current estate estimated at $1,306,400.00 includes
                        your total assets and life insurance minus your
                        liabilities and expenses at death. Your estate taxes are
                        estimated at $0.00 leaving your heirs with $1,306,400.00
                        based on the information you supplied.
                      </p>
                      <p className="text-center">
                        * If you were to die in 2024 your $1,180,000.00 estate
                        will be distributed as follows:
                      </p>
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
                        <strong className="large">Total to heirs</strong>
                        <strong className="large">$58,926</strong>
                      </div>
                    </div>
                    <div className="desclimer">
                      <strong>Estate value and tax projections</strong>
                      <p>
                        Your total estate is estimated at $1,306,400.00 after
                        expenses, but before taxes. If your assets were to grow
                        at an annual rate of -13% and your liabilities change at
                        an annual rate of 2%, you would have a net worth of
                        $890,531.50 after 3 years.
                      </p>
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
                            <p className="large">Description</p>
                            <p className="large">Value</p>
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
                            <p className="large">Description</p>
                            <p className="large">Value</p>
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
                      <p>
                        The calculator assumes the company requirements for QSBS
                        were met when the shares were acquired.
                      </p>
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
                    <p>
                      The calculator assumes the company requirements for QSBS
                      were met when the shares were acquired.
                    </p>
                  </div>
                  <div className="desclimer">
                    <p>
                      Estate tax planning is very important to preserving your
                      wealth for future generations. Knowing your potential
                      estate tax liability is a great place to start your estate
                      tax plan. Use this calculator to project the value of your
                      estate, and the associated estate tax, for the next ten
                      years. This calculator uses the rules passed into law as
                      part of the "2017 Tax Cuts and Jobs Act.
                    </p>
                    <p>
                      Please be aware that certain estate planning documents,
                      which are beyond the scope of this calculator, may be
                      necessary in order for assets to be distributed according
                      to your wishes.
                    </p>
                  </div>
                  <div className="title-wrapper">
                    <strong>Carried Interest Tax</strong>
                  </div>
                  <div className="main-content-wrapper">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="report-categoray-info-wrapper">
                          <div className="info-text">
                            <p className="large">Description</p>
                            <p className="large">Result</p>
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
                          <p className="small">
                            With this carried interest calculator, we aim to
                            help you to calculate the carry distribution and
                            carried interest of an investment fund. The carried
                            interest is the share of the profit that investors
                            pay to their portfolio manager. Hence, it is
                            essential to understand the carried interest
                            calculation. We have prepared this document to help
                            you understand what carried interest is and how to
                            calculate carried interest. Besides, we will also
                            explain the definition of the carried interest tax
                            loophole.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {currentStep === 2 && (
              <div className="consultation-step-main-wrapper">
                <div className="consultation-inner-wrapper">
                  <div class="consultation-cards-main my-5">
                    <h2 class="mb-3">Download Reports</h2>
                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="consultation-card-wrapper">
                          <div class="card-body">
                            <div className="text">
                              <h5 class="card-title">Graph Report</h5>
                              <p class="card-text">
                                Detailed graphical analysis.
                              </p>
                            </div>
                            <div className="icon">
                              <Image src={graphImg} alt="graphImg" />
                            </div>
                          </div>
                          <div className="btn-wrapper">
                            <a href="#" class="btn btn-text">
                              <FaCloudDownloadAlt /> Download
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="consultation-card-wrapper">
                          <div class="card-body">
                            <div className="text">
                              <h5 class="card-title">Consultation Report</h5>
                              <p class="card-text">
                                Comprehensive consultation findings.
                              </p>
                            </div>
                            <div className="icon">
                              <Image src={consultationImg} alt="graphImg" />
                            </div>
                          </div>
                          <div className="btn-wrapper">
                            <a href="#" class="btn btn-text">
                              <FaCloudDownloadAlt /> Download
                            </a>
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
                            <td>
                              <span class="badge badge-success">
                                <FaRegSmile />
                                Consulted
                              </span>
                            </td>
                            <td style={{ textAlign: 'center' }}>
                              <button class="btn btn-light btn-sm">
                                <BsThreeDotsVertical />
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td>John Smith</td>
                            <td>example@example.com</td>
                            <td>1st April, 2023</td>
                            <td>$400</td>
                            <td>
                              <span class="badge badge-secondary not">
                                <HiOutlineEmojiSad />
                                Not Consulted
                              </span>
                            </td>
                            <td style={{ textAlign: 'center' }}>
                              <button class="btn btn-light btn-sm">
                                <BsThreeDotsVertical />
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className={`buttons`}>
            <div className="wp-block-button">
              <button
                onClick={prevStep}
                disabled={currentStep === 0}
                className="wp-block-button__link wp-element-button"
              >
                Previous
              </button>
            </div>
            <div className="wp-block-button">
              <button
                onClick={nextStep}
                disabled={currentStep === steps.length - 1}
                className="wp-block-button__link wp-element-button"
              >
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

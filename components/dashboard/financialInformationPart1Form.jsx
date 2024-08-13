'use client'
import React, { Fragment, useState } from 'react'
import CustomInput from '../CustomInputs';
import axios from 'axios';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { RiArrowRightSLine } from 'react-icons/ri'
import { toast } from 'react-toastify';
import P2StocksOrBonds from '../../components/P2/P2StocksOrBonds';
import P2MutualFunds from '../../components/P2/P2MutualFunds';
import { Formik } from 'formik';
import Financialincome from "../../components/Financialincome"
import * as Yup from "yup"
import ErrorMassage from '../ErrorMassage';
import P2BankAndSaving from '../P2/P2BankAndSaving';

const financialInformationPart1 = [
  {
    name: 'Banking Information',
    id: 'Bank',
    fields: [
      {
        id: 'institutionName',
        label: 'Name of Institution',
        type: 'text',
        placeholder: 'Type Here',
        required: true,
        className: 'col-md-4 col-sm-6'
      },
      {
        id: 'ownership',
        label: 'Ownership',
        type: 'radio',
        required: true,
        className: 'col-md-12 col-sm-12',
        options: [
          { value: 'S-1', label: 'S-1' },
          { value: 'S-2', label: 'S-2' },
          { value: 'Joint', label: 'Joint' },
          { value: 'Trust', label: 'Trust' }
        ],
        defaultValue: 'S-1'
      },
      {
        id: 'accountType',
        label: 'Account Type',
        type: 'select',
        required: true,
        className: 'col-md-4 col-sm-6',
        options: [
          { value: 'Checking', label: 'Checking' },
          { value: 'Saving', label: 'Saving' },
          { value: 'CD', label: 'CD' }
        ],
        defaultValue: 'Checking'
      },
      {
        id: 'balance',
        label: 'Approx. Balance',
        type: 'text',
        placeholder: '',
        required: true,
        className: 'col-md-4 col-sm-6 text-end'
      }
    ]
  },
];

const bslcu = Array(6).fill({
  name: '',
  ownership: '',
  account_type: "",
  approx_balance: ""
})
const mfba = Array(6).fill({
  name: '',
  owner: '',
  balance: ""
})
const sb = Array(6).fill({
  name: '',
  ownership: '',
  shares: 0,
  balance: ""
})
const PersonalInformationForm = ({ handleNext }) => {
  const [data, setData] = useState({
    s1_annual_gross_income: 0,
    s2_annual_gross_income: 0,
    bslcu: [...bslcu],
    pod_bslcu: false,
    pod_person_bslcu: "",
    sb: [...sb],
    mfba: [...mfba],
    pod_mfba: false,
    pod_person_mfba: "",
    sell_any: false,
  })
  const [loading, setLoading] = useState(false);
  const initialFormValues = financialInformationPart1
    .flatMap((config) => config.fields.map((field) => ({ [field.id]: '' })))
    .reduce((acc, curr) => ({ ...acc, ...curr }), {});

  const [formValues, setFormValues] = useState(initialFormValues);

  const handleSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await axios.post('/api/financial-information', data);
      toast.success(response.data.message);
      handleNext(1)
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error(error?.response?.data?.message || 'Error submitting form');
    } finally {
      setLoading(false);
    }
  };

  const validationSchema = Yup.object().shape({
    s1_annual_gross_income: Yup.number()
      .required('S1 Annual Gross Income is required')
      .min(0, 'Must be a positive number'),
    s2_annual_gross_income: Yup.number()
      .required('S2 Annual Gross Income is required')
      .min(0, 'Must be a positive number'),
    bslcu: Yup.array().of(
      Yup.object().shape({
        name: Yup.string().required('Name is required'),
        ownership: Yup.string().required('Owner is required'),
        account_type: Yup.string().required('Account Type is required'),
        approx_balance: Yup.string().required('Balance is required'),
      })
    ),
    pod_bslcu: Yup.boolean(),
    pod_person_bslcu: Yup.string().when('pod_bslcu', {
      is: true,
      then: Yup.string().required('Pod person BSL/CU is required'),
    }),
    sb: Yup.array().of(
      Yup.object().shape({
        name: Yup.string().required('Name is required'),
        ownership: Yup.string().required('Owner is required'),
        shares: Yup.number()
          .required('Shares are required')
          .min(0, 'Shares must be a non-negative number'),
        balance: Yup.string().required('Balance is required'),
      })
    ),
    mfba: Yup.array().of(
      Yup.object().shape({
        name: Yup.string().required('Name is required'),
        owner: Yup.string().required('Owner is required'),
        balance: Yup.string().required('Balance is required'),
      })
    ),
    pod_mfba: Yup.boolean(),
    pod_person_mfba: Yup.string().when('pod_mfba', {
      is: true,
      then: Yup.string().required('Pod person MFBA is required'),
    }),
    sell_any: Yup.boolean(),
  });

  return (
    <div className="dashboard-inner">
      <div className="form">
        <Formik
          initialValues={data}
          onSubmit={handleSubmit}
          enableReinitialize
          validationSchema={validationSchema}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            setFieldValue,
            values,
            errors,
            touched
          }) => (
            <>
              <div className="row">
                <Financialincome values={values} handleChange={handleChange} touched={touched} errors={errors} handleBlur={handleBlur} />
                <div>
                  <div className='title-main-wrapper mb-3'>
                    <strong>Bank, Savings, Loans and Credit Unions</strong>
                    <span>
                      These are accounts not in an IRA. You can list IRA and other
                      retirement accounts in the next steps
                    </span>
                  </div>
                  <P2BankAndSaving data={values.bslcu} touched={touched.bslcu} errors={errors.bslcu} handleChange={(value, index, field) => setFieldValue(`bslcu.${index}.${field}`, value)} />
                  <CustomInput
                    label="Are any of these accounts “POD” (pay on death), “TOD” (transfer on death) or “ITF” (in trust for someone)?"
                    id={"pod_bslcu"}
                    type={'radio'}
                    value={values.pod_bslcu}
                    onChange={handleChange}
                    setFieldValue={setFieldValue}
                    placeholder="Value"
                    required={true}
                    // className
                    handleBlur={handleBlur}
                    error={errors.pod_bslcu}
                    visible={touched.pod_bslcu}
                  />


                  <CustomInput
                    label="If yes, which ones?"
                    id={"pod_bslcu"}
                    type={'textarea'}
                    // value={values.pod_bslcu}
                    onChange={handleChange}
                    setFieldValue={setFieldValue}
                    placeholder="Enter text"
                    required={true}
                    // className
                    handleBlur={handleBlur}
                    error={errors.pod_bslcu}
                    visible={touched.pod_bslcu}
                  />
                  {/* <P2BankAndSaving saveData={(_data) => { handleChange({target:"bslcu",value: _data }) }} /> */}
                  {/* <ErrorMassage error={errors.bslcu} visible={touched.bslcu} /> */}
                  <div className='title-main-wrapper mb-3'>
                    <strong>Stocks or Bonds</strong>
                    <span>
                      These include certificates you actually hold. You can list Mutual
                      Funds in the list below
                    </span>
                  </div>
                  <P2StocksOrBonds data={values.sb} touched={touched.sb} errors={errors.sb} handleChange={(value, index, field) => setFieldValue(`sb.${index}.${field}`, value)} />

                  {/* <ErrorMassage error={errors.sb} visible={touched.sb} /> */}
                  <div className='title-main-wrapper mb-3'>
                    <strong>Mutual Funds or Brokerage Accounts</strong>
                    <span>
                      These are accounts not in an IRA. You can list IRA and other
                      retirement accounts in the next steps
                    </span>
                  </div>
                  <P2MutualFunds data={values.mfba} touched={touched.mfba} errors={errors.mfba} handleChange={(value, index, field) => setFieldValue(`mfba.${index}.${field}`, value)} />
                  {/* <ErrorMassage error={errors.mfba} visible={touched.mfba} /> */}
                  <CustomInput
                    label="Are any of these accounts “POD” (pay on death), “TOD” (transfer on death) or “ITF” (in trust for someone)?"
                    id={"pod_bslcu"}
                    type={'radio'}
                    value={values.pod_bslcu}
                    onChange={handleChange}
                    setFieldValue={setFieldValue}
                    placeholder="Value"
                    required={true}
                    // className
                    handleBlur={handleBlur}
                    error={errors.pod_bslcu}
                    visible={touched.pod_bslcu}
                  />


                  <CustomInput
                    label="If yes, which ones?"
                    id={"pod_bslcu"}
                    type={'textarea'}
                    // value={values.pod_bslcu}
                    onChange={handleChange}
                    setFieldValue={setFieldValue}
                    placeholder="Enter text"
                    required={true}
                    // className
                    handleBlur={handleBlur}
                    error={errors.pod_bslcu}
                    visible={touched.pod_bslcu}
                  />

                  <CustomInput
                    label="Would you be willing to sell any of the above stocks or mutual funds if you could avoid capital gains taxes?"
                    id={"pod_bslcu"}
                    type={'radio'}
                    value={values.pod_bslcu}
                    onChange={handleChange}
                    setFieldValue={setFieldValue}
                    placeholder="Value"
                    required={true}
                    // className
                    handleBlur={handleBlur}
                    error={errors.pod_bslcu}
                    visible={touched.pod_bslcu}
                  />
                </div>
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
          )}
        </Formik>
      </div>
    </div>
  )
}

export default PersonalInformationForm

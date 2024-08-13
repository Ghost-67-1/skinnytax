import React from 'react';
import ErrorMassage from './ErrorMassage';

export default function Financialincome({values, handleChange, touched, errors, handleBlur}) {
    return (
        <div className='finalcial_income'>
            <div className="row" style={{ borderBottom: "1px solid #DCE3E585" }}>
                <div className="col-lg-8 title-main-wrapper_content">
                    <div className="title-main-wrapper">
                        <strong>(S1)</strong>
                        <span>Your annual gross income</span>
                    </div>
                </div>
                <div className="col-lg-4 financial_form_input">
                    <div className='form'>
                        <div className=" form-group">
                            <input onBlur={handleBlur} value={values.s1_annual_gross_income} onChange={(e)=>handleChange({target:{name:'s1_annual_gross_income', value:e.target.value}})} min={0} type="number" placeholder="Type here" className='form-control' />
                            <ErrorMassage error={errors.s1_annual_gross_income} visible={touched.s1_annual_gross_income} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 title-main-wrapper_content">
                    <div className="title-main-wrapper">
                        <strong>(S2)</strong>
                        <span>If married, your spouse’s annual gross income</span>
                    </div>
                </div>
                <div className="col-lg-4 financial_form_input">
                    <div className='form'>
                        <div className=" form-group">
                            <input onBlur={handleBlur} value={values.s2_annual_gross_income} onChange={(e)=>handleChange({target:{name:'s2_annual_gross_income', value:e.target.value}})} min={0} type="number" placeholder="Type here" className='form-control' />
                            <ErrorMassage error={errors.s2_annual_gross_income} visible={touched.s2_annual_gross_income} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
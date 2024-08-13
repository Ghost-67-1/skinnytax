import React from 'react';

export default function Financialincome() {
    return (
        <div className='finalcial_income'>
            <div className="row" style={{borderBottom:"1px solid #DCE3E585"}}>
                <div className="col-lg-8 title-main-wrapper_content">
                    <div className="title-main-wrapper">
                        <strong>(S1)</strong> 
                        <span>If married, your spouse’s annual gross income</span>
                    </div>
                </div>
                <div className="col-lg-4 financial_form_input">
                    <form className='form'>
                        <div className=" form-group">
                            <input type="number" placeholder="Type here" className='form-control' />
                        </div>
                    </form>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-8 title-main-wrapper_content">
                    <div className="title-main-wrapper">
                        <strong>(S2)</strong>
                        <span>Your annual gross income</span>
                    </div>
                </div>
                <div className="col-lg-4 financial_form_input">
                    <form className='form'>
                        <div className=" form-group">
                            <input type="number" placeholder="Type here" className='form-control' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
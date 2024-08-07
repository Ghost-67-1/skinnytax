import React from 'react';
import { IoInformationCircleOutline } from "react-icons/io5";
import Forminput from './Forminput';


export default function Financialinput() {
    return (
        <div className='Decisions-box'>
            <div className='Decisions-header'>
                <p className='heading'>If you are unable <span><IoInformationCircleOutline /></span></p>
                <p className='details-content'>Provide details of someone you trust to make <strong>medical decisions</strong></p>
            </div>
            <div className='form-box'>
            <div className='row'>
                <div className="col-lg-4">
                    <Forminput/>
                </div>
                <div className="col-lg-4">
                    <Forminput/>
                </div>
                <div className="col-lg-4">
                    <Forminput/>
                </div>
                <div className="col-lg-12">
                    <Forminput/>
                </div>
                <div className="col-lg-4">
                    <Forminput/>
                </div>

                <div className="col-lg-4">
                    <Forminput/>
                </div>
            </div>
            </div>
        </div>
    );
}


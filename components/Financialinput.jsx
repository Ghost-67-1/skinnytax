import React from 'react';
import { IoInformationCircleOutline } from "react-icons/io5";


export default function Financialinput() {
    return (
        <div>
            <div className='Decisions-header'>
                <p className='heading'>If you are unable <span><IoInformationCircleOutline /></span></p>
                <p className='details-content'>Provide details of someone you trust to make <strong>medical decisions</strong></p>
            </div>
        </div>
    );
}


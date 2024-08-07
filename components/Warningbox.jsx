import React from 'react';
import { GrStatusWarning } from "react-icons/gr";

export default function Forminput() {
    return (
        <div className='Warning-box'>
            <div className='row'>
                <div className="col-lg-2">
                    <p className='icon-bg'>
                        <GrStatusWarning />
                    </p>
                </div>
                <div className='col-lg-10'>
                    <p className='warning-content'>If you had a divorce agreement please bring it</p>
                </div>
            </div>
        </div>
    )
}

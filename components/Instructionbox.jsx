import React from 'react';
import { IoInformationCircleOutline } from "react-icons/io5";

export default function Instrunctionbox() {
    return (
        <div className='Instrunction-box'>

            <div className='Instrunction-heading'>
                <IoInformationCircleOutline />
                <span>Instructions:</span>
            </div>
            <div className='Instrunction-listing'>
                <ul>
                    <li>
                         Please print. Be as specific as you can about names and accounts. S1 = Spouse 1. S2 = Spouse 2
                    </li>
                    <li>
                        If you are unsure of a question, leave it blank. Attach extra pages if you need more space.
                    </li>
                    <li>
                         Please fill out the diagnostic and bring it with you to your appointment.
                    </li>
                </ul>
            </div>
        </div>
    )
}


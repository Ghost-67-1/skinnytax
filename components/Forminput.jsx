import React from 'react'

export default function Forminput() {
    return (
        <div>
            <div className='form'>
                <div className=" form-group">
                    <label className='form-label'>Email address</label>
                    <input type="email" placeholder="Enter email" className='form-control' />
                </div>
            </div>
        </div>
    )
}

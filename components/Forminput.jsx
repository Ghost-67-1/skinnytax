import React from 'react'

export default function Forminput() {
    return (
        <div>
            <form className='form'>
                <div className=" form-group">
                    <label className='form-label'>Email address</label>
                    <input type="email" placeholder="Enter email" className='form-control' />
                </div>
            </form>
        </div>
    )
}

import React from 'react'
import FormProgressStepper from '@/components/FormProgressStepper'

export default function Form1() {
    return (
        <div className="form-dashboard-page">
            <div className="medium-1 container">

                <div className="form-dashboard-inner">
                    <div className="form-side-bar">
                        
                    </div>
                    <div className="form-dashboard">
                        <div className="progress-bar-main-wrapper">
                            <FormProgressStepper />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
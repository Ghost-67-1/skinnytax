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
                        <div className="title-main-wrapper">
                            <strong className="large">Information about you (S1)</strong>
                        </div>
                        <form action="#" className="form">
                            <div className="form-group">
                                <label htmlFor="true">Were you previously married?</label>
                                <div className="toogle-btn-wrapper">
                                    <span>yes</span>
                                    <label class="switch">
                                        <input type="checkbox" className="form-control" id='true' />
                                        <span class="slider round"></span>
                                    </label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
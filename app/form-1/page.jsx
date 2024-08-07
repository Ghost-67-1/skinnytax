import React from 'react'
import FormProgressStepper from '@/components/FormProgressStepper'
import { IoSearchOutline } from "react-icons/io5";
import sideBarSearchFlipIcon from '../../assets/images/icons/side-bar-search-flip-icon.svg';
import Image from 'next/image';
import { FaRegFolder } from "react-icons/fa";

import Instructionbox from '@/components/Instructionbox'
import Forminput from '@/components/Forminput'
import Warningbox from '@/components/Warningbox'

export default function Form1() {
    return (
        <div className="form-dashboard-page">
            <div className="medium-1 container">
            <Instructionbox/>
            {/* <Forminput/>
            <Warningbox/> */}
                <div className="form-dashboard-inner">
                    <div className="form-side-bar">
                        <div className="main-title-wrapper">
                            <div className="search-bar-wrapper">
                                <div className="form-group">
                                    <IoSearchOutline className='search-icon' />
                                    <input type="text" className="form-control" placeholder='Search' />
                                </div>
                                <Image src={sideBarSearchFlipIcon} alt='sideBarSearchFlipIcon' className='sideBarSearchFlipIcon' />
                            </div>
                        </div>
                        <div className="main-list-wrapper">
                            <ul className='list'>
                                <li>
                                    <div className="main-wrapper">
                                        <FaRegFolder />
                                        <p>Part one:<span className="clr"> Step 1</span></p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="form-dashboard">
                    <div className="progress-bar-main-wrapper">
                                <FormProgressStepper />
                            </div>
                        <div className="dashboard-inner">
                          
                            <div className="title-main-wrapper">
                                <strong className="large">Information about you (S1)</strong>
                            </div>
                            <form action="#" className="form">
                                <div className="form-group">
                                    <label htmlFor="true">Were you previously married?</label>
                                    <div className="toogle-btn-wrapper">
                                        <span className='text'>Yes</span>
                                        <label class="switch">
                                            <input type="checkbox" className="form-control" id='true' />
                                            <span class="slider round"></span>
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="true">Were you previously married?</label>
                                    <div className="toogle-btn-wrapper active">
                                        <span className='text'>Yes</span>
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
        </div>
    )
}

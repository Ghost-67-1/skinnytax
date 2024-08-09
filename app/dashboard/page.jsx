import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import Image from 'next/image';
import sideBarSearchFlipIcon from '../../assets/images/icons/side-bar-search-flip-icon.svg';
import { FaRegFolder } from "react-icons/fa";
import Link from 'next/link';

export default function DashboardSidebar() {
    return (
        <div className='Dashboard_link_sidebar'>
            <div className="form-dashboard-page">
                    <div className="form-dashboard-inner">
                        <div className="form-side-bar">
                            <div>
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
                                            <Link href='/calculator-2' className="main-wrapper" style={{textDecoration:"none"}}>                                              
                                                <p>Calculator</p>
                                            </Link>
                                        </li>

                                        <li>
                                        <Link href='/form' className="main-wrapper" style={{textDecoration:"none"}}>                                  
                                               <p>Form</p>
                                           </Link>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                            {/* <div className="side-bar-footer">
                                <span className="text">System info status</span>
                                <ul className="list-icon">
                                    <li><IoShieldCheckmarkOutline style={{ color: 'rgba(4, 158, 117, 1)' }} /></li>
                                    <li><MdOutlineCancel style={{ color: 'rgba(250, 69, 71, 1)' }} /></li>
                                    <li><LuAlertTriangle style={{ color: 'rgba(242, 153, 74, 1)' }} /></li>
                                </ul>
                            </div> */}
                        </div>
                    </div>               
            </div>
        </div>
    );
}
import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import Image from 'next/image';
import logo from '../../assets/images/icons/logo.png';
import sideBarSearchFlipIcon from '../../assets/images/icons/side-bar-search-flip-icon.svg';
// import { FaRegFolder } from "react-icons/fa";
import Link from 'next/link';
import { BsCalculator } from "react-icons/bs";
import { FaFileWaveform } from "react-icons/fa6";
import { MdGridView } from "react-icons/md";

export default function Sidebar() {
    return (
        <div className='Dashboard_link_sidebar'>
            <div className="form-dashboard-page">
                <div className="form-dashboard-inner">
                    <div className="form-side-bar pt-3">
                        <Link href='/' className="main-wrapper" style={{ textDecoration: "none" }}>
                            <Image
                                className="lazy"
                                src={logo}
                                width={35}
                                height={'auto'}
                                alt="SkinnyTax"
                            />
                        </Link>
                        <div className="main-list-wrapper">
                            <ul className='list'>
                                <li>
                                    <Link href='/dashboard' className="main-wrapper" style={{ textDecoration: "none" }}> <MdGridView />
                                        <span>Overview</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/dashboard/form' className="main-wrapper" style={{ textDecoration: "none" }}> <FaFileWaveform />  <span>Form</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/dashboard/calculator' className="main-wrapper" style={{ textDecoration: "none" }}>
                                        <BsCalculator /><span>Calculator </span>
                                    </Link>
                                </li>
                            </ul>
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
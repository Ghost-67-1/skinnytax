'use client';
import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { FaBell } from "react-icons/fa";

export default function Headerdashboard() {
    return (
        <div className='Dashboard_boxes mt-0'>
            <div className='Dashboard-flex'>
                <div>
                    <h4>Dashboard</h4>
                </div>
                {/* <div className="form-group">
                    <IoSearchOutline className="search-icon" />
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                    />
                </div> */}

                    <div className="nav-item">
                        <div className='icon-box'>
                            <FaBell />
                        </div>
                        <div className="btn-quote">
                            <SignedOut>
                                <SignInButton />
                            </SignedOut>
                            <SignedIn>
                                <UserButton />
                            </SignedIn>
                        </div>
                    </div>

            </div>
        </div>
    )
}
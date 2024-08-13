'use client';
import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { FaBell } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../assets/images/icons/logo.png'
import { GiHamburgerMenu } from "react-icons/gi";

export default function Headerdashboard() {
    return (
        <div className='dashboard-header py-3'>

            <h3>Dashboard</h3>
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
                <div className='icon-box hamburger'><GiHamburgerMenu />
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
    )
}
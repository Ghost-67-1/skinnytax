'use server';
import React from 'react';
import { currentUser } from '@clerk/nextjs/server';
import DonutChartComponent from '@/components/DonutChartComponent';
import HalfDoughnutChart from '@/components/HalfDoughnutChart';
// import BarChart from '@/components/ReportBarChart';
// import { Col, Row } from 'react-bootstrap';
import Headerdashboard from "@/components/dashboard/Headerdashboard"
import { FaUser } from "react-icons/fa";
import needMoreInfoImg from "../../assets/images/need-more-info-img.webp";
import Image from 'next/image';

async function InputForm() {
    const user = await currentUser()

    return (
        <div className="form-dashboard-page pt-2">
            <div className="container">
                {/* <div className="form-dashboard-inner" style={{background:"transparent"}}>
                    <div className="form-dashboard">
                        <div className="dashboard-inner">
                            <h1>Welcome to dashboard</h1>
                            <p> hi {(user?.firstName && user?.lastName) ? (user?.firstName + " " + user?.lastName) : "User"}!</p>
                        </div>
                    </div>
                </div>
                <Row>
                    <Col lg={6}>
                    <div className='Chart_box'>
                        <DonutChartComponent />
                    </div>
                    </Col>
                    <Col lg={6}>
                        <HalfDoughnutChart />
                    </Col>
                    <Col lg={6}>
                        <BarChart />
                    </Col>
                </Row> */}
                <Headerdashboard />

                <div className='row'>
                    <div className="col-lg-12">
                        <div className="Dashboard_boxes py-1 welcome-box">
                            <div className='row'>
                                <div className="col-lg-4">
                                    <Image
                                        fetchPriority="high"
                                        decoding="async"
                                        src={needMoreInfoImg}
                                        alt=""
                                        className="object__fit--contain lazy"
                                        // srcSet="https://skinny.tax/wp-content/uploads/2023/08/hero-img-phones.png 878w, https://skinny.tax/wp-content/uploads/2023/08/hero-img-phones-275x300.png 275w, https://skinny.tax/wp-content/uploads/2023/08/hero-img-phones-768x838.png 768w, https://skinny.tax/wp-content/uploads/2023/08/hero-img-phones-480x524.png 480w"
                                        width={"100%"}
                                        height={958}
                                    />
                                </div>
                                <div className="col-lg-8 m-auto">
                                    <h3 style={{ marginBottom: "0px" }}>
                                        Welcome To the Dashboard
                                    </h3>
                                    <p className='pb-2'>
                                        Manage your taxes efficiently with real-time insights and simplified navigation
                                    </p>
                                </div>
                            </div>

                            <div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className="col-lg-3">
                        <div className="Dashboard_boxes py-3">
                            <div className="Dashboard_boxes_flex">
                                <div className="icon-box">
                                    <FaUser />
                                </div>
                                <p className='Total_content'>Total Users</p>
                                <p className='Numbers_content'>0</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="Dashboard_boxes py-3">
                            <div className="Dashboard_boxes_flex">
                                <div className="icon-box">
                                    <FaUser />
                                </div>
                                <p className='Total_content'>Total Users</p>
                                <p className='Numbers_content'>0</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="Dashboard_boxes py-3">
                            <div className="Dashboard_boxes_flex">
                                <div className="icon-box">
                                    <FaUser />
                                </div>
                                <p className='Total_content'>Total Users</p>
                                <p className='Numbers_content'>0</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="Dashboard_boxes py-3">
                            <div className="Dashboard_boxes_flex">
                                <div className="icon-box">
                                    <FaUser />
                                </div>
                                <p className='Total_content'>Total Users</p>
                                <p className='Numbers_content'>0</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <div className="col-lg-8">
                        <div className='Dashboard_boxes'>
                            <HalfDoughnutChart />
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className='Dashboard_boxes chart-box'>

                            <DonutChartComponent />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default InputForm;

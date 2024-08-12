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
import LineChart from '../../components/LineChart';

async function InputForm() {
    const user = await currentUser()

    return (
        <div className="dashboard-page ">

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
                <div className="welcome-banner ">
                    <div className='row'>
                        <div className="col-lg-4">
                            <div className="img-wrapper">
                                <Image
                                    fetchPriority="high"
                                    decoding="async"
                                    src={needMoreInfoImg}
                                    alt="needMoreInfoImg"
                                    className="object__fit--contain lazy"
                                    // srcSet="https://skinny.tax/wp-content/uploads/2023/08/hero-img-phones.png 878w, https://skinny.tax/wp-content/uploads/2023/08/hero-img-phones-275x300.png 275w, https://skinny.tax/wp-content/uploads/2023/08/hero-img-phones-768x838.png 768w, https://skinny.tax/wp-content/uploads/2023/08/hero-img-phones-480x524.png 480w"
                                    width={"100%"}
                                    height={958}
                                />
                            </div>
                        </div>
                        <div className="col-lg-8 m-auto">
                            <div className="content-wrapper">
                                <h3 style={{ marginBottom: "0px" }}>
                                    Welcome To the Dashboard
                                </h3>
                                <p className='pb-2'>
                                    Manage your taxes efficiently with real-time insights and simplified navigation
                                </p>
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
                                <p className='Numbers_content'>10k</p>
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
                                <p className='Numbers_content'>22.5</p>
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
                                <p className='Numbers_content'>500k</p>
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
                                <p className='Numbers_content'>324.4k</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="chart-section mb-2">
                    <div className="Dashboard_boxes">
                        <LineChart />
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

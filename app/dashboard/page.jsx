'use server';
import React from 'react';
import { currentUser } from '@clerk/nextjs/server';
import DonutChartComponent from '@/components/DonutChartComponent';
import HalfDoughnutChart from '@/components/HalfDoughnutChart';
import BarChart from '@/components/ReportBarChart';
import { Col, Row } from 'react-bootstrap';
async function InputForm() {
    const user = await currentUser()

    return (
        <div className="form-dashboard-page">
            <div className="container">
                <div className="form-dashboard-inner">
                    <div className="form-dashboard">
                        <div className="dashboard-inner">
                            <h1>Welcome to dashboard</h1>
                            <p> hi {(user?.firstName && user?.lastName) ? (user?.firstName + " " + user?.lastName) : "User"}!</p>
                        </div>
                    </div>
                </div>
                <Row>
                    <Col lg={6}>
                        <DonutChartComponent />
                    </Col>
                    <Col lg={6}>
                        <HalfDoughnutChart />
                    </Col>
                    <Col lg={6}>
                        <BarChart />
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default InputForm;

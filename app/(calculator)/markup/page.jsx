import React from 'react'
import InputComponent from '@/components/InputComponent'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div className="calulator-page">
      <Header />
      <div className="pricing-page-inner ">
        <div className="page-header">
          <div className="container">
            <h1>Calculator</h1>
          </div>
        </div>
        <div className="page-content">
            <InputComponent type="number" placeholder="Enter the value" icon="₹" label="Amount" />
            <InputComponent type="select" placeholder="Enter the value" icon="₹" label="Amount" options={[{label: "Monthly", value: "monthly"}, {label: "Yearly", value: "yearly"}]} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default page
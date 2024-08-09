'use client';
import React, { useEffect, useState } from 'react';
import { useRef } from 'react';

export default function CarriedInterestCalculator() {
  const [isCalculated, setIsCalculated] = useState(false);
  const [tax, setTax] = useState(0);
  const resultRef = useRef(null);

  const calculateTax = (event) => {
    event.preventDefault();

    const amount = parseFloat(event.target['carried_interestAmount'].value);
    const rate = parseFloat(event.target['carried_interestRate'].value);

    if (isNaN(amount) || isNaN(rate)) {
      alert('Please enter valid numbers for both fields.');
      return;
    }

    const calculatedTax = amount * (rate / 100);
    setTax(calculatedTax); 
    setIsCalculated(true); 
  };

  useEffect(() => {
    if (resultRef.current && isCalculated) {
      resultRef.current.textContent = `Estimated Carried Interest Tax: $${tax.toFixed(2)}`;
    }
  }, [tax, isCalculated]);
  return (
    <>
      <div
        style={{ height: '50px' }}
        aria-hidden="true"
        className="wp-block-spacer"
      ></div>
      <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-3 wp-block-columns-is-layout-flex">
        <div
          className="wp-block-column is-vertically-aligned-center has-background is-layout-flow wp-block-column-is-layout-flow"
          style={{ backgroundColor: '#fef9f0' }}
        >
          <div
            style={{ height: '50px' }}
            aria-hidden="true"
            className="wp-block-spacer"
          ></div>
          <div className="wp-block-columns are-vertically-aligned-center container is-layout-flex wp-container-core-columns-is-layout-2 wp-block-columns-is-layout-flex">
            <div className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow">
              <p className="has-luminous-vivid-amber-color has-text-color has-small-font-size">
                <strong>TOOLS AND SOLUTIONS</strong>
              </p>
              <h2 className="wp-block-heading">Carried Interest Calculator</h2>
            </div>
            <div className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow">
              <div className="wbx__tax-calculator is-carried_interest">
                <div
                  id="wbx__tax-calculator__results"
                  className="wbx__tax-calculator__results"
                >
                  <p
                    id="result_heading"
                    className="wbx__tax-calculator__results--heading"
                  ></p>
                  <div
                    id="result"
                    className="wbx__tax-calculator__results--amount"
                  ></div>
                </div>
                <div className="wbx__tax-calculator__form">
                  <form onSubmit={calculateTax}>
                    {isCalculated && (
                      <h4
                        style={{
                          backgroundColor: '#fff0d7',
                          border: '2px solid #f6bb1a',
                          padding: '1rem',
                          flexDirection: 'column'
                        }}
                        id="result_heading"
                        ref={resultRef}
                        className="wbx__tax-calculator__results--heading"
                      ></h4>
                    )}
                    <label htmlFor="carried_interestAmount">
                      Carry Amount:
                    </label>
                    <input
                      id="carried_interestAmount"
                      name="carried_interestAmount"
                      type="number"
                      placeholder="Enter carry amount"
                    />
                    <label htmlFor="carried_interestRate">Tax Rate (%):</label>
                    <input
                      id="carried_interestRate"
                      name="carried_interestRate"
                      type="number"
                      placeholder="Enter tax rate"
                    />
                    <button
                      id="calculateButton--carried"
                      type="submit"
                      className="wbx__tax-calculator__form__button"
                    >
                      Calculate Tax
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ height: '50px' }}
            aria-hidden="true"
            className="wp-block-spacer"
          ></div>
        </div>
      </div>
    </>
  );
}

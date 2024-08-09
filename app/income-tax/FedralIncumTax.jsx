'use client';

import React, { useRef, useState } from 'react';
export default function FedralIncumTax() {
  const [isCalculated, setIsCalculated] = useState(false);

  const resultRef = useRef(null);
  const calculateTax = (event) => {
    event.preventDefault();

    const grossIncome = event.target.grossIncome.value;

    if (!grossIncome) {
      alert('Please enter a valid gross income.');
      return;
    }

    const income = parseFloat(grossIncome);
    let tax = 0;

    // Example federal tax brackets (adjust according to real brackets)
    if (income <= 9875) {
      tax = income * 0.1;
    } else if (income <= 40125) {
      tax = 987.5 + (income - 9875) * 0.12;
    } else if (income <= 85525) {
      tax = 4617.5 + (income - 40125) * 0.22;
    } else if (income <= 163300) {
      tax = 14605.5 + (income - 85525) * 0.24;
    } else if (income <= 207350) {
      tax = 33271.5 + (income - 163300) * 0.32;
    } else if (income <= 518400) {
      tax = 47367.5 + (income - 207350) * 0.35;
    } else {
      tax = 156235 + (income - 518400) * 0.37;
    }

    if (resultRef.current) {
      resultRef.current.textContent = `Estimated Federal Income Tax: $${tax.toFixed(2)}`;
    }
    setIsCalculated(true);
  };

  return (
    <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-6 wp-block-columns-is-layout-flex">
      <div
        className="wp-block-column is-vertically-aligned-center has-background is-layout-flow wp-block-column-is-layout-flow"
        style={{ backgroundColor: '#fef9f0' }}
      >
        <div
          style={{ height: 50 }}
          aria-hidden="true"
          className="wp-block-spacer"
        ></div>
        <div className="wp-block-columns are-vertically-aligned-center container is-layout-flex wp-container-core-columns-is-layout-5 wp-block-columns-is-layout-flex">
          <div className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow">
            <p className="has-luminous-vivid-amber-color has-text-color has-small-font-size">
              <strong>TOOLS AND SOLUTIONS</strong>
            </p>
            <h2 className="wp-block-heading">Federal Income Tax Calculator</h2>
          </div>
          <div className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow">
            <div className="wbx__tax-calculator is-income_tax">
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
                {' '}
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
                <label for="grossIncome">Enter your taxable income:</label>{' '}
                <form onSubmit={calculateTax}>
                  <input
                    id="grossIncome"
                    name="grossIncome"
                    type="number"
                    placeholder="Enter gross income"
                  />
                  <button
                    id="calculateButton"
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
          style={{ height: 50 }}
          aria-hidden="true"
          className="wp-block-spacer"
        ></div>
      </div>
    </div>
  );
}

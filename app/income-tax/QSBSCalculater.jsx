'use client';

import React, { useEffect, useRef, useState } from 'react';
export default function QSBSCalculater() {
  const [isCalculated, setIsCalculated] = useState(false);
  const [tax, setTax] = useState(0);
  const resultRef = useRef(null);

  const calculateTax = (event) => {
    event.preventDefault();

    const purchasePrice = parseFloat(event.target.purchasePrice.value);
    const salePrice = parseFloat(event.target.salePrice.value);

    if (isNaN(purchasePrice) || isNaN(salePrice)) {
      alert('Please enter valid numbers for all fields.');
      return;
    }

    const gain = salePrice - purchasePrice;
    let calculatedTax = 0;

    // Correct tax calculation based on gain
    if (gain <= purchasePrice * 10) {
      calculatedTax = gain * 0.15; // Assuming a 15% tax rate
    } else {
      calculatedTax = gain * 0.28; // Assuming a 28% tax rate for gains exceeding 10x the investment
    }

    setTax(calculatedTax);
    setIsCalculated(true);
  };

  useEffect(() => {
    if (resultRef.current && isCalculated) {
      resultRef.current.textContent = `Estimated Capital Gains Tax: $${tax.toFixed(2)}`;
    }
  }, [tax, isCalculated]);

  return (
    <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-5 wp-block-columns-is-layout-flex">
      <div
        className="wp-block-column is-vertically-aligned-center has-background is-layout-flow wp-block-column-is-layout-flow"
        style={{ backgroundColor: '#fef9f0' }}
      >
        <div
          style={{ height: '50px' }}
          aria-hidden="true"
          className="wp-block-spacer"
        ></div>
        <div className="wp-block-columns are-vertically-aligned-center container is-layout-flex wp-container-core-columns-is-layout-4 wp-block-columns-is-layout-flex">
          <div className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow">
            <p className="has-luminous-vivid-amber-color has-text-color has-small-font-size">
              <strong>TOOLS AND SOLUTIONS</strong>
            </p>
            <h2 className="wp-block-heading">
              Qualified Small Business Stock Calculator
            </h2>
          </div>
          <div className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow">
            <div className="wbx__tax-calculator is-qsbs">
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
                  >
                    {/* Result will be shown here */}
                  </h4>
                )}
                <label htmlFor="purchasePrice">Enter the purchase price:</label>
                <form onSubmit={calculateTax}>
                  <input
                    id="purchasePrice"
                    name="purchasePrice"
                    type="number"
                    placeholder="Enter purchase price"
                  />
                  <label htmlFor="salePrice">Enter the sale price:</label>
                  <input
                    id="salePrice"
                    name="salePrice"
                    type="number"
                    placeholder="Enter sale price"
                  />
                  <button
                    id="calculateButton--qsbs"
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
  );
}

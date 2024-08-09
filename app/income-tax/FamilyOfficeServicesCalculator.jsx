'use client';
import React, { useState } from 'react';
import { useRef } from 'react';

export default function FamilyOfficeServicesCalculator() {
  const [isCalculated, setIsCalculated] = useState(false);
  const resultRef = useRef(null);

  const calculateTax = (event) => {
    event.preventDefault();

    const familyAssets = parseFloat(event.target.familyAssets.value);

    if (isNaN(familyAssets) || familyAssets <= 0) {
      alert('Please enter a valid asset value.');
      return;
    }

    let tax = 0;

    // Example tax calculation based on "Family Office Services Calculator"
    if (familyAssets <= 100000) {
      tax = familyAssets * 0.05;
    } else if (familyAssets <= 500000) {
      tax = 5000 + (familyAssets - 100000) * 0.1;
    } else {
      tax = 45000 + (familyAssets - 500000) * 0.15;
    }

    if (resultRef.current) {
      resultRef.current.textContent = `Estimated Family Office Services Tax: $${tax.toFixed(2)}`;
    }
    setIsCalculated(true);
  };

  return (
    <>
      <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-4 wp-block-columns-is-layout-flex">
        <div
          className="wp-block-column is-vertically-aligned-center has-background is-layout-flow wp-block-column-is-layout-flow"
          style={{ backgroundColor: '#fef9f0' }}
        >
          <div
            style={{ height: '50px' }}
            aria-hidden="true"
            className="wp-block-spacer"
          ></div>
          <div className="wp-block-columns are-vertically-aligned-center container is-layout-flex wp-container-core-columns-is-layout-3 wp-block-columns-is-layout-flex">
            <div className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow">
              <p className="has-luminous-vivid-amber-color has-text-color has-small-font-size">
                <strong>TOOLS AND SOLUTIONS</strong>
              </p>
              <h2 className="wp-block-heading">
                Family Office Services Calculator
              </h2>
              <p>Calculate if You Need Family Office Services</p>
            </div>
            <div className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow">
              <div className="wbx__tax-calculator is-family_office">
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
                    <label htmlFor="familyAssets">Total Value of Assets:</label>
                    <input
                      id="familyAssets"
                      name="familyAssets"
                      type="number"
                      placeholder="Enter assets value"
                    />
                    <button
                      id="calculateButton--family"
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

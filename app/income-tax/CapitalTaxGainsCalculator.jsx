'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function CapitalTaxGainsCalculator() {
  const [isCalculated, setIsCalculated] = useState(false);
  const [tax, setTax] = useState(0);
  const resultRef = useRef(null);

  const calculateTax = (event) => {
    event.preventDefault();
    const purchasePrice = parseFloat(event.target.purchasePrice.value);
    const salePrice = parseFloat(event.target.salePrice.value);
    const yearsHeld = parseInt(event.target.yearsHeld.value, 10);

    if (isNaN(purchasePrice) || isNaN(salePrice) || isNaN(yearsHeld)) {
      alert('Please enter valid numbers for all fields.');
      return;
    }

    const gain = salePrice - purchasePrice;
    let calculatedTax = 0;

    if (yearsHeld < 1) {
      calculatedTax = gain * 0.3;
    } else if (yearsHeld < 5) {
      calculatedTax = gain * 0.15;
    } else {
      calculatedTax = gain * 0.1;
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
    <>
      <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-2 wp-block-columns-is-layout-flex">
        <div
          className="wp-block-column is-vertically-aligned-center has-background is-layout-flow wp-block-column-is-layout-flow"
          style={{ backgroundColor: '#fef9f0' }}
        >
          <div
            style={{ height: '50px' }}
            aria-hidden="true"
            className="wp-block-spacer"
          ></div>
          <div className="wp-block-columns are-vertically-aligned-center container is-layout-flex wp-container-core-columns-is-layout-1 wp-block-columns-is-layout-flex">
            <div className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow">
              <p className="has-luminous-vivid-amber-color has-text-color has-small-font-size">
                <strong>TOOLS AND SOLUTIONS</strong>
              </p>
              <h2 className="wp-block-heading">Capital Tax Gains Calculator</h2>
            </div>
            <div className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow">
              <div className="wbx__tax-calculator is-capital_gains_tax">
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
                    <div className="row d-flex">
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
                      <div className="col-12 col-lg-4">
                        <label htmlFor="capital_gainsTax--purchase">
                          Purchase Price:
                        </label>
                        <input
                          id="purchasePrice"
                          name="purchasePrice"
                          type="number"
                          placeholder="Enter purchase price"
                          step="0.01"
                        />
                      </div>
                      <div className="col-12 col-lg-4">
                        <label htmlFor="capital_gainsTax--sale">
                          Sale Price:
                        </label>
                        <input
                          id="salePrice"
                          name="salePrice"
                          type="number"
                          placeholder="Enter sale price"
                          step="0.01"
                        />
                      </div>
                      <div className="col-12 col-lg-4">
                        <label htmlFor="capital_gainsTax--years">
                          Holding Period:
                        </label>
                        <input
                          id="yearsHeld"
                          name="yearsHeld"
                          type="number"
                          placeholder="Enter years held"
                        />
                      </div>
                      <button
                        id="calculateButton"
                        type="submit"
                        className="wbx__tax-calculator__form__button"
                      >
                        Calculate Tax
                      </button>
                    </div>
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

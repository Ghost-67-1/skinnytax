'use client';
import React, { useEffect, useRef, useState } from 'react';

export default function EstateTaxCalculator() {
  const [isCalculated, setIsCalculated] = useState(false);
  const [tax, setTax] = useState(0);
  const resultRef = useRef(null);

  const calculateTax = (event) => {
    event.preventDefault();

    const grossEstateValue = parseFloat(
      event.target['estate_tax--gross'].value
    );
    const debtAndExpenses = parseFloat(event.target['estate_tax--debt'].value);
    const maritalDeduction = parseFloat(
      event.target['estate_tax--marital'].value
    );

    if (
      isNaN(grossEstateValue) ||
      isNaN(debtAndExpenses) ||
      isNaN(maritalDeduction)
    ) {
      alert('Please enter valid numbers for all fields.');
      return;
    }

    const taxableEstate = grossEstateValue - debtAndExpenses - maritalDeduction;
    let calculatedTax = 0;

    // Example estate tax calculation (adjust according to real rules)
    if (taxableEstate > 0 && taxableEstate <= 500000) {
      calculatedTax = taxableEstate * 0.1;
    } else if (taxableEstate > 500000 && taxableEstate <= 2000000) {
      calculatedTax = 50000 + (taxableEstate - 500000) * 0.15;
    } else if (taxableEstate > 2000000) {
      calculatedTax = 275000 + (taxableEstate - 2000000) * 0.2;
    } else {
      calculatedTax = 0; // No tax if the taxable estate is zero or negative
    }

    setTax(calculatedTax); // Update tax state
    setIsCalculated(true); // Trigger the rendering of the result
  };

  useEffect(() => {
    if (resultRef.current && isCalculated) {
      resultRef.current.textContent = `Estimated Estate Tax: $${tax.toFixed(2)}`;
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
              <h2 className="wp-block-heading">Estate Tax Calculator</h2>
            </div>
            <div className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow">
              <div className="wbx__tax-calculator is-estate_text">
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
                    <div className="row d-flex">
                      <div className="col-12 col-lg-4">
                        <label htmlFor="estate_tax--gross">
                          Gross Estate Value:
                        </label>
                        <input
                          id="estate_tax--gross"
                          name="estate_tax--gross"
                          type="number"
                          placeholder="Enter gross estate value"
                        />
                      </div>
                      <div className="col-12 col-lg-4">
                        <label htmlFor="estate_tax--debt">
                          Debt and Expenses:
                        </label>
                        <input
                          id="estate_tax--debt"
                          name="estate_tax--debt"
                          type="number"
                          placeholder="Enter debt and expenses"
                        />
                      </div>
                      <div className="col-12 col-lg-4">
                        <label htmlFor="estate_tax--marital">
                          Marital Deduction:
                        </label>
                        <input
                          id="estate_tax--marital"
                          name="estate_tax--marital"
                          type="number"
                          placeholder="Enter marital deduction"
                        />
                      </div>
                    </div>
                    <button
                      id="calculateButton--estate_tax"
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

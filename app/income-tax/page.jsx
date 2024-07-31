import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

import incomeTaxIcon from '../../assets/images/income-tex-planning.webp';
import incomeTaxPlanImg from '../../assets/images/income-tax-plan-img.webp';
import maximizeDeductionImg from '../../assets/images/maximize-deduction.webp';

import taxAdvantageImg from '../../assets/images/tax-advantage-img.webp';
import bookOnlineBgImg from '../../assets/images/book-online-bg-img.webp';

export default function IncomeTaxPlanning() {
  return (
    <>
      <div className="income-tax-planning-page">
        <Header />
        <div className="income-tax-page-inner">
          <div className="page-header has-icon">
            <div className="container">
              <h1>Income Tax Planning</h1>
            </div>
            <div className="page-header__media">
              <figure>
                {' '}
                <Image
                  src={incomeTaxIcon}
                  data-src="https://skinny.tax/wp-content/uploads/2023/08/icon1.webp"
                  alt="Income tax planning strategies"
                  className="object__fit--contain lazy"
                  data-srcset
                  width="90"
                  height="98"
                />
              </figure>
            </div>
          </div>
          <div className="page-content">
            <div className="kb-row-layout-wrap kb-row-layout-id232_0820c6-3f alignnone wp-block-kadence-rowlayout">
              <div className="kt-row-column-wrap kt-has-2-columns kt-row-layout-equal kt-tab-layout-inherit kt-mobile-layout-row kt-row-valign-middle">
                <div className="wp-block-kadence-column kadence-column232_8d1680-ca">
                  <div className="kt-inside-inner-col">
                    <figure className="wp-block-image size-full">
                      <Image
                        fetchPriority="high"
                        decoding="async"
                        width="893"
                        height="738"
                        src={incomeTaxPlanImg}
                        alt="Income tax planning"
                        className="wp-image-282 lazy"
                      />
                    </figure>
                  </div>
                </div>
                <div className="wp-block-kadence-column kadence-column232_5e0fdf-38">
                  <div className="kt-inside-inner-col">
                    <p
                      className="kt-adv-heading232_897af4-3c wp-block-kadence-advancedheading has-kb-palette-6-color has-text-color"
                      data-kb-block="kb-adv-heading232_897af4-3c"
                    >
                      <strong>SOLUTIONS</strong>
                    </p>
                    <h2
                      className="kt-adv-heading232_30d94e-0f wp-block-kadence-advancedheading"
                      data-kb-block="kb-adv-heading232_30d94e-0f"
                    >
                      What is Income Tax Planning?
                    </h2>
                    <p
                      className="kt-adv-heading232_50347b-06 wp-block-kadence-advancedheading"
                      data-kb-block="kb-adv-heading232_50347b-06"
                    >
                      Another way to reduce your income tax liability is to
                      invest in tax-advantaged accounts, such as individual
                      retirement accounts (IRAs) and 401(k)s. These accounts
                      allow you to defer taxes on your investment gains until
                      you withdraw the money in retirement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="wp-block-columns are-vertically-aligned-bottom pb-0 is-style-arrow-decoration has-background is-layout-flex wp-container-core-columns-is-layout-1 wp-block-columns-is-layout-flex"
              style={{ backgroundColor: '#fef9ef' }}
            >
              <div className="wp-block-column is-vertically-aligned-bottom is-layout-flow wp-block-column-is-layout-flow">
                <h2 className="wp-block-heading has-text-align-center">
                  Maximizing Deductions
                </h2>
                <p className="has-text-align-center">
                  One of the most effective ways to reduce your income tax
                  liability is to maximize your deductions.
                </p>
                <p className="has-text-align-center">
                  By itemizing your deductions, you can lower your taxable
                  income and reduce your tax bill.
                </p>
                <div className="wp-block-image">
                  <figure className="aligncenter size-full">
                    <a href="https://skinnytax.cliogrow.com/book/540c3f09ebee0d74c9dcbfc175050b33">
                      <Image
                        decoding="async"
                        width="932"
                        height="526"
                        src={maximizeDeductionImg}
                        className="wp-image-287 lazy"
                        data-srcset="https://skinny.tax/wp-content/uploads/2023/08/computer_image.webp 932w, https://skinny.tax/wp-content/uploads/2023/08/computer_image-300x169.webp 300w, https://skinny.tax/wp-content/uploads/2023/08/computer_image-768x433.webp 768w, https://skinny.tax/wp-content/uploads/2023/08/computer_image-600x339.webp 600w"
                      />
                    </a>
                  </figure>
                </div>
              </div>
            </div>

            <div className="wp-block-columns are-vertically-aligned-center is-layout-flex wp-container-core-columns-is-layout-4 wp-block-columns-is-layout-flex">
              <div className="wp-block-column is-vertically-aligned-center container is-layout-flow wp-block-column-is-layout-flow">
                <div className="wp-block-columns are-vertically-aligned-center is-layout-flex wp-container-core-columns-is-layout-2 wp-block-columns-is-layout-flex">
                  <div
                    className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow"
                    style={{ flexBasis: '25%' }}
                  >
                    {' '}
                  </div>
                  <div
                    className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow"
                    style={{ flexBasis: '50% ' }}
                  >
                    <figure className="wp-block-image size-full">
                      <Image
                        width="738"
                        height="560"
                        src={taxAdvantageImg}
                        alt="das"
                        className="wp-image-272 lazy"
                      />
                    </figure>
                  </div>
                  <div
                    className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow"
                    style={{ flexBasis: '25%' }}
                  ></div>
                </div>
              </div>
              <div className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow">
                <div className="wp-block-columns are-vertically-aligned-center is-layout-flex wp-container-core-columns-is-layout-3 wp-block-columns-is-layout-flex">
                  <div
                    className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow"
                    style={{ flexBasis: '70%' }}
                  >
                    <h2 className="wp-block-heading">
                      Tax-Advantaged Investment Accounts
                    </h2>
                    <p>
                      Another way to reduce your income tax liability is to
                      invest in tax-advantaged accounts, such as individual
                      retirement accounts (IRAs) and 401(k)s. These accounts
                      allow you to defer taxes on your investment gains until
                      you withdraw the money in retirement.
                    </p>
                  </div>
                  <div className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow">
                    {' '}
                  </div>
                </div>
              </div>
            </div>

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
                    <h2 className="wp-block-heading">
                      Federal Income Tax Calculator
                    </h2>
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
                        <label for="grossIncome">
                          Enter your taxable income:
                        </label>{' '}
                        <input id="grossIncome" type="number" />
                        <button
                          id="calculateButton"
                          className="wbx__tax-calculator__form__button"
                        >
                          Calculate Tax
                        </button>
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

            <div className="book-online-section">
              <div className="wbx__cta is-multiline">
                <div className="wbx__cta__media">
                  <figure className="wbx__cta__media--image">
                    <Image
                      decoding="async"
                      src={bookOnlineBgImg}
                      alt="Tax Planning"
                      className="object__fit--contain lazy"
                      srcSet="https://skinny.tax/wp-content/uploads/2023/08/bg_cta.webp 1920w, https://skinny.tax/wp-content/uploads/2023/08/bg_cta-300x50.webp 300w, https://skinny.tax/wp-content/uploads/2023/08/bg_cta-1024x170.webp 1024w, https://skinny.tax/wp-content/uploads/2023/08/bg_cta-768x127.webp 768w, https://skinny.tax/wp-content/uploads/2023/08/bg_cta-1536x254.webp 1536w, https://skinny.tax/wp-content/uploads/2023/08/bg_cta-600x99.webp 600w"
                      width={1920}
                      height={318}
                    />
                  </figure>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-10">
                      <div className="wbx__cta__content">
                        <h4 className="wbx__cta__content__title">
                          Whats Next?
                        </h4>
                        <div className="wbx__cta__content__content">
                          <p>
                            Tax planning is an important aspect of personal
                            finance, and there are many strategies you can use
                            to reduce your tax liability.
                            <br />{' '}
                            <a href="../../contact-us/index.html">
                              Call us today
                            </a>{' '}
                            for a consultation with our tax experts!
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 d-flex justify-content-center mt-4 mt-lg-0">
                      <div className="wbx__cta__cta">
                        <div className="wp-block-buttons is-layout-flex wp-container-3">
                          <div className="wp-block-button">
                            <a
                              href="https://skinnytax.cliogrow.com/book/540c3f09ebee0d74c9dcbfc175050b33"
                              className="wp-block-button__link wp-element-button"
                              target="_blank"
                              rel="noreferrer noopener"
                            >
                              Book now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

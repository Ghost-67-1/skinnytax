import React from "react";

import Image from 'next/image';
import Link from 'next/link';

import Footer from "@/components/Footer";
import Header from "@/components/Header";

import carriedInterestIcon from '../../assets/images/carried-interest.webp'
import incomeTaxPlanImg from '../../assets/images/income-tax-plan-img.webp'
import maximizeDeductionImg from '../../assets/images/maximize-deduction.webp'

import taxAdvantageImg from '../../assets/images/tax-advantage-img.webp'
import bookOnlineBgImg from '../../assets/images/book-online-bg-img.webp'
import carriedInterestmg from '../../assets/images/carried-interest-img.webp'

export default function CarriedInterest() {
    return (
        <>
            <div className="capital-tax-gains-page carried-interest-page">
                <Header />
                <div className="capital-tax-gains-page-inner">
                    <div className="page-header has-icon">
                        <div className='container'>
                            <h1>Capital Tax Gains</h1>
                        </div>
                        <div className='page-header__media'>
                            <figure> <Image
                                src={carriedInterestIcon}
                                data-src='https://skinny.tax/wp-content/uploads/2023/08/icon1.webp'
                                alt="Income tax planning strategies" className="object__fit--contain lazy" data-srcset width='90'
                                height='98' /></figure>
                        </div>
                    </div>
                    <div className="page-content">
                        <div>
                            <div
                                className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-1 wp-block-columns-is-layout-flex"
                            >
                                <div
                                    className="wp-block-column is-layout-flow wp-block-column-is-layout-flow"
                                    style={{ flexBasis: '25%' }}
                                ></div>
                                <div
                                    className="wp-block-column is-layout-flow wp-block-column-is-layout-flow"
                                    style={{ flexBasis: '50%' }}
                                >
                                    <p className="has-text-align-center has-luminous-vivid-amber-color has-text-color has-small-font-size">
                                        <strong>SOLUTIONS</strong>
                                    </p>
                                    <h2 className="wp-block-heading has-text-align-center">
                                        Tax Planning Strategies to Avoid Carry Tax
                                    </h2>
                                    <p className="has-text-align-center">
                                        If you’re looking to minimize your taxes and avoid carrying them over to the next year, there are several strategies you can use. Here are some tips:
                                    </p>
                                </div>
                                <div
                                    className="wp-block-column is-layout-flow wp-block-column-is-layout-flow"
                                    style={{ flexBasis: '25%' }}
                                ></div>
                            </div>

                            <div className="kb-row-layout-wrap kb-row-layout-id244_0df7d1-f0 alignnone wp-block-kadence-rowlayout">
                                <div className="kt-row-column-wrap kt-has-2-columns kt-row-layout-equal kt-tab-layout-inherit kt-mobile-layout-row kt-row-valign-top">
                                    <div className="wp-block-kadence-column kadence-column244_b1c84c-c7">
                                        <div className="kt-inside-inner-col">
                                            <figure className="wp-block-image size-full">
                                                <Image
                                                    fetchPriority="high"
                                                    decoding="async"
                                                    width="661"
                                                    height="830"
                                                    src={carriedInterestmg}
                                                    data-src="https://skinny.tax/wp-content/uploads/2023/08/img_last.png"
                                                    alt="Carried Interest"
                                                    className="wp-image-388 lazy"
                                                    data-srcSet="https://skinny.tax/wp-content/uploads/2023/08/img_last.png 661w, https://skinny.tax/wp-content/uploads/2023/08/img_last-239x300.png 239w, https://skinny.tax/wp-content/uploads/2023/08/img_last-600x753.png 600w"
                                                    data-sizes="(max-width: 661px) 100vw, 661px"
                                                />
                                            </figure>
                                        </div>
                                    </div>
                                    <div className="wp-block-kadence-column kadence-column244_f78326-7b">
                                        <div className="kt-inside-inner-col">
                                            <div className="wp-block-kadence-column kadence-column244_a74554-d4">
                                                <div className="kt-inside-inner-col"></div>
                                            </div>
                                            <div className="wp-block-kadence-iconlist kt-svg-icon-list-items kt-svg-icon-list-items244_0e2891-86 kt-svg-icon-list-columns-1 alignnone kt-list-icon-aligntop">
                                                <ul className="kt-svg-icon-list">
                                                    <li className="wp-block-kadence-listitem kt-svg-icon-list-item-wrap kt-svg-icon-list-item-244_23d367-3e">
                                                        <span className="kb-svg-icon-wrap kb-svg-icon-fe_chevronRight kt-svg-icon-list-single">
                                                            <svg
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                aria-hidden="true"
                                                            >
                                                                <polyline points="9 18 15 12 9 6" />
                                                            </svg>
                                                        </span>
                                                        <span className="kt-svg-icon-list-text">
                                                            <strong>1. Contribute to Retirement Accounts</strong><br />
                                                            Contributing to retirement accounts like 401(k)s and IRAs can help reduce your taxable income. This can help you avoid carrying over taxes to the next year.
                                                        </span>
                                                    </li>
                                                    <li className="wp-block-kadence-listitem kt-svg-icon-list-item-wrap kt-svg-icon-list-item-244_18bb8e-d8">
                                                        <span className="kb-svg-icon-wrap kb-svg-icon-fe_chevronRight kt-svg-icon-list-single">
                                                            <svg
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                aria-hidden="true"
                                                            >
                                                                <polyline points="9 18 15 12 9 6" />
                                                            </svg>
                                                        </span>
                                                        <span className="kt-svg-icon-list-text">
                                                            <strong>2. Take Advantage of Tax Credits and Deductions</strong><br />
                                                            Make sure you’re taking advantage of all the tax credits and deductions available to you. This can include things like the Earned Income Tax Credit, the Child Tax Credit, and deductions for things like charitable donations and mortgage interest.
                                                        </span>
                                                    </li>
                                                    <li className="wp-block-kadence-listitem kt-svg-icon-list-item-wrap kt-svg-icon-list-item-244_dae2db-f0">
                                                        <span className="kb-svg-icon-wrap kb-svg-icon-fe_chevronRight kt-svg-icon-list-single">
                                                            <svg
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                aria-hidden="true"
                                                            >
                                                                <polyline points="9 18 15 12 9 6" />
                                                            </svg>
                                                        </span>
                                                        <span className="kt-svg-icon-list-text">
                                                            <strong>3. Maximize Your Business Expenses</strong><br />
                                                            If you’re a business owner, make sure you’re maximizing your business expenses. This can include things like office supplies, travel expenses, and equipment purchases. By reducing your taxable income, you can avoid carrying over taxes to the next year.
                                                        </span>
                                                    </li>
                                                    <li className="wp-block-kadence-listitem kt-svg-icon-list-item-wrap kt-svg-icon-list-item-244_f24aa2-36">
                                                        <span className="kb-svg-icon-wrap kb-svg-icon-fe_chevronRight kt-svg-icon-list-single">
                                                            <svg
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                aria-hidden="true"
                                                            >
                                                                <polyline points="9 18 15 12 9 6" />
                                                            </svg>
                                                        </span>
                                                        <span className="kt-svg-icon-list-text">
                                                            <strong>4. Consider Tax-Loss Harvesting</strong><br />
                                                            If you have investments that have lost value, you can consider selling them to offset any gains you may have realized during the year. This can help you reduce your taxable income and avoid carrying over taxes to the next year.
                                                        </span>
                                                    </li>
                                                    <li className="wp-block-kadence-listitem kt-svg-icon-list-item-wrap kt-svg-icon-list-item-244_019a26-ab">
                                                        <span className="kb-svg-icon-wrap kb-svg-icon-fe_chevronRight kt-svg-icon-list-single">
                                                            <svg
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                aria-hidden="true"
                                                            >
                                                                <polyline points="9 18 15 12 9 6" />
                                                            </svg>
                                                        </span>
                                                        <span className="kt-svg-icon-list-text">
                                                            <strong>5. Plan Your Charitable Giving</strong><br />
                                                            If you plan to make charitable donations, consider doing so at the end of the year. This can help you maximize your deductions and reduce your taxable income.
                                                        </span>
                                                    </li>
                                                    <li className="wp-block-kadence-listitem kt-svg-icon-list-item-wrap kt-svg-icon-list-item-244_e67df3-65">
                                                        <span className="kb-svg-icon-wrap kb-svg-icon-fe_chevronRight kt-svg-icon-list-single">
                                                            <svg
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                aria-hidden="true"
                                                            >
                                                                <polyline points="9 18 15 12 9 6" />
                                                            </svg>
                                                        </span>
                                                        <span className="kt-svg-icon-list-text">
                                                            <strong>6. Contact Us</strong><br />
                                                            If you’re unsure about how to best minimize your taxes and avoid carrying them over to the next year, contact us today. We can provide personalized advice and help you make the most of your tax situation.
                                                        </span>
                                                    </li>
                                                    <li className="wp-block-kadence-listitem kt-svg-icon-list-item-wrap kt-svg-icon-list-item-244_83bc8c-8d">
                                                        <span className="kb-svg-icon-wrap kb-svg-icon-fe_chevronRight kt-svg-icon-list-single">
                                                            <svg
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                aria-hidden="true"
                                                            >
                                                                <polyline points="9 18 15 12 9 6" />
                                                            </svg>
                                                        </span>
                                                        <span className="kt-svg-icon-list-text">
                                                            <strong>7. Conclusion</strong><br />
                                                            By following these tax planning strategies, you can reduce your tax bill and avoid carrying taxes over to the next year.
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div>
                            <div style={{ height: '50px' }} aria-hidden="true" className="wp-block-spacer"></div>
                            <div
                                className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-3 wp-block-columns-is-layout-flex"
                            >
                                <div
                                    className="wp-block-column is-vertically-aligned-center has-background is-layout-flow wp-block-column-is-layout-flow"
                                    style={{ backgroundColor: '#fef9f0' }}
                                >
                                    <div style={{ height: '50px' }} aria-hidden="true" className="wp-block-spacer"></div>
                                    <div
                                        className="wp-block-columns are-vertically-aligned-center container is-layout-flex wp-container-core-columns-is-layout-2 wp-block-columns-is-layout-flex"
                                    >
                                        <div
                                            className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow"
                                        >
                                            <p className="has-luminous-vivid-amber-color has-text-color has-small-font-size">
                                                <strong>TOOLS AND SOLUTIONS</strong>
                                            </p>
                                            <h2 className="wp-block-heading">Carried Interest Calculator</h2>
                                        </div>
                                        <div
                                            className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow"
                                        >
                                            <div className="wbx__tax-calculator is-carried_interest">
                                                <div id="wbx__tax-calculator__results" className="wbx__tax-calculator__results">
                                                    <p id="result_heading" className="wbx__tax-calculator__results--heading"></p>
                                                    <div id="result" className="wbx__tax-calculator__results--amount"></div>
                                                </div>
                                                <div className="wbx__tax-calculator__form">
                                                    <label htmlFor="carried_interestAmount">Carry Amount:</label>
                                                    <input id="carried_interestAmount" type="number" />
                                                    <label htmlFor="carried_interestRate">Tax Rate (%):</label>
                                                    <input id="carried_interestRate" type="number" />
                                                    <button id="calculateButton--carried" className="wbx__tax-calculator__form__button">
                                                        Calculate Tax
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ height: '50px' }} aria-hidden="true" className="wp-block-spacer"></div>
                                </div>
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
                                            <div className='wbx__cta__content'>
                                                <h4 className="wbx__cta__content__title">Whats Next?</h4>
                                                <div className='wbx__cta__content__content'>
                                                    <p>Tax planning is an important aspect of personal finance, and there are many
                                                        strategies you can use to reduce your tax liability.<br /> <a
                                                            href='../../contact-us/index.html'>Call us today</a> for a consultation with our
                                                        tax experts!</p>
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

    )
}
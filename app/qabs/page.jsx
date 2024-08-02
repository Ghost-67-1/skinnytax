import React from "react";

import Image from 'next/image';
import Link from 'next/link';

import Footer from "@/components/Footer";
import Header from "@/components/Header";

import capitalGainTexIcon from '../../assets/images/capital-gain-tex.webp'
import incomeTaxPlanImg from '../../assets/images/income-tax-plan-img.webp'
import maximizeDeductionImg from '../../assets/images/maximize-deduction.webp'
import qsbsImg from '../../assets/images/qsbs-icon.webp'

import taxAdvantageImg from '../../assets/images/tax-advantage-img.webp'
import bookOnlineBgImg from '../../assets/images/book-online-bg-img.webp'
import capitalGainTxxImg from '../../assets/images/capital-gain-tex-img.webp'

export default function QsbsPage() {
    return (
        <>
            <div className="qsbs-page">
                <Header />
                <div className="qsbs-page-inner">
                    <div className="page-header has-icon">
                        <div className='container'>
                            <h1>QSBS</h1>
                        </div>
                        <div className='page-header__media'>
                            <figure> <Image
                                src={qsbsImg}
                                data-src='https://skinny.tax/wp-content/uploads/2023/08/icon1.webp'
                                alt="Income tax planning strategies" className="object__fit--contain lazy" data-srcset width='90'
                                height='98' /></figure>
                        </div>
                    </div>
                    <div className="page-content">


                        <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-1 wp-block-columns-is-layout-flex">
                            <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style={{ flexBasis: '25%' }}></div>
                            <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style={{ flexBasis: '50%' }}>
                                <p className="has-text-align-center has-luminous-vivid-amber-color has-text-color has-small-font-size">
                                    <strong>SOLUTIONS</strong>
                                </p>
                                <h2 className="wp-block-heading has-text-align-center">Introduction</h2>
                                <p className="has-text-align-center">
                                    Qualified Small Business Stock (QSBS) refers to stock in a qualified small business that has met certain requirements set forth by the Internal Revenue Service (IRS).
                                </p>
                            </div>
                            <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style={{ flexBasis: '25%' }}></div>
                        </div>
                        <div style={{ height: '50px' }} aria-hidden="true" className="wp-block-spacer"></div>
                        <div className="wp-block-columns are-vertically-aligned-top is-layout-flex wp-container-core-columns-is-layout-3 wp-block-columns-is-layout-flex">
                            <div className="wp-block-column is-vertically-aligned-top is-layout-flow wp-block-column-is-layout-flow">
                                <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-2 wp-block-columns-is-layout-flex">
                                    <div
                                        className="wp-block-column is-vertically-aligned-top is-layout-flow wp-block-column-is-layout-flow"
                                        style={{ flexBasis: '5%' }}
                                    ></div>
                                    <div
                                        className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow"
                                        style={{ flexBasis: '30%' }}
                                    >
                                        <h6 className="wp-block-heading">Eligibility</h6>
                                        <hr
                                            className="wp-block-separator has-text-color has-luminous-vivid-amber-color has-alpha-channel-opacity has-luminous-vivid-amber-background-color has-background is-small-separator is-thick-separator"
                                        />
                                        <p>To be considered QSBS, the following criteria must be met:</p>
                                        <ul className="wp-block-list">
                                            <li>The stock must be issued by a domestic C corporation.</li>
                                            <li>The corporation must have less than $50 million in assets.</li>
                                            <li>
                                                The stock must be acquired by the taxpayer at original issuance, either directly or through an underwriter.
                                            </li>
                                            <li>
                                                The corporation must use at least 80% of its assets in the active conduct of one or more qualified trades or businesses.
                                            </li>
                                        </ul>
                                    </div>
                                    <div
                                        className="wp-block-column is-vertically-aligned-top is-layout-flow wp-block-column-is-layout-flow"
                                        style={{ flexBasis: '30%' }}
                                    >
                                        <h6 className="wp-block-heading">Tax Benefits</h6>
                                        <hr
                                            className="wp-block-separator has-text-color has-luminous-vivid-amber-color has-alpha-channel-opacity has-luminous-vivid-amber-background-color has-background is-small-separator is-thick-separator"
                                        />
                                        <p>Holders of QSBS may be eligible for a number of tax benefits, including:</p>
                                        <ul className="wp-block-list">
                                            <li>
                                                Exclusion of 100% of the gain from the sale of QSBS, up to $10 million or 10 times the taxpayer&#8217;s basis in the stock, whichever is greater.
                                            </li>
                                            <li>
                                                The exclusion is available to both individuals and corporations, but there are some limitations for corporations.
                                            </li>
                                        </ul>
                                    </div>
                                    <div
                                        className="wp-block-column is-vertically-aligned-top is-layout-flow wp-block-column-is-layout-flow"
                                        style={{ flexBasis: '30%' }}
                                    >
                                        <h6 className="wp-block-heading">Limitations</h6>
                                        <hr
                                            className="wp-block-separator has-text-color has-luminous-vivid-amber-color has-alpha-channel-opacity has-luminous-vivid-amber-background-color has-background is-small-separator is-thick-separator"
                                        />
                                        <p>It&#8217;s important to note that there are some limitations and restrictions to QSBS, including:</p>
                                        <ul className="wp-block-list">
                                            <li>The exclusion is only available for stock held for more than five years.</li>
                                            <li>
                                                The exclusion may be limited for corporations, depending on the size and type of the corporation.
                                            </li>
                                            <li>
                                                QSBS must be designated as such by the corporation and the IRS before the exclusion can be claimed.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="wp-block-column is-vertically-aligned-top container is-layout-flow wp-block-column-is-layout-flow"
                                style={{ flexBasis: '5%' }}
                            ></div>
                        </div>
                        <div style={{ height: '50px' }} aria-hidden="true" className="wp-block-spacer"></div>


                        <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-5 wp-block-columns-is-layout-flex">
                            <div
                                className="wp-block-column is-vertically-aligned-center has-background is-layout-flow wp-block-column-is-layout-flow"
                                style={{ backgroundColor: '#fef9f0' }}
                            >
                                <div style={{ height: '50px' }} aria-hidden="true" className="wp-block-spacer"></div>
                                <div className="wp-block-columns are-vertically-aligned-center container is-layout-flex wp-container-core-columns-is-layout-4 wp-block-columns-is-layout-flex">
                                    <div className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow">
                                        <p className="has-luminous-vivid-amber-color has-text-color has-small-font-size">
                                            <strong>TOOLS AND SOLUTIONS</strong>
                                        </p>
                                        <h2 className="wp-block-heading">Qualified Small Business Stock Calculator</h2>
                                    </div>
                                    <div className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow">
                                        <div className="wbx__tax-calculator is-qsbs">
                                            <div id="wbx__tax-calculator__results" className="wbx__tax-calculator__results">
                                                <p id="result_heading" className="wbx__tax-calculator__results--heading"></p>
                                                <div id="result" className="wbx__tax-calculator__results--amount"></div>
                                            </div>
                                            <div className="wbx__tax-calculator__form">
                                                <label htmlFor="investmentAmount">Enter the amount of your investment:</label>
                                                <input id="investmentAmount" type="number" />
                                                <label htmlFor="investmentGain">Enter the amount of gain:</label>
                                                <input id="investmentGain" type="number" />
                                                <button id="calculateButton--qsbs" className="wbx__tax-calculator__form__button">
                                                    Calculate Tax
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ height: '50px' }} aria-hidden="true" className="wp-block-spacer"></div>
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
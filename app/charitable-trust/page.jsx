import React from "react";
import Image from 'next/image';
import Link from 'next/link';

import Footer from "@/components/Footer";
import Header from "@/components/Header";

import charitAbleTaxIcon from '../../assets/images/charitable-icon.webp'
import benefitsImg from '../../assets/images/benefits-img.png'
import bookOnlineBgImg from '../../assets/images/book-online-bg-img.webp'
import capitalGainTxxImg from '../../assets/images/capital-gain-tex-img.webp'

export default function CharitableTrustPage() {
    return (
        <div className="charitable-trust-page">
            <Header />
            <div className="charitable-trust-page-inner">
                <div className="page-header has-icon">
                    <div className='container'>
                        <h1>Charitable Trust</h1>
                    </div>
                    <div className='page-header__media'>
                        <figure> <Image
                            src={charitAbleTaxIcon}
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
                            <h2 className="wp-block-heading has-text-align-center">What is a Charitable Remainder Trust?</h2>
                            <p className="has-text-align-center">
                                A charitable remainder trust (CRT) is a type of trust that provides income to the trust’s beneficiaries for a specified term of years or for their lifetimes. Upon the termination of the trust, the remainder of the trust’s assets are distributed to one or more charitable organizations.
                            </p>
                        </div>
                        <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style={{ flexBasis: '25%' }}></div>
                    </div>
                    <div style={{ height: '50px' }} aria-hidden='true' class='wp-block-spacer'></div>

                    <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-4 wp-block-columns-is-layout-flex">
                        <div
                            className="wp-block-column center has-background is-layout-flow wp-block-column-is-layout-flow"
                            style={{ backgroundColor: '#fef9ef', flexBasis: '100%' }}
                        >
                            <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-3 wp-block-columns-is-layout-flex">
                                <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                                    <div style={{ height: '60px' }} aria-hidden="true" className="wp-block-spacer"></div>
                                    <h2 className="wp-block-heading has-text-align-center">How it Works</h2>
                                    <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-2 wp-block-columns-is-layout-flex">
                                        <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style={{ flexBasis: '5%' }}></div>
                                        <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                                            <div className="wbx__numbered-icon">
                                                <div className="wbx__numbered-icon__icon">
                                                    <span>1</span>
                                                </div>
                                            </div>
                                            <p className="has-text-align-center has-small-font-size">
                                                An individual transfers assets into the trust.
                                            </p>
                                        </div>
                                        <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                                            <div className="wbx__numbered-icon">
                                                <div className="wbx__numbered-icon__icon">
                                                    <span>2</span>
                                                </div>
                                            </div>
                                            <p className="has-text-align-center has-small-font-size">
                                                The trust sells the assets and invests the proceeds in a diversified portfolio.
                                            </p>
                                        </div>
                                        <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                                            <div className="wbx__numbered-icon">
                                                <div className="wbx__numbered-icon__icon">
                                                    <span>3</span>
                                                </div>
                                            </div>
                                            <p className="has-text-align-center has-small-font-size">
                                                The trust pays the beneficiaries an income stream, either for a specified term of years or for their lifetimes.
                                            </p>
                                        </div>
                                        <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                                            <div className="wbx__numbered-icon">
                                                <div className="wbx__numbered-icon__icon">
                                                    <span>4</span>
                                                </div>
                                            </div>
                                            <p className="has-text-align-center has-small-font-size">
                                                Upon the termination of the trust, the remaining assets are distributed to one or more charitable organizations.
                                            </p>
                                        </div>
                                        <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style={{ flexBasis: '5%' }}></div>
                                    </div>
                                    <div style={{ height: '60px' }} aria-hidden="true" className="wp-block-spacer"></div>
                                </div>
                            </div>
                            <div style={{ height: '40px' }} aria-hidden="true" className="wp-block-spacer"></div>
                        </div>
                    </div>

                    <div className="kb-row-layout-wrap kb-row-layout-id236_5e75c3-dd alignnone wp-block-kadence-rowlayout">
                        <div className="kt-row-column-wrap kt-has-2-columns kt-row-layout-equal kt-tab-layout-inherit kt-mobile-layout-row kt-row-valign-bottom">
                            <div className="wp-block-kadence-column kadence-column236_a7926b-d5">
                                <div className="kt-inside-inner-col">
                                    <div className="wp-block-image">
                                        <figure className="alignright size-full">
                                            <Image src={capitalGainTxxImg} alt="capitalGainTxxImg"   width="698" height="1001" />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div className="wp-block-kadence-column kadence-column236_aa5c62-f2">
                                <div className="kt-inside-inner-col">
                                    <h2 className="kt-adv-heading236_2d5bac-16 wp-block-kadence-advancedheading" data-kb-block="kb-adv-heading236_2d5bac-16">
                                        Benefits
                                    </h2>
                                    <div className="wp-block-kadence-iconlist kt-svg-icon-list-items kt-svg-icon-list-items236_b46302-2a kt-svg-icon-list-columns-1 alignnone">
                                        <ul className="kt-svg-icon-list product-list">
                                            <li className="wp-block-kadence-listitem kt-svg-icon-list-item-wrap kt-svg-icon-list-item-236_6c44a2-a8">
                                                <span className="kb-svg-icon-wrap kb-svg-icon-fe_chevronRight kt-svg-icon-list-single">
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                        <polyline points="9 18 15 12 9 6" />
                                                    </svg>
                                                </span>
                                                <span className="kt-svg-icon-list-text">Provides income to the beneficiaries for a specified term of years or for their lifetimes.</span>
                                            </li>
                                            <li className="wp-block-kadence-listitem kt-svg-icon-list-item-wrap kt-svg-icon-list-item-236_a72d0c-7c">
                                                <span className="kb-svg-icon-wrap kb-svg-icon-fe_chevronRight kt-svg-icon-list-single">
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                        <polyline points="9 18 15 12 9 6" />
                                                    </svg>
                                                </span>
                                                <span className="kt-svg-icon-list-text">Allows the individual to make a significant charitable gift and receive an income tax charitable deduction.</span>
                                            </li>
                                            <li className="wp-block-kadence-listitem kt-svg-icon-list-item-wrap kt-svg-icon-list-item-236_b048c9-02">
                                                <span className="kb-svg-icon-wrap kb-svg-icon-fe_chevronRight kt-svg-icon-list-single">
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                        <polyline points="9 18 15 12 9 6" />
                                                    </svg>
                                                </span>
                                                <span className="kt-svg-icon-list-text">Provides an opportunity for the individual to reduce estate taxes and minimize capital gains taxes.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-2 wp-block-columns-is-layout-flex">
                        <div className="wp-block-column is-vertically-aligned-center has-background is-layout-flow wp-block-column-is-layout-flow"
                            style={{ backgroundColor: '#fef9f0' }}>
                            <div style={{ height: '50px' }} aria-hidden='true' className='wp-block-spacer'></div>
                            <div
                                className="wp-block-columns are-vertically-aligned-center container is-layout-flex wp-container-core-columns-is-layout-1 wp-block-columns-is-layout-flex">
                                <div
                                    className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow">
                                    <p className="has-luminous-vivid-amber-color has-text-color has-small-font-size"><strong>TOOLS AND
                                        SOLUTIONS</strong></p>
                                    <h2 className="wp-block-heading">Capital Tax Gains Calculator</h2>
                                </div>
                                <div
                                    className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow">
                                    <div className="wbx__tax-calculator is-capital_gains_tax">
                                        <div id='wbx__tax-calculator__results' className='wbx__tax-calculator__results'>
                                            <p id='result_heading' className='wbx__tax-calculator__results--heading'></p>
                                            <div id='result' className='wbx__tax-calculator__results--amount'></div>
                                        </div>
                                        <div className='wbx__tax-calculator__form'>
                                            <div className="row d-flex">
                                                <div className="col-12 col-lg-4"> <label for='capital_gainsTax--purchase'>Purchase
                                                    Price:</label> <input id='capital_gainsTax--purchase' type='number' /></div>
                                                <div className="col-12 col-lg-4"> <label for='capital_gainsTax--sale'>Sale Price:</label>
                                                    <input id='capital_gainsTax--sale' type='number' /></div>
                                                <div className="col-12 col-lg-4"> <label for='capital_gainsTax--years'>Holding
                                                    Period:</label> <input id='capital_gainsTax--years' type='number' /></div>
                                            </div><button id='calculateButton--gains'
                                                className='wbx__tax-calculator__form__button'>Calculate Tax</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ height: '50px' }} aria-hidden='true' className='wp-block-spacer'></div>
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
    )
}
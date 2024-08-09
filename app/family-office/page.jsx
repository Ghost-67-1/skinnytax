import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

import familyOfficeIcon from '../../assets/images/family-office.webp';
import familyOfficeAboutusImg from '../../assets/images/family-office-about-us-img.webp';
import benefitsFamilyImg from '../../assets/images/benefits-of-family-office-img.webp';

import bookOnlineBgImg from '../../assets/images/book-online-bg-img.webp';
import FamilyOfficeServicesCalculator from '../income-tax/FamilyOfficeServicesCalculator.jsx';


export default function FamilyOffice() {
  return (
    <>
      <div className="family-office-page">
        <Header />
        <div className="family-office-page-inner">
          <div className="page-header has-icon">
            <div className="container">
              <h1>Family Office</h1>
            </div>
            <div className="page-header__media">
              <figure>
                {' '}
                <Image
                  src={familyOfficeIcon}
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
            <div className="kb-row-layout-wrap kb-row-layout-id240_f8be6b-cd alignnone wp-block-kadence-rowlayout">
              <div className="kt-row-column-wrap kt-has-2-columns kt-row-layout-equal kt-tab-layout-inherit kt-mobile-layout-row kt-row-valign-middle">
                <div className="wp-block-kadence-column kadence-column240_91368f-84">
                  <div className="kt-inside-inner-col">
                    <div className="wp-block-image">
                      <figure className="alignright size-full is-resized">
                        <Image
                          fetchpriority="high"
                          decoding="async"
                          width="642"
                          height="662"
                          src={familyOfficeAboutusImg}
                          alt="family office benefits"
                          className="wp-image-374 lazy"
                          style={{ width: '457px', height: 'auto' }}
                        />
                      </figure>
                    </div>
                  </div>
                </div>
                <div className="wp-block-kadence-column kadence-column240_8ca58e-63">
                  <div className="kt-inside-inner-col">
                    <p
                      className="kt-adv-heading240_0be32d-20 wp-block-kadence-advancedheading has-kb-palette-6-color has-text-color"
                      data-kb-block="kb-adv-heading240_0be32d-20"
                    >
                      <strong>SOLUTIONS</strong>
                    </p>
                    <h2
                      className="kt-adv-heading240_e35e22-3d wp-block-kadence-advancedheading"
                      data-kb-block="kb-adv-heading240_e35e22-3d"
                    >
                      About Us
                    </h2>
                    <p
                      className="kt-adv-heading240_44e39f-b0 wp-block-kadence-advancedheading"
                      data-kb-block="kb-adv-heading240_44e39f-b0"
                    >
                      We are a family office that provides a range of services
                      to help high-net-worth families manage their wealth and
                      achieve their financial goals. Our team of experts has
                      extensive experience in wealth management, investment
                      advisory, tax planning, estate planning, and more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="kb-row-layout-wrap kb-row-layout-id240_9243cc-45 alignnone kt-row-has-bg wp-block-kadence-rowlayout">
              <div className="kt-row-column-wrap kt-has-1-columns kt-row-layout-equal kt-tab-layout-inherit kt-mobile-layout-row kt-row-valign-top">
                <div className="wp-block-kadence-column kadence-column240_cf3cb6-69">
                  <div className="kt-inside-inner-col">
                    <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-1 wp-block-columns-is-layout-flex">
                      <div
                        className="wp-block-column is-layout-flow wp-block-column-is-layout-flow"
                        style={{ flexBasis: '100%' }}
                      >
                        <div className="kb-row-layout-wrap kb-row-layout-id240_01edb3-a7 alignnone wp-block-kadence-rowlayout">
                          <div className="kt-row-column-wrap kt-has-1-columns kt-row-layout-equal kt-tab-layout-inherit kt-mobile-layout-row kt-row-valign-top">
                            <div className="wp-block-kadence-column kadence-column240_33146b-68">
                              <div className="kt-inside-inner-col">
                                <h3 className="wp-block-heading">
                                  Our Services
                                </h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wp-block-kadence-column kadence-column240_e781e5-ff">
                  <div className="kt-inside-inner-col">
                    <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-2 wp-block-columns-is-layout-flex">
                      <div
                        className="wp-block-column is-layout-flow wp-block-column-is-layout-flow"
                        style={{ flexBasis: '100%' }}
                      >
                        <div className="kb-row-layout-wrap kb-row-layout-id240_c0f7c3-58 alignnone wp-block-kadence-rowlayout">
                          <div className="kt-row-column-wrap kt-has-2-columns kt-row-layout-equal kt-tab-layout-inherit kt-mobile-layout-row kt-row-valign-top">
                            <div className="wp-block-kadence-column kadence-column240_615f24-05">
                              <div className="kt-inside-inner-col">
                                <div className="wp-block-kadence-iconlist kt-svg-icon-list-items kt-svg-icon-list-items240_5107b3-13 kt-svg-icon-list-columns-1 alignnone">
                                  <ul className="kt-svg-icon-list">
                                    <li className="wp-block-kadence-listitem kt-svg-icon-list-item-wrap kt-svg-icon-list-item-240_e0c9b1-2f">
                                      <span className="kb-svg-icon-wrap kb-svg-icon-ic_check kt-svg-icon-list-single">
                                        <svg
                                          viewBox="0 0 8 8"
                                          fill="currentColor"
                                          xmlns="http://www.w3.org/2000/svg"
                                          aria-hidden="true"
                                        >
                                          <path
                                            d="M6.41 0l-.69.72-2.78 2.78-.81-.78-.72-.72-1.41 1.41.72.72 1.5 1.5.69.72.72-.72 3.5-3.5.72-.72-1.44-1.41z"
                                            transform="translate(0 1)"
                                          />
                                        </svg>
                                      </span>
                                      <span className="kt-svg-icon-list-text">
                                        Wealth management
                                      </span>
                                    </li>
                                    <li className="wp-block-kadence-listitem kt-svg-icon-list-item-wrap kt-svg-icon-list-item-240_3ed74c-ee">
                                      <span className="kb-svg-icon-wrap kb-svg-icon-ic_check kt-svg-icon-list-single">
                                        <svg
                                          viewBox="0 0 8 8"
                                          fill="currentColor"
                                          xmlns="http://www.w3.org/2000/svg"
                                          aria-hidden="true"
                                        >
                                          <path
                                            d="M6.41 0l-.69.72-2.78 2.78-.81-.78-.72-.72-1.41 1.41.72.72 1.5 1.5.69.72.72-.72 3.5-3.5.72-.72-1.44-1.41z"
                                            transform="translate(0 1)"
                                          />
                                        </svg>
                                      </span>
                                      <span className="kt-svg-icon-list-text">
                                        Investment advisory
                                      </span>
                                    </li>
                                    <li className="wp-block-kadence-listitem kt-svg-icon-list-item-wrap kt-svg-icon-list-item-240_5e76d8-9e">
                                      <span className="kb-svg-icon-wrap kb-svg-icon-ic_check kt-svg-icon-list-single">
                                        <svg
                                          viewBox="0 0 8 8"
                                          fill="currentColor"
                                          xmlns="http://www.w3.org/2000/svg"
                                          aria-hidden="true"
                                        >
                                          <path
                                            d="M6.41 0l-.69.72-2.78 2.78-.81-.78-.72-.72-1.41 1.41.72.72 1.5 1.5.69.72.72-.72 3.5-3.5.72-.72-1.44-1.41z"
                                            transform="translate(0 1)"
                                          />
                                        </svg>
                                      </span>
                                      <span className="kt-svg-icon-list-text">
                                        Tax planning
                                      </span>
                                    </li>
                                    <li className="wp-block-kadence-listitem kt-svg-icon-list-item-wrap kt-svg-icon-list-item-240_2ed4f1-07">
                                      <span className="kb-svg-icon-wrap kb-svg-icon-ic_check kt-svg-icon-list-single">
                                        <svg
                                          viewBox="0 0 8 8"
                                          fill="currentColor"
                                          xmlns="http://www.w3.org/2000/svg"
                                          aria-hidden="true"
                                        >
                                          <path
                                            d="M6.41 0l-.69.72-2.78 2.78-.81-.78-.72-.72-1.41 1.41.72.72 1.5 1.5.69.72.72-.72 3.5-3.5.72-.72-1.44-1.41z"
                                            transform="translate(0 1)"
                                          />
                                        </svg>
                                      </span>
                                      <span className="kt-svg-icon-list-text">
                                        Estate planning
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="wp-block-kadence-column kadence-column240_e9e949-44">
                              <div className="kt-inside-inner-col">
                                <div className="wp-block-kadence-iconlist kt-svg-icon-list-items kt-svg-icon-list-items240_b2eff6-a3 kt-svg-icon-list-columns-1 alignnone kt-mobile-svg-icon-list-columns-1">
                                  <ul className="kt-svg-icon-list">
                                    <li className="wp-block-kadence-listitem kt-svg-icon-list-item-wrap kt-svg-icon-list-item-240_68adac-7a">
                                      <span className="kb-svg-icon-wrap kb-svg-icon-ic_check kt-svg-icon-list-single">
                                        <svg
                                          viewBox="0 0 8 8"
                                          fill="currentColor"
                                          xmlns="http://www.w3.org/2000/svg"
                                          aria-hidden="true"
                                        >
                                          <path
                                            d="M6.41 0l-.69.72-2.78 2.78-.81-.78-.72-.72-1.41 1.41.72.72 1.5 1.5.69.72.72-.72 3.5-3.5.72-.72-1.44-1.41z"
                                            transform="translate(0 1)"
                                          />
                                        </svg>
                                      </span>
                                      <span className="kt-svg-icon-list-text">
                                        Wealth management
                                      </span>
                                    </li>
                                    <li className="wp-block-kadence-listitem kt-svg-icon-list-item-wrap kt-svg-icon-list-item-240_cb7a1f-68">
                                      <span className="kb-svg-icon-wrap kb-svg-icon-ic_check kt-svg-icon-list-single">
                                        <svg
                                          viewBox="0 0 8 8"
                                          fill="currentColor"
                                          xmlns="http://www.w3.org/2000/svg"
                                          aria-hidden="true"
                                        >
                                          <path
                                            d="M6.41 0l-.69.72-2.78 2.78-.81-.78-.72-.72-1.41 1.41.72.72 1.5 1.5.69.72.72-.72 3.5-3.5.72-.72-1.44-1.41z"
                                            transform="translate(0 1)"
                                          />
                                        </svg>
                                      </span>
                                      <span className="kt-svg-icon-list-text">
                                        Investment advisory
                                      </span>
                                    </li>
                                    <li className="wp-block-kadence-listitem kt-svg-icon-list-item-wrap kt-svg-icon-list-item-240_0bf55d-91">
                                      <span className="kb-svg-icon-wrap kb-svg-icon-ic_check kt-svg-icon-list-single">
                                        <svg
                                          viewBox="0 0 8 8"
                                          fill="currentColor"
                                          xmlns="http://www.w3.org/2000/svg"
                                          aria-hidden="true"
                                        >
                                          <path
                                            d="M6.41 0l-.69.72-2.78 2.78-.81-.78-.72-.72-1.41 1.41.72.72 1.5 1.5.69.72.72-.72 3.5-3.5.72-.72-1.44-1.41z"
                                            transform="translate(0 1)"
                                          />
                                        </svg>
                                      </span>
                                      <span className="kt-svg-icon-list-text">
                                        Tax planning
                                      </span>
                                    </li>
                                    <li className="wp-block-kadence-listitem kt-svg-icon-list-item-wrap kt-svg-icon-list-item-240_f382fa-a5">
                                      <span className="kb-svg-icon-wrap kb-svg-icon-ic_check kt-svg-icon-list-single">
                                        <svg
                                          viewBox="0 0 8 8"
                                          fill="currentColor"
                                          xmlns="http://www.w3.org/2000/svg"
                                          aria-hidden="true"
                                        >
                                          <path
                                            d="M6.41 0l-.69.72-2.78 2.78-.81-.78-.72-.72-1.41 1.41.72.72 1.5 1.5.69.72.72-.72 3.5-3.5.72-.72-1.44-1.41z"
                                            transform="translate(0 1)"
                                          />
                                        </svg>
                                      </span>
                                      <span className="kt-svg-icon-list-text">
                                        Estate planning
                                      </span>
                                    </li>
                                  </ul>
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
            </div>

            <div className="kb-row-layout-wrap kb-row-layout-id240_993b42-f2 alignnone wp-block-kadence-rowlayout">
              <div className="kt-row-column-wrap kt-has-2-columns kt-row-layout-equal kt-tab-layout-inherit kt-mobile-layout-row kt-row-valign-bottom">
                <div className="wp-block-kadence-column kadence-column240_e7e28a-fd">
                  <div className="kt-inside-inner-col">
                    <h4
                      className="kt-adv-heading240_5229e0-a4 wp-block-kadence-advancedheading"
                      data-kb-block="kb-adv-heading240_5229e0-a4"
                    >
                      Benefits of a Family Office
                    </h4>
                    <div className="wp-block-kadence-iconlist kt-svg-icon-list-items kt-svg-icon-list-items240_97497a-bf kt-svg-icon-list-columns-1 alignnone kt-list-icon-aligntop">
                      <ul className="kt-svg-icon-list">
                        <li className="wp-block-kadence-listitem kt-svg-icon-list-item-wrap kt-svg-icon-list-item-240_bf7ab6-c6">
                          <span className="kb-svg-icon-wrap kb-svg-icon-fe_checkCircle kt-svg-icon-list-single">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                              <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                          </span>
                          <span className="kt-svg-icon-list-text">
                            Integrated and personalized wealth management
                          </span>
                        </li>
                        <li className="wp-block-kadence-listitem kt-svg-icon-list-item-wrap kt-svg-icon-list-item-240_c2853a-39">
                          <span className="kb-svg-icon-wrap kb-svg-icon-fe_checkCircle kt-svg-icon-list-single">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                              <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                          </span>
                          <span className="kt-svg-icon-list-text">
                            Access to a team of experts with diverse skills and
                            experience
                          </span>
                        </li>
                        <li className="wp-block-kadence-listitem kt-svg-icon-list-item-wrap kt-svg-icon-list-item-240_0ba108-54">
                          <span className="kb-svg-icon-wrap kb-svg-icon-fe_checkCircle kt-svg-icon-list-single">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                              <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                          </span>
                          <span className="kt-svg-icon-list-text">
                            Coordination of all financial affairs and services
                          </span>
                        </li>
                        <li className="wp-block-kadence-listitem kt-svg-icon-list-item-wrap kt-svg-icon-list-item-240_d9bd6f-45">
                          <span className="kb-svg-icon-wrap kb-svg-icon-fe_checkCircle kt-svg-icon-list-single">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                              <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                          </span>
                          <span className="kt-svg-icon-list-text">
                            Alignment of family goals and values
                          </span>
                        </li>
                        <li className="wp-block-kadence-listitem kt-svg-icon-list-item-wrap kt-svg-icon-list-item-240_b9bb4e-e9">
                          <span className="kb-svg-icon-wrap kb-svg-icon-fe_checkCircle kt-svg-icon-list-single">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                              <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                          </span>
                          <span className="kt-svg-icon-list-text">
                            Education and coaching for future generations
                          </span>
                        </li>
                        <li className="wp-block-kadence-listitem kt-svg-icon-list-item-wrap kt-svg-icon-list-item-240_d6644f-cc">
                          <span className="kb-svg-icon-wrap kb-svg-icon-fe_checkCircle kt-svg-icon-list-single">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                              <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                          </span>
                          <span className="kt-svg-icon-list-text">
                            Peace of mind and security
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="wp-block-kadence-column kadence-column240_5cfd82-f4">
                  <div className="kt-inside-inner-col">
                    <figure className="wp-block-image size-full">
                      <Image
                        decoding="async"
                        width="776"
                        height="610"
                        src={benefitsFamilyImg}
                        alt="benefitsFamilyImg"
                        className="wp-image-376 lazy"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-4 wp-block-columns-is-layout-flex">
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
                        <label htmlFor="familyAssets">
                          Total Value of Assets:
                        </label>
                        <input id="familyAssets" type="number" />
                        <button
                          id="calculateButton--family"
                          className="wbx__tax-calculator__form__button"
                        >
                          Calculate Tax
                        </button>
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
            </div> */}
            <FamilyOfficeServicesCalculator />

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

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

import capitalGainTexIcon from '../../assets/images/capital-gain-tex.webp';
import incomeTaxPlanImg from '../../assets/images/income-tax-plan-img.webp';
import maximizeDeductionImg from '../../assets/images/maximize-deduction.webp';

import taxAdvantageImg from '../../assets/images/tax-advantage-img.webp';
import bookOnlineBgImg from '../../assets/images/book-online-bg-img.webp';
import capitalGainTxxImg from '../../assets/images/capital-gain-tex-img.webp';
import CapitalTaxGainsCalculator from '../income-tax/CapitalTaxGainsCalculator.jsx';

export default function CapitalTaxGains() {
  return (
    <>
      <div className="capital-tax-gains-page">
        <Header />
        <div className="capital-tax-gains-page-inner">
          <div className="page-header has-icon">
            <div className="container">
              <h1>Capital Tax Gains</h1>
            </div>
            <div className="page-header__media">
              <figure>
                {' '}
                <Image
                  src={capitalGainTexIcon}
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
            <p className="kt-adv-heading234_b71a5d-db wp-block-kadence-advancedheading has-kb-palette-6-color has-text-color text-center">
              <strong>SOLUTIONS</strong>
            </p>
            <h2
              className="kt-adv-heading234_a20fcd-bf wp-block-kadence-advancedheading text-center"
              data-kb-block="kb-adv-heading234_a20fcd-bf"
            >
              Tax Planning Strategies to Avoid Capital Gains Tax
            </h2>

            <div className="kb-row-layout-wrap kb-row-layout-id234_9bf56e-c1 alignnone wp-block-kadence-rowlayout">
              <div class="kt-row-column-wrap kt-has-2-columns kt-row-layout-equal kt-tab-layout-inherit kt-mobile-layout-row kt-row-valign-top">
                <div class="wp-block-kadence-column kadence-column234_3e70d7-41">
                  <div class="kt-inside-inner-col">
                    <figure class="wp-block-image size-full">
                      <Image
                        fetchPriority="high"
                        width="744"
                        height="732"
                        src={capitalGainTxxImg}
                        alt="Minimize capital gains taxes"
                        class="wp-image-350 lazy"
                      />
                    </figure>
                  </div>
                </div>

                <div class="wp-block-kadence-column kadence-column234_8a321e-25">
                  <div class="kt-inside-inner-col">
                    <div class="wp-block-kadence-column kadence-column234_437ba1-23">
                      <div class="kt-inside-inner-col">
                        <p>
                          Capital gains tax can eat up a significant portion of
                          your investment profits. Fortunately, there are
                          several tax planning strategies you can use to
                          minimize or even avoid capital gains tax. Here are
                          some of the most effective strategies:
                        </p>
                      </div>
                    </div>
                    <div class="wp-block-kadence-iconlist kt-svg-icon-list-items kt-svg-icon-list-items234_1704e7-60 kt-svg-icon-list-columns-1 alignnone kt-list-icon-aligntop">
                      <ul class="kt-svg-icon-list">
                        <li class="wp-block-kadence-listitem kt-svg-icon-list-item-wrap kt-svg-icon-list-item-234_d7b43e-a5">
                          <span class="kb-svg-icon-wrap kb-svg-icon-fe_chevronRight kt-svg-icon-list-single">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <polyline points="9 18 15 12 9 6" />
                            </svg>
                          </span>
                          <span class="kt-svg-icon-list-text">
                            <strong>
                              Hold your investments for the long term.
                            </strong>
                            The longer you hold your investments, the lower your
                            capital gains tax rate will be. If you hold an
                            investment for more than a year, you&#8217;ll
                            qualify for the long-term capital gains tax rate,
                            which is generally lower than the short-term rate.
                          </span>
                        </li>
                        <li class="wp-block-kadence-listitem kt-svg-icon-list-item-wrap kt-svg-icon-list-item-234_eda426-f2">
                          <span class="kb-svg-icon-wrap kb-svg-icon-fe_chevronRight kt-svg-icon-list-single">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <polyline points="9 18 15 12 9 6" />
                            </svg>
                          </span>
                          <span class="kt-svg-icon-list-text">
                            <strong>Offset your gains with losses.</strong>If
                            you have investments that have lost value, you can
                            sell them to offset the gains from your profitable
                            investments. This is known as tax-loss harvesting.
                          </span>
                        </li>
                        <li class="wp-block-kadence-listitem kt-svg-icon-list-item-wrap kt-svg-icon-list-item-234_21125d-91">
                          <span class="kb-svg-icon-wrap kb-svg-icon-fe_chevronRight kt-svg-icon-list-single">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <polyline points="9 18 15 12 9 6" />
                            </svg>
                          </span>
                          <span class="kt-svg-icon-list-text">
                            <strong>
                              Donate your appreciated assets to charity.
                            </strong>
                            If you donate appreciated assets such as stocks or
                            mutual funds to a qualified charity, you can avoid
                            paying capital gains tax on the appreciation. Plus,
                            you&#8217;ll get a tax deduction for the full fair
                            market value of the assets.
                          </span>
                        </li>
                        <li class="wp-block-kadence-listitem kt-svg-icon-list-item-wrap kt-svg-icon-list-item-234_dc8922-75">
                          <span class="kb-svg-icon-wrap kb-svg-icon-fe_chevronRight kt-svg-icon-list-single">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <polyline points="9 18 15 12 9 6" />
                            </svg>
                          </span>
                          <span class="kt-svg-icon-list-text">
                            <strong>Use a tax-deferred account.</strong>If you
                            invest in a tax-deferred account such as a 401(k) or
                            traditional IRA, you won&#8217;t have to pay capital
                            gains tax on your investment gains until you
                            withdraw the money. This can significantly reduce
                            your tax burden.
                          </span>
                        </li>
                        <li class="wp-block-kadence-listitem kt-svg-icon-list-item-wrap kt-svg-icon-list-item-234_f120c0-10">
                          <span class="kb-svg-icon-wrap kb-svg-icon-fe_chevronRight kt-svg-icon-list-single">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <polyline points="9 18 15 12 9 6" />
                            </svg>
                          </span>
                          <span class="kt-svg-icon-list-text">
                            <strong>Consider a like-kind exchange.</strong>If
                            you&#8217;re selling a property, you may be able to
                            avoid capital gains tax by using a like-kind
                            exchange. This involves exchanging the property for
                            another property of equal or greater value, which
                            can defer the capital gains tax.
                          </span>
                        </li>
                      </ul>
                    </div>
                    <p>
                      These are just a few of the many tax planning strategies
                      you can use to avoid capital gains tax. Contact us today
                      for a free consultation!
                    </p>
                  </div>
                </div>
              </div>
            </div>


            <CapitalTaxGainsCalculator />

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

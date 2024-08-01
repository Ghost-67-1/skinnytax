import React from "react";
import Image from 'next/image';
import Link from 'next/link';

import Footer from "@/components/Footer";
import Header from "@/components/Header";

import estateTaxIcon from '../../assets/images/estate-tax.webp'
import estateTaxImg from '../../assets/images/estate-tax-img.webp'
import bookOnlineBgImg from '../../assets/images/book-online-bg-img.webp'

export default function EstateTax() {
    return (
        <div className="estate-tax-page">
            <Header />
            <div className="estate-tax-page-inner">
                <div className="page-header has-icon">
                    <div className='container'>
                        <h1>Estate Tax</h1>
                    </div>
                    <div className='page-header__media'>
                        <figure> <Image
                            src={estateTaxIcon}
                            data-src='https://skinny.tax/wp-content/uploads/2023/08/icon1.webp'
                            alt="Income tax planning strategies" className="object__fit--contain lazy" data-srcset width='90'
                            height='98' /></figure>
                    </div>
                </div>

                <div className="page-content">


                    <div className="kb-row-layout-wrap kb-row-layout-id242_54a8a0-23 alignnone wp-block-kadence-rowlayout">
                        <div className="kt-row-column-wrap kt-has-1-columns kt-row-layout-equal kt-tab-layout-inherit kt-mobile-layout-row kt-row-valign-top">
                            <div className="wp-block-kadence-column kadence-column242_ed6b2f-4d">
                                <div className="kt-inside-inner-col">
                                    <div className="wp-block-kadence-column kadence-column242_70f76d-20">
                                        <div className="kt-inside-inner-col">
                                            <p
                                                className="kt-adv-heading242_1e8b8c-21 wp-block-kadence-advancedheading has-kb-palette-6-color has-text-color"
                                                data-kb-block="kb-adv-heading242_1e8b8c-21"
                                            >
                                                <strong>SOLUTIONS</strong>
                                            </p>
                                            <h2
                                                className="kt-adv-heading242_09b9aa-16 wp-block-kadence-advancedheading"
                                                data-kb-block="kb-adv-heading242_09b9aa-16"
                                            >
                                                Tax Planning Strategies to Avoid Estate Tax
                                            </h2>
                                            <p
                                                className="kt-adv-heading242_e1d5bd-1f wp-block-kadence-advancedheading"
                                                data-kb-block="kb-adv-heading242_e1d5bd-1f"
                                            >
                                                If youre concerned about estate tax, there are several strategies you can use to minimize your tax liability. Here are a few:
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="kb-row-layout-wrap kb-row-layout-id242_14dab0-06 alignnone wp-block-kadence-rowlayout">
                        <div className="kt-row-column-wrap kt-has-1-columns kt-row-layout-equal kt-tab-layout-inherit kt-mobile-layout-row kt-row-valign-top">
                            <div className="wp-block-kadence-column kadence-column242_e92f37-6b">
                                <div className="kt-inside-inner-col">
                                    <div className="kb-row-layout-wrap kb-row-layout-id242_6e5a6a-1a alignnone wp-block-kadence-rowlayout">
                                        <div className="kt-row-column-wrap kt-has-2-columns kt-row-layout-right-golden kt-tab-layout-inherit kt-mobile-layout-row kt-row-valign-top">
                                            <div className="wp-block-kadence-column kadence-column242_22c92d-a6">
                                                <div className="kt-inside-inner-col">
                                                    <figure className="wp-block-image size-full">
                                                        <Image
                                                            fetchPriority="high"
                                                            decoding="async"
                                                            width="343"
                                                            height="190"
                                                            src={estateTaxImg}
                                                            data-src="https://skinny.tax/wp-content/uploads/2023/08/tax_1_img.webp"
                                                            alt="estateTaxImg"
                                                            className="wp-image-381 lazy"
                                                            data-srcSet="https://skinny.tax/wp-content/uploads/2023/08/tax_1_img.webp 343w, https://skinny.tax/wp-content/uploads/2023/08/tax_1_img-300x166.webp 300w"
                                                            data-sizes="(max-width: 343px) 100vw, 343px"
                                                        />
                                                    </figure>
                                                </div>
                                            </div>
                                            <div className="wp-block-kadence-column kadence-column242_84a49a-20">
                                                <div className="kt-inside-inner-col">
                                                    <p
                                                        className="kt-adv-heading242_43b472-41 wp-block-kadence-advancedheading"
                                                        data-kb-block="kb-adv-heading242_43b472-41"
                                                    >
                                                        <strong>Make annual gifts:</strong> You can give up to $15,000 per year to each of your children or grandchildren without triggering any gift tax. By doing so, you reduce the size of your estate, which can lower your estate tax liability.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="kb-row-layout-wrap kb-row-layout-id242_6e5a6a-1a alignnone wp-block-kadence-rowlayout">
                                        <div className="kt-row-column-wrap kt-has-2-columns kt-row-layout-right-golden kt-tab-layout-inherit kt-mobile-layout-row kt-row-valign-top">
                                            <div className="wp-block-kadence-column kadence-column242_65de88-40">
                                                <div className="kt-inside-inner-col">
                                                    <figure className="wp-block-image size-full">
                                                        <Image
                                                            decoding="async"
                                                            width="343"
                                                            height="190"
                                                            src={estateTaxImg}
                                                            data-src="https://skinny.tax/wp-content/uploads/2023/08/tax_2_img.webp"
                                                            alt="Minimize estate tax"
                                                            className="wp-image-382 lazy"
                                                            data-srcSet="https://skinny.tax/wp-content/uploads/2023/08/tax_2_img.webp 343w, https://skinny.tax/wp-content/uploads/2023/08/tax_2_img-300x166.webp 300w"
                                                            data-sizes="(max-width: 343px) 100vw, 343px"
                                                        />
                                                    </figure>
                                                </div>
                                            </div>
                                            <div className="wp-block-kadence-column kadence-column242_58be52-5c">
                                                <div className="kt-inside-inner-col">
                                                    <p
                                                        className="kt-adv-heading242_2e24fb-7f wp-block-kadence-advancedheading"
                                                        data-kb-block="kb-adv-heading242_2e24fb-7f"
                                                    >
                                                        <strong>Create a trust:</strong> Placing assets into a trust can help you avoid estate tax by removing them from your taxable estate. There are many different types of trusts to consider, such as revocable trusts, irrevocable trusts, and charitable trusts.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="kb-row-layout-wrap kb-row-layout-id242_6e5a6a-1a alignnone wp-block-kadence-rowlayout">
                                        <div className="kt-row-column-wrap kt-has-2-columns kt-row-layout-right-golden kt-tab-layout-inherit kt-mobile-layout-row kt-row-valign-top">
                                            <div className="wp-block-kadence-column kadence-column242_01559f-0d">
                                                <div className="kt-inside-inner-col">
                                                    <figure className="wp-block-image size-full">
                                                        <Image
                                                            decoding="async"
                                                            width="343"
                                                            height="190"
                                                            src={estateTaxImg}
                                                            data-src="https://skinny.tax/wp-content/uploads/2023/08/tax_3_img.webp"
                                                            alt="Avoid estate tax"
                                                            className="wp-image-383 lazy"
                                                            data-srcSet="https://skinny.tax/wp-content/uploads/2023/08/tax_3_img.webp 343w, https://skinny.tax/wp-content/uploads/2023/08/tax_3_img-300x166.webp 300w"
                                                            data-sizes="(max-width: 343px) 100vw, 343px"
                                                        />
                                                    </figure>
                                                </div>
                                            </div>
                                            <div className="wp-block-kadence-column kadence-column242_af7b4f-e8">
                                                <div className="kt-inside-inner-col">
                                                    <p
                                                        className="kt-adv-heading242_4f0d05-55 wp-block-kadence-advancedheading"
                                                        data-kb-block="kb-adv-heading242_4f0d05-55"
                                                    >
                                                        <strong>Use life insurance:</strong> Life insurance proceeds are generally not subject to estate tax, so you can use a life insurance policy to provide for your heirs while reducing the size of your taxable estate.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="kb-row-layout-wrap kb-row-layout-id242_6e5a6a-1a alignnone wp-block-kadence-rowlayout">
                                        <div className="kt-row-column-wrap kt-has-2-columns kt-row-layout-right-golden kt-tab-layout-inherit kt-mobile-layout-row kt-row-valign-top">
                                            <div className="wp-block-kadence-column kadence-column242_64e2dc-74">
                                                <div className="kt-inside-inner-col">
                                                    <figure className="wp-block-image size-full">
                                                        <Image
                                                            decoding="async"
                                                            width="343"
                                                            height="190"
                                                            src={estateTaxImg}
                                                            data-src="https://skinny.tax/wp-content/uploads/2023/08/tax_4_img.webp"
                                                            alt="Estate Tax strategies"
                                                            className="wp-image-384 lazy"
                                                            data-srcSet="https://skinny.tax/wp-content/uploads/2023/08/tax_4_img.webp 343w, https://skinny.tax/wp-content/uploads/2023/08/tax_4_img-300x166.webp 300w"
                                                            data-sizes="(max-width: 343px) 100vw, 343px"
                                                        />
                                                    </figure>
                                                </div>
                                            </div>
                                            <div className="wp-block-kadence-column kadence-column242_b641c5-89">
                                                <div className="kt-inside-inner-col">
                                                    <p
                                                        className="kt-adv-heading242_676617-d1 wp-block-kadence-advancedheading"
                                                        data-kb-block="kb-adv-heading242_676617-d1"
                                                    >
                                                        <strong>Establish a family limited partnership:</strong> A family limited partnership allows you to transfer assets to your heirs while retaining control over them. By doing so, you reduce the size of your taxable estate without giving up control of your assets.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="kb-row-layout-wrap kb-row-layout-id242_6e5a6a-1a alignnone wp-block-kadence-rowlayout">
                                        <div className="kt-row-column-wrap kt-has-2-columns kt-row-layout-right-golden kt-tab-layout-inherit kt-mobile-layout-row kt-row-valign-top">
                                            <div className="wp-block-kadence-column kadence-column242_4face0-c5">
                                                <div className="kt-inside-inner-col">
                                                    <figure className="wp-block-image size-full">
                                                        <Image
                                                            decoding="async"
                                                            width="343"
                                                            height="190"
                                                            src={estateTaxImg}
                                                            data-src="https://skinny.tax/wp-content/uploads/2023/08/tax_5_img.webp"
                                                            alt="Estate Tax Planning"
                                                            className="wp-image-385 lazy"
                                                            data-srcSet="https://skinny.tax/wp-content/uploads/2023/08/tax_5_img.webp 343w, https://skinny.tax/wp-content/uploads/2023/08/tax_5_img-300x166.webp 300w"
                                                            data-sizes="(max-width: 343px) 100vw, 343px"
                                                        />
                                                    </figure>
                                                </div>
                                            </div>
                                            <div className="wp-block-kadence-column kadence-column242_f18444-f2">
                                                <div className="kt-inside-inner-col">
                                                    <p
                                                        className="kt-adv-heading242_86d439-5a wp-block-kadence-advancedheading"
                                                        data-kb-block="kb-adv-heading242_86d439-5a"
                                                    >
                                                        <strong>Take advantage of the marital deduction:</strong> If you’re married, you can use the marital deduction to transfer unlimited assets to your spouse tax-free. This can be a powerful way to reduce your estate tax liability.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-2 wp-block-columns-is-layout-flex"
                    >
                        <div
                            className="wp-block-column is-vertically-aligned-center has-background is-layout-flow wp-block-column-is-layout-flow"
                            style={{ backgroundColor: '#fef9f0' }}
                        >
                            <div style={{ height: '50px' }} aria-hidden="true" className="wp-block-spacer"></div>
                            <div
                                className="wp-block-columns are-vertically-aligned-center container is-layout-flex wp-container-core-columns-is-layout-1 wp-block-columns-is-layout-flex"
                            >
                                <div
                                    className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow"
                                >
                                    <p className="has-luminous-vivid-amber-color has-text-color has-small-font-size">
                                        <strong>TOOLS AND SOLUTIONS</strong>
                                    </p>
                                    <h2 className="wp-block-heading">Estate Tax Calculator</h2>
                                </div>
                                <div
                                    className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow"
                                >
                                    <div className="wbx__tax-calculator is-estate_text">
                                        <div id="wbx__tax-calculator__results" className="wbx__tax-calculator__results">
                                            <p id="result_heading" className="wbx__tax-calculator__results--heading"></p>
                                            <div id="result" className="wbx__tax-calculator__results--amount"></div>
                                        </div>
                                        <div className="wbx__tax-calculator__form">
                                            <div className="row d-flex">
                                                <div className="col-12 col-lg-4">
                                                    <label htmlFor="estate_tax--gross">Gross Estate Value:</label>
                                                    <input id="estate_tax--gross" type="number" />
                                                </div>
                                                <div className="col-12 col-lg-4">
                                                    <label htmlFor="estate_tax--debt">Debt and Expenses:</label>
                                                    <input id="estate_tax--debt" type="number" />
                                                </div>
                                                <div className="col-12 col-lg-4">
                                                    <label htmlFor="estate_tax--marital">Marital Deduction:</label>
                                                    <input id="estate_tax--marital" type="number" />
                                                </div>
                                            </div>
                                            <button id="calculateButton--estate_tax" className="wbx__tax-calculator__form__button">
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
    )
}
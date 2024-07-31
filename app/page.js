import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Link from 'next/link';

import bannerImg from '../assets/images/banner-img.png'
import incomeTexPlanning from '../assets/images/income-tex-planning.webp'
import capitalGainIcon from '../assets/images/capital-gain-tex.webp'
import carriedInterestsIcon from '../assets/images/carried-interest.webp'
import charitableIcon from '../assets/images/charitable-icon.webp'
import estateTexIcon from '../assets/images/estate-tax.webp'
import famillyOfficeIcon from '../assets/images/family-office.webp'
import qsbsIcon from '../assets/images/qsbs-icon.webp'
import affordableCalculatorImg from '../assets/images/affordable-calculator-img.webp'
import affordableLeftBoxImg from '../assets/images/affordable-left-box.webp'
import affordableRightBoxImg from '../assets/images/affordable-right-box.webp'
import dataCollectionImg from '../assets/images/data-collection-img.webp'
import customProposalImg from '../assets/images/custom-proposal-img.webp'
import skinnyTaxImg from '../assets/images/skinny-tax-img.webp'
import bookAllImg from '../assets/images/book-all-img.webp'
import needMoreInfoImg from '../assets/images/need-more-info-img.webp'
import bookOnlineBgImg from '../assets/images/book-online-bg-img.webp'
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="home-page">
      <Header />
      <div class='page-content'>
        <div className="banner-ssection">
          <div className="wbx__hero is-multiline">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-6">
                  <div className="wbx__hero__slide">
                    <div className="wbx__hero__slide__content">
                      <h2 className="wbx__hero__slide__content__title">Plan Before You File!</h2>
                      <div className="wbx__hero__slide__content__content">
                        <p>
                          <strong>SkinnyTax</strong> is a startup that makes tax planning affordable and
                          allows clients to forecast their potential tax liability and plan around it.
                        </p>
                      </div>
                      <div className="wp-block-buttons is-layout-flex wp-container-3">
                        <div className="wp-block-button">
                          <Link className="wp-block-button__link wp-element-button" href="https://skinnytax.cliogrow.com/book/540c3f09ebee0d74c9dcbfc175050b33">
                            Book a consultation
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6 d-none d-md-flex d-lg-flex">
                  <div className="wbx__hero__slide__content__media">
                    <figure className="wbx__hero__slide__content__media--image">
                      <Image
                        fetchpriority="high"
                        decoding="async"
                        src={bannerImg}
                        alt=""
                        className="object__fit--contain lazy"
                        srcSet="https://skinny.tax/wp-content/uploads/2023/08/hero-img-phones.png 878w, https://skinny.tax/wp-content/uploads/2023/08/hero-img-phones-275x300.png 275w, https://skinny.tax/wp-content/uploads/2023/08/hero-img-phones-768x838.png 768w, https://skinny.tax/wp-content/uploads/2023/08/hero-img-phones-480x524.png 480w"
                        width={878}
                        height={958}
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="our-solutions">
          <div className="container">
            <div style={{ height: '150px' }} aria-hidden="true" className="wp-block-spacer"></div>
            <p className="has-text-align-center is-heading-label has-text-color has-small-font-size" style={{ color: '#f6bb1a' }}>
              <strong>WE CAN HELP</strong>
            </p>
            <h2 className="wp-block-heading has-text-align-center">Our Solutions</h2>
            <div className="wbx__content-icon">
              <div className="container">
                <div className="row d-flex flex-row justify-content-center">
                  <div className="col-6 col-lg-3 col-md-6">
                    <div className="wbx__content-icon__media">
                      <figure className="wbx__content-icon__media--icon">
                        <Image
                          decoding="async"
                          src={incomeTexPlanning}
                          alt="Income tax planning strategies"
                          className="object__fit--contain lazy"
                          width={90}
                          height={98}
                        />
                      </figure>
                    </div>
                    <div className="wbx__content-icon__content">
                      <p className="wbx__content-icon__content__title">Income Tax</p>
                    </div>
                  </div>
                  <div className="col-6 col-lg-3 col-md-6">
                    <div className="wbx__content-icon__media">
                      <figure className="wbx__content-icon__media--icon">
                        <Image
                          decoding="async"
                          src={capitalGainIcon}
                          alt="Capital gain tax planning"
                          className="object__fit--contain lazy"
                          width={91}
                          height={96}
                        />
                      </figure>
                    </div>
                    <div className="wbx__content-icon__content">
                      <p className="wbx__content-icon__content__title">Capital Gains Tax</p>
                    </div>
                  </div>
                  <div className="col-6 col-lg-3 col-md-6">
                    <div className="wbx__content-icon__media">
                      <figure className="wbx__content-icon__media--icon">
                        <Image
                          decoding="async"
                          src={carriedInterestsIcon}
                          alt="Carried interest"
                          className="object__fit--contain lazy"
                          width={89}
                          height={97}
                        />
                      </figure>
                    </div>
                    <div className="wbx__content-icon__content">
                      <p className="wbx__content-icon__content__title">Carried Interest</p>
                    </div>
                  </div>
                  <div className="col-6 col-lg-3 col-md-6">
                    <div className="wbx__content-icon__media">
                      <figure className="wbx__content-icon__media--icon">
                        <Image
                          decoding="async"
                          src={charitableIcon}
                          alt="Charitable remainder trust"
                          className="object__fit--contain lazy"
                          width={98}
                          height={93}
                        />
                      </figure>
                    </div>
                    <div className="wbx__content-icon__content">
                      <p className="wbx__content-icon__content__title">Charitable Trust</p>
                    </div>
                  </div>
                  <div className="col-6 col-lg-3 col-md-6">
                    <div className="wbx__content-icon__media">
                      <figure className="wbx__content-icon__media--icon">
                        <Image
                          decoding="async"
                          src={famillyOfficeIcon}
                          alt="Family office"
                          className="object__fit--contain lazy"
                          width={98}
                          height={96}
                        />
                      </figure>
                    </div>
                    <div className="wbx__content-icon__content">
                      <p className="wbx__content-icon__content__title">Family Office</p>
                    </div>
                  </div>
                  <div className="col-6 col-lg-3 col-md-6">
                    <div className="wbx__content-icon__media">
                      <figure className="wbx__content-icon__media--icon">
                        <Image
                          decoding="async"
                          src={estateTexIcon}
                          alt="Estate tax"
                          className="object__fit--contain lazy"
                          width={95}
                          height={98}
                        />
                      </figure>
                    </div>
                    <div className="wbx__content-icon__content">
                      <p className="wbx__content-icon__content__title">Estate Tax</p>
                    </div>
                  </div>
                  <div className="col-6 col-lg-3 col-md-6">
                    <div className="wbx__content-icon__media">
                      <figure className="wbx__content-icon__media--icon">
                        <Image
                          decoding="async"
                          src={qsbsIcon}
                          alt="QSBS"
                          className="object__fit--contain lazy"
                          width={91}
                          height={97}
                        />
                      </figure>
                    </div>
                    <div className="wbx__content-icon__content">
                      <p className="wbx__content-icon__content__title">QSBS</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="affordable-section">
          <h2 className="wp-block-heading has-text-align-center">Affordable, Efficient &amp; Useful</h2>
          <p className="has-text-align-center">
            SkinnyTax closes the gap that exists between <strong>top tax attorneys</strong>
            <br />
            and <strong>mainstream software</strong>.
          </p>
          <div className="wbix__floating-boxes">
            <div className="container">
              <div className="row">
                <div className="col-lg-2">
                  <div className="wbix__floating-boxes__box">
                    <div className="wbix__floating-boxes__box--left">
                      <p className="wbix__floating-boxes__box--title">Self Help Software</p>
                      <div className="wbix__floating-boxes__box--content">
                        SkinnyTax, has incorporated most recommendations by tax advisors serving their clients with simple
                        DIY software for less than the price of their phone bill.
                      </div>
                      <div className="wbix__floating-boxes__box--left__media">
                        <figure className="wbix__floating-boxes__box--left__media--image">
                          <Image
                            decoding="async"
                            src={affordableLeftBoxImg}
                            alt="Tax calculators"
                            className="object__fit--contain lazy"
                            width={400}
                            height={260}
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="wbix__floating-boxes__box">
                    <div className="wbix__floating-boxes__box--center">
                      <div className="wbix__floating-boxes__box--center__media">
                        <figure className="wbix__floating-boxes__box--center__media--image">
                          <Image
                            decoding="async"
                            src={affordableCalculatorImg}
                            alt="Calculate taxes"
                            className="object__fit--contain lazy"
                            width={1021}
                            height={596}
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="wbix__floating-boxes__box">
                    <div className="wbix__floating-boxes__box--right">
                      <div className="wbix__floating-boxes__box--right__media">
                        <figure className="wbix__floating-boxes__box--right__media--image">
                          <Image
                            decoding="async"
                            src={affordableRightBoxImg}
                            alt="Family office"
                            className="object__fit--contain lazy"
                            width={400}
                            height={295}
                          />
                        </figure>
                      </div>
                      <p className="wbix__floating-boxes__box--title">Tech Enabled Advisory</p>
                      <div className="wbix__floating-boxes__box--content">
                        SkinnyTax&#8217;s advisors use the software on the backend to recommend the same tax strategies of
                        the nation&#8217;s largest firms at a fraction of the cost and time.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="trust-process-section">
          <h2 className="wp-block-heading has-text-align-center">Trust the Process&#8230;</h2>
          <div className="wbix__numbered-infoboxes">
            <div className="container">
              <div className="row">
                <div className="col-8 offset-2">
                  <div className="row">
                    <div className="col-lg-6 is-offset-1 d-flex flex-column align-items-center">
                      <div className="wbix__numbered-infoboxes__media">
                        <figure className="wbix__numbered-infoboxes__media--icon">
                          <Image
                            decoding="async"
                            src={bookAllImg}
                            alt="Book a tax planning call"
                            className="object__fit--contain lazy"
                            width={409}
                            height={308}
                          />
                        </figure>
                      </div>
                      <div className="wbix__numbered-infoboxes__content">
                        <div className="wbix__numbered-infoboxes__content__bullet">
                          <span>1</span>
                        </div>
                        <div className="wbix__numbered-infoboxes__content__wrapper">
                          <p className="wbix__numbered-infoboxes__content__wrapper__title">Book a call</p>
                          <div className="wbix__numbered-infoboxes__content__wrapper__content">
                            Use our quick schedule form to book a call with us!
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 is-offset-1 d-flex flex-column align-items-center">
                      <div className="wbix__numbered-infoboxes__media">
                        <figure className="wbix__numbered-infoboxes__media--icon">
                          <Image
                            decoding="async"
                            src={dataCollectionImg}
                            alt="Tax data"
                            className="object__fit--contain lazy"
                            width={410}
                            height={307}
                          />
                        </figure>
                      </div>
                      <div className="wbix__numbered-infoboxes__content">
                        <div className="wbix__numbered-infoboxes__content__bullet">
                          <span>2</span>
                        </div>
                        <div className="wbix__numbered-infoboxes__content__wrapper">
                          <p className="wbix__numbered-infoboxes__content__wrapper__title">Data Collection</p>
                          <div className="wbix__numbered-infoboxes__content__wrapper__content">
                            We collect your personal details and financial information.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 is-offset-1 d-flex flex-column align-items-center">
                      <div className="wbix__numbered-infoboxes__media">
                        <figure className="wbix__numbered-infoboxes__media--icon">
                          <Image
                            decoding="async"
                            src={customProposalImg}
                            alt="Tax planning proposal"
                            className="object__fit--contain lazy"
                            width={410}
                            height={307}
                          />
                        </figure>
                      </div>
                      <div className="wbix__numbered-infoboxes__content">
                        <div className="wbix__numbered-infoboxes__content__bullet">
                          <span>3</span>
                        </div>
                        <div className="wbix__numbered-infoboxes__content__wrapper">
                          <p className="wbix__numbered-infoboxes__content__wrapper__title">Custom Proposal</p>
                          <div className="wbix__numbered-infoboxes__content__wrapper__content">
                            We prepare a personalized tax planning proposal with recommendations on how to save taxes.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 is-offset-1 d-flex flex-column align-items-center">
                      <div className="wbix__numbered-infoboxes__media">
                        <figure className="wbix__numbered-infoboxes__media--icon">
                          <Image
                            decoding="async"
                            src={skinnyTaxImg}
                            alt="Maximize tax savings"
                            className="object__fit--contain lazy"
                            width={413}
                            height={304}
                          />
                        </figure>
                      </div>
                      <div className="wbix__numbered-infoboxes__content">
                        <div className="wbix__numbered-infoboxes__content__bullet">
                          <span>4</span>
                        </div>
                        <div className="wbix__numbered-infoboxes__content__wrapper">
                          <p className="wbix__numbered-infoboxes__content__wrapper__title">Implementation</p>
                          <div className="wbix__numbered-infoboxes__content__wrapper__content">
                            SkinnyTax assists clients in implementing tax saving strategies through creation of LLCs,
                            trusts, etc.
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
        <div className="more-info-section">
          <div
            className="wp-block-columns has-background is-layout-flex wp-container-core-columns-is-layout-2 wp-block-columns-is-layout-flex"
            style={{ backgroundColor: '#fef9f0' }}
          >
            <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style={{ flexBasis: '100%' }}>
              <div className="wp-block-columns container is-layout-flex wp-container-core-columns-is-layout-1 wp-block-columns-is-layout-flex">
                <div
                  className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow"
                  style={{ flexBasis: '30%' }}
                >
                  <h3 className="wp-block-heading has-text-align-center">Need more Info?</h3>
                  <div className="wp-block-buttons is-content-justification-center is-layout-flex wp-container-core-buttons-is-layout-1 wp-block-buttons-is-layout-flex">
                    <div className="wp-block-button">
                      <a
                        className="wp-block-button__link has-text-align-center wp-element-button"
                        href="https://skinnytax.cliogrow.com/intake/8dac25dce942bab81726c909f71cfa97"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        GET IN TOUCH
                      </a>
                    </div>
                  </div>
                </div>
                <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                  <div className="wp-block-image">
                    <figure className="aligncenter size-full">
                      <Image
                        decoding="async"
                        width={726}
                        height={814}
                        src={needMoreInfoImg}
                        alt="needMoreInfoImg"
                        className="wp-image-154 lazy"
                        srcSet="https://skinny.tax/wp-content/uploads/2023/08/contact_image.webp 726w, https://skinny.tax/wp-content/uploads/2023/08/contact_image-268x300.webp 268w, https://skinny.tax/wp-content/uploads/2023/08/contact_image-600x673.webp 600w"
                        sizes="(max-width: 726px) 100vw, 726px"
                      />
                    </figure>
                  </div>
                </div>
              </div>
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
                  <div className="wbx__cta__content">
                    <p className="wbx__cta__content__label">READY TO SAVE TAXES?</p>
                    <h4 className="wbx__cta__content__title">Book an Online Consultation!</h4>
                    <div className="wbx__cta__content__content"></div>
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
      <Footer />
    </div>
  );
}

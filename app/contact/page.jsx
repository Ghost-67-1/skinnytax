import React from "react";
import Image from 'next/image';
import Link from 'next/link';

import Footer from "@/components/Footer";
import Header from "@/components/Header";

import ContactUsImg from '../../assets/images/need-more-info-img.webp'

export default function Contact() {
    return (
        <div className="contact-page">
            <Header />
            <div className="contact-page">
                <div className="page-header ">
                    <div className='container'>
                        <h1>Contact</h1>
                    </div>
                </div>
                <div className="page-content">
                    <div
                        className="wp-block-columns has-background is-layout-flex wp-container-core-columns-is-layout-2 wp-block-columns-is-layout-flex"
                        style={{ backgroundColor: '#fef9f0' }}
                    >
                        <div
                            className="wp-block-column is-layout-flow wp-block-column-is-layout-flow"
                            style={{ flexBasis: '100%' }}
                        >
                            <div
                                className="wp-block-columns container is-layout-flex wp-container-core-columns-is-layout-1 wp-block-columns-is-layout-flex"
                            >
                                <div
                                    className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow"
                                    style={{ flexBasis: '30%' }}
                                >
                                    <h3 className="wp-block-heading has-text-align-center">Need more Info?</h3>
                                    <div
                                        className="wp-block-buttons is-content-justification-center is-layout-flex wp-container-core-buttons-is-layout-1 wp-block-buttons-is-layout-flex"
                                    >
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
                                                fetchPriority="high"
                                                decoding="async"
                                                width="726"
                                                height="814"
                                                src={ContactUsImg}
                                                alt="ContactUsImg"
                                                className="wp-image-154 lazy"
                                            />
                                        </figure>
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
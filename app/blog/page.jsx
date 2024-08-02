import React from 'react'
import Image from "next/image";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

import blogImg1 from '../../assets/images/blog-img-1.jpeg'
import blogImg2 from '../../assets/images/blog-img-2.jpeg'
import StepperComponent from '@/components/StepperComponent';

export default function Blog() {

    const steps = [
        { label: 'Step 1', content: <div>Content for Step 1</div> },
        { label: 'Step 2', content: <div>Content for Step 2</div> },
        { label: 'Step 3', content: <div>Content for Step 3</div> },
      ];

    return (
        <div className="blog-page">
            <Header />
            <div className="blog-page-inner">
                <div className='page-header'>
                    <div className='page-header--background'></div>
                    <div className='page-header--title'>
                        <div className='container'>
                            <h1 className="page-title">Blog</h1>
                        </div>
                    </div>
                </div>
                <div className="page-content">
                    <div className="content-wrap-page">
                        <div className="container">
                            <div className="row">
                                <article className="col-12 col-md-6 col-lg-4 post-394 post type-post status-publish format-standard has-post-thumbnail hentry category-uncategorized">
                                    <div className="blog-card">
                                        <a className="blog-card__img" href="../family-offices-what-they-are-and-how-they-benefit-you/index.html">
                                            <figure>
                                                <Image
                                                    src={blogImg1}
                                                    alt="Family office benefits"
                                                    className="object__fit--cover lazy"
                                                    width="300"
                                                    height="101"
                                                />
                                            </figure>
                                        </a>
                                        <div className="blog-card__meta">
                                            <div className="day"> August, 28 2023</div>
                                        </div>
                                        <div className="blog-card__content">
                                            <h2 className="blog-card__content-title">
                                                <a className="archive-title-post" href="../family-offices-what-they-are-and-how-they-benefit-you/index.html">
                                                    Family Offices: What They Are and How They Benefit You
                                                </a>
                                            </h2>
                                            <div className="blog-card__content-content">
                                                What is a Family Office? Family offices are a type of private wealth management structure{" "}
                                                <a href="../family-offices-what-they-are-and-how-they-benefit-you/index.html" className="read_more">
                                                    ... Read more
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <article className="col-12 col-md-6 col-lg-4 post-1 post type-post status-publish format-standard has-post-thumbnail hentry category-uncategorized">
                                    <div className="blog-card">
                                        <a className="blog-card__img" href="../tax-planning-maximize-savings/index.html">
                                            <figure>
                                                <Image
                                                    src={blogImg2}
                                                    data-src="https://skinny.tax/wp-content/uploads/2023/08/tax-planning-for-savings-300x108.jpeg"
                                                    alt="tax-planning-for-savings"
                                                    className="object__fit--cover lazy"
                                                    data-srcset="https://skinny.tax/wp-content/uploads/2023/08/tax-planning-for-savings-300x108.jpeg 300w, https://skinny.tax/wp-content/uploads/2023/08/tax-planning-for-savings-1024x368.jpeg 1024w, https://skinny.tax/wp-content/uploads/2023/08/tax-planning-for-savings-768x276.jpeg 768w, https://skinny.tax/wp-content/uploads/2023/08/tax-planning-for-savings-1536x551.jpeg 1536w, https://skinny.tax/wp-content/uploads/2023/08/tax-planning-for-savings-600x215.jpeg 600w, https://skinny.tax/wp-content/uploads/2023/08/tax-planning-for-savings.jpeg 1546w"
                                                    width="300"
                                                    height="108"
                                                />
                                            </figure>
                                        </a>
                                        <div className="blog-card__meta">
                                            <div className="day"> August, 07 2023</div>
                                        </div>
                                        <div className="blog-card__content">
                                            <h2 className="blog-card__content-title">
                                                <a className="archive-title-post" href="../tax-planning-maximize-savings/index.html">
                                                    Income Tax Planning: 7 Ways To Maximize Your Savings
                                                </a>
                                            </h2>
                                            <div className="blog-card__content-content">
                                                Income tax planning is an essential aspect of financial planning that helps you to minimize{" "}
                                                <a href="../tax-planning-maximize-savings/index.html" className="read_more">
                                                    ... Read more
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>


                <StepperComponent/>



            </div>
            <Footer />
        </div>
    )
}
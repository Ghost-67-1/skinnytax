'use client';
import { getErrorRedirect } from '@/utils/helpers';
import { getStripe } from '@/utils/stripe/client';
import { cancelSubscription, checkoutWithStripe } from '@/utils/stripe/server';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaCheck } from 'react-icons/fa6';
import { FaRegUser } from 'react-icons/fa6';
import { BsPeople } from 'react-icons/bs';
import { IoPersonOutline } from 'react-icons/io5';
import Link from 'next/link';

const PricingComponent = ({ products, subscription, user }) => {
  const router = useRouter();
  const [priceIdLoading, setPriceIdLoading] = useState();
  const currentPath = usePathname();
  // console.log("🚀 ~ PricingComponent ~ currentPath:", currentPath)
  const [billingInterval, setBillingInterval] = useState('month');
  const handleStripeCheckout = async (price, isChangePlan) => {
    setPriceIdLoading(price.id);
    const { errorRedirect, sessionId, subscriptionId } =
      await checkoutWithStripe(price, '/calculator', isChangePlan);

    if (errorRedirect) {
      setPriceIdLoading(undefined);
      return router.push(errorRedirect);
    }
    if (subscriptionId) {
      return router.push('/');
    }

    if (!sessionId) {
      setPriceIdLoading(undefined);
      return router.push(
        getErrorRedirect(
          currentPath,
          'An unknown error occurred.',
          'Please try again later or contact a system administrator.'
        )
      );
    }

    const stripe = await getStripe();
    stripe?.redirectToCheckout({ sessionId });

    setPriceIdLoading(undefined);
  };

  const handleCancelSubscription = async () => {
    if (!subscription) {
      return;
    }
    const { errorRedirect, subscription } = await cancelSubscription(
      subscription.id,
      currentPath
    );
    if (errorRedirect) {
      return router.push(errorRedirect);
    }
    if (subscription) {
      return router.push('/');
    }
  };
  return (
    <div className="container mt-5 pricing-tabs">
      <div className="row">
        {products && Array.isArray(products) && products.length ? (
          products.map((product, index) => (
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h4 className="card-title">
                    {product.description.includes('1 user') ? (
                      <IoPersonOutline />
                    ) : (
                      <BsPeople />
                    )}
                    {product.name}
                  </h4>
                  <h6 className="card-price">
                    ${product.prices[0].unit_amount / 100} /{' '}
                    {product.prices[0].interval}
                  </h6>
                  <p className="card-text">
                    <IoPersonOutline /> {product.description}
                  </p>
                  <div className="card-text__details">
                    <ul className="list-unstyled">
                      {product.metadata.features
                        .split('\n')
                        .map((feature, index) => (
                          <li key={index}>
                            <FaCheck />
                            <span>{feature}</span>
                          </li>
                        ))}
                    </ul>
                    <p className="wp-block-button">
                      {!user ? (
                        <Link
                          href={process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL+"?redirect_to="+currentPath}
                          className="wp-block-button__link wp-element-button"
                        >
                          Sign Up
                        </Link>
                      ) : (
                        <Button
                          onClick={() =>
                            subscription?.price_id === product.prices[0].id
                              ? handleCancelSubscription(subscription)
                              : handleStripeCheckout(
                                  product.prices[0],
                                  !!subscription
                                )
                          }
                          disabled={priceIdLoading === product.prices[0].id}
                          style={{ width: '100%' }}
                          variant={
                            subscription?.price_id === product.prices[0].id
                              ? 'secondary'
                              : 'warning'
                          }
                        >
                          {subscription
                            ? subscription?.price_id === product.prices[0].id
                              ? 'Cancel subscription'
                              : 'Change plan'
                            : priceIdLoading === product.prices[0].id
                              ? 'Loading'
                              : 'Subscribe'}
                        </Button>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div class="d-flex justify-content-center align-items-center min-vh-100">
            <h1>No Products here!</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default PricingComponent;

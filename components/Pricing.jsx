'use client';
import { getErrorRedirect } from '@/utils/helpers';
import { getStripe } from '@/utils/stripe/client';
import { cancelSubscription, checkoutWithStripe } from '@/utils/stripe/server';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const PricingComponent = ({ products, subscription, user }) => {
  const router = useRouter();
  const [priceIdLoading, setPriceIdLoading] = useState();
  const currentPath = usePathname();
  const [billingInterval, setBillingInterval] = useState('month');
  const handleStripeCheckout = async (price, isChangePlan) => {
    setPriceIdLoading(price.id);
    const { errorRedirect, sessionId, subscriptionId } =
      await checkoutWithStripe(price, currentPath, isChangePlan);

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
        {products.map((product, index) => (
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h4 className="card-title">
                  <i className="bi bi-person"></i> {product.name}
                </h4>
                <h6 className="card-price">
                  ${product.prices[0].unit_amount / 100} /{' '}
                  {product.prices[0].interval}
                </h6>
                <p className="card-text">
                  <i className="bi bi-person"></i> {product.description}
                </p>
                <div className="card-text__details">
                  <ul className="list-unstyled">
                    {product.metadata.features
                      .split('\n')
                      .map((feature, index) => (
                        <li key={index}>
                          <i className="bi bi-check-lg"></i>
                          <span>{feature}</span>
                        </li>
                      ))}
                  </ul>
                  <p className="wp-block-button">
                    {!user ? (
                      <Link
                        href={process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL}
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
        ))}
      </div>
    </div>
  );
};

export default PricingComponent;

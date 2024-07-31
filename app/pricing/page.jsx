import React from 'react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  getProducts,
  getSubscription,
  getUser
} from '@/utils/supabase/queries';
import { createClient } from '@/utils/supabase/server';
import PricingComponent from '@/components/Pricing';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getStripe } from '@/utils/stripe/client';

export default async function Pricing() {
  const supabase = createClient();
  const user = await getUser();
  const [subscription, products] = await Promise.all([
    getSubscription(supabase, JSON.parse(user).id),
    getProducts(supabase)
  ]);

  return (
    <div className="pricing-page">
      <Header />
      <div className="pricing-page-inner ">
        <div className="page-header">
          <div className="container">
            <h1>Pricing</h1>
          </div>
        </div>
        <div className="page-content">
          <h2 className="wp-block-heading has-text-align-center">
            Get Your Tax Planning Done Today
          </h2>
          <PricingComponent
            products={products}
            subscription={subscription}
            user={JSON.parse(user)}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

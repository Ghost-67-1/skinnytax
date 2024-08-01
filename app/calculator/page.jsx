import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  getSubscription,
  getUser
} from '@/utils/supabase/queries';
import { createClient } from '@/utils/supabase/server';
import StepperComponent from '../../components/StepperComponent';
import { redirect } from 'next/navigation'

export default async function Calculator() {

  const supabase = createClient();
  const user = await getUser();
  const subscription = await getSubscription(supabase, JSON.parse(user).id)
  if (!subscription)
    redirect('/')
  return (
    <div className="pricing-page">
      <Header />
      <div className="pricing-page-inner ">
        <div className="page-header">
          <div className="container">
            <h1>Calculator</h1>
          </div>
        </div>
        <div className="page-content">
          <h2 className="wp-block-heading has-text-align-center">
            Get Your Tax Planning Done Today
          </h2>
          <StepperComponent />
        </div>
      </div>
      <Footer />
    </div>
  );
}

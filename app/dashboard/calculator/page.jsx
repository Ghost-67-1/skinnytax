import React from 'react';
import {
  getProducts,
  getSubscription,
  getUser
} from '@/utils/supabase/queries';
import { createClient } from '@/utils/supabase/server';
import StepperComponent from '../../../components/StepperComponent';
import { redirect } from 'next/navigation'
export default async function Calculator() {
  const supabase = createClient();
  const user = await getUser();
  const products = await getProducts(supabase);
  const subscription = await getSubscription(supabase, JSON.parse(user).id)
  const getMatchsubscription = products?.find(a => a.id === subscription?.prices.product_id)

  console.log("products11111111111111111", getMatchsubscription)

  if (!subscription)
    redirect('/')
  return (
    <div className="dashboard-calculator-page pt-3">
      <div className="container">
        <div className="calculator-inner bg-white" style={{borderRadius:'8px'}}>
        <StepperComponent getMatchsubscription={getMatchsubscription} />
        </div>
      </div>
    </div>
  );
}
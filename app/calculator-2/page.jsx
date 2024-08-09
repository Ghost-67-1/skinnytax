import React from 'react';
import {
  getProducts,
  getSubscription,
  getUser
} from '@/utils/supabase/queries';
import { createClient } from '@/utils/supabase/server';
import StepperComponent from '../../components/StepperComponent';
import { redirect } from 'next/navigation'
import DashboardSidebar from '../dashboard/page';

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
    <div className='Dashboards_flex'>

      <DashboardSidebar />

      <div className="form-dashboard-page bg-white">
        <div className="container">
          <StepperComponent getMatchsubscription={getMatchsubscription} />
        </div>
      </div>
    </div>
  );
}
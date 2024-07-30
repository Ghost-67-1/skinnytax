import { currentUser } from '@clerk/nextjs/server';
import { SupabaseClient } from '@supabase/supabase-js';
import { cache } from 'react';

export const getUser = cache(async () => {
  const user = await currentUser();
  return JSON.stringify(user);
});

export const getSubscription = cache(
  async (supabase: SupabaseClient, userId: string) => {
    console.log('🚀 ~ getSubscription ~ userId:', userId);
    const { data: subscription, error } = await supabase
      .from('subscriptions')
      .select('*, prices(*, products(*))')
      .eq('user_id', userId) // Assuming 'user_id' is the column name
      .in('status', ['trialing', 'active'])
      .maybeSingle();

    if (error) {
      console.error('Error fetching subscription:', error);
      return null;
    }
    return subscription;
  }
);

export const getProducts = cache(async (supabase: SupabaseClient) => {
  const { data: products, error } = await supabase
    .from('products')
    .select('*, prices(*)')
    .eq('active', true)
    .eq('prices.active', true)
    .order('metadata->index')
    .order('unit_amount', { referencedTable: 'prices' });

  return products;
});

export const getUserDetails = cache(async (supabase: SupabaseClient) => {
  const { data: userDetails } = await supabase
    .from('users')
    .select('*')
    .single();
  return userDetails;
});

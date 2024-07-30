import Pricing from '@/components/ui/Pricing/Pricing';
import { createClient } from '@/utils/supabase/server';
import {
  getProducts,
  getSubscription,
  getUser
} from '@/utils/supabase/queries';

export default async function PricingPage() {
  const supabase = createClient();
  const user = await getUser();
  const [products, subscription] = await Promise.all([
    getProducts(supabase),
    getSubscription(supabase, JSON.parse(user).id)
  ]);
  console.log('🚀 ~ PricingPage ~ subscription:', subscription);

  return (
    <Pricing
      user={JSON.parse(user)}
      products={products ?? []}
      subscription={subscription}
    />
  );
}

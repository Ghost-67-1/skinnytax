import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import {
  getUserDetails,
  getSubscription,
  getUser
} from '@/utils/supabase/queries';
import { UserProfile } from '@clerk/nextjs';

export default async function Account() {
  const supabase = createClient();
  const user = await getUser()
  const [userDetails, subscription] = await Promise.all([
    getUserDetails(supabase),
    getSubscription(supabase, JSON.parse(user).id)
  ]);

  if (!JSON.parse(user)) {
    return redirect('/signin');
  }

  return (
    <UserProfile />
  );
}

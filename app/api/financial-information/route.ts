import { headers } from 'next/headers';
import { currentUser } from '@clerk/nextjs/server';
import { insertFinancial_information } from '@/utils/supabase/admin';

export async function POST(req: Request) {
  // Get the headers
  const headerPayload = headers();

  // Get the body
  const body = await req.json();
  console.log('body:', body);
  const user = await currentUser();
    // @ts-ignore
  const information = processBody(body, user.id);
  console.log('information:', information);
  const Couple_information = await insertFinancial_information(information);
  console.log(Couple_information);
  return new Response(JSON.stringify({ received: true }));
}
    // @ts-ignore
const processBody = (body, user_id) => {
  return { ...body, user_id };
};

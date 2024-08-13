import { headers } from 'next/headers';
import { currentUser } from '@clerk/nextjs/server';
import { insert_promissory_notes_and_trust_deeds } from '@/utils/supabase/admin';

export async function POST(req: Request) {
  // Get the headers
  const headerPayload = headers();

  // Get the body
  const body = await req.json();
  // console.log('body:', body);
  const user = await currentUser();
  // @ts-ignore
  const information = processBody(body, user.id);
  // console.log('information:', information);
  const Couple_information =
    await insert_promissory_notes_and_trust_deeds(information);
  console.log(Couple_information);
  return new Response(JSON.stringify({ received: true }));
}
// @ts-ignore
function processBody(data, user_id) {
  const result = {
      debtors: [],
      children: [],
      is_debt_owed_by_children: data.is_debt_owed_by_children,
  };

  for (const key in data) {
      if (key.startsWith('S1') || key.startsWith('S2')) {
// @ts-ignore
          const debtorIndex = key.slice(1, 2) - 1;
          if (!result.debtors[debtorIndex]) {
// @ts-ignore
              result.debtors[debtorIndex] = {};
          }
// @ts-ignore
          result.debtors[debtorIndex][key.slice(3).toLowerCase()] = data[key];
      }

      if (key.startsWith('S3') || key.startsWith('S4')) {
// @ts-ignore
          const childIndex = key.slice(1, 2) - 3;
          if (!result.children[childIndex]) {
// @ts-ignore
              result.children[childIndex] = {};
          }
// @ts-ignore
          result.children[childIndex][key.slice(3).toLowerCase()] = data[key];
      }
  }

  return {...result, user_id};
}

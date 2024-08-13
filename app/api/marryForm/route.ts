import { headers } from 'next/headers';
import { currentUser } from '@clerk/nextjs/server';
import { insertCoupleInformation } from '@/utils/supabase/admin';

export async function POST(req: Request) {
  // Get the headers
  const headerPayload = headers();

  // Get the body
  const body = await req.json();
  const user = await currentUser();
  //   @ts-ignore
  const information = processBody(body, user.id);
  console.log( "updateCoupleInformation" ,  information );
  const Couple_information = await insertCoupleInformation(
    information.marryCoupleInfomation
  );
  console.log(Couple_information);
  return new Response(JSON.stringify({ received: true }));
}
// @ts-ignore
const processBody = (body, user_id) => {
  // @ts-ignore
  const extractAndRenameKeys = (prefix, obj) => {
    return Object.keys(obj).reduce((acc, key) => {
      if (key.startsWith(prefix)) {
        const newKey = key.replace(prefix, '');
        // @ts-ignore
        acc[newKey] = obj[key];
      }
      return acc;
    }, {});
  };

  const Marry_couple = extractAndRenameKeys('S6_', body.marry_couple);

  return { marryCoupleInfomation: { ...Marry_couple, user_id } };
};

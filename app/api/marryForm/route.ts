import { headers } from 'next/headers';
import { currentUser } from '@clerk/nextjs/server';
import {
  insertCoupleInformation,
  updateCoupleInformation,
  getCoupleInformation,
} from '@/utils/supabase/admin';

export async function POST(req: Request) {
  // Get the headers
  const headerPayload = headers();

  // Get the body
  const body = await req.json();
  console.log('🚀 ~ POST ~ body:', body);
  const user = await currentUser();
  //   @ts-ignore
  const information = processBody(body, user.id);
  //  @ts-ignore
  if (information.marryCoupleInfomation.id) {
    // @ts-ignore
    const Couple_information = await updateCoupleInformation(
      // @ts-ignore
      information.marryCoupleInfomation,
      // @ts-ignore
      information.marryCoupleInfomation.id
    );
  } else {
    const Couple_information = await insertCoupleInformation(
      // @ts-ignore
      information.marryCoupleInfomation
    );
  }
//   const Couple_information = await insertCoupleInformation(
//     information.marryCoupleInfomation
//   );
//   console.log(Couple_information);
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

export async function GET() {
  const user = await currentUser();
  if (!user) return new Response(JSON.stringify({ message: 'User not found' }));

  const information = await getCoupleInformation(user.id);
  console.log("🚀 ~ GET ~ information:", information)

  // Adding prefix with every key in personal_information array
  const personalInformation = information.map((item: any, index: number) => {
    return Object.keys(item).reduce((acc, key) => {
      acc[`S${index + 1}_${key}`] = item[key];
      return acc;
    }, {} as any);
  });

  return new Response(
    JSON.stringify({
      data: {
        ...personalInformation[0],
        ...personalInformation[1],
      },
    })
  );
}


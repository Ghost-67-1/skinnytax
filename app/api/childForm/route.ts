import { headers } from 'next/headers';
import { currentUser } from '@clerk/nextjs/server';
import {
  getChildAdviserInformation,
  getChildInformation,
  getChildOtherInformation,
  insertChildAdviserInformation,
  insertChildInformation,
  insertChildOtherInformation
} from '@/utils/supabase/admin';

export async function POST(req: Request) {
  // Get the headers
  const headerPayload = headers();

  // Get the body
  const body = await req.json();
  const user = await currentUser();
  if (!user) {
    return new Response(JSON.stringify({ error: 'User not found' }), {
      status: 404
    });
  }
  const information = processBody(body, user.id);
  console.log('information:', information);
  const child_information = await insertChildInformation(
    information.childInfomation
  );
  const other_child_information = await insertChildOtherInformation(
    // @ts-ignore
    information.other_info
  );
  const child_adviser_information = await insertChildAdviserInformation(
    // @ts-ignore
    information.adviser
  );
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

  // const child = extractAndRenameKeys('S6_', body.Child_information);
  const Cpa_tax = extractAndRenameKeys('S8_', body.cpa_tax);
  const Financial = extractAndRenameKeys('S9_', body.financial);
  const Other = extractAndRenameKeys('S7_', body.other);
  // @ts-ignore
  const child = body.Child_information.map((item, index) => ({
    ...extractAndRenameKeys(`S${index + 10}_`, item),
    user_id
  }));
  return {
    childInfomation: child,
    other_info: { ...Other, user_id },
    adviser: [
      { ...Cpa_tax, type: 'cpa', user_id },
      { ...Financial, type: 'financial', user_id }
    ]
  };
};

export async function GET() {
  const user = await currentUser();
  if (!user)
    return new Response(JSON.stringify({ error: 'User not found' }), {
      status: 404
    });
  const [
    child_information,
    other_child_information,
    child_adviser_information
  ] = await Promise.all([
    getChildInformation(user.id),
    getChildOtherInformation(user.id),
    getChildAdviserInformation(user.id)
  ]);
  const otherChildInformation = other_child_information.map((item, index) => {
    return Object.keys(item).reduce((acc, key) => {
      // @ts-ignore
      acc[`S7_${key}`] = item[key];
      return acc;
    }, {});
  });
  const childAdviserInformation = child_adviser_information.map(
    (item, index) => {
      return Object.keys(item).reduce((acc, key) => {
        // @ts-ignore
        acc[`S${index + 8}_${key}`] = item[key];
        return acc;
      }, {});
    }
  );
  const childInformation = child_information.map((item, index) => {
    return Object.keys(item).reduce((acc, key) => {
      // @ts-ignore

      acc[`S${index + 10}_${key}`] = item[key];
      return acc;
    }, {});
  });
  return new Response(
    JSON.stringify({
      data: {
        ...otherChildInformation[0],
        ...childAdviserInformation[0],
        ...childAdviserInformation[1],
        ...childInformation[0]
      }
    })
  );
}

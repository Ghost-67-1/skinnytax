import { headers } from 'next/headers';
import { currentUser } from '@clerk/nextjs/server';
import {
  getChildAdviserInformation,
  getChildInformation,
  getChildOtherInformation,
  insertChildAdviserInformation,
  insertChildInformation,
  insertChildOtherInformation,
  updateChildInformation,
  updateChildAdviserInformation,
  updateChildOtherInformation
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

  const childinformation = information.childInfomation.map(async (item) => {
    if (item?.id) {
      // @ts-ignore
      await updateChildInformation(item, item?.id);
      return 0;
    } else {
      return item;
    }
  });

  // @ts-ignore
  const info = childinformation.filter((item) => item !== 0);
  if (info?.length) {
    // @ts-ignore
    await insertChildInformation(info);
  }

  // const child_information = await insertChildInformation(
  //   information.childInfomation
  // );
if(information.other_info.id){
  const other_child_information = await updateChildOtherInformation(
    // @ts-ignore
    information.other_info, information.other_info.id
  );
  
}else{
  const other_child_information = await insertChildOtherInformation(
    // @ts-ignore
    information.other_info
  );
}


  const child_adviser_information = information.adviser.map(async (item) => {
    if (item?.id) {
      // @ts-ignore
      await updateChildAdviserInformation(item, item?.id);
      return 0;
    } else {
      return item;
    }
  });

  // @ts-ignore
  const info2 = child_adviser_information.filter((item) => item !== 0);
  if (info2?.length) {
    // @ts-ignore
    await insertChildAdviserInformation(info2);
  }


  return new Response(JSON.stringify({ received: true }));
}
// @ts-ignore
// const processBody = (body, user_id) => {
//   // @ts-ignore
//   const extractAndRenameKeys = (prefix, obj) => {
//     return Object.keys(obj).reduce((acc, key) => {
//       if (key.startsWith(prefix)) {
//         const newKey = key.replace(prefix, '');
//         // @ts-ignore
//         acc[newKey] = obj[key];
//       }
//       return acc;
//     }, {});
//   };

//   // const child = extractAndRenameKeys('S6_', body.Child_information);
//   const Cpa_tax = extractAndRenameKeys('S8_', body.cpa_tax);
//   const Financial = extractAndRenameKeys('S9_', body.financial);
//   const Other = extractAndRenameKeys('S7_', body.other);
//   // @ts-ignore
//   const child = body.Child_information.map((item, index) => ({
//     ...extractAndRenameKeys(`S${index + 10}_`, item),
//     user_id
//   }));
//   return {
//     childInfomation: child,
//     other_info: { ...Other, user_id },
//     adviser: [
//       { ...Cpa_tax, type: 'cpa', user_id },
//       { ...Financial, type: 'financial', user_id }
//     ]
//   };
// };

// @ts-ignore
const processBody = (body, user_id) => {
  // @ts-ignore
  const extractAndGroupKeys = (obj) => {
    return Object.keys(obj).reduce((acc, key) => {
      const prefixMatch = key.match(/^(S\d+)_/);
      if (prefixMatch) {
        const prefix = prefixMatch[1];
        const newKey = key.replace(`${prefix}_`, '');

        // @ts-ignore
        if (!acc[prefix]) {
          // @ts-ignore
          acc[prefix] = {};
        }

        // @ts-ignore
        acc[prefix][newKey] = obj[key];
      }
      return acc;
    }, {});
  };

  const groupedData = extractAndGroupKeys(body);

  // @ts-ignore
  // const personalInformation = [];
  // @ts-ignore
  const Cpa_tax = groupedData.S8 ? { ...groupedData.S8 } : {};
  // @ts-ignore
  delete groupedData.S8;
  // @ts-ignore
  const Financial = groupedData.S9 ? { ...groupedData.S9 } : {};
  // @ts-ignore
  delete groupedData.S9;
  // @ts-ignore
  const Other = groupedData.S7 ? { ...groupedData.S7 } : {};
  // @ts-ignore
  delete groupedData.S7;

  return {
    other_info: { ...Other, user_id },
    adviser: [
      { ...Cpa_tax, type: 'cpa', user_id },
      { ...Financial, type: 'financial', user_id }
    ],
    childInfomation: [
      ...Object.values(groupedData).map((item) => ({
  // @ts-ignore
        ...item,
        user_id,
  // @ts-ignore
        gender: item.gender ? 'male' : 'female',
  // @ts-ignore
        parents: item.parents === 'other' ? 'Both' : item.parents ? 'S1' : 'S2'
      }))
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
        ...childInformation.reduce((acc, obj) => ({ ...acc, ...obj }), {})
      }
    })
  );
}

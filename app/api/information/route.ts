import { headers } from 'next/headers';
import { currentUser } from '@clerk/nextjs/server';
import {
  getDecisionsPersonalInformation,
  getOtherPersonalInformation,
  getPersonalInformation,
  insertDecisionsPersonalInformation,
  insertOtherPersonalInformation,
  insertPersonalInformation,
  updatePersonalInformation
} from '@/utils/supabase/admin';

export async function POST(req: Request) {
  // Get the headers
  // const headerPayload = headers();
  // Get the body
  const body = await req.json();
  const user = await currentUser();
  console.log('🚀 ~ POST ~ user:', user);
  // @ts-ignore
  const information = processBody(body, user.id);
  console.log(information);

  const personalInfo = information.personalInfomation.map(async(item) => {
    // @ts-ignore
    if (item?.id) { 
      // @ts-ignore
      await updatePersonalInformation(item, item?.id);
      return 0;
    } else {
      return item;
    }
  });
  // @ts-ignore
  const info = personalInfo.filter((item) => item !== 0);
  if (info?.length) {
    // @ts-ignore
    await insertPersonalInformation(info);
  }
  // await insertOtherPersonalInformation(information.other_info);
  // @ts-ignore

  const discussion = information.discussion.map(async(item) => {
    // @ts-ignore
    if (item?.id) {
      // @ts-ignore
      await updatePersonalInformation(item, item?.id);
      return 0;
    } else {
      return item;
    }
  });
  // @ts-ignore
  const discussioninfo = discussion.filter((item) => item !== 0);
  if (discussioninfo?.length) {
    // @ts-ignore
    await insertDecisionsPersonalInformation(discussioninfo);
  }
  return new Response(
    JSON.stringify({ message: 'Form submitted successfully' })
  );
}

export async function GET() {
  const user = await currentUser();
  if (!user) return new Response(JSON.stringify({ message: 'User not found' }));
  const [personal_information, other_information, user_discussion_information] =
    await Promise.all([
      getPersonalInformation(user.id),
      getOtherPersonalInformation(user.id),
      getDecisionsPersonalInformation(user.id)
    ]);
  // there is spose type in personal_infomation array so i want to add prefix with every key
  const personalInformation = personal_information.map((item, index) => {
    return Object.keys(item).reduce((acc, key) => {
      // @ts-ignore
      acc[`S${index + 1}_${key}`] = item[key];
      return acc;
    }, {});
  });
  const otherInformation = other_information.map((item, index) => {
    return Object.keys(item).reduce((acc, key) => {
      // @ts-ignore
      acc[`S3_${key}`] = item[key];
      return acc;
    }, {});
  });
  const userDiscussionInformation = user_discussion_information.map(
    (item, index) => {
      return Object.keys(item).reduce((acc, key) => {
        // @ts-ignore
        acc[`S${index + 4}_${key}`] = item[key];
        return acc;
      }, {});
    }
  );
  return new Response(
    JSON.stringify({
      data: {
        ...personalInformation[0],
        ...personalInformation[1],
        ...otherInformation[0],
        ...userDiscussionInformation[0],
        ...userDiscussionInformation[1]
      }
    })
  );
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

  const s1 = extractAndRenameKeys('S1_', body);
  const s2 = extractAndRenameKeys('S2_', body);
  const other_info = extractAndRenameKeys('S3_', body);
  const financial = extractAndRenameKeys('S4_', body);
  const medical = extractAndRenameKeys('S5_', body);

  return {
    personalInfomation: [
      { ...s1, user_id, spouse: 'S1' },
      { ...s2, user_id, spouse: 'S2' }
    ],
    other_info: { ...other_info, user_id },
    discussion: [
      { ...medical, discussion: 'medical', user_id },
      { ...financial, discussion: 'financial', user_id }
    ]
  };
};

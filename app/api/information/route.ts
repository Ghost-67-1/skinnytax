import { headers } from 'next/headers';
import { currentUser } from '@clerk/nextjs/server';
import { insertDecisionsPersonalInformation, insertOtherPersonalInformation, insertPersonalInformation } from '@/utils/supabase/admin';

export async function POST(req: Request) {
  // Get the headers
  const headerPayload = headers();

  // Get the body
  const body = await req.json();
  const user = await currentUser();

  // console.log(body)
  // const { S1_email, S1_SSN, S1_assisted_living_care, S1_date_of_birth, S1_employer, S1_full_name, S1_legal_aka, S1_military_veteran, S1_occupation, S1_phone, S1_previously_married, S1_retired, S1_us_citizen, S1_work_phone } = body.S1;

  // const personalInfomation = [bod]
  const information = processBody(body, user.id);
  console.log(information)
  const personal_information = await insertPersonalInformation(information.personalInfomation)
  const other_personal_information = await insertOtherPersonalInformation(information.other_info)
  const disicions_personal_information = await insertDecisionsPersonalInformation(information.discussion)
  console.log(personal_information)
  console.log(other_personal_information)
  console.log(disicions_personal_information)
  return new Response(JSON.stringify({ received: true }));
}


const processBody = (body, user_id) => {
  const extractAndRenameKeys = (prefix, obj) => {
    return Object.keys(obj).reduce((acc, key) => {
      if (key.startsWith(prefix)) {
        const newKey = key.replace(prefix, '');
        acc[newKey] = obj[key];
      }
      return acc;
    }, {});
  };

  const s1 = extractAndRenameKeys('S1_', body.S1);
  const s2 = extractAndRenameKeys('S2_', body.S2);
  const other_info = extractAndRenameKeys('S3_', body.other);
  const finatioal = extractAndRenameKeys('S4_', body.decission_1);
  const medical = extractAndRenameKeys('S5_', body.decission_2);

  return { personalInfomation: [{ ...s1, user_id }, { ...s2, user_id }], other_info: { ...other_info, user_id }, discussion: [{ ...medical, discussion: 'medical', user_id }, { ...finatioal, discussion: "financial", user_id }] };
};
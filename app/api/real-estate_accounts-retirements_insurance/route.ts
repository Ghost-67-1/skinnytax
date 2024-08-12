import { headers } from 'next/headers';
import { currentUser } from '@clerk/nextjs/server';
import {
  insert_ira_accounts_and_retirement_plans,
  insert_life_insurance,
  insert_real_estate_information
} from '@/utils/supabase/admin';

export async function POST(req: Request) {
  // Get the headers
  const headerPayload = headers();

  // Get the body
  const body = await req.json();
  const user = await currentUser();
  console.log('body step one:', body);
  const real_estate = await insert_real_estate_information(
    processBody(body.real_estate, user.id)
  );
  console.log('real_estate:', real_estate);
  const ira_accounts_and_retirement_plans =
    await insert_ira_accounts_and_retirement_plans(
      processBody(body.ira_accounts_and_retirement_plans, user.id)
    );
  console.log('ira_accounts_and_retirement_plans:', ira_accounts_and_retirement_plans);
  const life_insurance = await insert_life_insurance(
    processBody(body.life_insurance, user.id)
  );
  console.log('life_insurance:', life_insurance);
  return new Response(
    JSON.stringify({
      received: true,
      data: {
        real_estate,
        ira_accounts_and_retirement_plans,
        life_insurance
      }
    })
  );
}

const processBody = (body, user_id) => {
  return { ...body, user_id };
};

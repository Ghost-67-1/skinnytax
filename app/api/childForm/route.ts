import { headers } from 'next/headers';
import { currentUser } from '@clerk/nextjs/server';
import { insertChildAdviserInformation, insertChildInformation, insertChildOtherInformation } from '@/utils/supabase/admin';

export async function POST(req: Request) {
    // Get the headers
    const headerPayload = headers();

    // Get the body
    const body = await req.json();
    const user = await currentUser();
    const information = processBody(body, user_id);
    console.log(information)
    const child_information = await insertChildInformation(information.childInfomation)
    const other_child_information = await insertChildOtherInformation(information.other_info)
    const child_adviser_information = await insertChildAdviserInformation(information.adviser)
    console.log(child_information)
    console.log(other_child_information)
    console.log(child_adviser_information)
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

    const child = extractAndRenameKeys('S6_', body.Child_information);
    const Cpa_tax = extractAndRenameKeys('S8_', body.cpa_tax);
    const Financial = extractAndRenameKeys('S9_', body.financial);
    const Other = extractAndRenameKeys('S7_', body.other);
    

    return { childInfomation: { ...child, user_id }, other_info: { ...Other, user_id }, adviser: [{ ...Cpa_tax, discussion: 'cpa_tax', user_id }, { ...Financial, discussion: "financial", user_id }] };
};
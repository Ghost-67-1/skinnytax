// pages/api/saveData.ts
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  status: string;
  data?: any;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    console.log('Received data:', req.body);

    // Here you would typically handle database operations or other processing
    // For now, we'll just send back a success message

    res.status(200).json({ status: 'success', data: req.body });
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ status: 'error', message: `Method ${req.method} Not Allowed` });
  }
}
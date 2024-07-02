// pages/api/current.ts
import serverAuth from '@/libs/serverAuth';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { currentUser } = await serverAuth(req, res);

    if (!currentUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.status(200).json(currentUser);
  } catch (error) {
    return res.status(400).json({ error: 'Bad Request' });
  }
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { uuid } from 'uuidv4';

import { client } from '../../utils/client';


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method==="PUT"){
    const {userId, postId , like} = req.body
    const data = await
  }
}

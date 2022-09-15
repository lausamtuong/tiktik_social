// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { uuid } from 'uuidv4';

import { client } from '../../utils/client';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method==="PUT"){
    const {userId, postId , like} = req.body
    const data = await client.patch(postId).setIfMissing({like:[]}).insert('after','like[-1]',[{_key:uuid(),_ref:userId})]
  }
}

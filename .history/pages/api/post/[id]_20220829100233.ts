// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {client } from '../../../utils/client'
import {allPostsQuery} from '../../../utils/queries'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
 if (req.method==='GET'){
    const {id} = req.query
    const query = allPostsQuery()
    const data = await client.fetch(query)
    return res.status(200).json(data)
}

}

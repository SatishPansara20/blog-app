import { NextApiRequest, NextApiResponse } from 'next'
import { products } from '../../data/index'

import { Product, ResponseError } from '@/types'

export default function personHandler(
  req: NextApiRequest,
  res: NextApiResponse<Product | ResponseError>
) {
  const { query } = req
  const { id } = query
  const person = products.find((p) => p.id === id)

  // User with id exists
  return person
    ? res.status(200).json(person)
    : res.status(404).json({ message: `User with id: ${id} not found.` })
}

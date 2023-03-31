import { NextApiRequest, NextApiResponse } from "next";
import { products } from "../../data/index";

import { Product, ResponseError } from "@/types";

export default function GetSingleProduct(
  _req: NextApiRequest,
  res: NextApiResponse<Product | ResponseError>
) {
  const { productId } = _req?.query;

  const product = products.find((p) => p.id === productId);

  return product
    ? res.status(200).json(product)
    : res
        .status(404)
        .json({ message: `User with id: ${productId} not found.` });
}

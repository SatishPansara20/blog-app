import { Product } from "@/types";
import type { NextApiRequest, NextApiResponse } from "next";

import { products } from "../data/index";

export default function GetAllProducts(
  _req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  return res.status(200).json(products);
}

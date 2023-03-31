import type { NextApiRequest, NextApiResponse } from "next";
import { products } from "../../data/index";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).send({ message: "Only POST requests allowed" });
  }

  const body = req.body;

  console.log("We are in  the handler");

  console.log("NextApiRequest Object ", req);

  console.log("We in the body body: ++++++++++++++++++++++++++++++ ", body);

  const product = products.findIndex((p) => p.id === body.product.id);

  Object.assign(products[product], body.product);

  res.status(200).json(products[product]);
}

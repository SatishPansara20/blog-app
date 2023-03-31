import { Product } from "@/types";

import React from "react";

const GetAllProducts = async (): Promise<Product[]> => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_HOST_1 + `api/product/getAllProducts`
  );

  const data = await res?.json();

  return data;
};

export default GetAllProducts;

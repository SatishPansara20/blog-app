import { Product } from "@/types";

export async function getAllProducts() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_HOST_1 + `api/product/getAllProducts`
  );

  // const res = await fetch(
  //   `http://localhost:127.0.0.1/api/product/getAllProducts`
  // );

  const data: Product[] = await res.json();

  return data;
}

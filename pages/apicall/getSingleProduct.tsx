import { Product, User } from "@/types";

export async function getSingleProduct({
  id,
}: {
  id: string;
}): Promise<Product> {
  const res = await fetch(process.env.NEXT_PUBLIC_HOST_1 + `api/product/${id}`);
  //  const res = await fetch(`http://localhost:3000/api/product/${id}`);

  if (!res.ok) throw new Error("failed to fetch getSingleProduct");

  const data = await res.json();

  return data;
}

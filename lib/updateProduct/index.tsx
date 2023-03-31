import { Product } from "@/types";

let headers = new Headers();

// headers.append("Content-Type", "application/json");
// headers.append("Content-Type", "application/x-www-form-urlencoded");

headers.append("Access-Control-Allow-Origin", "http://localhost:3000/");

headers.append("Access-Control-Allow-Credentials", "true");

headers.append("GET", "POST");

const UpdateProduct = async (product: Product): Promise<Product> => {
  const url =
    `https://cryptic-headland-94862.herokuapp.com/` +
    process.env.NEXT_PUBLIC_HOST_1 +
    `api/product/edit`;

  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(product),
    headers: headers,
  });

  const data = await res?.json();

  return data;
};

export default UpdateProduct;

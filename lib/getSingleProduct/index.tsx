import { Product, User } from "@/types";
import { GetStaticPropsContext } from "next";

const productInfo = {
  id: "1",
  productName: "Product",
  productPrice: 125,
  productQuantity: 5,
  productImage: "",
  productStatus: "In Stock",
  productDescription: "All About the Product",
};

const GetSingleProduct = async (productId: string): Promise<Product> => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_HOST_1 + `api/product/${productId}`
  );

  const data = await res?.json();

  return data;
};

export default GetSingleProduct;

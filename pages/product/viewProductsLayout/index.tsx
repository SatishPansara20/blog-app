import React from "react";
import { InferGetStaticPropsType } from "next";
import { GetStaticProps } from "next";
import Image from "next/image";

import ProductImage from "@/resources/images/product_img.png";
import Link from "next/link";
import { Product } from "../../../types";
import { getAllProducts } from "@/pages/apicall/getallproduct";

export async function getStaticProps() {
  const data = await getAllProducts();
  return { props: { data } };
}

type myLoader = {
  src: string;
  width: number;
  quality: number;
};

const myLoader = ({ src, width, quality }: myLoader) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};

const ViewProuducts = ({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(data);
  return (
    <>
      <div className="container mx-auto">
        <div className="bg-white flex place-content-center">
          <div className="overscroll-contain mx-auto my-auto max-w-2xl py-2 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-2xl font-bold text-center uppercase tracking-tight text-gray-900">
              PRODUCTS
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {data?.map((product) => (
                <div key={product.id} className="relative">
                  {/* Product Image */}
                  <div className=" aspect-w-1 aspect-h-1  overflow-hidden rounded-md bg-gray-200 hover:opacity-75 lg:aspect-none">
                    <p>
                      <Link href={`/product/${product.id}`}>
                        <Image
                          // src={`${imageURL}${product.image}`}
                          src={ProductImage}
                          alt="product imaage"
                          className="h-full w-full object-contain"
                          unoptimized
                          priority
                        />
                      </Link>
                    </p>
                  </div>
                  {/* Product Info */}
                  <div
                    className="p-2  rounded-md
                 bg-gray-300 mt-4 flex flex-wrap justify-between items-center"
                  >
                    {/* prod_name */}
                    <div className="flex flex-col flex-wrap">
                      <h3 className="relative text-sm text-gray-700">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.productName}
                      </h3>
                      <p className=" flex-wrap mt-1 text-sm text-gray-500">
                        In Stock: {product.productQuantity}
                      </p>
                    </div>

                    {/* prod_price */}
                    <p className="p-2 text-sm font-medium text-gray-900">
                      ${product.productPrice}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewProuducts;

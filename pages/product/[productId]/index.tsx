import React, { useState } from "react";

// import ProductImage from "@/resources/images/product_img.png";
import Image from "next/image";
import GetSingleProduct from "@/lib/getSingleProduct";
import { Product } from "@/types";
import GetAllProducts from "@/lib/getAllProducts";
import { useRouter } from "next/router";
import { Spin } from "antd";
import { ParsedUrlQuery } from "querystring";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

const ProductImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvhX8n4_M1SDc5noL6OJlDj_Oh7gNamCizJftJ7NFA&s";

interface IParams extends ParsedUrlQuery {
  productId: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await GetAllProducts();
  const paths = data.map((item: Product) => ({
    params: { productId: item.id.toString() },
  }));

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { productId } = context.params as IParams;

  const productInfo = await GetSingleProduct(productId);

  return { props: { productInfo } };
};

const Page = ({
  productInfo,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { isFallback, push } = useRouter();

  const [incrementAmount, setIncrementAmount] = useState(0);

  const handleDeleteProduct = async () => {};

  const handleEdit = async () => {
    push("/product/edit");
  };

  const handleQChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIncrementAmount(Number(e.target.value));
  };

  const handleDecrement = () => {
    setIncrementAmount(incrementAmount - 1);
  };

  const handleIncrement = () => {
    setIncrementAmount(incrementAmount + 1);
  };

  const handleSelectedProduct = () => {};

  if (isFallback) {
    return <Spin />;
  }

  return (
    <div className="container mx-auto">
      <div className="m-4 flex max-h-full max-w-full justify-center ">
        <div className="m-2 flex flex-col md:flex-col md:max-w-fit rounded-lg bg-white shadow-lg">
          <Image
            // src={`${imageURL}${product.image}`}
            src={ProductImage}
            width={200}
            height={120}
            alt="product imaage"
            className="h-full w-full object-contain"
            priority
          />
          <div className="p-6 flex flex-col justify-start md:m-5">
            <h5 className="text-gray-900 text-xl font-medium mb-2">
              {productInfo.productName}
            </h5>
            <p className="text-gray-700 text-base mb-4">
              {productInfo.productDescription}
            </p>

            <div
              className="p-2 rounded-md
           bg-gray-300 mt-4 flex justify-between items-center"
            >
              <div>
                <p className="mt-1 text-sm text-white-900">
                  Price : ${productInfo.productPrice}
                </p>
              </div>

              <p className="p-2 text-sm font-medium text-gray-900">
                In Stock : {productInfo.productQuantity}
              </p>
            </div>
            <div
              className="p-2 rounded-md
           bg-gray-300 mt-4 flex justify-between items-center"
            >
              <div className=" m-2 flex justify-start content-center  ">
                {/* //NOTE: Decrement Button */}
                <button
                  disabled={incrementAmount <= 0}
                  onClick={handleDecrement}
                  className="disabled:opacity-80 cursor-pointer disabled:cursor-text"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mx-2 w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <input
                  className="mx-2 w-5 p-1 border flex grow-1 flex-wrap  "
                  type="text"
                  value={incrementAmount}
                  onChange={handleQChange}
                  disabled
                />

                {/* //NOTE: Increment Button */}

                <button
                  disabled={incrementAmount >= productInfo.productQuantity}
                  onClick={handleIncrement}
                  className="disabled:opacity-80 cursor-pointer disabled:cursor-text"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              {/* //NOTE: ADD to CART */}

              <button
                type="button"
                onClick={handleSelectedProduct}
                className="inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out"
              >
                Add to Cart
              </button>
            </div>

            <div className="m-2 flex gap-4 justify-center origin-bottom">
              {/* //NOTE: Edit Button */}
              <button onClick={handleEdit}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                </svg>
              </button>

              {/* //NOTE: Delete Button */}
              <button onClick={handleDeleteProduct}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

// const productInfo = {
//   id: "1",
//   productName: "Product",
//   productPrice: 125,
//   productQuantity: 5,
//   productImage: "",
//   productStatus: "In Stock",
//   productDescription: "All About the Product",
// };

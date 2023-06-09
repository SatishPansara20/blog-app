import UpdateProduct from "@/lib/updateProduct";
import React from "react";

import { useState } from "react";

const EditProductInfo = () => {
  const [newProductInfo, setNewProductInfo] = useState({
    prod_name: "New Product",
    prod_description: "Can You edit your product",
    prod_price: "200",
    prod_quantity: "15",
    image: "",
  });

  // const url = new URL(window.location);
  // url.searchParams.set("editinfo", "viewproduct");
  // console.log(url.origin + `/viewproduct/${id}`);

  // window.history.pushState({}, "", url.origin + `/viewproduct/${id}`);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setNewProductInfo({
      ...newProductInfo,
      [e.currentTarget.name]: e.currentTarget.value.trim(),
    });
  };

  //   const hadnleImage = (event) => {
  //     const newImage = event.target.files[0].name.split(" ");
  //     const newImageWithoutSpace = newImage.join("");

  //     const imageArray = newImageWithoutSpace.split(".");
  //     const newImageURL = `${imageArray[0]}_.${imageArray[1]}`;
  //     setNewProductInfo({
  //       ...newProductInfo,
  //       image: newImageURL,
  //     });
  //   };

  const handleSave = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const productInfo = {
        id: "17",
        productName: newProductInfo.prod_name,
        productPrice: Number(newProductInfo.prod_price),
        productQuantity: Number(newProductInfo.prod_quantity),
        productImage: "",
        productStatus: "In Stock",
        productDescription: newProductInfo.prod_description,
      };

      const productResult = await UpdateProduct(productInfo);

      console.log("productResult", productResult);
    } catch (error) {
      console.log("Error while Updating the Product : ", error);
    }
  };

  const edit = (
    <div className="m-4 flex max-h-full max-w-full justify-center ">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="m-2 flex flex-col md:flex-row md:max-w-auto rounded-lg bg-white shadow-lg">
          {/* <div>
            <label
              htmlFor="imageFile"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Choose New input
            </label>

            <input
              name="imageFile"
              accept="image/png, image/jpeg"
              className="form-control block w-full mpx-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="file"
              id="imageFile"
              onChange={hadnleImage}
            />

            <img
              className=" max-w-full h-auto md:m-2 md:items-center md:h-auto md:w-auto  object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
              src={`${imageURL}${newProductInfo.image}`}
              alt="Product Look"
            />
          </div> */}

          <div className="p-6 flex flex-col justify-start">
            <label htmlFor="prod_name">Product name : </label>
            <input
              name="prod_name"
              value={newProductInfo.prod_name}
              className="form-control w-full px-3 py-1.5 block text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
              onChange={handleChange}
              id="prod_name"
              placeholder="Product Name"
            />

            <label
              htmlFor="prod_description"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Product Description
            </label>
            <textarea
              name="prod_description"
              value={newProductInfo.prod_description}
              onChange={handleChange}
              className="  form-control  block  w-full  px-3  py-1.5  text-base  font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded  transition  ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="prod_description"
              placeholder="Product Content"
            />

            <label
              htmlFor="prod_price"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Product Price
            </label>
            <input
              type="number"
              name="prod_price"
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="prod_price"
              value={newProductInfo.prod_price}
              onChange={handleChange}
              placeholder="Price"
            />

            <label
              htmlFor="prod_quantity"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Product Quantity
            </label>
            <input
              type="number"
              name="prod_quantity"
              className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
              id="prod_quantity"
              value={newProductInfo.prod_quantity}
              onChange={handleChange}
              placeholder="Quantity"
            />

            <div className="m-2 flex gap-4 justify-center origin-bottom">
              <button
                onClick={handleSave}
                type="button"
                className="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
              >
                Save Change
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );

  return <>{edit}</>;
};

export default EditProductInfo;

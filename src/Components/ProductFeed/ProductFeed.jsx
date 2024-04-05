import React, { useEffect, useState } from "react";
import useGetProducts from "../../customHooks/useGetProducts";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../Store/AddToCartSlice";
import noImage from "/Banners/noImage.png";

const ProductFeed = () => {
  const products = useGetProducts(); // Fetch products using the custom hook
  const [productData, setProductData] = useState([]);
  const maxRate = 3;
  const minRate = 5;
  const [rating, setRating] = useState(() => {
    return Math.floor(Math.random() * (maxRate - minRate + 1)) + minRate;
  });
  // Update productData state when products are fetched
  useEffect(() => {
    setProductData(products);
  }, [products]);

  const truncateDescription = (description, maxLength) => {
    if (description.length <= maxLength) {
      return description;
    }
    const truncatedDescription = description
      .split(" ")
      .slice(0, maxLength)
      .join(" ");
    return truncatedDescription + "...";
  };
  const dispatch = useDispatch();

  const addItem = data => {
    dispatch(addToBasket(data));
  };

  return (
    <>
      <div className="w-[100%] h-auto p-5 flex justify-center items-center flex-wrap xl:-mt-60 lg:-mt-60">
        {productData.slice(0, 4).map(product => (
          <div
            key={product.id}
            className="h-[350px] w-64 border-2 flex flex-col justify-center items-center m-2 py-5 px-3 bg-white z-30">
            <div className="h-[35%] w-full flex justify-center items-center">
              <img
                src={product.images[0]}
                className="h-[100%] mix-blend-darken "
              />
            </div>
            <div className="w-full flex justify-start h-[30%]">
              <p className="text-sm font-semibold px-2">
                {truncateDescription(product.title, 10)}
              </p>
            </div>
            <div>
              <div>
                <p className="text-sm text-gray-600 text-start">
                  {truncateDescription(product.description, 10)}
                </p>
              </div>
              <span className="flex justify-start items-start w-full">
                {Array(rating)
                  .fill()
                  .map((_, i) => {
                    return (
                      <i
                        key={i}
                        className="fa-solid fa-star text-yellow-400"></i>
                    );
                  })}
              </span>
            </div>
            <div className="w-[100%]">
              <p className="text-base font-bold mt-2">
                ₹ {(product.price * 83).toFixed(2)}
              </p>
            </div>
            <div className="w-full flex justify-center items-center">
              <button
                onClick={() => addItem(product)}
                className="h-8 w-[100%] bg-yellow-500 hover:bg-yellow-400 text-white font-semibold flex justify-center items-center ">
                Add to basket
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="w-[100%] h-auto p-5 flex justify-center items-start flex-wrap">
        {productData.slice(7, 11).map(product => (
          <div
            key={product.id}
            className=" col-span-2 h-[350px] w-64 border-2 flex flex-col justify-center items-center m-2 py-5 px-3 bg-white z-30">
            <div className="h-[35%] w-full flex justify-center items-center">
              <img
                src={product.images[0]}
                className="h-[100%] mix-blend-darken "
              />
            </div>
            <div className="w-full flex justify-start h-[30%]">
              <p className="text-sm font-semibold px-2">{product.title}</p>
            </div>
            <div>
              <div>
                <p className="text-sm text-gray-600 text-start">
                  {truncateDescription(product.description, 10)}
                </p>
              </div>
              <span className="flex justify-start items-start w-full">
                {Array(rating)
                  .fill()
                  .map((_, i) => {
                    return (
                      <i
                        key={i}
                        className="fa-solid fa-star text-yellow-400"></i>
                    );
                  })}
              </span>
            </div>
            <div className="w-[100%]">
              <p className="text-base font-bold mt-2">
                ₹ {(product.price * 83).toFixed(2)}
              </p>
            </div>
            <div className="w-full flex justify-center items-center">
              <button
                onClick={()=>addItem(product)}
                className="h-8 w-[100%] bg-yellow-500 hover:bg-yellow-400 text-white font-semibold flex justify-center items-center ">
                Add to basket
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full h-[250px] flex justify-center items-center">
        <img
          src="/Banners/bannerSeven.png"
          className=" h-[100%] w-[full] max-md:hidden"
        />
        {productData.slice(11, 12).map(product => (
          <div
            key={product.id}
            className="h-[250px] w-64 border-2 flex flex-col justify-center items-center ml-4 py-1 px-3 bg-white z-30">
            <div className="h-[35%] w-full flex justify-center items-center">
              <img
                src={product.images[0]}
                className="h-[100%] mix-blend-darken "
              />
            </div>
            {/* <div className="w-full flex justify-start h-[30%]">
              <p className="text-sm font-semibold px-2">
                {truncateDescription(product.title, 10)}
              </p>
            </div> */}
            <div>
              <div>
                <p className="text-sm text-gray-600 text-start">
                  {truncateDescription(product.description, 5)}
                </p>
              </div>
              <span className="flex justify-start items-start w-full">
                {Array(rating)
                  .fill()
                  .map((_, i) => {
                    return (
                      <i
                        key={i}
                        className="fa-solid fa-star text-yellow-400"></i>
                    );
                  })}
              </span>
            </div>
            <div className="w-[100%]">
              <p className="text-base font-bold mt-2">
                ₹ {(product.price * 83).toFixed(2)}
              </p>
            </div>
            <div className="w-full flex justify-center items-center">
              <button
                onClick={()=>addItem(product)}
                className="h-8 w-[100%] bg-yellow-500 hover:bg-yellow-400 text-white font-semibold flex justify-center items-center ">
                Add to basket
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="w-[100%] h-auto p-5 flex justify-center items-center flex-wrap">
        {productData.slice(13, 17).map(product => (
          <div
            key={product.id}
            className="h-[350px] w-64 border-2 flex flex-col justify-center items-center m-2 py-5 px-3 bg-white z-30">
            <div className="h-[35%] w-full flex justify-center items-center">
              <img
                src={product.images[0]}
                className="h-[100%] mix-blend-darken "
              />
            </div>
            <div className="w-full flex justify-start h-[30%]">
              <p className="text-sm font-semibold px-2">
                {truncateDescription(product.title, 10)}
              </p>
            </div>
            <div>
              <div>
                <p className="text-sm text-gray-600 text-start">
                  {truncateDescription(product.description, 10)}
                </p>
              </div>
              <span className="flex justify-start items-start w-full">
                {Array(rating)
                  .fill()
                  .map((_, i) => {
                    return (
                      <i
                        key={i}
                        className="fa-solid fa-star text-yellow-400"></i>
                    );
                  })}
              </span>
            </div>
            <div className="w-[100%]">
              <p className="text-base font-bold mt-2">
                ₹ {(product.price * 83).toFixed(2)}
              </p>
            </div>
            <div className="w-full flex justify-center items-center">
              <button
                onClick={()=>addItem(product)}
                className="h-8 w-[100%] bg-yellow-500 hover:bg-yellow-400 text-white font-semibold flex justify-center items-center ">
                Add to basket
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="w-[100%] h-auto p-5 flex justify-center items-center flex-wrap">
        {productData.slice(17, 20).map(product => (
          <div
            key={product.id}
            className="h-[350px] border-2 w-[350px] flex flex-col justify-center items-center m-2 py-5 px-3 bg-white z-30">
            <div className="h-[35%] w-full flex justify-center items-center">
              <img
                src={product.images[0]}
                className="h-[100%] mix-blend-darken "
              />
            </div>
            <div className="w-full flex justify-start h-[30%]">
              <p className="text-sm font-semibold px-2">
                {truncateDescription(product.title, 10)}
              </p>
            </div>
            <div>
              <div>
                <p className="text-sm text-gray-600 text-start">
                  {truncateDescription(product.description, 10)}
                </p>
              </div>
              <span className="flex justify-start items-start w-full">
                {Array(rating)
                  .fill()
                  .map((_, i) => {
                    return (
                      <i
                        key={i}
                        className="fa-solid fa-star text-yellow-400"></i>
                    );
                  })}
              </span>
            </div>
            <div className="w-[100%]">
              <p className="text-base font-bold mt-2">
                ₹ {(product.price * 83).toFixed(2)}
              </p>
            </div>
            <div className="w-full flex justify-center items-center">
              <button
                onClick={()=>addItem(product)}
                className="h-8 w-[100%] bg-yellow-500 hover:bg-yellow-400 text-white font-semibold flex justify-center items-center ">
                Add to basket
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="w-[100%] h-auto p-5 flex justify-center items-start flex-wrap">
        {productData.slice(21, 29).map(product => (
          <div
            key={product.id}
            className=" col-span-2 h-[350px] w-64 border-2 flex flex-col justify-center items-center m-2 py-5 px-3 bg-white z-30">
            <div className="h-[35%] w-full flex justify-center items-center">
              <img
                src={product.images[0]}
                className="h-[100%] mix-blend-darken "
              />
            </div>
            <div className="w-full flex justify-start h-[30%]">
              <p className="text-sm font-semibold px-2">{product.title}</p>
            </div>
            <div>
              <div>
                <p className="text-sm text-gray-600 text-start">
                  {truncateDescription(product.description, 10)}
                </p>
              </div>
              <span className="flex justify-start items-start w-full">
                {Array(rating)
                  .fill()
                  .map((_, i) => {
                    return (
                      <i
                        key={i}
                        className="fa-solid fa-star text-yellow-400"></i>
                    );
                  })}
              </span>
            </div>
            <div className="w-[100%]">
              <p className="text-base font-bold mt-2">
                ₹ {(product.price * 83).toFixed(2)}
              </p>
            </div>
            <div className="w-full flex justify-center items-center">
              <button
                onClick={()=>addItem(product)}
                className="h-8 w-[100%] bg-yellow-500 hover:bg-yellow-400 text-white font-semibold flex justify-center items-center ">
                Add to basket
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full h-[250px] flex justify-center items-center">
        <img
          src="/Banners/bannerFive.jpg"
          className=" h-[100%] w-[full] max-md:hidden"
        />
        {productData.slice(34, 35).map(product => (
          <div
            key={product.id}
            className="h-[250px] w-64 border-2 flex flex-col justify-center items-center ml-4 py-1 px-3 bg-white z-30">
            <div className="h-[35%] w-full flex justify-center items-center">
              <img
                src={product.images[0]}
                className="h-[100%] mix-blend-darken "
              />
            </div>
            {/* <div className="w-full flex justify-start h-[30%]">
              <p className="text-sm font-semibold px-2">
                {truncateDescription(product.title, 10)}
              </p>
            </div> */}
            <div>
              <div>
                <p className="text-sm text-gray-600 text-start">
                  {truncateDescription(product.description, 5)}
                </p>
              </div>
              <span className="flex justify-start items-start w-full">
                {Array(rating)
                  .fill()
                  .map((_, i) => {
                    return (
                      <i
                        key={i}
                        className="fa-solid fa-star text-yellow-400"></i>
                    );
                  })}
              </span>
            </div>
            <div className="w-[100%]">
              <p className="text-base font-bold mt-2">
                ₹ {(product.price * 83).toFixed(2)}
              </p>
            </div>
            <div className="w-full flex justify-center items-center">
              <button
                onClick={()=>addItem(product)}
                className="h-8 w-[100%] bg-yellow-500 hover:bg-yellow-400 text-white font-semibold flex justify-center items-center ">
                Add to basket
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="w-[100%] h-auto p-5 flex justify-center items-center flex-wrap">
        {productData.slice(30, 33).map(product => (
          <div
            key={product.id}
            className="h-[350px] border-2 w-[350px] flex flex-col justify-center items-center m-2 py-5 px-3 bg-white z-30">
            <div className="h-[35%] w-full flex justify-center items-center">
              <img
                src={product.images[0]}
                className="h-[100%] mix-blend-darken "
              />
            </div>
            <div className="w-full flex justify-start h-[30%]">
              <p className="text-sm font-semibold px-2">
                {truncateDescription(product.title, 10)}
              </p>
            </div>
            <div>
              <div>
                <p className="text-sm text-gray-600 text-start">
                  {truncateDescription(product.description, 10)}
                </p>
              </div>
              <span className="flex justify-start items-start w-full">
                {Array(rating)
                  .fill()
                  .map((_, i) => {
                    return (
                      <i
                        key={i}
                        className="fa-solid fa-star text-yellow-400"></i>
                    );
                  })}
              </span>
            </div>
            <div className="w-[100%]">
              <p className="text-base font-bold mt-2">
                ₹ {(product.price * 83).toFixed(2)}
              </p>
            </div>
            <div className="w-full flex justify-center items-center">
              <button
                onClick={()=>addItem(product)}
                className="h-8 w-[100%] bg-yellow-500 hover:bg-yellow-400 text-white font-semibold flex justify-center items-center ">
                Add to basket
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="w-[100%] h-auto p-5 flex justify-center items-start flex-wrap">
        {productData.slice(36, 40).map(product => (
          <div
            key={product.id}
            className=" col-span-2 h-[350px] w-64 border-2 flex flex-col justify-center items-center m-2 py-5 px-3 bg-white z-30">
            <div className="h-[35%] w-full flex justify-center items-center">
              <img
                src={product.images[0]}
                className="h-[100%] mix-blend-darken "
              />
            </div>
            <div className="w-full flex justify-start h-[30%]">
              <p className="text-sm font-semibold px-2">{product.title}</p>
            </div>
            <div>
              <div>
                <p className="text-sm text-gray-600 text-start">
                  {truncateDescription(product.description, 10)}
                </p>
              </div>
              <span className="flex justify-start items-start w-full">
                {Array(rating)
                  .fill()
                  .map((_, i) => {
                    return (
                      <i
                        key={i}
                        className="fa-solid fa-star text-yellow-400"></i>
                    );
                  })}
              </span>
            </div>
            <div className="w-[100%]">
              <p className="text-base font-bold mt-2">
                ₹ {(product.price * 83).toFixed(2)}
              </p>
            </div>
            <div className="w-full flex justify-center items-center">
              <button
                onClick={()=>addItem(product)}
                className="h-8 w-[100%] bg-yellow-500 hover:bg-yellow-400 text-white font-semibold flex justify-center items-center ">
                Add to basket
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="w-[100%] h-auto p-5 flex justify-center items-center flex-wrap">
        {productData.slice(40, 43).map(product => (
          <div
            key={product.id}
            className="h-[350px] border-2 w-[350px] flex flex-col justify-center items-center m-2 py-5 px-3 bg-white z-30">
            <div className="h-[35%] w-full flex justify-center items-center">
              <img
                src={
                  product.images && product.images[0]
                    ? product.images[0]
                    : noImage
                }
                className="h-[100%] mix-blend-darken"
              />
            </div>
            <div className="w-full flex justify-start h-[30%]">
              <p className="text-sm font-semibold px-2">
                {truncateDescription(product.title, 10)}
              </p>
            </div>
            <div>
              <div>
                <p className="text-sm text-gray-600 text-start">
                  {truncateDescription(product.description, 10)}
                </p>
              </div>
              <span className="flex justify-start items-start w-full">
                {Array(rating)
                  .fill()
                  .map((_, i) => {
                    return (
                      <i
                        key={i}
                        className="fa-solid fa-star text-yellow-400"></i>
                    );
                  })}
              </span>
            </div>
            <div className="w-[100%]">
              <p className="text-base font-bold mt-2">
                ₹ {(product.price * 83).toFixed(2)}
              </p>
            </div>
            <div className="w-full flex justify-center items-center">
              <button
                onClick={()=>addItem(product)}
                className="h-8 w-[100%] bg-yellow-500 hover:bg-yellow-400 text-white font-semibold flex justify-center items-center ">
                Add to basket
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductFeed;

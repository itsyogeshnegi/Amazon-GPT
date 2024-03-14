import React, { useEffect, useState } from "react";
import useGetProducts from "../../customHooks/useGetProducts";
import CurrencyFormat from "react-currency-format";

const ProductFeed = () => {
  const products = useGetProducts(); // Fetch products using the custom hook
  const [productData, setProductData] = useState([]);
  const maxRate = 4;
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

  return (
    <div className="w-[100%] h-auto p-5 flex justify-center items-center flex-wrap xl:-mt-44 lg:-mt-44">
      {productData.map(product => (
        <div
          key={product.id}
          className="h-[350px] w-64 border-2 flex flex-col justify-center items-center m-2 py-5 px-3 bg-white z-30">
          <div className="h-[35%] w-full flex justify-center items-center">
            <img src={product.image} className="h-[100%] mix-blend-darken " />
          </div>
          <div className="w-full flex justify-start h-[30%]">
            <p className="text-sm font-semibold px-2">
              {truncateDescription(product.title, 10)}
            </p>
          </div>

          <div>
            <div>
              <p className="text-sm text-gray-600 mt-2 text-start">
                {truncateDescription(product.description, 10)}
              </p>
            </div>
            <span className="flex justify-start items-start w-full">
              {Array(rating)
                .fill()
                .map((_, i) => {
                  return (
                    <i key={i} className="fa-solid fa-star text-yellow-400"></i>
                  );
                })}
            </span>
          </div>
          <div className="w-[100%]">
            <p className="text-base font-bold mt-2">
              <CurrencyFormat
                value={product.price}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </p>
          </div>
          <div className="w-full flex justify-center items-center">
            <button className="h-8 w-[100%] bg-yellow-500 hover:bg-yellow-400 text-white font-semibold flex justify-center items-center ">
              Add to basket
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductFeed;

import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import { useSelector } from "react-redux";
import { selectItems } from "../../Store/AddToCartSlice";

const Cart = () => {
  const items = useSelector(selectItems);
  const basket = useSelector(state => state.basket);

  return (
    <>
      <NavBar />
      <div className="lg:flex max-w-screen-2xl mx-auto bg-slate-200">
        <div className="flex-grow shadow-sm m-5">
          <img src="/Banners/cartBanner.jpg" style={{ objectFit: "contain" }} />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-2xl border-b pb-4 font-semibold">
              {items.length === 0
                ? " Your Shopping Cart Is Empty"
                : "Your Shopping Cart"}
            </h1>
            {Array.isArray(basket) && basket.map((item, index) => (
              <div key={index} className="bg-slate-500"></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

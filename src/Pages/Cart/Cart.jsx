import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import { useSelector } from "react-redux";
import { selectItems } from "../../Store/AddToCartSlice";
import { removeFromBasket } from "../../Store/AddToCartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const items = useSelector(selectItems);
  const basket = useSelector(state => state.basket.items);
  const dispatch = useDispatch();

  const deleteItem = item => {
    dispatch(removeFromBasket(item));
  };

  console.log(basket);

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
            {basket.map((item, index) => (
              <div key={index} className="bg-slate-500">
                <div className="py-4 px-2 bg-[whitesmoke] w-full flex justify-between items-center">
                  <div>
                    <img src={item.images} className="h-28" />
                  </div>
                  <div>
                    <p className="px-20">{item.title}</p>
                  </div>
                  <div>₹ {(item.price * 83).toFixed(2)}</div>
                  <div>
                    <button
                      className="bg-red-700 text-white p-2 rounded-lg"
                      onClick={() => deleteItem(item)}>
                      Delete Item
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

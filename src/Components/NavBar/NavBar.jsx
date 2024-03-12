import React from "react";

const NavBar = () => {
  return (
    <div className="h-14 w-screen bg-slate-900 flex items-center justify-around">
      <div className="h-full flex items-center cursor-pointer">
        <img src="/amazonWhiteLogo.webp" className="h-[55%]" />
      </div>
      <div className="cursor-pointer">
        <h1 className="text-white font-bold">
          <i className="fa-solid fa-map-pin"></i> INDIA
        </h1>
      </div>
      <div className="h-full flex items-center w-[40%] cursor-pointer">
        <input
          type="text"
          className="h-[70%] w-full rounded-md text-center"
          placeholder="Search Item"
        />
      </div>
      <div className="cursor-pointer">
        <h1 className="text-white font-bold flex flex-col">
          <span>Hello,</span>
          My Name
        </h1>
      </div>
      <div>
        <h1 className="text-white font-bold flex flex-col cursor-pointer">
          <span>Return</span> & Order
        </h1>
      </div>
      <div className="text-white font-bold cursor-pointer flex flex-col">
        <h1>
          <span>
            <i className="text-white font-bold fa-solid fa-cart-shopping "></i>
          </span>
          Cart
        </h1>
      </div>
    </div>
  );
};

export default NavBar;

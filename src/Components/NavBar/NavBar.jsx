import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { app } from "../../utils/fireBase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectItems } from "../../Store/AddToCartSlice";
const NavBar = () => {
  const database = getDatabase(app);
  const auth = getAuth(app);
  const navigate = useNavigate();
  const item = useSelector(selectItems);

  const signOutHandle = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch(error => {
        console.error("Error signing out:", error);
      });
  };
  return (
    <>
      <div className="h-14 w-[100%] bg-slate-900 flex items-center justify-around">
        <div className="h-full flex items-center cursor-pointer">
          <img
            src="/Logos/amazonWhiteLogo.webp"
            className="h-[55%]"
            onClick={() => navigate("/browser")}
          />
        </div>
        <div className="cursor-pointer max-md:hidden">
          <h1 className="text-white font-bold flex items-center cursor-pointer leading-4 text-center gap-1">
            <img src="/Logos/india.png" className="h-7" />
            INDIA
          </h1>
        </div>
        <div className="h-full flex items-center w-[40%] max-md:w-[55%] cursor-pointer max-md:hidden">
          <input
            type="text"
            className="h-[70%] max-md:h-[60%] w-full rounded-md text-center"
            placeholder="Search Item"
          />
        </div>
        <div className="cursor-pointer max-md:hidden">
          <h1 className="text-white font-bold flex flex-col leading-5 max-md:hidden">
            <span className="font-extralight">Hello, Dude</span>
            Account & Lists
          </h1>
        </div>
        <div>
          <h1 className="text-white font-bold flex flex-col cursor-pointer leading-5">
            <span className="font-extralight">Return</span>& Order
          </h1>
        </div>
        <div className="text-white font-bold cursor-pointer flex justify-center items-center">
          <p className="leading-3" onClick={() => navigate("/cart")}>
            {item.length}
            <img src="/Logos/cart.png" className="h-7" />
          </p>
        </div>
        <div className="text-white font-bold cursor-pointer flex flex-col">
          <img
            src="/Logos/turn-off.png"
            className="h-7"
            title="Log-Out"
            onClick={signOutHandle}
          />
        </div>
      </div>
      <div className="text-sm flex p-2 pl-6 bg-slate-800 items-center text-white h-9 space-x-4 cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.4}
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
        All
        <p className="link text-smchidden lg:inline-flex">Prime Video</p>
        <p className="link text-sm hidden lg:inline-flex">Today's Deal</p>
        <p className="link text-sm hidden lg:inline-flex">Amazon Pay</p>
        <p className="link text-sm">Fresh</p>
        <p className="link text-sm hidden lg:inline-flex">Sell</p>
        <p className="link text-sm hidden lg:inline-flex">Mobiles</p>
        <p className="link text-sm hidden lg:inline-flex">Buy Again</p>
        <p className="link text-sm hidden lg:inline-flex">Gift Cards</p>
        <p className="link text-sm hidden lg:inline-flex">Subscribe & Save</p>
        <p className="link text-sm">Coupons</p>
        <p className="link text-sm hidden lg:inline-flex">Browsing History</p>
        <p className="link text-sm hidden lg:inline-flex">Customer Service</p>
      </div>
    </>
  );
};

export default NavBar;

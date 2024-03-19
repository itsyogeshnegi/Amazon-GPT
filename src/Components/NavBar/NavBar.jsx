import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { app } from "../../utils/fireBase";
const NavBar = () => {
  const database = getDatabase(app);
  const auth = getAuth(app);

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
          <img src="/Logos/amazonWhiteLogo.webp" className="h-[55%]" />
        </div>
        <div className="cursor-pointer max-md:hidden">
          <h1 className="text-white font-bold flex items-center cursor-pointer leading-4 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.9}
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
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
        <div className="text-white font-bold cursor-pointer flex flex-col">
          <h1 className="leading-3">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </span>
            Cart
          </h1>
        </div>
        <div className="text-white font-bold cursor-pointer flex flex-col">
          <img src="/Logos/turn-off.png" className="h-7" title="Log-Out" onClick={signOutHandle} />
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

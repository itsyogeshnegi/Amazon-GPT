import React from "react";

const SignIn = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="h-96 w-96 border-2 flex flex-col justify-center items-center bg-slate-100 rounded-xl">
        <img src="/Logos/amazonLogo.png" className="h-16" />
        <div className="flex flex-col h-2/5 w-full justify-center items-center">
          <input type="text"  className="my-3 h-10 w-2/3 border-2 rounded-md text-center"  placeholder="Email-ID" />
          <input
            type="password"
            className="my-3 h-10 w-2/3 border-2 rounded-md text-center"
            placeholder="Password"

          />
        </div>
        <button className="h-9 bg-amber-300 w-64 rounded-xl text-xl font-semibold hover:bg-amber-500">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignIn;

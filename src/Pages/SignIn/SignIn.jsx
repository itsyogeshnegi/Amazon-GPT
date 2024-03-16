import React, { useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
// import { auth } from "../../utils/fireBase";
import { app } from "../../utils/fireBase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const getLogIn = e => {
    e.preventDefault();
    if (userId === "" || password === "") {
      toast.error("Fill both Credentials");
    } else if (!app.signInWithEmailAndPassword(userId, password)) {
      toast.error("Wrong Credentials");
    } else {
      app
        .signInWithEmailAndPassword(userId, password)
        .then(i => {
          navigate("/"), toast.success("Welcome😊");
        })
        .catch(e => console.log(e));
    }
  };
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="h-96 w-96 border-2 flex flex-col justify-center items-center bg-slate-100 rounded-xl">
        <img src="/Logos/amazonLogo.png" className="h-16" />
        <div className="flex flex-col h-2/5 w-full justify-center items-center">
          <input
            type="text"
            className="my-3 h-10 w-2/3 border-2 rounded-md text-center"
            placeholder="Email-ID"
            value={userId}
            onChange={e => setUserId(e.target.value)}
          />
          <input
            type="password"
            className="my-3 h-10 w-2/3 border-2 rounded-md text-center"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button
          onClick={getLogIn}
          className="h-9 bg-amber-300 w-52  text-xl font-bold hover:bg-amber-500">
          Sign In
        </button>
        <div>
          <button className="h-9 bg-white w-64 mt-5 text-md font-semibold hover:border-black border-2">
            Create your Amazon account
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
        // transition: Bounce,
      />
    </div>
  );
};

export default SignIn;

import React, { useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, set, ref, push } from "firebase/database";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const navigate = useNavigate();
  const auth = getAuth();
  const db = getDatabase();

  const submitHandle = async e => {
    e.preventDefault();

    if (
      data.name === "" ||
      data.email === "" ||
      data.password === "" ||
      data.rePassword === ""
    ) {
      toast.error("Please fill in all fields");
    } else if (
      data.email.indexOf("@") < 3 ||
      data.email.lastIndexOf(".") < data.email.indexOf("@") + 2 ||
      data.email.lastIndexOf(".") + 2 >= data.email.length
    ) {
      toast.error("Invalid email address.");
    } else if (data.password.length < 5) {
      toast.error("Password must be at least 5 characters long.");
    } else if (data.rePassword !== data.password) {
      toast.error("Passwords do not match.");
    } else {
      try {
        await createUserWithEmailAndPassword(auth, data.email, data.password);
        toast.success("User created successfully");
        navigate("/");
        setData({
          name: "",
          email: "",
          password: "",
          rePassword: "",
        });
      } catch (error) {
        console.error("Error creating user:", error.message);
        toast.error(error.message);
      }
    }
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="h-96 w-96 border-2 flex flex-col justify-evenly items-center bg-slate-100 rounded-xl">
        <img src="/Logos/amazonLogo.png" className="h-16 mt-5" />
        <div className="flex flex-col h-2/3 w-full justify-center items-center">
          <input
            type="text"
            className="my-1 h-10 w-2/3 border-2 rounded-md text-center"
            placeholder="Name"
            value={data.name}
            onChange={e => setData({ ...data, name: e.target.value })}
          />
          <input
            type="text"
            className="my-1 h-10 w-2/3 border-2 rounded-md text-center"
            placeholder="Email-ID"
            value={data.email}
            onChange={e => setData({ ...data, email: e.target.value })}
          />
          <input
            type="password"
            className="my-1 h-10 w-2/3 border-2 rounded-md text-center"
            placeholder="Password"
            value={data.password}
            onChange={e => setData({ ...data, password: e.target.value })}
          />
          <input
            type="password"
            className="my-1 h-10 w-2/3 border-2 rounded-md text-center"
            placeholder="Re-Password"
            value={data.rePassword}
            onChange={e => setData({ ...data, rePassword: e.target.value })}
          />
        </div>
        <button
          onClick={submitHandle}
          className="h-9 mb-10 bg-amber-300 w-52  text-xl font-bold hover:bg-amber-500">
          Sign Up
        </button>
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
      />
    </div>
  );
};

export default SignUp;

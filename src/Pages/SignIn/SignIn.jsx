import React, { useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
// import { auth } from "../../utils/fireBase";
import { app } from "../../utils/fireBase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const [idPass, setIdPass] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleLogin = () => {
    const { email, password } = idPass;
    const auth = getAuth();
    if (!email.trim()) {
      toast.error("Email is blank");
      return;
    }
    if (!password.trim()) {
      toast.error("Password is blank");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        navigate("/browser");
        const user = userCredential.user;
        console.log("User logged in:", user);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Login error:", errorCode, errorMessage);
        toast.error(errorMessage);
      });
  };

  return (
    <div
      className="h-screen w-screen flex justify-center items-center"
      style={{
        backgroundImage:
          "URL('https://images2.alphacoders.com/132/1325574.png')",
          backgroundRepeat:"no-repeat",
          backgroundSize:"cover"
      }}
      >
      <div className="h-96 w-96 border-2 flex flex-col justify-center items-center bg-slate-100 rounded-xl">
        <img src="/Logos/amazonLogo.png" className="h-16" />
        <div className="flex flex-col h-2/5 w-full justify-center items-center">
          <input
            type="text"
            className="my-3 h-10 w-2/3 border-2 rounded-md text-center"
            placeholder="Email-ID"
            value={idPass.email}
            onChange={e => setIdPass({ ...idPass, email: e.target.value })}
            required
          />
          <input
            type="password"
            className="my-3 h-10 w-2/3 border-2 rounded-md text-center"
            placeholder="Password"
            value={idPass.password}
            onChange={e => setIdPass({ ...idPass, password: e.target.value })}
            required
          />
        </div>
        <button
          onClick={handleLogin}
          className="h-9 bg-amber-300 w-52  text-xl font-bold hover:bg-amber-500">
          Sign In
        </button>
        <div>
          <button
            onClick={() => navigate("/signUp")}
            className="h-9 bg-white w-64 mt-5 text-md font-semibold hover:border-black border-2">
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
      />
    </div>
  );
};

export default SignIn;

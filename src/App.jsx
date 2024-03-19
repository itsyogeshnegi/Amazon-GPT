import React from "react";
import "react-toastify/dist/ReactToastify.css";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import HomePage from "./Pages/HomePage/HomePage";
import { Protected } from "./utils/Protected";
import { AuthContext } from "./utils/AuthContext";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    { path: "/", element: <SignIn /> },
    { path: "/signUp", element: <SignUp /> },
    {
      path: "/browser",
      element: (
        <Protected>
          <HomePage />
        </Protected>
      ),
    },
  ]);

  return (
    <>
      <AuthContext>
        <RouterProvider router={router} />
      </AuthContext>
    </>
  );
}

export default App;

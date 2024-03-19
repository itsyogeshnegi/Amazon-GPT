import React from "react";
import "react-toastify/dist/ReactToastify.css";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import HomePage from "./Pages/HomePage/HomePage";
import Cart from "./Pages/Cart/Cart";
import { Protected } from "./utils/Protected";
import { AuthContext } from "./utils/AuthContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "../src/Store/Store";
import { Provider } from "react-redux";
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
    {
      path: "/cart",
      element: (
        <Protected>
          <Cart />
        </Protected>
      ),
    },
  ]);

  return (
    <>
      <Provider store={store}>
        <AuthContext>
          <RouterProvider router={router} />
        </AuthContext>
      </Provider>
    </>
  );
}

export default App;

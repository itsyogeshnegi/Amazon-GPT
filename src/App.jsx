import React from "react";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import HomePage from "./Pages/HomePage/HomePage";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/signIn", element: <SignIn /> },
    {path:"/signUp", element:<SignUp/>}
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

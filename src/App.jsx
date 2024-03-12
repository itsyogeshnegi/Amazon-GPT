import React from "react";
import SignIn from "./Pages/SignIn/SignIn";
import HomePage from "./Pages/HomePage/HomePage";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    { path: "/", element: <SignIn /> },
    { path: "/Home", element: <HomePage /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

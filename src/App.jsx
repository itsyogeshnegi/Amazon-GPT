import React from "react";
import SignIn from "./Pages/SignIn/SignIn";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
function App() {
  const router = createBrowserRouter([{ path: "/", element: <SignIn/> }]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

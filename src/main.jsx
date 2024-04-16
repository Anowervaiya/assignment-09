import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Root from "./Root/Root";
import Home from "./Pages/Home";
import Context from "./ContextComponent/Context";
import SimpleRegistrationForm from "./components/SimpleRegistrationForm";

import Details from"./components/Details/Details"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/details/:id",
        element:<Details></Details> 
      },
      {
        path:'/login',
        element:<SimpleRegistrationForm></SimpleRegistrationForm>
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context>
      <RouterProvider router={router} />
    </Context>
  </React.StrictMode>
);

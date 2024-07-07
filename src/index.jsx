import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Signup from "./components/Signup";
import Menu from "./components/menu";
import UserContextProvider from "./components/Context/UserContextProvider";
import Caret from "./components/PopCart";
import Cart from "./components/cart";

const router = createBrowserRouter([
  {
    path: "/restromenu",
    element: <Layout />,
    children: [
      {
        path: "/restromenu",
        element: <Menu />,
      },
      {
        path: '/restromenu/cart',
        element: <Cart/>,
      },
      {
        path: '/restromenu/caret',
        element: <Caret/>,
      },
    ],
  },
  {
    path: "/Signup",
    element: <Signup />,
  },
  
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserContextProvider>
    <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>
);

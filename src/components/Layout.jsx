import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header"

function Layout() {
  return (
    <div className="flex flex-col font-sora text-white">
      <Header />
      <hr className=" border-black mx-4"/>
      <Outlet />
    </div>
  );
}

export default Layout;

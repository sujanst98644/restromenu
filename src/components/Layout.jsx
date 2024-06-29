import React, { useContext, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { FaSearch } from "react-icons/fa";
import { HiOutlineAdjustments } from "react-icons/hi";
import UserContext from "./Context/UserContext";

function Layout() {
  const [Name, setName] = useState("");
  const { setUser } = useContext(UserContext);

  useEffect(() => setUser(Name), [Name, setUser]);

  return (
    <div className="flex flex-col font-sora text-white bg-[#EEF7FF]">
      <Header />
      <div
        className="lg:h-96 h-40 w-auto bg-[#CDE8E5] text-green-700 font-sora font-semibold lg:text-6xl 
        text-3xl tracking-tighter text-center flex flex-col items-center justify-center"
      >
        <div>Discover Our Menu</div>
        <div className=" rounded-xl flex justify-center items-center text-black text-2xl">
          <div className="flex bg-white rounded-xl items-center">
            <FaSearch className="mx-2" />
            <input
              placeholder="Cuisines"
              className="font-light rounded-xl focus:outline-none"
              onChange={(e) => setName(e.target.value)}
            />
            <HiOutlineAdjustments className="text-black mx-2" />
          </div>
          {/* <div className="bg-green-700 rounded-md mx-2 w-8 h-full flex justify-center items-center">
            <HiOutlineAdjustments className="text-white bg-green-700" />
          </div> */}
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Layout;

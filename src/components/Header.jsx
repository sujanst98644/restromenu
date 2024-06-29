import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header
      className={`flex flex-row lg:grid-cols-3 items-center justify-between pl-8 top-0 left-0 w-full`}
    >
      <div className="flex flex-row items-center">
        <img
          src={`${process.env.PUBLIC_URL}/Burger.png`}
          alt="logo"
          className="h-14"
        />
        <p className="font-bold hover:scale-110 text-black">crunchy</p>
      </div>
      <div className="font-sora flex justify-end">
        <ul className="flex flex-row lg:space-x-10 space-x-2 items-center">
          <Link to="#Home" className="hover:text-orange-200 text-black">
            Menu
          </Link>
          <Link to="#blogs" className=" hover:text-green-200  text-black">
            Order
          </Link>
          <NavLink
            className="rounded-full border-2 bg-slate-600 px-2 py-1"
            to="/Signup"
          >
            Sign in
          </NavLink>
        </ul>
      </div>
    </header>
  );
};

export default Header;

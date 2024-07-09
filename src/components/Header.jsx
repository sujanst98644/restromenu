import React, {useContext} from "react";
import { Link, NavLink } from "react-router-dom";
import UserContext from "./Context/UserContext";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  const {state} =useContext(UserContext)
  const {cart} = state
  let itemCount = 0
  for (const [key, value] of Object.entries(cart)){
    itemCount = itemCount + cart[key].qty
  }
  return (
    <header
      className={`flex flex-row lg:grid-cols-3 items-center justify-between pl-4 top-0 left-0 w-full px-4`}
    >
      <Link to='/restromenu' className="flex flex-row items-center">
        <img
          src={`${process.env.PUBLIC_URL}/Burger.png`}
          alt="logo"
          className="h-14"
        />
        <p className="font-bold hover:scale-110 text-black">Crunchy</p>
      </Link>
      <div className="font-sora flex justify-end">
        <ul className="flex flex-row lg:space-x-10 space-x-2 items-center">
          {/* <Link to="#Home" className="hover:text-orange-200 text-black">
            Menu
          </Link>
          <Link to="#blogs" className=" hover:text-green-200  text-black">
            Order
          </Link> */}
          <Link to='/restromenu/cart' className="flex m-6">
            <FaCartShopping className="text-3xl text-black lg:self-center" />
            <span className="text-white text-sm relative top-[-3px] right-[10px] bg-red-700 rounded-full h-5 w-5 text-center">
              {itemCount}
            </span>
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

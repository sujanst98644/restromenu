import React, { useContext, useEffect, useState } from "react";
import UserContext from "./Context/UserContext";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { TbTrashXFilled } from "react-icons/tb";

const Cart = () => {
  const { state, dispatch } = useContext(UserContext);
  const { cart } = state;
  let total = 0;
  for (const [key, value] of Object.entries(cart)) {
    total = total + cart[key].price * cart[key].qty;
  }
  const [Num, setNum] = useState(Object.entries(cart).length>0)
  useEffect(()=>{
    setNum(Object.entries(cart).length>0)
  },[cart])
  return (
    <div className="flex-col flex items-center justify-center">
      <div className="lg:grid lg:grid-cols-4 flex flex-col  m-10 ">
        {Object.entries(cart).map(([key, value]) => {
          return (
            <div className="grid grid-cols-2 items-center p-2 text-black  rounded-xl 
            lg:h-52 m-2 overflow-hidden overflow-y-scroll no-scrollbar">
              <img
                src={cart[key].img}
                alt={cart[key].cuisine}
                className="w-32 h-32 rounded-full object-cover shadow-xl mx-4"
              />
              <div className="text-start h-[150px] relative">
              <button className="absolute right-0 text-lg"
              onClick={() => {
                dispatch({ type: "Remove_From_Cart", payload: cart[key] });
              }}><TbTrashXFilled/></button>
                <p className="text-xl font-semibold my-3 text-nowrap">
                  {cart[key].cuisine}
                </p>
                <p className="text-nowrap">Price: ${cart[key].price}</p>
                <div className="flex items-center mb-2 space-x-4 text-2xl">
                  <button
                    className={`flex items-center text-xl transition duration-500 ease-in-out
                       hover:bg-slate-300 rounded-full p-2 shadow-xl`}
                    onClick={() => {
                      dispatch({ type: "Decrease", payload: cart[key] });
                    }}
                  >
                    <FaMinus />
                  </button>
                  <p>{cart[key].qty}</p>
                  <button
                    className={`flex items-center text-xl transition duration-500 ease-in-out 
                      hover:bg-slate-300 rounded-full p-2 shadow-xl`}
                    onClick={() => {
                      dispatch({ type: "Increase", payload: cart[key] });
                    }}
                  >
                    <FaPlus />
                  </button>
                </div>

                <p className="text-nowrap">
                  total: ${cart[key].price * cart[key].qty}
                </p>
              </div>
              <div className="w-full bg-slate-300 h-[1.5px] col-span-2"></div>
            </div>
          );
        })}
      </div>
      {!Num && <p className="text-black text-3xl font-semibold tracking-tight py-4">Added nothing to Order</p>}
      <div className="flex justify-center lg:w-1/3 w-4/5 py-2 text-2xl text-center 
      transition duration-500 ease-in-out  border-2 bg-slate-700 hover:bg-slate-600 text-white  
      rounded-full text-nowrap px-2 shadow-xl ">
        <button>Check Out ${total}</button>
      </div>
    </div>
  );
};
export default Cart;

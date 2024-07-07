import React, { useContext } from "react";
import UserContext from "./Context/UserContext";
import { IoIosAddCircleOutline } from "react-icons/io";
import { AiOutlineMinusCircle } from "react-icons/ai";

const Cart = () => {
  const { state } = useContext(UserContext);
  const { cart } = state;
  let total = 0
  for(const [key, value] of Object.entries(cart)){
    total = total + cart[key].price*cart[key].qty

  }
  return (
    <div className="flex-col">
      <div className="lg:grid lg:grid-cols-4 flex flex-col items-center justify-center m-10 space-x-4">
        {Object.entries(cart).map(([key, value]) => {
          return (
            <div className="flex p-2 lg:py-4  bg-[#7AB2B2] rounded-2xl lg:h-64">
              <img
                src={cart[key].img}
                alt={cart[key].cuisine}
                className="w-32 h-32 rounded-full object-cover shadow-xl mx-4"
              />
              <div className="text-start h-[150px] w-1/2 ">
                <p className="text-xl font-bold my-3">{cart[key].cuisine}</p>

                <p className={`tracking-tighter my-4 mb-4 text-sm hidden lg:block`}>
                  {cart[key].ingredients}
                </p>
                <p>${cart[key].price}</p>
                <hr />
                <p>total= ${cart[key].price * cart[key].qty}</p>
                <div className="space-x-2 flex">
                  <button
                    className={`flex items-center transition duration-500 ease-in-out  border-2 hover:bg-green-700 text-white rounded-full px-2`}
                  >
                    <AiOutlineMinusCircle/>remove
                  </button>
                  
                  <button
                    className={`flex items-center transition duration-500 ease-in-out  border-2 hover:bg-green-700 text-white rounded-full px-2 `}
                  >
                    <IoIosAddCircleOutline/>add
                  </button>
                  
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center">
      <button
        className={`w-80 py-2 text-2xl text-center transition duration-500 ease-in-out  border-2 bg-green-800 text-white rounded-xl px-2 `}
      >
        Order Online ${total}
      </button>
      </div>
    </div>
  );
};
export default Cart;

import React, { useContext } from "react";
import UserContext from "./Context/UserContext";
import { IoIosAddCircleOutline } from "react-icons/io";
import { AiOutlineMinusCircle } from "react-icons/ai";

const Cart = () => {
  const { state, dispatch } = useContext(UserContext);
  const { cart } = state;
  let total = 0;
  for (const [key, value] of Object.entries(cart)) {
    total = total + cart[key].price * cart[key].qty;
  }
  return (
    <div className="flex-col flex items-center justify-center">
      <div className="lg:grid lg:grid-cols-4 flex flex-col  m-10 ">
        {Object.entries(cart).map(([key, value]) => {
          return (
            <div className="flex items-center p-2 bg-[#7AB2B2] rounded-xl lg:h-52 m-2 overflow-hidden overflow-y-scroll no-scrollbar">
              <img
                src={cart[key].img}
                alt={cart[key].cuisine}
                className="w-32 h-32 rounded-full object-cover shadow-xl mx-4"
              />
              <div className="text-start h-[150px] w-1/2 ">
                <p className="text-xl font-semibold my-3">{cart[key].cuisine}</p>

                {/* <p
                  className={`tracking-tighter my-4 mb-4 text-sm hidden lg:block`}
                >
                  {cart[key].ingredients}
                </p> */}
                <p>Price: ${cart[key].price}</p>
                <div className="flex items-center mb-2 space-x-4 text-2xl">
                  <button
                    className={`flex items-center  text-white rounded-full text-3xl`}
                    onClick={() => {
                      dispatch({ type: "Decrease", payload: cart[key] });
                    }}
                  >
                    <AiOutlineMinusCircle className="transition duration-500 ease-in-out hover:bg-green-700 rounded-full" />
                  </button>
                 <p>{cart[key].qty}</p>
                  <button
                    className={`flex items-center text-white rounded-full text-3xl `}
                    onClick={() => {
                      dispatch({ type: "Increase", payload: cart[key] });
                    }}
                  >
                    <IoIosAddCircleOutline className="transition duration-500 ease-in-out hover:bg-green-700 rounded-full" />
                  </button>
                </div>
                <hr />
                <p>total: ${cart[key].price * cart[key].qty}</p>
                <div className="space-x-2 flex"></div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center">
        <button
          className={`w-80 py-2 text-2xl text-center transition duration-500 ease-in-out  border-2 bg-green-800 text-white rounded-xl px-2 `}
        >
          Check Out ${total}
        </button>
      </div>
    </div>
  );
};
export default Cart;

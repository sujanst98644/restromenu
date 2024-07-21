import React, { useContext, useState } from "react";
import UserContext from "./Context/UserContext";
import { AiOutlineClose } from "react-icons/ai";
import { FaMinus, FaPlus } from "react-icons/fa6";

const Caret = ({ open, children, close }) => {
  const { card, dispatch, state } = useContext(UserContext);
  const { cart } = state;
  const [qty, setqty] = useState(1)
  const { img, cuisine, ingredients, price } = card;
  if (!open) return null;
  return (
    <div className="text-black text-xl fixed inset-0 bg-opacity-30 backdrop-blur-[1px] flex items-center justify-center ">
      <div className="shadow-xl rounded-md lg:w-[38%] lg:h-[92%] h-[100%] w-full bg-slate-200 overflow-hidden overflow-y-scroll no-scrollbar ">
        <div className="lg:h-[65%] h-[60%]">
          <img src={img} alt={cuisine} className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col items-center justify-start self-center h-full w-full">
          <div className="p-5 flex flex-col space-y-2 bg-white w-full">
            <p className="lg:text-2xl text-xl font-bold text-nowrap">
              {cuisine}
            </p>
            <p>${price}</p>
            <p
              className={`tracking-tighter text-sm text-wrap sm:h-16 lg:h-10 w-full`}
            >
              {ingredients}
            </p>
            <div className="flex items-center mb-2 space-x-4 text-2xl">
                  <button
                    className={`flex items-center text-xl transition duration-500 ease-in-out
                       hover:bg-slate-300 rounded-full p-2 shadow-xl`}
                       onClick={
                        qty>0 ? ()=>setqty(qty-1) : ()=>setqty(qty) 
                       }
                  >
                    <FaMinus />
                  </button> 
                  <p>{qty}</p>
                  <button
                    className={`flex items-center text-xl transition duration-500 ease-in-out 
                      hover:bg-slate-300 rounded-full p-2 shadow-xl`}
                    onClick={()=>setqty(qty+1)}
                    >
                    <FaPlus />
                  </button>
                </div>
                <div>
                    <ul>
                      <li>Chutney<input type="radio" /></li>
                      <li>curry<input type="radio" /></li>
                      <li>masala<input type="radio" /></li>
                      <li>lettuce<input type="radio" /></li>
                    </ul>
                </div>
          </div>
          
          <div className="w-full fixed lg:bottom-14 bottom-5 space-x-3 flex justify-center text-base font-semibold text-white">
            <button
              onClick={close}
              className="rounded-full p-3 items-end justify-end text-2xl hover:bg-slate-200 shadow-xl text-black"
            >
              <AiOutlineClose />
            </button>
            <button
              className="flex bg-slate-800 py-2 lg:w-[30%] w-2/3 items-center justify-center rounded-full shadow-xl hover:bg-slate-700 space-x-3"
              onClick={() => {
                dispatch({ type: "Add_To_Cart", payload: card, qty: qty });
                close();
              }}
            >
              <p>Add Order</p>
              <div className="text-slate-400">${price}</div>
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Caret;

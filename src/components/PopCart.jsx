import React, { useContext } from "react";
import UserContext from "./Context/UserContext";
import { GoX } from "react-icons/go";

const Caret = ({ open, children, close }) => {
  const { card, dispatch } = useContext(UserContext);
  const { img, cuisine, ingredients, price } = card;
  if (!open) return null;
  return (
    <div className="text-black text-2xl fixed inset-0 bg-opacity-20 backdrop-blur-[1.5px] flex items-center justify-center  ">
      <div className=" lg:w-1/3 lg:h-2/3 h-[60%] w-4/5 bg-white rounded-xl overflow-hidden overflow-y-scroll no-scrollbar">
        <button
          onClick={close}
          className="rounded-full items-end justify-end text-3xl bg-gray-50 shadow-2xl absolute"
        >
          <GoX />
        </button>
        <div className="lg:h-[70%] h-[60%]">
          <img src={img} alt={cuisine} className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col items-center justify-start bg-[#7AB2B2 self-center rounded-2xl h-full">
          <div className=" lg:h-[90px] h-[110px] w-[300px] lg:w-[450px] flex flex-col">
            <p className="text-xl font-bold text-nowrap">{cuisine}</p>

            <p className={`tracking-tighter mb-4 text-sm text-wrap sm:h-16 lg:h-10 w-[90%]`}>
              {ingredients}
            </p>
          </div>
          <div className="space-x-3 flex justify-center text-base font-semibold text-white">
                <button
                  className="flex fixed  bg-black py-2 px-20 rounded-full shadow-lg space-x-3"
                  onClick={() => {
                    dispatch({ type: "Add_To_Cart", payload: card });
                  }}
                >
                  Add To Cart<div className="text-slate-400">${price}</div>
                </button>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Caret;

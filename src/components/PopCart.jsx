import React, {useContext} from "react";
import UserContext from "./Context/UserContext";
import { GoX } from "react-icons/go";
import { Link } from "react-router-dom";

const Caret = () => {
  const { state } = useContext(UserContext);
  const { cart } = state;
  console.log(cart)
  return (
    <div className="text-black text-2xl fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex items-center justify-center">
      
      <div className="lg:w-1/3 lg:h-2/3 h-1/2 w-4/5 bg-slate-500 rounded-xl">
      <Link to='/restromenu' className="rounded-full bottom-0 flex items-end justify-end">
          <GoX/>
      </Link>
      <div className="flex items-center justify-start bg-[#7AB2B2] self-center rounded-2xl h-full">
            <img
              src={cart.img}
              alt={cart.cuisine}
              className="w-32 h-32 rounded-full object-cover shadow-xl mx-4"
            />
            <div className="text-center h-[150px] w-[210px] lg:w-[300px]">
              <p className="text-xl font-bold m-3">{cart.cuisine}</p>

              <p className={`tracking-tighter mx-4 mb-4 text-sm`}>
                {cart.ingredients}
              </p>
              <div>
                <button
                  className={`text-center transition duration-500 ease-in-out  border-2 bg-green-800 text-white rounded-xl px-4 py-2`}
                >
                  Order
                </button>
                <div className="space-x-3">
                  <button>Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
          
      </div>
    </div>
  );
};

export default Caret;

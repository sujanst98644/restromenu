import React, { useContext, useState } from "react"
import data from "../data"
import UserContext from "./Context/UserContext"
import { Link } from "react-router-dom"
import Search from "./search"
import Option from "./Options"

const Menu = () => {
  const [singleSelection, setSingleSelection] = useState(null);
  const { dispatch } = useContext(UserContext);
  const { User } = useContext(UserContext);
  const handleSelect = (getCurrentId) => {
    setSingleSelection(getCurrentId === singleSelection ? null : getCurrentId);
  };
  return (
    <>
      <Search />
      <Option/>
      <div className="h-full grid gap-4 mx-5 lg:grid-cols-4 text-green-700 items-center justify-center">
        {data
          .filter((val) =>
            val.cuisine.toLowerCase().includes(User.toLowerCase())
          )
          .map((item) => {
            return (
              <div
                className={` shadow-xl rounded-xl lg:h-[500px] lg:w-80 h-[200px] w-96 lg:grid lg:grid-row-7 flex flex-col items-center
            ${
              singleSelection === item.id
                ? "transition-colors hover:bg-[#7AB2B2] duration-500 ease-in-out"
                : "bg-[#EEF7FF]"
            }`}
                onMouseEnter={() => {
                  handleSelect(item.id);
                }}
                onMouseLeave={() => {
                  setSingleSelection(null);
                }}
              >
                <p className="text-black self-start ml-4 mt-4 font-bold">
                  ${item.price}
                </p>
                <div className="lg:grid flex flex-row items-center justify-center">
                  <div className="flex items-center lg:justify-center justify-start lg:row-span-4">
                    <img
                      src={item.img}
                      alt={item.cuisine}
                      className="lg:w-64 lg:h-64 w-32 h-32 rounded-full object-cover shadow-xl mx-4"
                    />
                  </div>
                  <div className="text-center h-[150px] w-[210px] lg:w-[300px]">
                    <p className="text-xl font-bold m-3">{item.cuisine}</p>
                    {singleSelection === item.id ? (
                      ""
                    ) : (
                      <p className={`tracking-tighter mx-4 mb-4 text-sm`}>
                        {item.ingredients}
                      </p>
                    )}
                    {singleSelection === item.id ? (
                      <div>
                        <Link to="/restromenu/caret">
                          <button
                            className={`text-center transition duration-500 ease-in-out  border-2 bg-green-800 text-white rounded-xl px-4 py-2`}
                          >
                            Order Online
                          </button>
                        </Link>
                        <div className="space-x-3">
                          <button>More</button>
                          <button
                            onClick={() => {
                              dispatch({ type: "Add_To_Cart", payload: item });
                            }}
                          >
                            Add order
                          </button>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
export default Menu;

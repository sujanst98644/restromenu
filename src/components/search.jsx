import { FaSearch } from "react-icons/fa";
import React, { useContext, useState, useEffect } from "react";
import UserContext from "./Context/UserContext";


const Search = ()=>{
    const [Name, setName] = useState("");
    const { setUser } = useContext(UserContext);

  useEffect(() => setUser(Name), [Name, setUser]);

    return (
        <div
        className="lg:h-80 h-40 w-auto bg-[#CDE8E] text-green-700 font-sora font-semibold lg:text-6xl 
        text-3xl tracking-tighter text-center flex flex-col items-center justify-center"
      >
        <div>Discover Our Menu</div>
        <div className=" rounded-xl flex justify-center items-center text-black text-2xl w-2/3 lg:h-14 bg-slate-100 shadow-md">
            <FaSearch className="mx-2" />
            <input
              placeholder="Cuisines"
              className="font-light rounded-xl focus:outline-none bg-slate-100 w-full h-full"
              onChange={(e) => setName(e.target.value)}
            />
        </div>
      </div>
    );
}

export default Search;
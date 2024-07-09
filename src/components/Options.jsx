import React, { useContext, useEffect, useState } from "react"
import UserContext from "./Context/UserContext"

const Option = () => {
  const [opt, setOpt] = useState("Starters");
  const { setUser } = useContext(UserContext);

  useEffect(() => setUser(opt), [opt, setUser]);
  return (
    <div className="text-black mx-10 p-5 space-x-10 flex items-center font-semibold overflow-y-hidden overflow-x-scroll no-scrollbar w h-14">
      <button
        className={`group`}
        onClick={() => {
          setOpt("Starters");
        }}
      >
        Starters
        <div
          class={`relative left-0 transition-all h-[2px] bg-indigo-600 group-hover:w-full w-0 group-focus:w-full `}
        ></div>
      </button>
      <button
        className={`group`}
        onClick={() => {
          setOpt("MainCourse");
        }}
      >
        MainCourse
        <div
          class={`relative left-0 transition-all h-[2px] bg-indigo-600 group-hover:w-full w-0 group-focus:w-full `}
        ></div>
      </button>
      <button
        className={`group`}
        onClick={() => {
          setOpt("Drinks");
        }}
      >
        Drinks
        <div
          class={`relative left-0 transition-all h-[2px] bg-indigo-600 group-hover:w-full w-0 group-focus:w-full `}
        ></div>
      </button>
      <button
        className={`group`}
        onClick={() => {
          setOpt("Beer");
        }}
      >
        Beer
        <div
          class={`relative left-0 transition-all h-[2px] bg-indigo-600 group-hover:w-full w-0 group-focus:w-full `}
        ></div>
      </button>
      <button
        className={`group`}
        onClick={() => {
          setOpt("Momo");
        }}
      >
        Momo
        <div
          class={`relative left-0 transition-all h-[2px] bg-indigo-600 group-hover:w-full w-0 group-focus:w-full`}
        ></div>
      </button>
      <button
        className={`group`}
        onClick={() => {
          setOpt("Traditional");
        }}
      >
        Traditional
        <div
          class={`relative left-0 transition-all h-[2px] bg-indigo-600 group-hover:w-full w-0 group-focus:w-full `}
        ></div>
      </button>
      <button
        className={`group`}
        onClick={() => {
          setOpt("ThakaliSet");
        }}
      >
        ThakaliSet
        <div
          class={`relative left-0 transition-all h-[2px] bg-indigo-600 group-hover:w-full w-0 group-focus:w-full `}
        ></div>
      </button>
    </div>
  );
};

export default Option;

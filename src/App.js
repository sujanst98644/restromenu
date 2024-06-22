import React, { useState } from "react";
import data from "./data"

function App() {

  const [singleSelection, setSingleSelection] =useState(null)

  const handleSelect= (getCurrentId) =>{
    console.log(getCurrentId);
    setSingleSelection(getCurrentId === singleSelection ? null : getCurrentId)
  }
  console.log(singleSelection);
  return (
    <main className="flex flex-col font-sora text-white bg-[#EEF7FF]">
        <header className={`grid lg:grid-cols-3 items-center  pl-8 top-0 left-0 w-full`}>
          <div className="flex flex-row items-center">
            <img src={`${process.env.PUBLIC_URL}/Burger.png`} alt="logo" className="h-14" />
            <p className="font-bold hover:scale-110 text-black">crunchy</p>
          </div>
          <div className="font-sora col-start-3 justify-end">
            <ul className="flex flex-row space-x-10 items-center">
              <a href="#Home" className="hover:text-orange-200 text-black">Menu</a>
              <a href="#blogs" className=" hover:text-green-200 border-2 bg-green-700 p-2 rounded-xl">Order online</a>
            </ul>
          </div>
        </header>
        <div className="lg:h-96 h-40 w-auto bg-[#CDE8E5] text-green-700 font-sora font-semibold lg:text-6xl text-3xl tracking-tighter text-center flex items-center justify-center">
            <div>Discover Our Menu</div>
        </div>
      <div className="h-full grid gap-4 mx-5 mt-16 lg:grid-cols-4 text-green-700 items-center justify-center">
          {data.map(item=>{return(
          <div className={` shadow-xl rounded-xl lg:h-[500px] lg:w-80 h-[200px] w-96 lg:grid lg:grid-row-7 flex flex-col items-center
            ${singleSelection === item.id ? 'transition-colors hover:bg-[#7AB2B2] duration-500 ease-in-out' : 'bg-[#EEF7FF]'}`}
          onMouseEnter={() => {
            handleSelect(item.id)
          } }
            onMouseLeave={() => { 
              setSingleSelection(null)
            }}>
              <p className="text-black self-start ml-4 mt-4 font-bold">{item.price}</p>
              <div className="lg:grid flex flex-row items-center justify-center">
              <div className="flex items-center lg:justify-center justify-start lg:row-span-4">
              <img src= {item.img}  className="lg:w-64 lg:h-64 w-32 h-32 rounded-full object-cover shadow-xl mx-4"/>
              </div>
              <div className="text-center h-[150px] w-[210px] lg:w-[300px]">
                <p className="text-xl font-bold m-3">{item.cuisine}</p>
                {singleSelection === item.id ? "":<p className={`tracking-tighter mx-4 mb-4 text-sm`}>{item.ingredients}</p>}
                {singleSelection === item.id ? <button className={`text-center transition duration-500 ease-in-out  border-2 bg-green-800 text-white rounded-xl px-4 py-2`}>Order Online</button> : "" }
              </div>
              </div>
            </div>
          )}
          )
          }
      </div>
    </main>
  );
}

export default App;

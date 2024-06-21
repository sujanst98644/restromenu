import React, { useState } from "react";
import data from "./data"

function App() {
  const [isHover, setHover] = useState(false)
  // const [Scrolled, setScrolled] = useState(false)

  // useEffect(()=>{
  //   const handleScroll=()=>{
  //     const isScrolled=window.scrollY>40
  //     if(isScrolled!==Scrolled){
  //       setScrolled(isScrolled)
  //     }
  //   }
  //   window.addEventListener('scroll',handleScroll)
  //   return()=>{
  //     window.removeEventListener('scroll',handleScroll)
  //   }
  // },[Scrolled])
  return (
    <main className="flex flex-col font-sora text-white bg-[#EEF7FF]">
        <header className={`grid lg:grid-cols-3 items-center  pl-8 top-0 left-0 w-full`}>
          <div className="flex flex-row items-center">
            <img src="Burger.png" alt="logo" className="h-14" />
            <p className="font-bold hover:scale-110 text-black">crunchy</p>
          </div>
          <div className="font-sora col-start-3 justify-end">
            <ul className="flex flex-row space-x-10 items-center">
              <a href="#Home" className="hover:text-orange-200 text-black">Menu</a>
              <a href="#blogs" className=" hover:text-green-200 border-2 bg-green-700 p-2 rounded-xl">Order online</a>
            </ul>
          </div>
        </header>
        <div className="h-96 w-auto bg-[#CDE8E5] text-green-700 font-sora font-semibold text-6xl text-center pt-40">
            <div className="items-center">Discover Our Menu</div>
        </div>
      <div className="h-full grid grid-cols-4 gap-4 mx-5 mt-16 text-green-700 items-center justify-center">
          {data.map(item=>{return(
          <div className={` shadow-xl rounded-xl h-[500px] w-80 grid grid-row-7 items-center justify-center ${isHover ? 'transition-colors hover:bg-[#7AB2B2] duration-500 ease-in-out' : 'bg-[#EEF7FF]'}`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>
              <p className="text-black self-start ml-4 mt-4 font-bold">{item.price}</p>
              <div className="flex items-center justify-center row-span-4">
              <img src= {item.img}  className="w-64 h-64 rounded-full object-cover shadow-xl"/>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold m-3">{item.cuisine}</p>
              <p className={`tracking-tighter mx-4 mb-4 text-sm `}>{item.ingredients}</p>
              {/* <button className={`text-center`}>Order Online</button> */}
              </div>
            </div>
          )}
          )
          }
          
          {/* <div className=" bg-slate-700 shadow-xl rounded-xl h-[500px] w-80 flex flex-col items-center justify-center">
            <img src="Momo.jpg" className="w-64 h-64 rounded-full object-cover"/>
          <p className="text-3xl m-3">Momo</p>
          </div>
          <div className="shadow-xl rounded-xl h-[500px] w-80 flex flex-col items-center justify-center">
              <img src="Thukpa.jpg" className="w-64 h-64 rounded-full object-cover"/>
          <p className=" text-3xl m-3">Thupka</p>
          </div>
          <div className="shadow-xl rounded-xl h-[500px] w-80 flex flex-col items-center justify-center">
              <img src="Sekuwa.jpg" className="w-64 h-64 rounded-full object-cover"/>
          <p className=" text-3xl m-3">Sekuwa</p>
          </div>
          <div className="shadow-xl rounded-xl h-[500px] w-80 flex flex-col items-center justify-center">
              <img src="Thakali.jpg" className="w-64 h-64 rounded-full object-cover"/>
          <p className=" text-3xl m-3">Thakali khana</p>
          </div>
          <div className="shadow-xl h-[500px] w-80 rounded-xl flex flex-col items-center justify-center">
              <img src="Samai.jpg" className="w-64 h-64 rounded-full object-cover"/>
          <p className="text-3xl m-3"></p>
          </div>
          <div className="shadow-xl rounded-xl col-span-2"
            style={{ backgroundImage: "url('')" }} >
          <p className="text-3xl m-3">Momo</p>
          </div> */}
      </div>
    </main>
  );
}

export default App;

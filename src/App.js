import React from "react";
import data from "./data"

function App() {
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
              <a href="#blogs" className=" hover:text-green-200 border-2 bg-green-700 p-2 rounded">Order online</a>
            </ul>
          </div>
        </header>
        <div className="h-96 w-auto bg-[#CDE8E5] text-green-700 font-sora font-semibold text-6xl text-center pt-40">
            <div className="items-center">Discover Our Menu</div>
        </div>
      <div className="h-full grid grid-cols-4 gap-4 mx-5 mt-16 text-green-700">
          {data.map(item=>{return(
            <div className="bg-[#EEF7FF] shadow-xl rounded-xl h-[500px] w-80 flex flex-col items-center justify-center">
              <p className="text-black self-start ml-7 mt-7 font-bold">{item.price}</p>
              <img src= {item.img}  className="w-64 h-64 rounded-full object-cover"/>
              <p className="text-2xl m-3">{item.cuisine}</p>
              <p>{item.ingredients}</p>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white text-black py-2 px-4 rounded">Order Now</button>
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

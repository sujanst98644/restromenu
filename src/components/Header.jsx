import React from "react"

const Header=()=>{
    return (
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
    )
}

export default Header
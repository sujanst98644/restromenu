import React from "react";
import Menu from "./components/menu";
import Header from "./components/Header";

function App() {
  return (
    <main className="flex flex-col font-sora text-white bg-[#EEF7FF]">
        <Header/>
        <div className="lg:h-96 h-40 w-auto bg-[#CDE8E5] text-green-700 font-sora font-semibold lg:text-6xl text-3xl tracking-tighter text-center flex items-center justify-center">
            <div>Discover Our Menu</div>
        </div>
        <Menu/>
    </main>
  );
}

export default App;

import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="navbar-head flex flex-col bg-[#000] fixed top-0 left-0 w-full h-16 px-[12%] z-10">
      <div className=" w-full h-full flex justify-between items-center px-4">
        <div className="logo h-10">
          <a href="/" className="h-full">
          <img className="h-full" src="/favicon/white.png" alt="Suraj Verma"/>
          </a>
        </div>
        <Navbar />
      </div>
      <div className="border-b-1 w-full border-[#fff]/10"></div>
    </header>
  );
}

export default Header;

import React from "react";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className=" font-serif fixed z-10 bg-gradient-to-b from-black py-2 px-6  w-full text-amber-400  flex justify-between items-center font-extrabold">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="size-12"></img>
        <h1 className="text-2xl font-extrabold">BK STORE</h1>
      </div>

      <div>
        <div className="flex justify-between items-center gap-8 font-medium text-lg">
          <a className=" hover:text-amber-300 hover:underline underline-offset-4">
            Home
          </a>
          <a className=" hover:text-amber-300  hover:underline underline-offset-4">
            Cart
          </a>
          <button className="bg-amber-400 text-black py-1 px-2 rounded-md hover:bg-amber-300">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

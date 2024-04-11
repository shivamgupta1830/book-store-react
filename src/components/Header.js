import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" font-serif fixed z-10 bg-black py-2 px-6  w-full text-amber-500  flex justify-between items-center font-extrabold">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="size-12"></img>
        <h1 className="text-2xl font-normal">BK STORE</h1>
      </div>

      <div>
        <ul className="flex justify-between items-center gap-8 font-normal text-base">
          <Link to="/home">
            <li className=" hover:underline underline-offset-4">Home</li>
          </Link>
          <Link to="/cart">
            <li className="  hover:underline underline-offset-4">🛒Cart </li>
          </Link>
          <Link to="/login">
            <ul className="bg-amber-500 text-black py-1 px-2 rounded-md hover:shadow-3xl hover:shadow-amber-500">
              Login
            </ul>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import Header from "./Header";

import { useSelector } from "react-redux";

const Cart = () => {
  const items = useSelector((store) => store);
  console.log(items);
  return (
    <div>
      <Header />
      <div className=" font-serif w-full h-screen px-20 py-32 bg-gradient-to-t from-gray-950 to-gray-800">
        <div className=" w-[100%] bg-gradient-to-t from-amber-500 to-amber-300 py-2 px-8  flex flex-col  justify-start items-start bg-slate-200  rounded-md">
          <div className=" w-full flex justify-between ">
            <p className="text-2xl text-black font-semibold">Your Cart 🛒</p>
            <button className="bg-red-800 font-semibold text-white p-2 rounded-md hover:shadow-3xl hover:shadow-red-700  transition-all">
              Clear cart
            </button>
          </div>
          <div>Items</div>
          <div className=" w-full flex justify-between items-center">
            <h5 className="text-lg font-bold">Total Price: ₹ 9999</h5>
            <button className="bg-green-800 font-semibold text-white p-3 rounded-md hover:shadow-3xl hover:shadow-green-700 transition-all">
              Checkout →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

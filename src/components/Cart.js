import React from "react";
import Header from "./Header";

import { useSelector } from "react-redux";
import CartItemCard from "./CartItemCard";

const Cart = () => {
  const items = useSelector((store) => store);
  console.log(items);
  return (
    <div>
      <Header />
      <div className=" font-serif w-full h-full px-20 pt-24 pb-96 bg-gradient-to-t from-gray-950 to-gray-800 flex flex-col justify-start items-start gap-7">
        <div className=" w-full flex justify-between ">
          <p className="text-2xl text-amber-500 font-semibold ">Your Cart 🛒</p>
          <button className="bg-red-700 font-semibold text-white p-2 rounded-md hover:shadow-3xl hover:shadow-red-600  transition-all">
            Clear cart
          </button>
        </div>

        <div className=" w-[92%] rounded-md bg-gradient-to-t from-amber-500 to-amber-300  hover:shadow-3xl hover:shadow-amber-300  transition-all">
          <CartItemCard />
          <CartItemCard />
          <CartItemCard />
          <CartItemCard />
          <CartItemCard />
          <CartItemCard />
          <CartItemCard />
          <CartItemCard />
        </div>

        <div className=" w-full flex justify-between items-center">
          <h5 className="text-lg  text-amber-500  font-bold">
            Total Price: <span className="text-white">₹ 9999</span>
          </h5>
          <button className="bg-green-700 font-semibold text-white p-3 rounded-md hover:shadow-3xl hover:shadow-green-600 transition-all">
            Checkout →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

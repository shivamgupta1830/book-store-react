import React from "react";
import Header from "./Header";

import { useSelector } from "react-redux";
import CartItemCard from "./CartItemCard";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const cartClear = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <Header />

      <div className=" font-serif w-full h-full px-20 pt-24 pb-96 bg-gradient-to-t from-gray-950 to-gray-800 flex flex-col justify-start items-start gap-7">
        {items.length !== 0 ? (
          <div className="w-full flex flex-col justify-start items-start gap-2">
            <div className=" w-full flex justify-between">
              <p className="text-2xl text-amber-500 font-semibold ">
                Your Cart 🛒
              </p>
              <button
                className="bg-red-700 font-normal text-white p-2 rounded-md hover:shadow-3xl hover:shadow-red-600  transition-all"
                onClick={cartClear}
              >
                Clear 🛒
              </button>
            </div>

            <div className=" w-[92%] rounded-md bg-gradient-to-t from-amber-500 to-amber-300  hover:shadow-3xl hover:shadow-amber-300  transition-all px-3 pt-3 pb-5">
              {items &&
                items.map((item) => <CartItemCard item={item} key={item.id} />)}
            </div>

            <div className=" w-full flex justify-between items-center">
              <h5 className="text-lg  text-amber-500  font-bold">
                Total Price: <span className="text-white">₹ 9999</span>
              </h5>
              <button className="bg-green-700 font-normal text-white p-2 rounded-md hover:shadow-3xl hover:shadow-green-600 transition-all">
                Checkout
              </button>
            </div>
          </div>
        ) : (
          <h1 className="text-amber-500 font-bold text-center text-2xl w-full py-16">
            Your cart 🛒 is empty !!
          </h1>
        )}

        {/* <div className=" w-full flex justify-between ">
          <p className="text-2xl text-amber-500 font-semibold ">Your Cart 🛒</p>
          <button
            className="bg-red-700 font-normal text-white p-2 rounded-md hover:shadow-3xl hover:shadow-red-600  transition-all"
            onClick={cartClear}
          >
            Clear cart
          </button>
        </div>

        <div className=" w-[92%] rounded-md bg-gradient-to-t from-amber-500 to-amber-300  hover:shadow-3xl hover:shadow-amber-300  transition-all p-2">
          {items &&
            items.map((item) => <CartItemCard item={item} key={item.id} />)}
        </div>

        <div className=" w-full flex justify-between items-center">
          <h5 className="text-lg  text-amber-500  font-bold">
            Total Price: <span className="text-white">₹ 9999</span>
          </h5>
          <button className="bg-green-700 font-normal text-white p-3 rounded-md hover:shadow-3xl hover:shadow-green-600 transition-all">
            Checkout →
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Cart;
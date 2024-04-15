import React from "react";
import { useDispatch, useSelector } from "react-redux";
import book_fallback from "../assets/book_fallback.jpeg";
import { decreaseItem, increaseItem, removeItem } from "../utils/cartSlice";

const CartItemCard = ({ item }) => {
  const dispatch = useDispatch();

  const { volumeInfo, saleInfo, quantity, id } = item;
  const title = volumeInfo?.title ? volumeInfo?.title : "Title Unkown";
  const price = saleInfo?.listPrice?.amount ? saleInfo?.listPrice?.amount : 250;
  const image = volumeInfo?.imageLinks?.thumbnail
    ? volumeInfo?.imageLinks?.thumbnail
    : book_fallback;
  const totalPrice = quantity * Math.round(price);

  return (
    <div className="w-full border-b border-slate-600 py-2">
      <div className="flex md:flex-row sm:flex-col items-start justify-between px-1 py-2 gap-2">
        <div className="font-serif flex justify-start items-start gap-3">
          <img
            src={image}
            alt="cover"
            className="object-cover md:size-20 sm:size-14  rounded-md"
          ></img>
          <div className="flex flex-col justify-start items-start">
            <p className="lg:text-xl md:text-lg sm:text-xs font-medium text-amber-500">
              {title}
            </p>
            <p className="lg:text-lg md:text-sm sm:text-xs font-medium text-gray-300">
              T.Price: <span className="text-red-600">₹</span>
              <span className="text-red-600">{totalPrice}</span>
            </p>
          </div>
        </div>
        <div className="flex text-amber-500  font-medium justify-start items-center gap-6 lg:text-base md:text-sm sm:text-xs ">
          <p>Q: {quantity}</p>

          <div className="flex justify-center items-center gap-1 text-amber-500">
            <button
              className=" font-semibold lg:text-base md:text-sm sm:text-xs py-1 px-2 rounded-md  border border-amber-500  hover:bg-amber-500 hover:text-black transition-all"
              onClick={() => {
                dispatch(decreaseItem(id));
              }}
            >
              -
            </button>
            <span className="w-[20px] text-center  lg:text-base md:text-sm sm:text-xs">
              {quantity}
            </span>
            <button
              className=" font-semibold lg:text-base md:text-sm sm:text-xs py-1 px-2 rounded-md  border border-amber-500  hover:bg-amber-500 hover:text-black transition-all"
              onClick={() => {
                dispatch(increaseItem(id));
              }}
            >
              +
            </button>
          </div>
          <button
            className=" lg:text-base md:text-sm sm:text-xs py-1 px-2 rounded-md  border border-amber-500  hover:bg-amber-500 hover:text-black transition-all"
            onClick={() => {
              dispatch(removeItem(id));
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;

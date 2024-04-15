import React from "react";
import { useDispatch } from "react-redux";
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
    <div className="w-full border-b border-slate-900">
      <div className="flex md:flex-row sm:flex-col items-start justify-between px-1 py-2 gap-2">
        <div className="font-serif flex justify-start items-start gap-3">
          <img
            src={image}
            alt="cover"
            className="object-contain md:size-20 sm:size-14"
          ></img>
          <div className="flex flex-col justify-start items-start">
            <p className="lg:text-xl md:text-lg sm:text-xs font-bold">
              {title}
            </p>
            <p className="lg:text-lg md:text-sm sm:text-xs font-bold text-gray-700">
              T.Price: <span className="text-amber-900">₹</span>
              <span className="text-amber-900">{totalPrice}</span>
            </p>
          </div>
        </div>
        <div className="flex justify-start items-center gap-6 lg:text-base md:text-sm sm:text-xs ">
          <p>Q: {quantity}</p>

          <div className="flex justify-center items-center gap-1">
            <button
              className="bg-transparent lg:text-base md:text-sm sm:text-xs py-1 px-2 rounded-md hover:shadow-3xl hover:shadow-gray-800 border border-black hover:bg-black hover:text-amber-500 transition-all"
              // onClick={dispatch(increaseItem(id))}
            >
              -
            </button>
            <span className="w-[20px] text-center">{quantity}</span>
            <button
              className="bg-transparent lg:text-base md:text-sm sm:text-xs py-1 px-2 rounded-md hover:shadow-3xl hover:shadow-gray-800 border border-black hover:bg-black hover:text-amber-500 transition-all"
              // onClick={dispatch()}
            >
              +
            </button>
          </div>
          <button
            className="bg-transparent lg:text-base md:text-sm sm:text-xs py-1 px-2 rounded-md hover:shadow-3xl hover:shadow-gray-800 border border-black hover:bg-black hover:text-amber-500 transition-all"
            // onClick={dispatch(removeItem())}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;

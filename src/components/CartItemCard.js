import React from "react";
import { useDispatch } from "react-redux";

const CartItemCard = ({ item }) => {
  const dispatch = useDispatch();
  const { volumeInfo, saleInfo } = item;
  const title = volumeInfo?.title ? volumeInfo?.title : "Title Unkown";
  const price = saleInfo?.listPrice?.amount ? saleInfo?.listPrice?.amount : 250;
  const image = volumeInfo?.imageLinks?.thumbnail
    ? volumeInfo?.imageLinks?.thumbnail
    : volumeInfo?.imageLinks?.smallThumbnail;

  const deleteItem = () => {
    dispatch(deleteItem());
  };
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
            <p className="md:text-xl sm:text-xs font-bold">{title}</p>
            <p className="md:text-base sm:text-xs font-bold text-gray-700">
              Price: <span className="text-amber-900">₹</span>
              <span className="text-amber-900">{Math.round(price)}</span>
            </p>
          </div>
        </div>
        <div className="flex justify-start items-center gap-6 md:text-base sm:text-xs ">
          <p>Q: 1</p>
          <select className="sm:w-[25%] md:w-[20%] p-1 rounded-md bg-transparent border border-black md:text-base sm:text-xs">
            <option value="1">1</option>
            <option value="1">2</option>
            <option value="1">3</option>
            <option value="1">4 (max)</option>
          </select>
          <button
            className="bg-transparent md:text-base sm:text-xs py-1 px-2 rounded-md hover:shadow-3xl hover:shadow-gray-800 border border-black hover:bg-black hover:text-amber-500 transition-all"
            onClick={deleteItem}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;

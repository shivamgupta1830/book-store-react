import React from "react";

const CartItemCard = () => {
  return (
    <div className="w-full border-b border-slate-900">
      <div className="flex items-start item-start p-1 gap-2">
        <img
          src="http://books.google.com/books/publisher/content?id=2HvGDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE70LsZ9qthSvXOOfekpRO-H5yctx-Z-I0sXUnipFJSKKDbrJsmt44KLJdjPTkQVkEck5Oj4iNr9cWfYsw0S0FfW_ORpQHFprcI5ByF5Xda_QzBwm6miIvaaSQ7tFU2R1beD_uIPo&source=gbs_api"
          alt="cover"
          className="object-contain size-20"
        ></img>
        <div className="font-serif flex flex-col justify-start items-start mr-8">
          <p className="text-xl font-bold">Title Title</p>
          <p className="text-base font-bold text-gray-700">
            Price: <span className="text-amber-900">₹</span>
            <span className="text-amber-900">999</span>
          </p>
        </div>
        <div className="flex justify-start items-center gap-6">
          <select className="w-[20%] p-1 rounded-md bg-transparent border border-black">
            <option value="1">1</option>
            <option value="1">2</option>
            <option value="1">3</option>
            <option value="1">4 (max allowed)</option>
          </select>
          <button className="bg-transparent text-sm  py-1 px-2 rounded-md hover:shadow-3xl hover:shadow-gray-800 border border-black transition-all">
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;

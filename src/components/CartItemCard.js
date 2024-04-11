import React from "react";

const CartItemCard = ({ item }) => {
  const { volumeInfo, saleInfo } = item;
  const title = volumeInfo?.title ? volumeInfo?.title : "Title Unkown";
  const price = saleInfo?.listPrice?.amount ? saleInfo?.listPrice?.amount : 250;
  return (
    <div className="w-full border-b border-slate-900">
      <div className="flex items-start justify-between px-1 py-2 gap-2">
        <div className="font-serif flex justify-start items-start gap-3">
          <img
            src="http://books.google.com/books/publisher/content?id=2HvGDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE70LsZ9qthSvXOOfekpRO-H5yctx-Z-I0sXUnipFJSKKDbrJsmt44KLJdjPTkQVkEck5Oj4iNr9cWfYsw0S0FfW_ORpQHFprcI5ByF5Xda_QzBwm6miIvaaSQ7tFU2R1beD_uIPo&source=gbs_api"
            alt="cover"
            className="object-contain size-20"
          ></img>
          <div className="flex flex-col justify-start items-start">
            <p className="text-xl font-bold">{title}</p>
            <p className="text-base font-bold text-gray-700">
              Price: <span className="text-amber-900">₹</span>
              <span className="text-amber-900">{Math.round(price)}</span>
            </p>
          </div>
        </div>
        <div className="flex justify-start items-center gap-6">
          <select className="w-[20%] p-1 rounded-md bg-transparent border border-black">
            <option value="1">1</option>
            <option value="1">2</option>
            <option value="1">3</option>
            <option value="1">4 (max)</option>
          </select>
          <button className="bg-transparent text-sm  py-1 px-2 rounded-md hover:shadow-3xl hover:shadow-gray-800 border border-black hover:bg-black hover:text-amber-500 transition-all">
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;

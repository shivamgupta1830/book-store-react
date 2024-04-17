import React from "react";
import front from "../assets/front.png";

const FrontPage = () => {
  return (
    <div className="flex flex-col justify-start items-center -mt-12 pb-20 h-screen">
      <h1 className="text-amber-500 font-medium text-center lg:text-2xl sm:text-xs md:text-lg w-full py-16 ">
        Search your favourite book or author...
      </h1>
      <img
        src={front}
        alt="#"
        className="lg:size-76 md:size-60 sm:size-40 -mt-12  animate-pulse hover:animate-none"
      ></img>
    </div>
  );
};

export default FrontPage;

import React from "react";
import { Link, useRouteError } from "react-router-dom";
import Header from "./Header";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="font-serif font-semibold text-amber-500 w-screen h-screen  bg-gray-950 bg-gradient-to-t from-gray-950 to-gray-800 sm:text-base md:text-lg lg:text-2xl">
      <div className="pt-32 flex flex-col justify-center items-center">
        {" "}
        <h1 className=" text-center p-2">OOPS !!!</h1>
        <h1 className=" text-center p-2">Something went wrong !</h1>
        <h1 className=" text-center p-2">Please try again later...</h1>
        <Link to="/home">
          <button className="bg-amber-500 text-black py-1 px-2  rounded-md hover:shadow-3xl hover:shadow-amber-500 underline-offset-4 mt-2 ">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;

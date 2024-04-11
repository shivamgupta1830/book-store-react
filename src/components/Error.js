import React from "react";

import { useRouteError } from "react-router-dom";
import Header from "./Header";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="font-serif font-semibold text-amber-500 w-screen h-screen bg-gradient-to-t from-gray-950 to-gray-800">
      <Header />
      <div className="pt-40">
        {" "}
        <h1 className="text-3xl text-center p-2">OOPS !!!</h1>
        <h1 className="text-3xl text-center">Something went wrong !</h1>
        <h3 className="text-xl text-center p-2 font-medium">
          {error.status}: {error.statusText}
        </h3>
      </div>
    </div>
  );
};

export default Error;

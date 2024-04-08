import React from "react";

import background from "../assets/background.jpg";

const Body = () => {
  return (
    <div>
      <img
        src={background}
        alt="background"
        className="w-screen h-screen object-cover"
      ></img>
    </div>
  );
};

export default Body;

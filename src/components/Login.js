import React from "react";
import Header from "./Header";
import background from "../assets/background.jpg";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="fixed -z-20">
        <img
          src={background}
          alt="background"
          className="h-screen w-screen object-cover"
        ></img>
      </div>

      <form className=" font-serif rounded-md px-8 py-14 bg-black bg-opacity-80 text-amber-400 absolute w-[30%] top-20 text-center mx-auto right-0 left-0 flex flex-col  justify-center items-center">
        <h2 className="text-3xl font-bold text-white">Sign In</h2>

        {/* <input
          type="text"
          placeholder="Full Name"
          className="p-3 my-3 w-full bg-green-950 rounded-md text-lg "
        /> */}

        <input
          type="email"
          placeholder="Email Address"
          className="p-3 my-3 w-full bg-green-950 rounded-md text-lg placeholder:text-gray-400"
        />
        <input
          // ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-3 w-full bg-green-950 rounded-md text-lg  placeholder:text-gray-400"
        />
        <p className="w-full text-sm text-gray-400 text-center">
          Password must have atleast 6 characters including a uppercase,
          lowercase, numeric & special character
        </p>
        <button className="bg-amber-400 w-full text-black font-semibold p-3 mt-4 rounded-md hover:bg-amber-300 text-lg">
          Login
        </button>
        <p className="text-white px-2 py-2 my-2 ">
          Not registerd?
          <span className="cursor-pointer ml-1 hover:underline underline-offset-2 text-amber-400 ">
            Sign Up Now
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;

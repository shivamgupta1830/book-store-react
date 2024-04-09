import React, { useState, useRef } from "react";
import Header from "./Header";
import background from "../assets/background.jpg";
import {
  validateSignInFormData,
  validateSignUpFormData,
} from "../utils/validateForm";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const setSignUp = () => {
    setIsSignIn(!isSignIn);

    // to remove input and error field data after toogle
    setErrorMsg(null);
    email.current.value = null;
    password.current.value = null;
  };

  const hadleBtnClick = () => {
    const validateSignInMsg = validateSignInFormData(
      email.current.value,
      password.current.value
    );
  };

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

      <form className=" font-serif rounded-md p-8 bg-black bg-opacity-80 text-amber-500 absolute w-[30%] top-20 text-center mx-auto right-0 left-0 flex flex-col  justify-center items-center">
        <p className=" text-amber-500 text-base font-bold text-center mb-3">
          Please Sign in/Sign up to access the cart !
        </p>
        <h2 className="text-3xl font-bold text-white">
          {!isSignIn ? "Sign Up" : "Sign In"}
        </h2>

        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 my-3 w-full bg-green-950 rounded-md text-lg "
          />
        )}

        {/* <input
          type="text"
          placeholder="Full Name"
          className="p-3 my-3 w-full bg-green-950 rounded-md text-lg "
        /> */}

        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="p-3 my-3 w-full bg-green-950 rounded-md text-lg placeholder:text-gray-400"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-3 w-full bg-green-950 rounded-md text-lg  placeholder:text-gray-400"
        />
        <p className="w-full text-sm text-gray-400 text-center">
          Password must have atleast 6 characters including a uppercase,
          lowercase, numeric & special character
        </p>
        <button
          className="bg-amber-500 w-full text-black font-semibold p-3 mt-4 rounded-md hover:shadow-3xl hover:shadow-amber-500 text-lg"
          onClick={hadleBtnClick}
        >
          Login
        </button>
        <p className="text-white px-2 py-2 my-2 ">
          {!isSignIn ? "Already registerd?" : "Not registerd?"}
          <span
            className="cursor-pointer ml-1 hover:underline underline-offset-2 text-amber-500 "
            onClick={setSignUp}
          >
            {!isSignIn ? "Log In" : "Sign Up Now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;

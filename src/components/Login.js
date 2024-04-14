import React, { useState, useRef } from "react";
import Header from "./Header";
import background from "../assets/background.jpg";
import {
  validateSignInFormData,
  validateSignUpFormData,
} from "../utils/validateForm";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
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
    //for sign in

    const validateSignInMsg = validateSignInFormData(
      email.current.value,
      password.current.value
    );

    if (isSignIn) {
      setErrorMsg(validateSignInMsg);
      if (validateSignInMsg) return;

      if (validateSignInMsg === null) {
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;

            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            setErrorMsg(`${errorCode} : Please provide valid credentials !`);
          });
      }
      return;
    }

    // for SIGN UP
    const validateSignUpMsg = validateSignUpFormData(
      name.current.value,
      email.current.value,
      password.current.value
    );

    if (!isSignIn) {
      setErrorMsg(validateSignUpMsg);

      if (validateSignUpMsg) return;

      if (validateSignInMsg === null) {
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;

            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            setErrorMsg(`${errorCode} : Please provide valid credentials !`);
            // ..
          });
      }

      return;
    }
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

      <form
        className=" font-serif rounded-md p-8 mt-6 bg-black bg-opacity-80 text-amber-500 absolute lg:w-[35%] md:w-[60%] sm:w-[75%] top-20 text-center mx-auto right-0 left-0 flex flex-col  justify-center items-center"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <p className=" text-amber-500 text-base md:font-bold sm:font-normal text-center mb-3">
          Please Sign in/Sign up to access the cart !
        </p>
        <h2 className="md:text-2xl sm:text-xl md:font-bold sm:font-normal text-white">
          {!isSignIn ? "Sign Up" : "Sign In"}
        </h2>

        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 my-3 w-full bg-gray-900 rounded-md text-base "
          />
        )}

        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="p-2 my-3 w-full bg-gray-900 rounded-md text-base placeholder:text-gray-400"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-3 w-full bg-gray-900 rounded-md text-base  placeholder:text-gray-400"
        />
        <p className="w-full text-sm text-gray-400 text-center">
          Password must have atleast 6 characters including a uppercase,
          lowercase, numeric & special character
        </p>
        <p className="font-normal text-amber-500 text-base p-2 mt-1">
          {errorMsg}
        </p>
        <button
          className="bg-amber-500 w-full text-black md:font-semibold  sm:font-bold p-2 mt-3 rounded-md hover:shadow-3xl hover:shadow-amber-500 text-lg"
          onClick={hadleBtnClick}
        >
          {!isSignIn ? "Sign Up" : "Sign In"}
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

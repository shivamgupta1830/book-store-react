import React, { useState, useRef } from "react";
import Header from "./Header";
import background from "../assets/background.jpg";
import {
  validateSignInFormData,
  validateSignUpFormData,
} from "../utils/validateForm";

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
        // signInWithEmailAndPassword(
        //   auth,
        //   email.current.value,
        //   password.current.value
        // )
        //   .then((userCredential) => {
        //     // const user = userCredential.user;
        //     // Signed in
        //   })
        //   .catch((error) => {
        //     const errorCode = error.code;
        //     // const errorMessage = error.message;
        //     setErrorMsg(errorCode);
        //   });
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
        //Sign up logic
        // createUserWithEmailAndPassword(
        //   auth,
        //   email.current.value,
        //   password.current.value
        // )
        //   .then((userCredential) => {
        //     // const user = userCredential.user;
        //     // Signed up
        //     name.current.value = null;
        //     email.current.value = null;
        //     password.current.value = null;
        //   })
        //   .catch((error) => {
        //     const errorCode = error.code;
        //     // const errorMessage = error.message;
        //     setErrorMsg(errorCode);
        //   });
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
        className=" font-serif rounded-md p-8 mt-6 bg-black bg-opacity-80 text-amber-500 absolute w-[30%] top-20 text-center mx-auto right-0 left-0 flex flex-col  justify-center items-center"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <p className=" text-amber-500 text-base font-bold text-center mb-3">
          Please Sign in/Sign up to access the cart !
        </p>
        <h2 className="text-2xl font-bold text-white">
          {!isSignIn ? "Sign Up" : "Sign In"}
        </h2>

        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 my-3 w-full bg-gray-900 rounded-md text-lg "
          />
        )}

        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="p-2 my-3 w-full bg-gray-900 rounded-md text-lg placeholder:text-gray-400"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-3 w-full bg-gray-900 rounded-md text-lg  placeholder:text-gray-400"
        />
        <p className="w-full text-sm text-gray-400 text-center">
          Password must have atleast 6 characters including a uppercase,
          lowercase, numeric & special character
        </p>
        <p className="font-semibold text-amber-500 text-base p-2 mt-1">
          {errorMsg}
        </p>
        <button
          className="bg-amber-500 w-full text-black font-semibold p-2 mt-3 rounded-md hover:shadow-3xl hover:shadow-amber-500 text-lg"
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

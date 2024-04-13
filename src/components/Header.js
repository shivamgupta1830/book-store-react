import React from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //For get user and its details from store
  const user = useSelector((store) => store.user);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // removig user from store is happening atumatically from  onAuthStateChanged() finction of firebase in body component
        // Sign-out successful.

        navigate("/login");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in

        const { uid, email } = user;
        dispatch(addUser({ uid: uid, email: email }));
        navigate("/home");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
  };
  return (
    <div className=" font-serif fixed z-10 bg-black py-2 px-6  w-full text-amber-500  flex justify-between items-center font-extrabold">
      <Link to="/home">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="size-12"></img>
          <h1 className="text-2xl font-normal">BK STORE</h1>
        </div>
      </Link>

      <div>
        <ul className="flex justify-between items-center gap-8 font-normal text-lg">
          <Link to="/home">
            <li className=" hover:underline underline-offset-4">Home</li>
          </Link>

          {user && (
            <Link to="/cart">
              <li className="  hover:underline underline-offset-4">🛒Cart </li>
            </Link>
          )}

          <Link to="/login">
            <button
              className="bg-amber-500 text-black py-1 px-2 rounded-md hover:shadow-3xl hover:shadow-amber-500"
              onClick={handleSignout}
            >
              {user ? "Logout" : "Login"}
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;

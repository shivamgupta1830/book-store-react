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
  const cart = useSelector((store) => store.cart.cartItems);

  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  const totalItemsInCart = getTotalQuantity() ? getTotalQuantity() : 0;

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
        navigate("/home");
      }
    });
  };
  return (
    <div className=" font-serif fixed z-10 bg-black sm:py-3 lg:py-2 px-6 w-full text-amber-500  flex md:flex-row sm:flex-col justify-between items-center sm:gap-2">
      <Link to="/home">
        <div className="flex items-center">
          <img
            src={logo}
            alt="logo"
            className="lg:size-12  md:size-8 sm:size-8"
          ></img>
          <h1 className="lg:text-2xl md:text-xl sm:text-base font-bold  ">
            BK STORE
          </h1>
        </div>
      </Link>

      <div>
        <ul className="flex justify-between items-center md:gap-8  sm:gap-6  md:font-normal sm:font-semibold lg:text-lg md:text-base sm:text-sm">
          <Link to="/home">
            <li className=" hover:underline underline-offset-4">Home</li>
          </Link>

          {user && (
            <Link to="/cart">
              <li className="  hover:underline underline-offset-4">
                <span className="md:inline sm:hidden">🛒</span>
                <span>Cart</span>
                <span>{` (${totalItemsInCart})`}</span>
              </li>
            </Link>
          )}

          <Link to="/login">
            <button
              className="bg-amber-500 text-black py-1 px-2  rounded-md hover:shadow-3xl hover:shadow-amber-500 underline-offset-4 "
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

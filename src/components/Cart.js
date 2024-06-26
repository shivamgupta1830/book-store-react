import React from "react";
import Header from "./Header";

import { useSelector } from "react-redux";
import CartItemCard from "./CartItemCard";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const items = useSelector((store) => store.cart.cartItems);
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const cart = useSelector((store) => store.cart.cartItems);

  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  const getTotalCartValue = () => {
    let totalPrice = 0;

    cart.forEach((item) => {
      const itemPrice = item.saleInfo?.listPrice?.amount || 250;

      totalPrice += Math.round(itemPrice) * item.quantity;
    });
    return totalPrice;
  };

  const cartClear = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <Header />

      {user ? (
        <div className=" font-serif w-full h-full sm:px-16 lg:px-20 sm:pt-32 lg:pt-28 pb-[110%]  bg-gray-950 bg-gradient-to-t from-gray-950 to-gray-800 flex flex-col justify-start items-start gap-7">
          {items.length !== 0 ? (
            <div className="w-full flex flex-col justify-start items-start gap-2">
              <div className=" w-full flex justify-between gap-2 ">
                <p className="lg:text-xl md:text-lg sm:text-sm text-amber-500 font-semibold ">
                  Total items{" "}
                  <span className="text-white">{`(${getTotalQuantity()})`}</span>
                </p>
                <button
                  className="bg-red-700 lg:text-lg md:text-sm sm:text-xs font-normal text-white p-2 rounded-md hover:shadow-3xl hover:shadow-red-600  transition-all"
                  onClick={cartClear}
                >
                  Clear 🛒
                </button>
              </div>

              <div className=" md:w-[90%] sm:w-full rounded-md bg-transparent  px-3 pt-3 pb-5">
                {items &&
                  items.map((item) => (
                    <CartItemCard item={item} key={item.id} />
                  ))}
              </div>

              <div className=" w-full flex justify-between gap-2 items-center">
                <h5 className="lg:text-xl md:text-lg sm:text-sm text-amber-500  font-semibold">
                  Total Value: ₹{" "}
                  <span className="text-white">{getTotalCartValue()}</span>
                </h5>
                <Link to="/checkout">
                  <button className="bg-green-700 font-normal lg:text-lg md:text-sm sm:text-xs text-white p-2 rounded-md hover:shadow-3xl hover:shadow-green-600 transition-all">
                    Checkout
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            <h1 className="h-screen text-amber-500 font-bold text-center lg:text-2xl sm:text-base md:text-xl w-full py-16">
              Your cart 🛒 is empty !!
            </h1>
          )}
        </div>
      ) : (
        <div className="bg-gradient-to-t from-gray-950 to-gray-800 ">
          <h1 className="text-amber-500 font-bold text-center lg:text-2xl sm:text-base md:text-xl w-full h-screen pt-32">
            Please Sign in/Sign up to access the cart !
          </h1>
        </div>
      )}
    </div>
  );
};

export default Cart;

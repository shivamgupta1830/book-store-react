import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const Checkout = () => {
  const [name, setName] = useState("Your Name");
  const [contact, setContact] = useState("+91 XXXXXXXXX");
  const [address, setAddress] = useState("Your residential address");
  const user = useSelector((store) => store.user);

  return (
    <div>
      {user ? (
        <div className=" font-serif flex md:flex-row sm:flex-col justify-center items-center gap-10  w-screen h-screen p-16 bg-gradient-to-t from-gray-950 to-gray-800">
          <form
            className=" w-[50%] h-[60%] mx-auto r-0 l-0 flex flex-col justify-start items-start gap-3 bg-gradient-to-t from-amber-500 to-amber-300 p-4 rounded-md hover:shadow-3xl hover:shadow-amber-500"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <h3 className="text-lg font-bold">Fill details for proceeding</h3>
            <input
              type="text"
              className="p-1 rounded-md w-[75%]"
              placeholder="Enter full name"
              onChange={(e) => {
                setName(e.currentTarget.value);
              }}
            />

            <input
              type="tel"
              placeholder="Enter contact number"
              className="p-1 rounded-md w-[75%]"
              onChange={(e) => {
                setContact(e.currentTarget.value);
              }}
            />
            <textarea
              type="address"
              placeholder="Enter your address"
              className="p-1 rounded-md w-[75%] h-[25%]"
              onChange={(e) => {
                setAddress(e.currentTarget.value);
              }}
            />
          </form>
          <div className="h-[65%] w-[1px] bg-amber-500"></div>

          <div className=" w-[50%] h-[60%] mx-auto r-0 l-0 flex flex-col justify-start items-start gap-1 bg-gradient-to-t from-amber-500 to-amber-300 p-4 rounded-md hover:shadow-3xl hover:shadow-amber-500">
            <h3 className="font-bold text-lg">{name}</h3>

            <p>{contact}</p>
            <p className="w-full overflow-hidden"> Address: {address}</p>
            <h3 className="font-semibold">{user.email}</h3>
            <h2 className="font-bold text-lg">
              Total Price: <span className="text-green-900">₹ 9999</span>
            </h2>
            <div className="flex items-center justify-between mt-6 gap-5">
              <Link to="/cart">
                <button className="bg-red-800  text-white p-2 rounded-md hover:shadow-3xl hover:shadow-red-700  transition-all">
                  Back to cart
                </button>
              </Link>
              <button className="text-base bg-green-800 p-2  text-white rounded-md hover:shadow-3xl hover:shadow-green-700 hover:underline hover:underline-offset-4 transition-all">
                Proceed for payment
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-gradient-to-t from-gray-950 to-gray-800 font-bold text-center text-xl w-full h-screen pt-32">
          <h1 className="text-amber-500 ">
            Please Sign in/Sign up to access the cart !
          </h1>
        </div>
      )}
    </div>
  );
};

export default Checkout;

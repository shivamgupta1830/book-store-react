import React, { useEffect, useState } from "react";

import background from "../assets/background.jpg";
import BookCard from "./BookCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [bookData, setBookData] = useState(null);
  // const [search, setSearch] = useState();

  useEffect(() => {
    fetchList();
  }, []);

  const fetchList = async () => {
    try {
      const data = await fetch(
        "https://www.googleapis.com/books/v1/volumes?q=React&key=AIzaSyC176OCzs4gheSmWEdQovGrQgZnB0SstAI"
      );
      const response = await data.json();

      setBookData(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" w-full  bg-gradient-to-t from-gray-950 to-gray-800 flex flex-col justify-between gap-12 p-20">
      <form
        className=" font-serif p-2 w-[40%] mx-auto right-0 left-0 text-center bg-gradient-to-t from-amber-500 to-amber-300 rounded-md "
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder="Search book name.."
          className="rounded-l-md p-2 w-[78%] bg-black text-amber-500 font-medium"
        ></input>
        <button
          type="submit"
          className="bg-black font-medium hover:bg-gray-900 text-amber-500 p-2 rounded-r-md w-[20%] ml-2"
        >
          Search
        </button>
      </form>

      {/* <div className="fixed -z-20">
        <img
          src={background}
          alt="background"
          className="h-screen w-screen object-cover"
        ></img>
      </div> */}

      <div className=" flex justify-evenly items-center flex-wrap gap-6 ">
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>

      {/* <Shimmer /> */}
    </div>
  );
};

export default Body;

import React, { useEffect, useState } from "react";

import BookCard from "./BookCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [bookData, setBookData] = useState(null);

  const [query, setQuery] = useState();

  useEffect(() => {
    const setDebouncing = setTimeout(() => {
      fetchList(query);
    }, 1000);

    return () => clearTimeout(setDebouncing);
  }, [query]);

  const fetchList = async (search = query) => {
    try {
      const data = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyC176OCzs4gheSmWEdQovGrQgZnB0SstAI`
      );

      const response = await data.json();

      if (query) {
        const bookList = response.items;
        setBookData(bookList);
        console.log(query);
        console.log(bookList);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-full bg-gradient-to-t from-gray-950 to-gray-800 ">
      <div className="flex-col justify-between gap-12 p-20">
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
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            gradient-to-t
            from-gray-950
            to-gray-800
          ></input>
          <button
            type="submit"
            className="bg-black font-medium hover:bg-gray-900 active:scale-105 text-amber-500 p-2 rounded-r-md w-[20%] ml-2"
            onClick={fetchList}
          >
            Search
          </button>
        </form>

        <div className=" w-full h-full flex justify-evenly items-center flex-wrap gap-6 px-10 pt-14 pb-[31%] ">
          {bookData && bookData.map((data) => <BookCard data={data} />)}
        </div>

        {/* <Shimmer /> */}
      </div>
    </div>
  );
};

export default Body;

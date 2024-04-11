import React, { useEffect, useState } from "react";

import BookCard from "./BookCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [bookData, setBookData] = useState();

  const [query, setQuery] = useState();

  useEffect(() => {
    const setDebouncing = setTimeout(() => {
      fetchList(query);
    }, 500);

    return () => clearTimeout(setDebouncing);
  }, [query]);

  const fetchList = async (query = "react") => {
    try {
      const data = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40&key=AIzaSyC176OCzs4gheSmWEdQovGrQgZnB0SstAI`
      );

      const response = await data.json();

      if (query) {
        const bookList = response.items;
        setBookData(bookList);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-full bg-gradient-to-t from-gray-950 to-gray-800">
      <div className="flex-col justify-between gap-12 p-24">
        <form
          className=" font-serif p-1 w-[50%] mx-auto right-0 left-0 text-center bg-gradient-to-t from-amber-500 to-amber-300 rounded-md "
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            placeholder="Search book name such as React.."
            className="rounded-l-md p-2 w-[78%] bg-black text-amber-500 font-normal text-base"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            gradient-to-t
            from-gray-950
            to-gray-800
          ></input>
          <button
            type="submit"
            className="bg-black text-base font-normal hover:bg-gray-900 active:scale-105 text-amber-500 p-2 rounded-r-md w-[20%] ml-2"
            onClick={fetchList}
          >
            Search
          </button>
        </form>

        <div className=" w-full h-full flex justify-evenly items-center flex-wrap gap-4 px-6 pt-9 ">
          {bookData ? (
            bookData.map((data) => <BookCard data={data} key={data.id} />)
          ) : (
            <Shimmer />
          )}
        </div>
      </div>
    </div>
  );
};

export default Body;

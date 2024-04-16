import React, { useState } from "react";

import BookCard from "./BookCard";
import Shimmer from "./Shimmer";
import useFetchBooksList from "../hooks/fetchBooksList";
import { useSelector } from "react-redux";

const Body = () => {
  const [query, setQuery] = useState();

  useFetchBooksList(query);

  const bookData = useSelector((store) => store.bookData.bookData);

  // useEffect(() => {
  //   const setDebouncing = setTimeout(() => {
  //     fetchList(query);
  //   }, 500);

  //   return () => clearTimeout(setDebouncing);
  // }, [query]);

  // const fetchList = async (query = "react") => {
  //   try {
  //     const data = await fetch(
  //       `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40&key=AIzaSyC176OCzs4gheSmWEdQovGrQgZnB0SstAI`
  //     );

  //     const response = await data.json();

  //     if (query) {
  //       const bookList = response.items;
  //       setBookData(bookList);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div className="w-[100%] h-full  bg-gradient-to-t from-gray-950 to-gray-800">
      <div className="flex-col justify-between  items-center gap-12 md:p-24 sm:p-20 ">
        <form
          className=" font-serif p-1 md:w-[75%] lg:w-[50%] sm:w-[100%] mx-auto right-0 left-0  bg-amber-500 rounded-md sm:mt-8 md:mt-0"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            placeholder="Search book title.. "
            className="rounded-l-md p-2 w-full bg-black  text-amber-500 font-normal md:text-base sm:text-sm"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            gradient-to-t
            from-gray-950
            to-gray-800
          />
        </form>

        <div className=" w-full h-full flex justify-center items-center flex-wrap md:gap-5 lg:gap-4 sm:gap-6 px-6 pt-9 ">
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

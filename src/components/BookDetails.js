import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/cartSlice";
import book_fallback from "../assets/book_fallback.jpeg";

const BookDetails = () => {
  const { id } = useParams();
  const [bookData, setBookData] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    fetchBookDetails();
  }, []);

  const fetchBookDetails = async () => {
    try {
      const data = await fetch(
        `https://www.googleapis.com/books/v1/volumes/${id}`
      );

      const response = await data.json();

      setBookData(response);
    } catch (error) {
      console.log(error);
    }
  };

  if (!bookData) return;

  const { volumeInfo, saleInfo } = bookData;

  const title = volumeInfo?.title ? volumeInfo?.title : "Title Unkown";
  const date = volumeInfo?.publishedDate
    ? volumeInfo?.publishedDate
    : "Not available";
  const price = saleInfo?.listPrice?.amount ? saleInfo?.listPrice?.amount : 250;

  const author =
    volumeInfo?.authors && volumeInfo?.authors?.length > 0
      ? volumeInfo?.authors[0].slice(0, 25)
      : "Author Unkown";

  const description = volumeInfo?.description
    ? volumeInfo?.description
    : "No description";

  const image = volumeInfo?.imageLinks?.thumbnail
    ? volumeInfo?.imageLinks?.thumbnail
    : book_fallback;
  const link = volumeInfo?.previewLink ? volumeInfo?.previewLink : "#";

  const addCartItems = () => {
    dispatch(addItem(bookData));
  };

  return (
    <div className=" w-full md:h-full lg:h-screen sm:h-full lg:px-32 lg:py-32  md:px-16 md:py-28 sm:px-10 sm:py-28 bg-gradient-to-t from-gray-950 to-gray-800">
      {bookData && (
        <div>
          <div className="  lg:w-[auto] md:w-full sm:w-full m-auto r-0 l-0 flex md:flex-row sm:flex-col justify-start md:items-start sm:items-center  p-2 gap-4  ">
            <img
              src={image}
              alt="book"
              className="lg:size-96 md:size-48 sm:size-32 sm:mb-4 md:mb-0 rounded-md "
            ></img>
            <div className="font-serif text-white h-full flex flex-col justify-between md:items-start sm:items-center px-4 md:gap-2 sm:gap-0">
              <h4 className="text-amber-500 font-extrabold sm:text-lg md:text-xl lg:text-2xl">
                {title}
              </h4>
              <h5 className="text-red-600 font-bold lg:text-xl md:text-lg sm:text-base">
                {author}
              </h5>
              <h6 className="text-green-600 font-bold md:text-base sm:text-sm">
                Published: {date}
              </h6>
              <h6 className="text-gray-200 font-bold md:text-base sm:text-sm md:mt-0 sm:mt-2">
                Description
              </h6>
              <p className="text-gray-200 font-medium md:text-base sm:text-sm sm:text-center md:text-start">
                {description.slice(0, 500) + "..."}
                <span>
                  <Link
                    to={link}
                    href={link}
                    target="_blank"
                    rel="noopener"
                    className=" font-bold hover:underline hover:underline-offset-2 p-1 text-amber-700 rounded-md transition-all"
                  >
                    know more on google books.
                  </Link>
                </span>
              </p>
              <p className="text-amber-500 font-bold md:text-lg sm:text-base md:mt-0 sm:mt-2">
                Price:₹ {Math.round(price)}
              </p>
              <div className="flex justify-between items-center gap-5 mt-2">
                <Link to="/cart">
                  <button
                    className="bg-amber-500 font-medium text-black md:p-3 sm:p-2 rounded-md hover:shadow-3xl hover:shadow-amber-300 transition-all sm:text-sm md:text-base sm:mb-4 "
                    onClick={addCartItems}
                  >
                    Add to cart 🛒
                  </button>
                </Link>

                <Link to="/home">
                  <button className="bg-red-800 font-medium text-white md:p-3 sm:p-2 rounded-md hover:shadow-3xl hover:shadow-red-700  transition-all  sm:text-sm md:text-base sm:mb-4">
                    Back to Home
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookDetails;

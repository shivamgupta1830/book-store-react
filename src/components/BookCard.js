import React from "react";
import { Link } from "react-router-dom";
import book_fallback from "../assets/book_fallback.jpeg";

const BookCard = ({ data }) => {
  const { id, volumeInfo } = data;

  if (!data) return;

  const title = volumeInfo?.title ? volumeInfo?.title : "Title Unkown";

  const author =
    volumeInfo?.authors && volumeInfo?.authors?.length > 0
      ? volumeInfo?.authors[0].slice(0, 25)
      : "Author Unkown";

  const image = volumeInfo?.imageLinks?.thumbnail
    ? volumeInfo?.imageLinks?.thumbnail
    : book_fallback;

  return (
    <div>
      {data && (
        <div className=" flex flex-col justify-start gap-3  items-center  font-serif md:w-[250px] sm:w-[200px] md:h-[430px] sm:h-[380px] bg-gradient-to-t from-amber-500 to-amber-300 mb-12 px-1 pt-1 pb-4 rounded-md hover:shadow-3xl hover:shadow-amber-500 transition-all hover:scale-105">
          <img
            src={image}
            alt="book-cover"
            className=" w-[100%] md:h-[250px] sm:h-[200px] object-fit"
          ></img>
          <p className="text-black font-semibold md:text-sm sm:text-xs text-center p-1">
            {title.slice(0, 60)}
          </p>
          <p className="text-amber-900 font-semibold md:text-sm sm:text-xs text-center">
            {author}
          </p>

          <Link to={`/book/${id}`}>
            <button className="bg-black w-full text-amber-500 font-normal py-2 px-4 mt-1  md:text-sm sm:text-xs rounded-md hover:shadow-3xl hover:shadow-gray-800 transition-all">
              Details
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default BookCard;

import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ data }) => {
  const { id, volumeInfo } = data;

  if (!data) return;

  const title = volumeInfo?.title ? volumeInfo?.title : "Title Unkown";

  // const author = volumeInfo?.authors[0]
  //   ? volumeInfo?.authors[0]
  //   : "Author Unkown";
  const author = "Author unkown";

  const image = volumeInfo?.imageLinks?.thumbnail
    ? volumeInfo?.imageLinks?.thumbnail
    : volumeInfo?.imageLinks?.smallThumbnail;

  return (
    <div>
      {data && (
        <div className=" flex flex-col justify-start gap-3  items-center  font-serif w-[250px] h-[450px] bg-gradient-to-t from-amber-500 to-amber-300 mb-12 px-1 pt-1 pb-4 rounded-md hover:shadow-3xl hover:shadow-amber-500 transition-all">
          <img
            src={image}
            alt="book-cover"
            className=" w-[100%] h-[250px] object-fit"
          ></img>
          <p className="text-black font-bold text-sm text-center p-1">
            {title.slice(0, 60)}
          </p>
          <p className="text-amber-900 font-semibold text-sm text-center">
            {author}
          </p>

          <Link to={`/book/${id}`}>
            <button className="bg-black w-full text-amber-500 font-semibold py-2 px-4 mt-1  text-sm rounded-md hover:bg-gray-900 hover:scale-105 transition-all">
              Details
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default BookCard;

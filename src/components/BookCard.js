import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ data }) => {
  const { id, volumeInfo, authors, selfLinks } = data;
  if (!data) return;

  const title = volumeInfo?.title ? volumeInfo?.title : "Unkown";
  const author = volumeInfo?.authors[0] ? volumeInfo?.authors[0] : "Unkown";
  const image = volumeInfo?.imageLinks?.thumnail
    ? volumeInfo?.imageLinks?.thumnail
    : volumeInfo?.imageLinks?.smallThumbnail;

  console.log(data);

  return (
    <div>
      {data && (
        <div className=" flex flex-col justify-between items-center  font-serif w-[275px] h-[435px] bg-gradient-to-t from-amber-500 to-amber-300 mb-12 px-1 pt-1 pb-4 rounded-md hover:shadow-3xl hover:shadow-amber-500   border border-amber-900 transition-all">
          <img
            src={image}
            alt="book-cover"
            className=" w-[100%] h-[275px] object-fit"
          ></img>
          <p className="text-black font-bold text-base text-center p-1">
            {title}
          </p>
          <p className="text-amber-900 font-semibold text-base text-center">
            {author}
          </p>

          <Link to={`/book/${id}`}>
            <button className="bg-black w-full text-amber-500 font-semibold py-2 px-4 mt-1  rounded-md hover:bg-gray-900 text-sm hover:scale-105 transition-all">
              Details
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default BookCard;

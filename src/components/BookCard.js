import React from "react";
import { Link } from "react-router-dom";

const BookCard = () => {
  return (
    <div className=" flex flex-col justify-between items-center  font-serif w-[250px] h-[400px] bg-gradient-to-t from-amber-500 to-amber-300 mb-12 px-1 pt-1 pb-4 rounded-md hover:shadow-3xl hover:shadow-amber-500   border border-amber-900 transition-all">
      <img
        src="https://books.google.com/books/publisher/content?id=ULRJCgAAQBAJ&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE71jKMpcFScnssuhwQHV_a2trr_-1BY8RM0PKvpL4JAQaXsSCpVWEaGESMqpbdXia0iAS0s9ewpRvju__J3uJ0ghz21lQI3TypuBuQ7RCdFRJge-zGEnqpcW1gKmDQmuWPWfK6aL&source=gbs_api"
        alt="book-cover"
        className=" w-[100%] h-[275px] object-cover"
      ></img>
      <p className="text-black font-semibold text-base text-center">
        Practical Web Development
      </p>
      <p className="text-amber-950 font-semibold text-sm text-center">
        Shivam Gupta
      </p>

      <Link to="/book/:id">
        <button className="bg-black w-full text-amber-500 font-semibold py-2 px-4 mt-1  rounded-md hover:bg-gray-900 text-sm hover:scale-105 transition-all">
          Details
        </button>
      </Link>
    </div>
  );
};

export default BookCard;

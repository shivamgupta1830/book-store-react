import React from "react";
import Link from "react-router";

const BookCard = () => {
  return (
    <div className=" flex flex-col justify-between items-center  font-serif w-[250px] h-[400px] bg-gradient-to-t from-amber-500 to-amber-300 mb-12 px-1 pt-1 pb-4 rounded-md ">
      <img
        src="https://books.google.com/books/publisher/content?id=ULRJCgAAQBAJ&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE71jKMpcFScnssuhwQHV_a2trr_-1BY8RM0PKvpL4JAQaXsSCpVWEaGESMqpbdXia0iAS0s9ewpRvju__J3uJ0ghz21lQI3TypuBuQ7RCdFRJge-zGEnqpcW1gKmDQmuWPWfK6aL&source=gbs_api"
        alt="book-cover"
        className=" w-[100%] h-[275px] object-cover"
      ></img>
      <p className="text-black font-semibold text-base">
        Practical Web Development
      </p>
      <p className="text-black font-semibold text-sm">Shivam Gupta</p>
      <button className="bg-black w-1/2 text-amber-400 font-semibold py-2  rounded-md hover:bg-gray-950 text-sm hover:scale-105 transition-all">
        Details
      </button>
    </div>
  );
};

export default BookCard;

import React from "react";

const BookDetails = () => {
  return (
    <div className=" h-full  bg-gradient-to-t from-gray-950 to-gray-800 p-32">
      <div className="  w-[90%] m-auto r-0 l-0 flex  justify-between items-start bg-gradient-to-t from-amber-500 to-amber-300 p-2 rounded-md  shadow-3xl shadow-amber-500 border border-amber-900">
        <img
          src="https://books.google.com/books/publisher/content?id=jUvZDQAAQBAJ&printsec=frontcover&img=1&zoom=2&edge=curl&imgtk=AFLRE73JfemYXmNF3Znnmr7ymwCXEa_5Q4IpMzPANMxSX6VojhkmudzwZoIAXHvXwtEUQ5Ne1HoSQEI0OlNgTDVZS6QzQItbv5X36vV-GvGDwLzUo5O8lTvRdrrC8ieu6qA9VK3b-kAm&source=gbs_api"
          alt="book"
          className=""
        ></img>
        <div className="font-serif text-white flex flex-col justify-evenly items-start px-4 gap-2">
          <h4 className="text-black font-extrabold text-3xl"> Book Title</h4>
          <h5 className="text-amber-900 font-bold text-xl">Author name</h5>
          <h6 className="text-orange-800 font-bold text-md">
            Published: 2009-07-01
          </h6>
          <h6 className="text-gray-700 font-bold text-md">Description</h6>
          <p className="text-black font-medium text-md">
            Traditional Chinese edition of Flowers for Algernon, the Daniel
            Keyes classic. Charlie, a simple young man who was born with a very
            low IQ, became a perfect subject for an experimental surgery to
            improve his intelligence, an experiment that was successful for
            Algernon, a mouse A novella that won the Hugo Award in 1960 and the
            Nebula in 1966 and inspired the film Charly for which Cliff
            Robertson received an Oscar for Best Actor in 1969. In Chinese.
            Distributed by Tsai Fong Books, Inc
          </p>
          <p className="text-black font-bold text-lg">Price:₹ 999</p>
          <div className="flex justify-between items-center gap-5 mt-2">
            <button className="bg-black font-semibold text-amber-500 p-3 rounded-md hover:bg-gray-900 hover:scale-105 transition-all">
              Add to cart 🛒
            </button>
            <button className="bg-amber-900 font-semibold text-white p-3 rounded-md hover:bg-amber-800 hover:scale-105 transition-all">
              <a
                href="https://books.google.co.in/books?id=jLkrDwAAQBAJ&printsec=frontcover&dq=React&hl=&cd=1&source=gbs_api#v=onepage&q=React&f=false"
                target="_blank"
              >
                {" "}
                Google Book
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

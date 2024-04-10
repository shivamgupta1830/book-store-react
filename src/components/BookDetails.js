import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  const [bookData, setBookData] = useState();

  useEffect(() => {
    fetchBookDetails();
  }, []);

  const fetchBookDetails = async () => {
    try {
      const data = await fetch(
        `https://www.googleapis.com/books/v1/volumes/${id}`
      );

      const response = await data.json();
      console.log(response);
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
  const author = volumeInfo?.authors[0]
    ? volumeInfo?.authors[0]
    : "Author Unkown";

  const description = volumeInfo?.description
    ? volumeInfo?.description
    : "No description";

  const image = volumeInfo?.imageLinks?.thumbnail
    ? volumeInfo?.imageLinks?.thumbnail
    : volumeInfo?.imageLinks?.smallThumbnail;
  const link = volumeInfo?.previewLink ? volumeInfo?.previewLink : "#";

  return (
    <div className=" w-full h-full p-32 bg-gradient-to-t from-gray-950 to-gray-800">
      <div className="  w-[auto] m-auto r-0 l-0 flex  justify-start items-start bg-gradient-to-t from-amber-500 to-amber-300 p-2 rounded-md  shadow-3xl shadow-amber-500 border border-amber-900">
        <img src={image} alt="book" className="size-96"></img>
        <div className="font-serif text-white h-full flex flex-col justify-between items-start px-4 gap-2">
          <h4 className="text-black font-extrabold text-2xl">{title}</h4>
          <h5 className="text-amber-900 font-bold text-xl">{author}</h5>
          <h6 className="text-orange-800 font-bold text-md">
            Published: {date}
          </h6>
          <h6 className="text-gray-700 font-bold text-md">Description</h6>
          <p className="text-black font-medium text-md">
            {description.slice(0, 500) + "..."}
            <span>
              <a
                href={link}
                target="_blank"
                className="text-amber-900 font-bold hover:underline"
              >
                read more on Google books
              </a>
            </span>
          </p>
          <p className="text-black font-bold text-lg">
            Price:₹ {Math.round(price)}
          </p>
          <div className="flex justify-between items-center gap-5 mt-2">
            <button className="bg-black font-semibold text-amber-500 p-3 rounded-md hover:bg-gray-900 hover:scale-105 transition-all">
              Add to cart 🛒
            </button>
            <button className="bg-amber-900 font-semibold text-white p-3 rounded-md hover:bg-amber-800 hover:scale-105 transition-all">
              <a href={link} target="_blank" rel="n">
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

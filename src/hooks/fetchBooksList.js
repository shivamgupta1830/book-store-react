import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addBookData } from "../utils/bookDataSlice";
import API_KEY from "../utils/constants";

const useFetchBooksList = (query) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const setDebouncing = setTimeout(() => {
      fetchList(query);
    }, 500);

    return () => clearTimeout(setDebouncing);
  }, [query]);

  const fetchList = async (query) => {
    try {
      const data = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40&key=${API_KEY}`
      );

      const response = await data.json();

      if (query) {
        const bookList = response.items;
        dispatch(addBookData(bookList));
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export default useFetchBooksList;

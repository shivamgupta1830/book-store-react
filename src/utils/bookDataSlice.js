import { createSlice } from "@reduxjs/toolkit";

const bookDataSlice = createSlice({
  name: "bookData",
  initialState: {
    bookData: null,
  },
  reducers: {
    addBookData: (state, action) => {
      state.bookData = action.payload;
    },
  },
});
export const { addBookData } = bookDataSlice.actions;
export default bookDataSlice.reducer;

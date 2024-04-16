import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice";
import bookDataSlice from "./bookDataSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    bookData: bookDataSlice,
  },
});

export default appStore;

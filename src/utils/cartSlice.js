// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     cartItems: [],
//   },
//   reducers: {
//     addItem: (state, action) => {
//       state.cartItems.push(action.payload);
//     },
//     deleteItem: (state, action) => {
//       state.cartItems = state.items.filter(
//         (item) => item.id !== action.payload.id
//       );
//     },
//     clearCart: (state) => {
//       state.cartItems.length = 0;
//     },
//   },
// });

// export const { addItem, deleteItem, clearCart } = cartSlice.actions;
// export default cartSlice.reducer;

// #####################################################################################

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItem: (state, action) => {
      const itemInCart = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    increaseItem: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      item.quantity++;
    },
    decreaseItem: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = removeItem;
    },
    clearCart: (state, action) => {
      state.cartItems.length = 0;
    },
  },
});

export const { addItem, increaseItem, decreaseItem, removeItem, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./AddToCartSlice"

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
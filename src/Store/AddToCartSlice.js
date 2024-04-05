import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    items: [],
  },
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const indexToRemove = state.items.findIndex(
        item => item.id === action.payload.id
      );
      if (indexToRemove !== -1) {
        state.items.splice(indexToRemove, 1);
      }
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectItems = state => state.basket.items;

export default basketSlice.reducer;
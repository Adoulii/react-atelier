import { createSlice } from "@reduxjs/toolkit";
import DataService from "../../services/api";

let initialState = {
  wishlistItems: [],
  errors: "",
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const newItem = action.payload;
      state.wishlistItems.push(newItem);
    },
    removeFromWishlist: (state, action) => {
      const itemId = action.payload;
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item.id !== itemId
      );
    },
    deleteWishlist: (state) => {
      state.wishlistItems = [];
    },
  },
});

export const { addToWishlist, removeFromWishlist, deleteWishlist } =
  wishlistSlice.actions;

export const selectWishlistItems = (state) => state.wishlist.wishlistItems;
export const selectWishlistCount = (state) =>
  state.wishlist.wishlistItems.length;

export default wishlistSlice.reducer;

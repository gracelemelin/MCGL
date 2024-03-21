import { createSlice } from "@reduxjs/toolkit";
import db from "../../Database";

const initialState = {
  favorites: db.favorites,
  favorite: {"shop_id": "000", "title": "Handcrafted Wooden Bowl", "date_added": "0-0-0000"},
};


const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFav: (state, action) => {
      state.favorites = [
        { ...action.payload},
          ...state.favorites,
      ];
    },
    deleteFav: (state, action) => {
      state.favorites = state.favorites.filter(
        (favorite : any) => favorite.shop_id !== action.payload.shop_id && favorite.title !== action.payload.title
      );
    }
  },
});


export const { addFav, deleteFav} = favoritesSlice.actions;
export default favoritesSlice.reducer;
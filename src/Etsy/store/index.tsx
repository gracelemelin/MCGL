import { configureStore } from "@reduxjs/toolkit";
import FavReducer from "../Profile/Favorites/FavReducer";

export interface EtsyState {
    FavReducer: {
    favorites: any[];
    favorite: any;
  };
}
const store = configureStore({
  reducer: {
    FavReducer
  }
});


export default store;
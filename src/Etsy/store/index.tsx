import { configureStore } from "@reduxjs/toolkit";
import FavReducer from "../Profile/Favorites/FavReducer";
import UserReducer from "../Profile/UserReducer";

export interface EtsyState {
    FavReducer: {
    favorites: any[];
    favorite: any;
  },
  UserReducer: {
    user: any
  },
}
const store = configureStore({
  reducer: {
    FavReducer,
    UserReducer,
  }
});


export default store;
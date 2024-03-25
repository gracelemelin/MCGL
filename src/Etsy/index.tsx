import React from "react";
import Profile from "./Profile";
import SearchNav from "./BasicComp/SearchNav";
import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import { Provider } from "react-redux";
import store from "./store";
import LOListings from "./BasicComp/LOListings";
import db from "./Database"
import Login from "./Profile/Login";
import Register from "./Profile/Register";
import Account from "./Account";
import useNavigateBack from "./ListenerComp";
import Home from "./Home";

function Etsy() {
  return (
    <Provider store={store}>
      <Routes>
          <Route path="/" element={<Navigate to="Home" />} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/Account/*" element={<Account/>} />
          <Route path="/Home/:userID/*" element={<Profile/>} />
          {/* <Route path="Home/:userID/:otherUserID*" element={<OtherProfile/>} /> */}
      </Routes>
      {/* <SearchNav/>
      <LOListings listings={db.listings} favorites={db.favorites} />
      <Login/>
      <BottomNav/> */}
    </Provider>
  );
}

export default Etsy;

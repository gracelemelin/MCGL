import React from "react";
import Profile from "./Etsy/Profile";
import SearchNav from "./Etsy/BasicComp/SearchNav";
import { HashRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";
import Etsy from "./Etsy";

function App() {
  return (
    
    <HashRouter>
      <Etsy/>
    </HashRouter>
);
}

export default App
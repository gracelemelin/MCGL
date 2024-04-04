import { Routes, Route, Navigate } from "react-router";
import Profile from "../Profile";
import Login from "../Profile/Login";
import Register from "../Profile/Register";
import { useNavigate } from 'react-router-dom'; 
import { AiOutlineHome } from "react-icons/ai";
import ProfileOther from "../Profile/ProfileOther";
import { useEffect, useState } from "react";
import * as userClient from "../Profile/client";

function Account() {
  const [loggedIn, isLoggedIn] = useState(false);

  useEffect(() => {
    const fetchUserLoggedIn = async () => {
        try {
            const profile = await userClient.profile();
            isLoggedIn(true)
        } catch (error) {
            console.error('Error fetching user profile:', error);
            isLoggedIn(false)
        }
    };

    fetchUserLoggedIn();
  }, []); 

    const navigate = useNavigate(); 

    const goToHome = () => {
        // Navigate to favorites page
        navigate("/Home");
    };

  return (
    <div className="container-fluid">
      <h1>Account</h1>
        <AiOutlineHome className="navbar-icon" style={{color: "black", fontSize: "1.5em" }} onClick={goToHome} />
      <Routes>
        <Route
            path="/"
            element={loggedIn ? <Navigate to="/Account/Profile" /> : <Navigate to="/Account/Login" />}
          />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Profile/:userId" element={<ProfileOther />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </div>
  );
}
export default Account
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import * as userClient from "../client";
import { useParams } from "react-router-dom";
// import './index.css'; 


export default function ProfileOther() {
    const {userId} = useParams();
    const [user, setUser] = useState({
        _id: "",
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
        do: "",
        role: ""
    });
    const navigate = useNavigate();
    
    const fetchProfile = async () => {
        try {
            const profile = await userClient.profileother(userId);
            console.log(profile);
            setUser({...profile});
            console.log(user)
            } catch (error) {
            console.error(error);
            }
    };
    
    const logout = async () => {
        await userClient.logout();
        navigate("/Account/Login");
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    return (
        <div className="profile-container">
        <div className="profile-header">
            <h1>Welcome to {user.username}'s page</h1>
            <button onClick={logout} className="logout-btn">Logout</button>
        </div>
        <div className="profile-details">
            {
            <div>
                <h2>Profile Details</h2>
                <p><strong>email:</strong> {user.email}</p>
                <p><strong>Role:</strong> {user.role}</p>
            </div>
            }
        </div>
        </div>
  );
}

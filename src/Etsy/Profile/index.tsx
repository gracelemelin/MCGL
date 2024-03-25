import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import * as userClient from "./client";
import './index.css'; 

export default function Profile() {
  const [user, setUser] = useState({
    username: "johndoe",
    password: "password",
    email: "johndoe@neu.edu",
  });

  const [newUsername, setNewUsername] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();
  
  const fetchProfile = async () => {
    try {
      const profile = await userClient.profile();
      setUser(profile);
    } catch (error) {
      console.error(error);
    }
  };
  
  const logout = async () => {
    await userClient.logout();
    navigate("/Account/Login");
  };

  const handleUsernameChange = (event : any) => {
    setNewUsername(event.target.value);
  };

  const handleEmailChange = (event : any) => {
    setNewEmail(event.target.value);
  };

  const handleEditClick = () => {
    setEditMode(true); // Enable edit mode
    setNewUsername(user.username); // Populate input fields with current user data
    setNewEmail(user.email);
  };

  const handleCancelEdit = () => {
    setEditMode(false); // Disable edit mode
    setNewUsername(""); // Clear input fields
    setNewEmail("");
  };
  
  const handleUpdateProfile = async () => {
    try {
      await fetch("/api/users/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: newUsername,
          email: newEmail,
        }),
      });
      fetchProfile(); // Refresh profile data after update
      setEditMode(false); // Disable edit mode after update
      setUser({...user, username: newUsername, email : newEmail})
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Welcome, {user.username}</h1>
        <button onClick={logout} className="logout-btn">Logout</button>
      </div>
      <div className="profile-details">
        {editMode ? (
          <div>
            <h2>Edit Profile</h2>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={newUsername}
                onChange={handleUsernameChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={newEmail}
                onChange={handleEmailChange}
              />
            </div>
            <button onClick={handleUpdateProfile} className="update-btn">Update Profile</button>
            <button onClick={handleCancelEdit} className="cancel-btn">Cancel</button>
          </div>
        ) : (
          <div>
            <h2>Profile Details</h2>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <button onClick={handleEditClick} className="edit-btn">Edit Profile</button>
          </div>
        )}
      </div>
    </div>
  );
}

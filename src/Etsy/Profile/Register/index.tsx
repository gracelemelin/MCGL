import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as userClient from "../client";
import "./index.css"

export default function Register() {
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
  const register = async () => {
    try {
      await userClient.register(user);
      navigate("/Account/Profile");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="register-container">
      <h1>Register for an Account</h1>
      <div className="register-form">
        <input
          type="text"
          value={user.username}
          className="form-control"
          placeholder="Username"
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <input
          type="password"
          value={user.password}
          className="form-control"
          placeholder="Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <input
          type="email"
          value={user.email}
          className="form-control"
          placeholder="Email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <button onClick={register} className="register-btn">Register</button>
        <p>Already have an account? <Link to="/Account/Login">Login</Link></p>
      </div>
    </div>
  );
}
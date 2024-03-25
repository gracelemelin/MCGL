import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import * as userClient from "../client";
import "./index.css";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from "../UserReducer";
import { EtsyState } from "../../store";

export default function Login() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state: EtsyState) => state.UserReducer.user);

  const [user, setLoginUser] = useState({
    username: "",
    password: "",
    email: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false); 

  const navigate = useNavigate();

  const login = async () => {
    try {
      const resuser = await userClient.login(user);
      console.log(resuser)
      dispatch(setUser(resuser));
      navigate("/Account/Profile");
    } catch (error : any) {
      if (error.response && error.response.status === 401) {
        setErrorMessage("Login info is invalid");
      } else {
        console.error(error);
      }
    }
  };
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  return (
    <div className="login-container">
      <h1>Login to Your Account</h1>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <div className="login-form">
        <input
          type="text"
          value={user.username}
          className="form-control"
          placeholder="Username"
          onChange={(e) => setLoginUser({ ...user, username: e.target.value })}
        />
        <div className="password-input-container">
          <input
            type={showPassword ? "text" : "password"} // Conditionally set input type based on showPassword state
            name="password"
            value={user.password}
            className="form-control password-input"
            placeholder="Password"
            onChange={(e) => setLoginUser({ ...user, password : e.target.value })}
          />
          <button
            className="toggle-password-btn"
            onClick={togglePasswordVisibility}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
          </button>
        </div>

        <button onClick={login} className="login-btn">Login</button>
        <div className="login-footer">
          <p>Don't have an account? <Link to="/Account/Register">Register</Link></p>
          {/* <Link to="/forgot-password">Forgot Password?</Link> */}
        </div>
      </div>
    </div>
  );
}
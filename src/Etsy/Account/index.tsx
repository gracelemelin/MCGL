import { Routes, Route, Navigate } from "react-router";
import Profile from "../Profile";
import Login from "../Profile/Login";
import Register from "../Profile/Register";
import { useNavigate } from 'react-router-dom'; 
import { AiOutlineHome } from "react-icons/ai";

function Account() {
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
        <Route path="/" element={<Navigate to="/Account/Login" />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </div>
  );
}
export default Account
import React from "react";
import logo1 from '../images/image.png'
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
    const navigate = useNavigate();

    const loginClick = () => {
        navigate('/login')
    }

    const signUpClick = () => {
      navigate('/signup')
    }

  return (
    <div>
      <div className="header">
        <img src={logo1} style={{ width: "70px" }} alt="logo" />
        <div className="home">
          <p className="para">Home</p>
          <p className="para">Practice Areas</p>
          <p className="para">Members</p>
          <p className="para">About Us</p>
          <p className="para">Contact</p>
        </div>
        <div className="button">
          
            <p className="login" onClick={loginClick}>Login</p>
          
          <button className="signup" onClick={signUpClick}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Header;

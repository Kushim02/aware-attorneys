import React, { useState } from "react";
import logo1 from '../images/image.png'
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

    const navigate = useNavigate();

    const loginClick = () => {
        navigate('/login');
        setIsOpen(false);
    }

    const signUpClick = () => {
      navigate('/signup');
      setIsOpen(false);
    }

    // const handlePracticeAreasClick = (e) => {
    //   e.preventDefaualt();
    //   const element = document.getElementById("practice-areas")
    //   if(element) {
    //     element.scrollIntoView({behavior: "smooth"})
    //   }
    // }

  return (
    <div>
      <div className="header fixed top-0 left-0 right-0 z-50">
        <img src={logo1} style={{ width: "70px" }} alt="logo" className="" />
        <div className=" hidden sm:flex space-x-4">
          <p className="para">Home</p>
          <a href="#practice-areas" className="para" >Practice Areas</a>
          <a href="#attorneys" className="para">Members</a>
          <a href="#about-us" className="para">About Us</a>
          <a href="#contact" className="para">Contact</a>
        </div>
        <div className=" hidden sm:flex space-x-4">
          
            <p className="login" onClick={loginClick}>Login</p>
          
          <button className="signup" onClick={signUpClick}>Sign Up</button>
        </div>
        <div className="sm:hidden flex items-center">
          <button onClick={()=> setIsOpen(!isOpen)} className="text-2xl focus:outline-none z-11 cursor-pointer">
            {isOpen? <FaTimes/> : <FaBars/>}
          </button>
        </div>
        {isOpen && (
          <div className="sm:hidden absolute top-0 w-full left-0 bg-gray-100 z-10">
            <p className="block px-4 py-2 font-semibold hover:bg-gray-200" onClick={() => setIsOpen(false)}>
              Home
            </p>
            <a href="#practice-areas" className="block px-4 py-2 font-semibold hover:bg-gray-200" onClick={() => setIsOpen(false)}> Practice Areas</a>
            <a href="#members" className="block px-4 py-2 font-semibold hover:bg-gray-200" onClick={() => setIsOpen(false)}> Members</a>
            <a href="#about-us" className="block px-4 py-2 font-semibold hover:bg-gray-200" onClick={() => setIsOpen(false)}> About Us</a>
            <a href="#contact" className="block px-4 py-2 font-semibold hover:bg-gray-200" onClick={() => setIsOpen(false)}> Contact</a>
            <p className="block px-4 py-2 font-semibold hover:bg-gray-200 cursor-pointer" onClick={loginClick}>Login</p>
            <button className="w-full text-left px-4 py-2 font-semibold hover:bg-gray-200 cursor-pointer" onClick={signUpClick}>Sign Up</button>
          </div>
        )} 
      </div>
    </div>
  );
};

export default Header;

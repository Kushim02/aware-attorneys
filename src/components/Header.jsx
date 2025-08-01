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
    <div className="w-auto fixed self-center top-0 left-0 right-0 z-50 bg-white shadow-sm ">
      <div className="flex flex-row justify-between items-center px-4 p-2  md:px-6 md:py-1">
        <img src={logo1} alt="logo" className="w-10 sm:w-12 md:w-14 lg:w-18" />
        <div className=" hidden sm:flex space-x-2 sm:space-x-3 md:space-x-4">
          <a href="#header" className="para text-sm sm:text-base">Home</a>
          <a href="#practice-areas" className="para text-sm sm:text-base" >Practice Areas</a>
          <a href="#attorneys" className="para text-sm sm:text-base">Members</a>
          <a href="#about-us" className="para text-sm sm:text-base">About Us</a>
          <a href="#contact" className="para text-sm sm:text-base">Contact</a>
        </div>
        <div className=" hidden sm:flex space-x-2 sm:space-x-3 md:space-x-4">
          
        <p className="login text-sm sm:text-base" onClick={loginClick}>Login</p>
          
          <button className="signup text-sm sm:text-base" onClick={signUpClick}>Sign Up</button>
        </div>
        
        <div className="sm:hidden flex items-center">
          <button onClick={()=> setIsOpen(!isOpen)} className="text-xl sm:text-2xl focus:outline-none z-20 p-1 cursor-pointer">
            {isOpen? <FaTimes/> : <FaBars/>}
          </button>
        </div>
        {isOpen && (
          <div className="sm:hidden absolute top-0 w-full left-0 right-0 bg-gray-100 z-10 p-2">
            <a href="#header" className="block px-4 py-2 text-[10px] font-semibold hover:bg-gray-200" onClick={() => setIsOpen(false)}>
              Home
            </a>
            <a href="#practice-areas" className="block px-4 py-2 text-[10px] sm:text-sm font-semibold hover:bg-gray-200" onClick={() => setIsOpen(false)}> Practice Areas</a>
            <a href="#members" className="block px-4 py-2 text-[10px] sm:text-sm font-semibold hover:bg-gray-200" onClick={() => setIsOpen(false)}> Members</a>
            <a href="#about-us" className="block px-4 py-2 text-[10px] sm:text-sm font-semibold hover:bg-gray-200" onClick={() => setIsOpen(false)}> About Us</a>
            <a href="#contact" className="block px-4 py-2 text-[10px] sm:text-sm font-semibold hover:bg-gray-200" onClick={() => setIsOpen(false)}> Contact</a>
            <p className="block px-4 py-2 text-[10px] sm:text-sm font-semibold hover:bg-gray-200 cursor-pointer" onClick={loginClick}>Login</p>
            <button className="w-full text-left text-[10px] sm:text-sm px-4 py-2 font-semibold hover:bg-gray-200 cursor-pointer" onClick={signUpClick}>Sign Up</button>
          </div>
        )} 
      </div>
    </div>
  );
};

export default Header;

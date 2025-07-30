import React, { useState } from "react";
import logo1 from "../images/image.png";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const loginClick = () => {
    navigate("/login");
    setIsOpen(false);
  };

  const signUpClick = () => {
    navigate("/signup");
    setIsOpen(false);
  };

  return (
    <header className="relative">
      <div className="flex justify-between items-center bg-white fixed top-0 left-0 right-0 z-50 px-4 py-3 shadow-sm">
        {/* Logo */}
        <img src={logo1} alt="logo" className="w-10 sm:w-12 md:w-14 lg:w-16" />

        {/* Desktop Menu */}
        <nav className="hidden sm:flex space-x-4 text-sm md:text-base font-medium items-center">
          <a href="#home" className="para hover:text-blue-600">Home</a>
          <a href="#practice-areas" className="para hover:text-blue-600">Practice Areas</a>
          <a href="#members" className="para hover:text-blue-600">Members</a>
          <a href="#about-us" className="para hover:text-blue-600">About Us</a>
          <a href="#contact" className="para hover:text-blue-600">Contact</a>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden sm:flex space-x-3 items-center">
          <button onClick={loginClick} className="login hover:underline">Login</button>
          <button onClick={signUpClick} className="signup px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Sign Up</button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="sm:hidden z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="sm:hidden absolute top-16 left-0 w-full bg-white shadow-md z-40 flex flex-col py-2">
          <a href="#home" className="px-4 py-2 text-sm hover:bg-gray-100" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#practice-areas" className="px-4 py-2 text-sm hover:bg-gray-100" onClick={() => setIsOpen(false)}>Practice Areas</a>
          <a href="#members" className="px-4 py-2 text-sm hover:bg-gray-100" onClick={() => setIsOpen(false)}>Members</a>
          <a href="#about-us" className="px-4 py-2 text-sm hover:bg-gray-100" onClick={() => setIsOpen(false)}>About Us</a>
          <a href="#contact" className="px-4 py-2 text-sm hover:bg-gray-100" onClick={() => setIsOpen(false)}>Contact</a>
          <hr className="my-2" />
          <button onClick={loginClick} className="px-4 py-2 text-sm hover:bg-gray-100 text-left">Login</button>
          <button onClick={signUpClick} className="px-4 py-2 text-sm hover:bg-gray-100 text-left">Sign Up</button>
        </div>
      )}
    </header>
  );
};

export default Header;

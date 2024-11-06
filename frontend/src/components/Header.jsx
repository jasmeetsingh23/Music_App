import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaHome, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import spotify from "../assets/social.png";

const Header = () => {
  const [isHomeHovered, setIsHomeHovered] = useState(false);
  const [isLogoutHovered, setIsLogoutHovered] = useState(false);

  const handleLogout = () => {
    // Implement your logout logic here
    console.log("User logged out");
  };

  return (
    <header className="bg-black text-white p-4 flex items-center justify-between">
      {/* Left: Spotify Logo */}
      <div className="flex items-center">
        <img src={spotify} alt="Spotify Logo" className="w-8" />
      </div>

      {/* Center: Home Icon and Search Bar */}
      <div className="flex items-center space-x-4 flex-grow justify-center">
        {" "}
        {/* Center items and grow */}
        {/* Home Icon with Circular Background */}
        <div
          className="relative"
          onMouseEnter={() => setIsHomeHovered(true)}
          onMouseLeave={() => setIsHomeHovered(false)}
        >
          <Link
            to="/home"
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-500"
            style={{
              background: "#1f1f1f",
            }}
          >
            <FaHome size={20} />
          </Link>
          {isHomeHovered && (
            <span
              className="absolute left-1/2 transform -translate-x-1/2 mt-4 text-white text-xs px-2 py-1 rounded"
              style={{
                background: "#1f1f1f",
              }}
            >
              Home
            </span>
          )}
        </div>
        {/* Search Bar */}
        <div className="relative w-full max-w-[600px]">
          {" "}
          {/* Increased max-width */}
          <div className="flex items-center">
            <FaSearch className="absolute left-3 text-gray-300" />
            <input
              type="text"
              placeholder="What do you want to play?"
              className="w-full pl-10 p-2 text-white rounded-full focus:outline-none hover:outline hover:outline-white focus:outline focus:outline-white transition-all duration-200"
              style={{
                background: "#1f1f1f",
              }}
            />
          </div>
        </div>
      </div>

      {/* Right: User Profile Icon and Logout Button */}
      <div className="flex items-center space-x-4">
        <FaUserCircle
          size={30}
          className="text-white cursor-pointer hover:text-gray-300"
        />

        {/* Logout Button with Tooltip */}
        <div
          className="relative"
          onMouseEnter={() => setIsLogoutHovered(true)}
          onMouseLeave={() => setIsLogoutHovered(false)}
        >
          <button
            onClick={handleLogout}
            className="text-white hover:text-gray-300 transition duration-200"
          >
            <FaSignOutAlt size={25} />
          </button>
          {isLogoutHovered && (
            <span
              className="absolute left-1/2 transform -translate-x-1/2 mt-12 text-white text-xs px-2 py-1 rounded"
              style={{
                background: "#1f1f1f",
              }}
            >
              Logout
            </span>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

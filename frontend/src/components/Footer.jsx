import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 px-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Links Section */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="/about" className="hover:text-gray-300">
            About Us
          </a>
          <a href="/contact" className="hover:text-gray-300">
            Contact Us
          </a>
          <a href="/privacy-policy" className="hover:text-gray-300">
            Privacy Policy
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
            aria-label="Facebook"
          >
            <FaFacebook size={25} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
            aria-label="Twitter"
          >
            <FaTwitter size={25} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
            aria-label="Instagram"
          >
            <FaInstagram size={25} />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-4  text-9xl">
        <h1 className="text-gray-500 text-sm">
          ©2024 Spotify. All rights reserved.
        </h1>
      </div>
    </footer>
  );
};

export default Footer;

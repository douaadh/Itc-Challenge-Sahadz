// Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Added this import

const Navbar = () => {
  return (
    <div className="w-full text-xl">
      <div className="flex justify-between items-center h-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#E9E9F5' }}>
        {/* Logo */}
        <div className="flex items-center  space-x-2">
          <img 
            src="/logo saha.png" 
            alt="SahaDz Logo" 
            className="h-20 w-auto mt-5"
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-10 px-4 py-2 bg-gray-200 border-2 border-gray-300 rounded-3xl">
          <a href="#home" className="text-black front-bold hover:text-purple-600 font-medium transition">
            Home
          </a>
          <a href="#services" className="text-black hover:text-purple-600 font-medium transition">
            Services
          </a>
          <a href="#contact" className="text-black hover:text-purple-600 font-medium transition">
            Contact
          </a>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4 font-bold">
          <Link to="/login" className="hidden md:block px-6 py-2  text-black rounded-lg font-medium hover:text-purple-600 transition">
            Login
          </Link>
          <Link to="/registre" className="px-6 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
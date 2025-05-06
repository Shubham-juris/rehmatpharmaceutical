import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src="/lab-icon.png" alt="Labora Logo" className="w-8 h-8" />
          <span className="text-2xl font-bold text-purple-700">RehmatPharma</span>
        </div>

        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-purple-700 font-medium">Home</Link>
          <Link to="/aboutUs" className="text-gray-700 hover:text-purple-700 font-medium">About Us</Link>
          <Link to="/services" className="text-gray-700 hover:text-purple-700 font-medium">Our Services</Link>
          <Link to="/contact" className="text-gray-700 hover:text-purple-700 font-medium">Contact Us</Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <Link to="/" className="block py-1 text-gray-700">Home</Link>
          <Link to="/about" className="block py-1 text-gray-700">About Us</Link>
          <Link to="/services" className="block py-1 text-gray-700">Our Services</Link>
          <Link to="/contact" className="block py-1 text-gray-700">Contact Us</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

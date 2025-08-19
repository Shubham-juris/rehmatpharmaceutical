import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClasses = ({ isActive }) =>
    `block font-medium px-2 py-1 rounded transition duration-200
     ${
       isActive
         ? "text-sky-500 border-b-2 border-sky-500"
         : "text-gray-700 hover:text-sky-500"
     }`;

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-16 h-16 object-contain" />
          <span className="font-bold text-sky-500 text-lg">
            RehmatPharma
          </span>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <NavLink to="/" className={navLinkClasses} end>
            Home
          </NavLink>
          <NavLink to="/aboutUs" className={navLinkClasses}>
            About Us
          </NavLink>
          <NavLink to="/service" className={navLinkClasses}>
            Our Services
          </NavLink>
          <NavLink to="/contact" className={navLinkClasses}>
            Contact Us
          </NavLink>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12" // X icon
                    : "M4 6h16M4 12h16M4 18h16" // Hamburger
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-md px-4 space-y-2 transition-all duration-300 overflow-hidden
        ${isOpen ? "max-h-60 opacity-100 py-3" : "max-h-0 opacity-0"}`}
      >
        <NavLink
          to="/"
          end
          onClick={() => setIsOpen(false)}
          className={navLinkClasses}
        >
          Home
        </NavLink>
        <NavLink
          to="/aboutUs"
          onClick={() => setIsOpen(false)}
          className={navLinkClasses}
        >
          About Us
        </NavLink>
        <NavLink
          to="/service"
          onClick={() => setIsOpen(false)}
          className={navLinkClasses}
        >
          Our Services
        </NavLink>
        <NavLink
          to="/contact"
          onClick={() => setIsOpen(false)}
          className={navLinkClasses}
        >
          Contact Us
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

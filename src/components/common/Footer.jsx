import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.jpg";
import { HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-[#1f1f2e] text-white mt-12">
      {/* Top Banner */}
      <div className="bg-sky-600 py-6 text-center px-4">
        <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
          Rehmat Pharma - Business, Laboratory & Pharmaceutical Solutions
        </h2>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand Info */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <img
              src={logo}
              alt="Rehmat Pharma Logo"
              className="w-10 h-10 rounded-full"
            />
            <span className="text-2xl font-bold">Rehmat Pharma</span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Rehmat Pharma is a creative & powerful medical and laboratory brand
            that fulfills all your healthcare business needs.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <NavLink to="/" className="hover:text-sky-400">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/aboutUs" className="hover:text-sky-400">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/service" className="hover:text-sky-400">
                Our Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:text-sky-400">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Explore Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Explore</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <NavLink to="/" className="hover:text-sky-400">
                Our Team
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="hover:text-sky-400">
                Awards
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="hover:text-sky-400">
                Careers
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="hover:text-sky-400">
                FAQs
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="hover:text-sky-400">
                Privacy Policy
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
          <div className="space-y-4 text-gray-300 text-sm">
            {/* Address */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=42+Boltons+Lane+Hayes+UB3+5BH+West+London+England"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 hover:text-sky-400 mt-2"
            >
              <HiOutlineLocationMarker size={20} className="mt-0.5" />
              <span>42 Boltons Lane, Hayes, UB3 5BH, West London, England</span>
            </a>

            {/* Phone */}
            <a
              href="tel:+46723271009"
              className="flex items-center gap-3 hover:text-sky-400"
            >
              <HiOutlinePhone size={20} />
              <span>+46 72 327 1009</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#151524] text-center py-4 text-sky-500 text-sm">
        © {new Date().getFullYear()} Rehmat Pharma. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

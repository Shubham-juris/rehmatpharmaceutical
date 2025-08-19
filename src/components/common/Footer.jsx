import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.jpg";
import { HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="bg-[#1f1f2e] text-white mt-12">
      {/* Top Banner */}
      <div className="bg-sky-600 py-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Rehmat Pharma - Business, Laboratory & Pharmaceutical Solutions
        </h2>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand Info */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img src={logo} alt="Rehmat Pharma Logo" className="w-8 h-8" />
            <span className="text-2xl font-bold">Rehmat Pharma</span>
          </div>
          <p className="text-gray-300">
            Rehmat Pharma is a creative & powerful medical and laboratory brand that fulfills all your healthcare business needs.
          </p>
        </div>

        {/* Navbar Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutUs">About Us</Link></li>
            <li><Link to="/service">Our Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Explore Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Explore</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/">Our Team</Link></li>
            <li><Link to="/">Awards</Link></li>
            <li><Link to="/">Careers</Link></li>
            <li><Link to="/">FAQs</Link></li>
            <li><Link to="/">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
          <div className="space-y-3 text-gray-300">
            {/* Address */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=Genralsgatan+31A+60226+Norrköping+Sweden"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 hover:text-sky-400"
            >
              <HiOutlineLocationMarker size={20} className="mt-1" />
              <span>Genralsgatan 31A, 60226 Norrköping, Sweden</span>
            </a>

            {/* Phone */}
            <a
              href="tel:+46111234567"
              className="flex items-center gap-2 hover:text-sky-400"
            >
              <HiOutlinePhone size={20} />
              <span>+46 11 123 4567</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#151524] text-center py-4 text-sky-500 text-sm">
        © 2025 Rehmat Pharma. All Rights Reserved. Designed by{" "}
        <span className="text-white font-medium">Rehmat Pharma</span>
      </div>
    </footer>
  );
};

export default Footer;

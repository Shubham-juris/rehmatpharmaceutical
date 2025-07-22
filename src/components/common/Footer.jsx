import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.jpg";

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

        {/* Extra Nav or Duplicate Section */}
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

        {/* Posts */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Recent Posts</h4>
          <div className="space-y-4 text-gray-400 text-sm">
            <div>
              <p className="font-medium text-white">
                Exploring Anatomy & Physiology in the Laboratory
              </p>
              <p className="text-xs">🕒 August 4, 2016</p>
            </div>
            <div>
              <p className="font-medium text-white">
                Medicine Diagnosis of Disease in Clinical Laboratory
              </p>
              <p className="text-xs">🕒 August 4, 2016</p>
            </div>
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

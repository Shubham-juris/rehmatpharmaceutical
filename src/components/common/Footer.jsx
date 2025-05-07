import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.jpg"

const Footer = () => {
  return (
    <footer className="bg-[#1f1f2e] text-white mt-12">
      <div className="bg-sky-600 py-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">Labora - Business, Laboratory & Pharmaceutical asad</h2>
        <button className="mt-4 border border-white text-white px-6 py-2 hover:bg-white hover:text-[#7eb9e9] transition duration-300">
          PURCHASE NOW
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img src={logo} alt="" className="w-8 h-8" />
            <span className="text-2xl  font-bold">Rehmat Pharma</span>
          </div>
          <p className="text-gray-300">
            pharma is a creative & powerful medical and laboratory WordPress theme that suits all your business needs.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="#">Life Insurance</Link></li>
            <li><Link to="#">Home Insurance</Link></li>
            <li><Link to="#">Child Insurance</Link></li>
            <li><Link to="#">Family Health Plan</Link></li>
            <li><Link to="#">Company Insurance</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="#">Life Insurance</Link></li>
            <li><Link to="#">Home Insurance</Link></li>
            <li><Link to="#">Child Insurance</Link></li>
            <li><Link to="#">Family Health Plan</Link></li>
            <li><Link to="#">Company Insurance</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Rehmat Pharma Posts</h4>
          <div className="space-y-4 text-gray-400 text-sm">
            <div>
              <p className="font-medium text-white">Exploring Anatomy & Physiology in the Laboratory</p>
              <p className="text-xs">🕒 August 4, 2016</p>
            </div>
            <div>
              <p className="font-medium text-white">Medicine Diagnosis of Disease in Clinical Laboratory</p>
              <p className="text-xs">🕒 August 4, 2016</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#151524] text-center py-4 text-sky-500 text-sm">
        © Copyright 2025 Pharma. All Right Reserved. Designed by <span className="text-white font-medium">Rehmat Pharma</span>
      </div>
    </footer>
  );
};

export default Footer;

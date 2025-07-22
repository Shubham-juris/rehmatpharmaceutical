import React from "react";
import { FaVial, FaUserAlt, FaGem, FaGlobe, FaPlay } from "react-icons/fa";

const FeaturesSection = () => {
  return (
    <div className="flex flex-col max-w-7xl mx-auto lg:flex-row items-center justify-between px-6 lg:px-20 py-16 bg-white">
      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-2xl">
        <div className="flex items-start space-x-4">
          <FaVial className="text-sky-800 text-4xl" />
          <div>
            <h3 className="text-lg font-bold text-gray-800">Advanced Testing</h3>
            <p className="text-sm text-gray-600">
              We use cutting-edge laboratory equipment and methods to ensure precise, reliable medical results for every test.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <FaUserAlt className="text-sky-800 text-4xl" />
          <div>
            <h3 className="text-lg font-bold text-gray-800">Expert Team</h3>
            <p className="text-sm text-gray-600">
              Our team of certified professionals brings deep experience and integrity to every diagnosis and research project.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <FaGem className="text-sky-800 text-4xl" />
          <div>
            <h3 className="text-lg font-bold text-gray-800">Innovative Solutions</h3>
            <p className="text-sm text-gray-600">
              Rehmat Pharma delivers innovative pharmaceutical and diagnostic solutions to improve patient outcomes and public health.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <FaGlobe className="text-sky-800 text-4xl" />
          <div>
            <h3 className="text-lg font-bold text-gray-800">Global Standards</h3>
            <p className="text-sm text-gray-600">
              We follow strict international safety and quality protocols to maintain trust in every product and service.
            </p>
          </div>
        </div>
      </div>

      {/* Video Block */}
      <div className="mt-12 lg:mt-0 lg:ml-12">
        <div className="bg-sky-900 text-white w-[450px] h-[300px] flex flex-col items-center justify-center text-center p-6 rounded-lg">
          <p className="mb-6 text-sm tracking-widest uppercase">
            Immune System & Diagnostic Innovations
          </p>
          <div className="bg-white text-sky-900 p-3 rounded-full text-xl">
            <FaPlay />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;

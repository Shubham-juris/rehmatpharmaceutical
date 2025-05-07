import React from "react";
import { FaVial, FaUserAlt, FaGem, FaGlobe, FaPlay } from "react-icons/fa";
const FeaturesSection = () => {
  return (
    <div className="flex flex-col max-w-7xl mx-auto lg:flex-row items-center justify-between px-6 lg:px-20 py-16 bg-white">
      {/* Left Column */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-2xl">
        {/* Feature 1 */}
        <div className="flex items-start space-x-4">
          <FaVial className="text-purple-800 text-4xl" />
          <div>
            <h3 className="text-lg font-bold text-gray-800">
              MEASURING VALUES
            </h3>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit,
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex items-start space-x-4">
          <FaUserAlt className="text-purple-800 text-4xl" />
          <div>
            <h3 className="text-lg font-bold text-gray-800">TEAM INTEGRITY</h3>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit,
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex items-start space-x-4">
          <FaGem className="text-purple-800 text-4xl" />
          <div>
            <h3 className="text-lg font-bold text-gray-800">OUR INNOVATIONS</h3>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit,
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="flex items-start space-x-4">
          <FaGlobe className="text-purple-800 text-4xl" />
          <div>
            <h3 className="text-lg font-bold text-gray-800">OUR EXPERIENCE</h3>
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit,
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
        </div>
      </div>

      {/* Right Video Section */}
      <div className="mt-12 lg:mt-0 lg:ml-12">
        <div className="bg-purple-900 text-white w-[450px] h-[300px] flex flex-col items-center justify-center text-center p-6 rounded-lg">
          <p className="mb-6 text-sm tracking-widest">
            Action of the human immune system
          </p>
          <div className="bg-white text-purple-900 p-3 rounded-full text-xl">
            <FaPlay />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;

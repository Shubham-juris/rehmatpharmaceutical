import React from 'react';
import img from "../../assets/home/Labortry.webp";

const TrustedSec = () => {
  return (
    <>
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch">
          {/* Left Image */}
          <div className="md:w-1/2 w-full">
            <img
              src={img}
              alt="Trusted Lab"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="md:w-1/2 w-full bg-gray-100 px-6 md:px-10 py-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Trusted by Global Pharmaceutical Leaders
            </h2>
            <div className="h-1 w-16 bg-sky-600 mb-6"></div>

            <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0">
              <div className="md:w-1/2">
                <h4 className="font-semibold text-lg text-gray-700 mb-2">
                  Certified Manufacturing Excellence
                </h4>
                <p className="text-sm text-gray-600">
                  RehmatPharma adheres to international GMP standards, ensuring every product is safe, effective, and manufactured with precision.
                </p>
              </div>
              <div className="md:w-1/2">
                <h4 className="font-semibold text-lg text-gray-700 mb-2 uppercase">
                  Award-Winning Research & Development
                </h4>
                <p className="text-sm text-gray-600">
                  With cutting-edge research labs and a team of top scientists, we consistently innovate to meet modern healthcare needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrustedSec;

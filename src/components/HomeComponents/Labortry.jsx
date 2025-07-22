import React from 'react';
import img from "../../assets/home/lab.jpeg";
import { Link } from 'react-router-dom';

const Labortry = () => {
  return (
    <>
      <section className="bg-white py-10 md:py-20 mt-20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2">
            <img
              src={img}
              alt="Pharma Lab"
              className="rounded-lg shadow-md w-full"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Welcome to RehmatPharma <br /> Trusted Pharma 
            </h1>
            <h3 className="text-lg font-semibold text-gray-600 mb-3">
              Where innovation meets care.
            </h3>
            <p className="text-gray-600 mb-6">
              At RehmatPharma, we specialize in quality pharmaceutical research, manufacturing, and distribution. Our laboratories follow strict safety and quality standards to ensure the best healthcare solutions for communities across the globe.
            </p>
            <Link
              to="/aboutUs"
              className="text-sm font-semibold text-sky-600 hover:underline"
            >
              MORE ABOUT US &rarr;
            </Link>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
          <div className="flex items-start space-x-3">
            <span className="text-pink-600 text-2xl">🏢</span>
            <div>
              <h4 className="font-semibold">Pharma Facilities</h4>
              <p className="text-sm text-gray-600">Nationwide Coverage</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-gray-600 text-2xl">🧪</span>
            <div>
              <h4 className="font-semibold">Expert Scientists</h4>
              <p className="text-sm text-gray-600">Qualified & Experienced</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-gray-600 text-2xl">💊</span>
            <div>
              <h4 className="font-semibold">Affordable Medicines</h4>
              <p className="text-sm text-gray-600">Cost-effective solutions</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-gray-600 text-2xl">📩</span>
            <div>
              <h4 className="font-semibold">Quick Support</h4>
              <p className="text-sm text-gray-600">24/7 Email Assistance</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Labortry;

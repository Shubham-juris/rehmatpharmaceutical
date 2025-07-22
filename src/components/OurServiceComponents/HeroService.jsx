import React from 'react';
import img from "../../assets/service/service.jpg";

const HeroService = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 md:px-8 lg:px-16 text-center">
      <div className="max-w-7xl mx-auto mt-20">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 mb-4">
          Empowering Better Healthcare Through <br className="hidden sm:block" />
          Innovative Pharmaceutical Solutions
        </h2>
        <p className="text-sm md:text-base text-gray-500 mb-6">
          At Rehmat Pharma, we combine research, innovation, and industry expertise <br />
          to deliver high-quality medicines and pharmaceutical products. <br />
          Our goal is to improve patient outcomes and elevate industry standards.
        </p>
        <div className="h-1 w-12 mx-auto bg-sky-700 mb-8"></div>
        <div className="w-full">
          <img
            src={img}
            alt="Rehmat Pharma Laboratory"
            className="w-full max-h-[600px] object-cover rounded shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroService;

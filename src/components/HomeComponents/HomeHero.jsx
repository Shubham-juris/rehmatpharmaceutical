import React from 'react';
import heroImage from "../../assets/home/img.jpg";

const HomeHero = () => {
  return (
    <section
      className="h-screen relative bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

      <div className="relative z-20 text-white text-center px-4 py-8 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Evaluation of the Current Safety
        </h1>
        <p className="text-lg">
          Labora aims to connect professionals with companies and organizations in the sector of laboratory automation.
        </p>
      </div>
    </section>
  );
};

export default HomeHero;

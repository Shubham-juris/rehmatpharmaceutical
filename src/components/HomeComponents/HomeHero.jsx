import React from 'react';
import heroImage from "../../assets/home/main.webp";

const HomeHero = () => {
  return (
    <section
      className="h-screen relative bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

      <div className="relative z-20 text-white text-center px-4 py-8 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Trusted Pharmaceutical Solutions
        </h1>
        <p className="text-lg">
          RehmatPharma is committed to delivering safe, effective, and affordable healthcare products — driving innovation in pharmaceutical research and manufacturing.
        </p>
      </div>
    </section>
  );
};

export default HomeHero;

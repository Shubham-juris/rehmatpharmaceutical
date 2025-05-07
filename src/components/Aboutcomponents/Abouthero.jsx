import React from "react";
import AboutImage1 from "../../assets/About/AboutImage1 (2).jpg";
const Abouthero = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-medium text-gray-600">
          We use design to help businesses
        </h2>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 mt-1">
          Launch products, brands and ideas.
        </h2>
        <div className="w-12 h-1 bg-pink-600 mx-auto mt-4 mb-10"></div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-10">
        {/* Image Section */}
        <div className="flex-shrink-0 w-full md:w-1/3">
          <img
            src={AboutImage1} // Replace with your image path
            alt="Founder"
            className="rounded shadow-md w-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-2/3 space-y-5 text-gray-700 text-sm md:text-base">
          <p>
            As a digital partner we provide brands with tailored solutions that
            drive human behavior and engagement. We understand that every
            consumption point with a brand is an opportunity to connect and
            influence. At Marvis we exist to inspire those millions of
            purposeful customer interactions through branding and online
            experiences.
          </p>

          <p>
            <strong>Create Your Custom E-Signature In Few Simple Steps</strong>{" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            dictum consectetur turpis, et fermentum ipsum semper elementum. Sed
            ac nulla fringilla, aliquam orci vitae, ultrices nunc. In sed risus
            augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <blockquote className="text-lg md:text-xl font-semibold text-gray-900 mt-4">
            “We produce great website designs that audiences understand and
            interact with. Creating code that is clean, compliant and
            accessible. Compatible with all the major browsers and responsive in
            design”
          </blockquote>

          {/* Signature */}
          <div className="mt-6">
            <p className="text-2xl italic font-handwriting">aaliya Smith</p>
            <p className="uppercase text-xs mt-1 tracking-wide text-gray-500">
              Founder of Labora
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Abouthero;

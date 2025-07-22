import React from "react";
import AboutImage1 from "../../assets/About/AboutImage1 (2).jpg";

const Abouthero = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-700 mt-20">
          Empowering Healthcare Through Innovation
        </h2>
        <h2 className="text-2xl sm:text-3xl  md:text-4xl font-medium text-gray-600 mt-15">
          Delivering Trusted Pharmaceutical & Laboratory Solutions
        </h2>
        <div className="w-12 h-1 bg-sky-600 mx-auto mt-4 mb-10"></div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-10">
        <div className="flex-shrink-0 w-full md:w-1/3">
          <img
            src={AboutImage1}
            alt="Founder"
            className="rounded shadow-md w-full object-cover h-100"
          />
        </div>

        <div className="w-full md:w-2/3 space-y-5 text-gray-700 text-sm md:text-base">
          <p>
            At <strong>Rehmat Pharma</strong>, we are committed to enhancing lives through
            advanced medical and pharmaceutical innovations. With years of experience
            in laboratory testing, diagnostics, and health research, we aim to set new
            standards in quality and trust.
          </p>

          <p>
            <strong>Why Choose Rehmat Pharma?</strong> We deliver reliable and accurate
            diagnostic services, use cutting-edge technologies, and uphold the highest
            safety standards. Our dedicated team ensures every product and service we
            offer contributes to better health outcomes for individuals and communities.
          </p>

          <blockquote className="text-lg md:text-xl font-semibold text-sky-600 mt-4">
            “Your health is our priority. We bring science, care, and compassion together
            to build a healthier tomorrow.”
          </blockquote>

        
        </div>
      </div>
    </section>
  );
};

export default Abouthero;

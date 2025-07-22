import React from "react";

const AwardSection = () => {
  return (
    <div className="bg-zinc-900 text-white min-h-[25vh] flex max-w-7xl mx-auto items-center justify-center px-4 sm:px-6 lg:px-24 py-8 text-center">
      <div className="w-full">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-light mb-10 sm:mb-12">
          Rehmat Pharma is an award-winning pharmaceutical & diagnostic company.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center md:text-left">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold">2016.</h3>
            <h4 className="text-sm font-semibold uppercase mt-1 mb-2">
              Excellence in Diagnostic Services
            </h4>
            <div className="w-8 h-[2px] bg-white mx-auto md:mx-0 mb-4"></div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Honored for delivering accurate, timely diagnostics and maintaining global testing standards.
            </p>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-bold">2016.</h3>
            <h4 className="text-sm font-semibold uppercase mt-1 mb-2">
              Best Pharma Innovation Award
            </h4>
            <div className="w-8 h-[2px] bg-sky-600 mx-auto md:mx-0 mb-4"></div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Recognized for groundbreaking R&D and introducing next-gen pharmaceutical solutions to the Indian market.
            </p>
          </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-bold">2016.</h3>
            <h4 className="text-sm font-semibold uppercase mt-1 mb-2">
              Fastest Growing Healthcare Company
            </h4>
            <div className="w-8 h-[2px] bg-white mx-auto md:mx-0 mb-4"></div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Awarded for rapid expansion and consistent performance in diagnostics, research, and healthcare delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardSection;

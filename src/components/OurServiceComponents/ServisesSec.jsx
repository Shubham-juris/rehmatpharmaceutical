import React from "react";

const ServisesSec = () => {
  const services = [
    "Pharmaceutical Manufacturing",
    "Quality Control & Testing",
    "Regulatory Compliance",
    "Research & Development",
    "Contract Manufacturing Services",
    "Formulation & Packaging",
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="grid gap-10 max-w-7xl mx-auto sm:grid-cols-2 lg:grid-cols-3">
        {services.map((title, index) => (
          <div key={index} className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              At Rehmat Pharma, our {title.toLowerCase()} ensures reliability, precision, 
              and excellence across all phases of pharmaceutical production and delivery.
            </p>
           
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServisesSec;

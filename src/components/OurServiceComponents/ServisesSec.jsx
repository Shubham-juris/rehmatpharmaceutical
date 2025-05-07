import React from "react";

const ServisesSec = () => {
  const services = [
    "Functional Medicine",
    "Surgical Services",
    "Emergency Care",
    "Gastroenterology",
    "Integrative Health Serviceses",
    "Ophthalmology",
  ];
  return (
    <>
      <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
        <div className="grid gap-10 max-w-7xl mx-auto sm:grid-cols-2 lg:grid-cols-3">
          {services.map((title, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Aliquam dignissim dictum egestas. Morbi vitae ligula vel turpis
                tincidunt vulputate. Curabitur tincidunt dolor urna, quis mattis
                augue mattis eget. Nulla quis erat faucibus, consectetur.
              </p>
              <a
                href="#"
                className="text-sky-600 font-semibold hover:underline text-sm"
              >
                Learn more
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ServisesSec;

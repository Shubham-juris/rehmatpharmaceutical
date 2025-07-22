import React from "react";
import AboutImage2 from "../../assets/About/AboutImage2.jpg";
import AboutImage3 from "../../assets/About/AboutImage6.jpg";
import AboutImage4 from "../../assets/About/AboutImage4.jpg";
import AboutImage5 from "../../assets/About/AboutImage5.jpg";

const teamMembers = [
  {
    name: "Dr. Marry Copper",
    title: "Founder & CEO",
    desc: "Leading Rehmat Pharma with innovation and integrity, she brings over 20 years of expertise in pharmaceutical research and management.",
    img: AboutImage2,
  },
  {
    name: "Samantha Wood",
    title: "Marketing & Communications",
    desc: "Samantha ensures Rehmat Pharma reaches the right people with the right message, championing patient-first branding and strategy.",
    img: AboutImage3,
  },
  {
    name: "Margaret Anderson",
    title: "Customer Relationship Manager",
    desc: "With a deep focus on patient satisfaction, Margaret builds lasting trust with our clients and healthcare partners.",
    img: AboutImage4,
  },
  {
    name: "Alex Rani",
    title: "Regulatory Affairs & Compliance",
    desc: "Alex navigates complex regulations and ensures Rehmat Pharma meets the highest standards of healthcare compliance and safety.",
    img: AboutImage5,
  },
];

const TeamSection = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-6 lg:px-20 text-center">
      <h2 className="text-2xl md:text-3xl font-light text-gray-600">
        Rehmat Pharma is led by passionate professionals <br />
        <span className="block">dedicated to delivering health and trust.</span>
      </h2>
      <div className="w-16 h-[2px] bg-sky-600 mx-auto my-6"></div>

      <div className="grid gap-10 mt-10 md:grid-cols-2 lg:grid-cols-4 text-left">
        {teamMembers.map((member, index) => (
          <div key={index}>
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-60 object-cover mb-4 rounded-md shadow-md"
            />
            <h3 className="text-sky-700 font-bold text-lg">{member.name}</h3>
            <p className="text-gray-600 text-sm mb-2">{member.desc}</p>
           
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;

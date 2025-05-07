import React from "react";
import AboutImage2 from "../../assets/About/AboutImage2.jpg";
import AboutImage3 from "../../assets/About/AboutImage6.jpg";
import AboutImage4 from "../../assets/About/AboutImage4.jpg";
import AboutImage5 from "../../assets/About/AboutImage5.jpg";
const teamMembers = [
  {
    name: "Marry Copper",
    title: "Founder & CEO",
    desc: "Nam condimentum fermentum enim id ultricies. Donec sit amet semper dui, nec consectetur urna. Donec...",
    img: AboutImage2,
  },
  {
    name: "Samantha Wood",
    title: "Marketing & Advertising",
    desc: "Nam condimentum fermentum enim id ultricies. Donec sit amet semper dui, nec consectetur urna. Donec...",
    img: AboutImage3,
  },
  {
    name: "Margaret Anderson",
    title: "Customer Relationship Manager",
    desc: "Nam condimentum fermentum enim id ultricies. Donec sit amet semper dui, nec consectetur urna. Donec...",
    img: AboutImage4,
  },
  {
    name: "Alex Rani",
    title: "Marketing & Advertising",
    desc: "Nam condimentum fermentum enim id ultricies. Donec sit amet semper dui, nec consectetur urna. Donec...",
    img: AboutImage5,
  },
];
const TeamSection = () => {
  return (
    <section
      className=" max-w-7xl mx-auto 
    py-16 px-6 lg:px-20 text-center"
    >
      <h2 className="text-2xl md:text-3xl font-light text-gray-600">
        Labora is full of smart skills driven people <br />
        <span className="block">
          who care a lot more about getting it done.
        </span>
      </h2>
      <div className="w-16 h-[2px] bg-sky-600 mx-auto my-6"></div>

      <div className="grid gap-10 mt-10 md:grid-cols-2 lg:grid-cols-4 text-left">
        {teamMembers.map((member, index) => (
          <div key={index}>
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-60 object-cover mb-4"
            />
            <h3 className="text-sky-700 font-bold text-lg">
              {member.name}
            </h3>
            <p className="text-gray-500 text-sm mb-2">{member.title}</p>
            <p className="text-gray-600 text-sm mb-2">{member.desc}</p>
            <a
              href="#"
              className="text-sm font-semibold text-sky-700 hover:underline"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;

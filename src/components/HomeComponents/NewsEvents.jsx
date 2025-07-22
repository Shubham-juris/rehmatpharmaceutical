import React from 'react';

const NewsEvents = () => {
  const newsItems = [
    {
      title: "Advancing Clinical Diagnostics with Smart Tech",
      desc: "Discover how AI-driven equipment is revolutionizing diagnostic speed and accuracy in modern laboratories worldwide.",
      date: "July 10, 2025",
      comments: "3 Comments",
      likes: "15 Likes",
    },
    {
      title: "RehmatPharma Launches New R&D Facility",
      desc: "With cutting-edge biosafety labs and automation, this new center will boost innovation in pharma and medical research.",
      date: "June 28, 2025",
      comments: "5 Comments",
      likes: "30 Likes",
    },
    {
      title: "World Health Day Panel on Lab Automation & Quality",
      desc: "Experts shared insights on enhancing testing reliability and turnaround time through smart laboratory practices.",
      date: "April 7, 2025",
      comments: "2 Comments",
      likes: "12 Likes",
    },
  ];

  return (
    <>
      <section className="py-16 px-4 md:px-10 bg-white mt-15">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">NEWS & EVENTS</h2>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* News Cards */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsItems.map((item, index) => (
                <div key={index} className="border-b pb-4">
                  <h3 className="text-xl font-semibold text-sky-700 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
                  <div className="text-xs text-gray-500">
                    {item.date} &nbsp; • &nbsp; {item.comments} &nbsp; • &nbsp; {item.likes}
                  </div>
                </div>
              ))}
            </div>

            {/* Award Box */}
            <div className="bg-sky-500 text-white p-6 lg:w-1/4 flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-3">
                Awarded Best Clinical Lab<br />2024 – 2025
              </h3>
              <p className="text-sm mb-4">
                Recognized for innovation, quality assurance,<br />
                and commitment to patient outcomes.<br />
                Empowering diagnostics globally.
              </p>
             
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsEvents;

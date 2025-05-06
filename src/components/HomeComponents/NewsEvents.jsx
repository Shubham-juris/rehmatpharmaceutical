import React from 'react'

const NewsEvents = () => {
    const newsItems = [
        {
          title: "Exploring Anatomy & Physiology in the Laboratory",
          desc: "Vestibulum lacus dui, commodo sed sollicitudin nec, accumsan at magna. Pellentesque tempor, odio sed accumsan pretium...",
          date: "August 4, 2016",
          comments: "1 Comment",
          likes: "0 Likes",
        },
        {
          title: "Medicine Diagnosis of Disease in Clinical Laboratory",
          desc: "Nullam posuere lacus a bibendum lacinia. Morbi gravida non elit quis luctus. Nunc eu augue in lacus fermentum interdum...",
          date: "August 4, 2016",
          comments: "0 Comment",
          likes: "0 Likes",
        },
        {
          title: "Laboratory and Diagnostic Tests with Nursing Implications",
          desc: "Curabitur quis interdum ligula. Nulla pharetra pretium tortor. Nunc mauris libero, hendrerit sed laoreet non...",
          date: "June 9, 2016",
          comments: "0 Comment",
          likes: "0 Likes",
        },
      ];
    
  return (
    <>
      <section className="py-16 px-4 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">NEWS & EVENTS</h2>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* News Cards */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item, index) => (
              <div key={index} className="border-b pb-4">
                <h3 className="text-xl font-semibold text-pink-700 mb-2">
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
          <div className="bg-pink-700 text-white p-6 lg:w-1/4 flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-3">Best Laboratory Award Winner<br />Year 2015–2016</h3>
            <p className="text-sm mb-4">
              Trustworthy and Loyalty.<br />
              New technologies.<br />
              Positive Results.
            </p>
            <button className="mt-auto text-white underline text-sm hover:text-gray-200">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default NewsEvents

import React from 'react'
import img from "../../assets/home/Labortry.webp"

const TrustedSec = () => {
  return (
    <>
     <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch">
        {/* Left Image */}
        <div className="md:w-1/2 w-full">
          <img
            src={img}
            alt="Trusted Lab"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 w-full bg-gray-100 px-6 md:px-10 py-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            We Are Trusted By World’s Leading Companies
          </h2>
          <div className="h-1 w-16 bg-sky-600 mb-6"></div>

          <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0">
            <div className="md:w-1/2">
              <h4 className="font-semibold text-lg text-gray-700 mb-2">
                Innovation By Design Awards
              </h4>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="md:w-1/2">
              <h4 className="font-semibold text-lg text-gray-700 mb-2 uppercase">
                Innovation By Design Awards
              </h4>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section> 
    </>
  )
}

export default TrustedSec

import React from 'react'
import img from "../../assets/home/herobg.jpg"

const Labortry = () => {
  return (
    <>
     <section className="bg-white py-10 md:py-20 mt-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <img
            src={img}
            alt="Lab Research"
            className="rounded-lg shadow-md w-full"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Welcome to Labora <br /> Laboratory WP Theme
          </h1>
          <h3 className="text-lg font-semibold text-gray-600 mb-3">
            Having a new name is just the beginning.
          </h3>
          <p className="text-gray-600 mb-6">
            Curabitur metus lorem, mollis sit amet ligula ac, efficitur sagittis justo. Morbi at ligula dictum sem tristique elementum. Fusce vestibulum malesuada tortor. In hac habitasse platea dictumst. Sed nisi velit, tincidunt sit amet tempus eu, rhoncus eget nisi.
          </p>
          <a
            href="#"
            className="text-sm font-semibold text-pink-600 hover:underline"
          >
            MORE ABOUT US &rarr;
          </a>
        </div>
      </div>

      {/* Features Row */}
      <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
        <div className="flex items-start space-x-3">
          <span className="text-pink-600 text-2xl">🏢</span>
          <div>
            <h4 className="font-semibold">Research Center</h4>
            <p className="text-sm text-gray-600">In every City</p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <span className="text-gray-600 text-2xl">🩺</span>
          <div>
            <h4 className="font-semibold">Lab Technicians</h4>
            <p className="text-sm text-gray-600">Powerful & Skilled</p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <span className="text-gray-600 text-2xl">💰</span>
          <div>
            <h4 className="font-semibold">Low Cost</h4>
            <p className="text-sm text-gray-600">Low cost research</p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <span className="text-gray-600 text-2xl">📧</span>
          <div>
            <h4 className="font-semibold">Notifications</h4>
            <p className="text-sm text-gray-600">Instant Email Alerts</p>
          </div>
        </div>
      </div>
    </section> 
    </>
  )
}

export default Labortry

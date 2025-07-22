import React from "react";

const ContactPage = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-100 p-8">
      {/* Left Section */}
      <div className="bg-white p-8 rounded-2xl shadow-lg m-4 w-full lg:w-1/2">
        <h2 className="text-3xl font-bold mb-4 text-sky-800">Contact Rehmat Pharma</h2>
        <p className="text-gray-700 mb-4">
          Whether you're looking for product inquiries, business collaborations, or support, 
          Rehmat Pharma is here to help. We value your trust and strive to deliver excellence 
          in every interaction.
        </p>
        <p className="text-gray-600 mb-4">
          Use the form to contact us or reach us directly at the details below.
        </p>
        <hr className="my-4" />

        <div className="flex items-start mb-4">
          <span className="text-orange-500 text-2xl mr-3">📍</span>
          <div>
            <p className="font-semibold">Address:</p>
            <p>Rehmat Pharma, New Sunny Enclave, Kharar, Punjab</p>
          </div>
        </div>
        <div className="flex items-start mb-4">
          <span className="text-orange-500 text-2xl mr-3">📞</span>
          <div>
            <p className="font-semibold">Phone:</p>
            <p>+91 98765 43210</p>
          </div>
        </div>
        <div className="flex items-start mb-2">
          <span className="text-orange-500 text-2xl mr-3">✉️</span>
          <div>
            <p className="font-semibold">Email:</p>
            <p>info@rehmatpharma.com</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="bg-cyan-600 p-8 rounded-2xl shadow-lg m-4 w-full lg:w-1/2 mt-20 text-white">
        <h2 className="text-2xl font-bold mb-6 text-center uppercase tracking-wider">
          Get in Touch with Us
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-white text-gray-800"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 rounded-lg bg-white text-gray-800"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 rounded-lg bg-white text-gray-800 h-32"
          ></textarea>
          <label className="flex items-center text-white text-sm">
            <input type="checkbox" className="mr-2" /> I agree to the{" "}
            <a href="#" className="underline ml-1">
              Privacy Policy
            </a>
          </label>
          <button
            type="submit"
            className="w-full bg-orange-500 p-3 rounded-lg mt-2 hover:bg-sky-700 transition duration-300 font-semibold"
          >
            Send Message
          </button>
        </form>
        <p className="mt-6 text-xs text-center text-white/80">
          Designed by Rehmat Pharma © {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default ContactPage;

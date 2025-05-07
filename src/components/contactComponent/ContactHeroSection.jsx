import React from "react";

const ContactPage = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-100 p-8">
      {/* Left Section */}
      <div className="bg-white p-8 rounded-2xl shadow-lg m-4 w-full lg:w-1/2">
        <h2 className="text-3xl font-bold mb-4">Get in touch</h2>
        <p className="text-gray-600 mb-2">
          Use our contact form for all information requests or contact us
          directly using the contact information below. We value your inquiries
          and are here to assist you. Whether you have questions, feedback, or
          need information, our team is ready to help. You can easily reach us
          by filling out our contact form, which ensures a prompt response. For
          more direct communication, feel free to use the contact information
          provided below. We strive to make your experience smooth and
          informative. Your feedback helps us improve, so don’t hesitate to
          connect. Let us know how we can assist you, and we’ll be in touch as
          soon as possible.
        </p>
        <p className="text-gray-600 mb-4">
          Feel free to get in touch with us via email or phone
        </p>
        <hr className="my-4" />
        <div className="flex items-center mb-4">
          <span className="text-orange-500 text-2xl mr-2">📍</span>
          <div>
            <p className="font-semibold">Email</p>
            <p>RehmatPharma@gmail.com</p>
          </div>
        </div>
        <div className="flex items-center">
          <span className="text-orange-500 text-2xl mr-2">📞</span>
          <div>
            <p className="font-semibold">Phone (Landline)</p>
            <p>+912 3 567 8987</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="bg-cyan-500 p-8 rounded-2xl shadow-lg m-4 w-full lg:w-1/2 text-white">
        <h2 className="text-2xl font-bold mb-6 text-center">
          GET STARTED WITH A FREE QUOTATION
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Enter your Name"
            className="w-full p-3 rounded-lg bg-white text-gray-800"
          />
          <input
            type="email"
            placeholder="Enter a valid email address"
            className="w-full p-3 rounded-lg bg-white text-gray-800"
          />
          <textarea
            placeholder="Enter your message"
            className="w-full p-3 rounded-lg bg-white text-gray-800 h-32"
          ></textarea>
          <label className="flex items-center text-white">
            <input type="checkbox" className="mr-2" />I accept the{" "}
            <a href="#" className="underline ml-1">
              Terms of Service
            </a>
          </label>
          <button className="w-full bg-orange-500 p-3 rounded-lg mt-2 hover:bg-sky-600 transition duration-300">
            Submit your request
          </button>
        </form>
        <p className="mt-4 text-xs text-white text-center">
          Image from{" "}
          <a href="#" className="underline">
            Freepik
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactPage;

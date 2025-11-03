import React from "react";

const Form = () => {
  return (
    <>
      <div className=" mx-auto p-6 border border-gray-200 rounded-lg">
        <h1 className="text-2xl font-semibold mb-4">Rate and Write a Review</h1>
        <div className="mb-4">
          <div className="grid grid-cols-3 gap-4 mb-4">
            <input
              type="email"
              placeholder="Your Name"
              className="border border-gray-300 p-2 rounded-md w-full"
            />
            <input
              type="text"
              placeholder="Email"
              className="border border-gray-300 p-2 rounded-md w-full"
            />
            <input
              type="text"
              placeholder="Website"
              className="border border-gray-300 p-2 rounded-md w-full"
            />
          </div>
          <textarea
            placeholder="Your message"
            className="border border-gray-300 p-2 rounded-md w-full h-32 mb-4"
          ></textarea>
          <button
            className="bg-teal-500 text-white py-2 px-4  w-[
200.63px]"
          >
            Send Message
          </button>
        </div>
      </div>
    </>
  );
};

export default Form;

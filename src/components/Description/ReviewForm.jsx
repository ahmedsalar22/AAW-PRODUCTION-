import React from 'react'

const ReviewForm = () => {
  return (
    <>
          <div className=" mx-auto p-6 border border-gray-200 rounded-lg">
                    <h1 className="text-2xl font-semibold mb-4">Rate and Write a Review</h1>
                    <div className="mb-4">
                        <div className="flex items-center mb-2">
                            <div className="text-teal-500">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            <span className="ml-2 text-gray-700">Select Your Rating</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <input type="email" placeholder="Email Address" className="border border-gray-300 p-2 rounded-md w-full" />
                            <input type="text" placeholder="Your Name" className="border border-gray-300 p-2 rounded-md w-full" />
                        </div>
                        <textarea placeholder="Help other to choose perfect place" className="border border-gray-300 p-2 rounded-md w-full h-32 mb-4"></textarea>
                        <button className="bg-teal-500 text-white py-2 px-4 rounded-md">Submit Review</button>
                    </div>
                </div>
    </>
  )
}

export default ReviewForm
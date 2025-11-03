import React, { useState } from "react";
import Text from "../text/Text";

const reviewsData = [
  {
    id: 1,
    rating: 4.5,
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    name: "Katryn Niclos",
    profile: "/asset/image/agent-3.jpg.png",
    place: "Stiv's Bar",
  },
  {
    id: 2,
    rating: 5,
    text: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    name: "John Smith",
    profile: "/asset/image/agent-3.jpg.png",
    place: "Coffee House",
  },
  {
    id: 3,
    rating: 4,
    text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    name: "Sarah Lee",
    profile: "/asset/image/agent-1.jpg.png",
    place: "The Green Cafe",
  },
];

const Reviews = () => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? reviewsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === reviewsData.length - 1 ? 0 : prev + 1));
  };

  const review = reviewsData[current];

  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] bg-white max-w-[90%] sm:max-w-[80%] m-auto px-4">
      {/* Section Heading */}
      <div className="text-center mb-6">
        <h2 className="text-xl sm:text-3xl font-bold text-gray-800">
          Recent Reviews
        </h2>
        <p className="text-sm sm:text-base text-gray-500 mt-2">
          Donecos a lacus ut nisl mattis sodales.
        </p>
      </div>

      <div className="border-t border-gray-300 w-16 mb-6"></div>

      {/* Review Content */}
      <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-6">
        {/* Left Arrow */}
        <i
          onClick={handlePrev}
          className="fas fa-chevron-left text-gray-400 cursor-pointer hover:text-gray-600 text-lg sm:text-2xl"
        ></i>

        {/* Review Box */}
        <div className="mx-2 sm:mx-8 text-center max-w-lg">
          {/* Stars */}
          <div className="flex justify-center mb-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <i
                key={index}
                className={`fas ${
                  index < Math.floor(review.rating)
                    ? "fa-star text-blue-500"
                    : index < review.rating
                    ? "fa-star-half-alt text-blue-500"
                    : "fa-star text-gray-300"
                }`}
              ></i>
            ))}
          </div>

          {/* Review Text */}
          <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed">
            {review.text}
          </p>

          {/* Reviewer Info */}
          <div className="flex items-center justify-center">
            <img
              src={review.profile}
              alt={review.name}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3"
            />
            <div className="text-left">
              <p className="font-bold text-gray-800 text-sm sm:text-base">
                {review.name}
              </p>
              <p className="text-gray-500 text-xs sm:text-sm">
                review for{" "}
                <a href="#" className="text-blue-500">
                  {review.place}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Right Arrow */}
        <i
          onClick={handleNext}
          className="fas fa-chevron-right text-gray-400 cursor-pointer hover:text-gray-600 text-lg sm:text-2xl"
        ></i>
      </div>
    </div>
  );
};

export default Reviews;

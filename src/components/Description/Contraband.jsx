import React from "react";

const Contraband = () => {
  return (
    <>
      
        <div className="grid grid-cols-3 gap-4 mb-8">
          <img
            src="https://th.bing.com/th/id/R.554f19fb567df23120f25ef57f9ba120?rik=z7C%2f5Tbz5MxvKw&pid=ImgRaw&r=0"
            alt="Interior view of Contraband Coffee Bar with seating area and a lamp"
            className="w-full h-auto"
          />
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.3HPrjzj9k94lsIgVlSKiIwHaJ4?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Interior view of Contraband Coffee Bar with multiple tables and chairs"
            className="w-full h-auto"
          />
          <img
            src="https://tse4.mm.bing.net/th/id/OIP.GY1CoheBzuJNmJrvHMOXcgHaJ4?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Interior view of Contraband Coffee Bar with a bar counter and bottles"
            className="w-full h-auto"
          />
        </div>
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 bg-gray-200 flex items-center justify-center mr-4">
            <i className="fas fa-cocktail text-3xl text-gray-500"></i>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Contraband Coffee Bar</h1>
            <div className="flex items-center">
              <span className="text-xl mr-2">4.5</span>
              <div className="flex text-blue-500">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
            </div>
            <p className="text-gray-600">Cocktail Bars</p>
          </div>
        </div>
        <div className="flex space-x-2 floa">
          <button className="bg-teal-500 text-white px-4 py-2 rounded">
            Write a Review
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded flex items-center">
            <i className="fas fa-heart mr-2"></i> Save
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded flex items-center">
            <i className="fas fa-share mr-2"></i> Share
          </button>
        </div>
    </>
  );
};

export default Contraband;

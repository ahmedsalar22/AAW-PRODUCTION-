import React from "react";
import { MapPin } from "lucide-react";

const ToppickComp = ({ picks, renderStars }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {picks.map((pick, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <img
            src={pick.image}
            alt={pick.name}
            className="w-full h-[353px] object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              {pick.name}
            </h3>
            <div className="flex items-center mb-2">
              {renderStars(pick.rating)}
              <span className="ml-2 text-gray-600">{pick.rating}</span>
            </div>
            <p className="text-gray-600 mb-4">{pick.category}</p>
            <div className="flex items-center text-gray-500">
              <MapPin size={16} className="mr-1" />
              <span>Location</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToppickComp;

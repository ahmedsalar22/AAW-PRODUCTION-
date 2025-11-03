
// import { MapPin, Star, Award } from 'lucide-react';
// import Text from '../text/Text';

// const TopPicks = () => {
//   const picks = [
//     {
//       name: "Contraband Coffee Bar",
//       rating: 4.5,
//       category: "Restaurant Bars",
//       image: "/asset/image/food1.jpg"
//     },
//     {
//       name: "Blue Ribbon Sushi",
//       rating: 5.0,
//       category: "Sushi · Restaurants",
//       image: "/asset/image/restuarant.jpg.png"
//     },
//     {
//       name: "Korchma Taras Bulba",
//       rating: 3.0,
//       category: "Hotel",
//       image: "/asset/image/cafe.jpg.png"
//     }
//   ];

//   const renderStars = (rating) => {
//     return [...Array(5)].map((_, i) => (
//       <Star 
//         key={i} 
//         className={`w-4 h-4 ${i < Math.floor(rating) ? "text-[#02ABB2] fill-current" : 'text-gray-300'}`} 
//         fill={i < Math.floor(rating) ? "currentColor" : "none"}
//       />
//     ));
//   };

//   const ToppickComp = ({ picks, renderStars }) => {
//     return (
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
//         {picks.map((pick, index) => (
//           <div 
//             key={index}
//             className="group relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
//           >
//             {/* Premium badge for top rated */}
//             {pick.rating >= 4.5 && (
//               <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-amber-400 to-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
//                 <Award className="w-3 h-3 mr-1" />
//                 Top Rated
//               </div>
//             )}
            
//             {/* Image container with overlay effect */}
//             <div className="relative h-48 overflow-hidden">
//               <div 
//                 className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
//                 style={{ backgroundImage: `url(${pick.image})` }}
//               ></div>
//               <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             </div>
            
//             {/* Content */}
//             <div className="p-5">
//               <div className="flex justify-between items-start mb-2">
//                 <h3 className="font-bold text-lg text-gray-800 group-hover:text-[#02ABB2] transition-colors duration-300">
//                   {pick.name}
//                 </h3>
//                 <div className="flex items-center bg-amber-50 text-amber-700 px-2 py-1 rounded-lg">
//                   <span className="font-bold">{pick.rating}</span>
//                 </div>
//               </div>
              
//               <div className="flex items-center text-gray-500 text-sm mb-3">
//                 <MapPin className="w-4 h-4 mr-1" />
//                 <span>{pick.category}</span>
//               </div>
              
//               <div className="flex items-center">
//                 <div className="flex mr-2">
//                   {renderStars(pick.rating)}
//                 </div>
//                 <span className="text-sm text-gray-500">({pick.rating})</span>
//               </div>
              
//               <button className="mt-4 w-full py-2 bg-gradient-to-r from-[#02ABB2] to-teal-600 text-white rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#02ABB2]">
//                 View Details
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div className="container mx-auto px-4 py-12 max-w-[80%]">
//       <div className="text-center mb-12">
//         <Text 
//           heading={"As a paid member, you'll get an"}
//           para={"Opportunity to reach your target in africa though"}
//         />
//         <div className="mt-4 inline-block h-1 w-20 bg-gradient-to-r from-[#02ABB2] to-teal-600 rounded-full"></div>
//       </div>
      
//       <ToppickComp picks={picks} renderStars={renderStars}/>
      
//       <div className="text-center mt-12">
//         <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-[#02ABB2] to-teal-600 hover:from-teal-700 hover:to-teal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#02ABB2] transition-all duration-300 transform hover:scale-105">
//           Explore All Premium Picks
//           <svg className="ml-2 -mr-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TopPicks;
import { MapPin, Star, Award } from "lucide-react";
import Text from "../text/Text";

const TopPicks = () => {
  const picks = [
    {
      name: "Contraband Coffee Bar",
      rating: 4.5,
      category: "Restaurant Bars",
      image: "/asset/image/food1.jpg",
    },
    {
      name: "Blue Ribbon Sushi",
      rating: 5.0,
      category: "Sushi · Restaurants",
      image: "/asset/image/restuarant.jpg.png",
    },
    {
      name: "Korchma Taras Bulba",
      rating: 3.0,
      category: "Hotel",
      image: "/asset/image/cafe.jpg.png",
    },
  ];

  // Render stars based on rating
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? "text-[#02ABB2] fill-current"
            : "text-gray-300"
        }`}
        fill={i < Math.floor(rating) ? "currentColor" : "none"}
      />
    ));
  };

  const ToppickComp = ({ picks, renderStars }) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-10">
        {picks.map((pick, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Premium badge for top rated */}
            {pick.rating >= 4.5 && (
              <div className="absolute top-3 right-3 z-10 bg-gradient-to-r from-amber-400 to-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
                <Award className="w-3 h-3 mr-1" />
                Top Rated
              </div>
            )}

            {/* Image container with overlay effect */}
            <div className="relative h-40 sm:h-48 md:h-56 overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${pick.image})` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-5">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-base sm:text-lg text-gray-800 group-hover:text-[#02ABB2] transition-colors duration-300">
                  {pick.name}
                </h3>
                <div className="flex items-center bg-amber-50 text-amber-700 px-2 py-1 rounded-lg text-xs sm:text-sm">
                  <span className="font-bold">{pick.rating}</span>
                </div>
              </div>

              <div className="flex items-center text-gray-500 text-xs sm:text-sm mb-3">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{pick.category}</span>
              </div>

              <div className="flex items-center">
                <div className="flex mr-2">{renderStars(pick.rating)}</div>
                <span className="text-xs sm:text-sm text-gray-500">
                  ({pick.rating})
                </span>
              </div>

              <button className="mt-4 w-full py-2 bg-gradient-to-r from-[#02ABB2] to-teal-600 text-white rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#02ABB2]">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-[90%] md:max-w-[80%]">
      {/* Section Title */}
    <div className="text-center mb-10 sm:mb-12">
  <Text
    heading={
      <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
        As a paid member, you'll get an
      </span>
    }
    para={
      <span className="block text-sm sm:text-base md:text-lg text-gray-600">
        Opportunity to reach your target in Africa through
      </span>
    }
  />
  <div className="mt-4 inline-block h-1 w-16 sm:w-20 bg-gradient-to-r from-[#02ABB2] to-teal-600 rounded-full"></div>
</div>


      {/* Grid Items */}
      <ToppickComp picks={picks} renderStars={renderStars} />

      {/* Explore Button */}
      <div className="text-center mt-10 sm:mt-12">
        <button className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-[#02ABB2] to-teal-600 hover:from-teal-700 hover:to-teal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#02ABB2] transition-all duration-300 transform hover:scale-105">
          Explore All Premium Picks
          <svg
            className="ml-2 -mr-1 h-4 w-4 sm:h-5 sm:w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TopPicks;

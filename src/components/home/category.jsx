
// export default Category;
import React from 'react';
import Text from '../text/Text';

// Custom SVG icons with enhanced styling
const TrendingIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

const CoffeeIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
    <line x1="6" y1="1" x2="6" y2="4" />
    <line x1="10" y1="1" x2="10" y2="4" />
    <line x1="14" y1="1" x2="14" y2="4" />
  </svg>
);

const ArtsIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const NightlifeIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 1l22 22" />
    <path d="M8 8v13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V8" />
    <path d="M11 4c2.8-1.4 5.6-1.4 8.4 0" />
  </svg>
);

const categories = [
  { name: 'Trending Places', icon: TrendingIcon, image: '/asset/image/trending.png' },
  { name: 'Coffee & Tea', icon: CoffeeIcon, image: '/asset/image/coffee.png' },
  { name: 'Arts & Entertainment', icon: ArtsIcon, image: '/asset/image/Arts.png' },
  { name: 'Nightlife', icon: NightlifeIcon, image: '/asset/image/night.png' },
];

const CategoryCard = ({ name, icon: Icon, image }) => (
  <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl">
    {/* Image with overlay effect */}
    <div className="relative h-64 overflow-hidden">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-90"></div>
    </div>
    
    {/* Content overlay */}
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
      {/* Icon with background circle */}
      <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-white/20 group-hover:scale-110">
        <Icon className="w-8 h-8" />
      </div>
      
      {/* Category name */}
      <h3 className="text-xl font-bold mb-2 transition-transform duration-300 group-hover:scale-105">{name}</h3>
      
      {/* Decorative line */}
      <div className="w-12 h-1 bg-gradient-to-r from-transparent via-white to-transparent transition-all duration-300 group-hover:w-16"></div>
      
      {/* Explore button (appears on hover) */}
      <button className="mt-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2">
        Explore
      </button>
    </div>
  </div>
);

const Category = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-[80%]">
      {/* Section header with decorative elements */}
      <div className="text-center mb-16">
        <div className="inline-block relative mb-6">
         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 relative z-10">
  Choose the Business Category
</h2>
          <div className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-teal-200 to-blue-200 rounded-full transform -skew-y-1 z-0"></div>
        </div>
        
       <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
  for your business listing. Then connect with potential buyers within that category...
</p>

        
        {/* Decorative line */}
        <div className="mt-6 flex justify-center">
          <div className="h-1 w-20 bg-gradient-to-r from-[#02ABB2] to-teal-600 rounded-full"></div>
        </div>
      </div>
      
      {/* Categories grid with enhanced spacing */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category) => (
          <CategoryCard key={category.name} {...category} />
        ))}
      </div>
      
      {/* View all categories button */}
      <div className="mt-16 text-center">
        <button className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-[#02ABB2] to-teal-600 text-white font-medium rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#02ABB2]">
          View All Categories
          <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Category;
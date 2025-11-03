// import React from 'react';
// import { MapPin } from 'lucide-react'; // Keep if needed
// import Text from '../text/Text';
// import ToppickComp from '../toppick/ToppickComp'; // Ensure correct casing here

// const Articles = () => {
//   const picks = [
//     {
//       name: "Perfect Places With Pool",
//       rating: 4.5,
//       category: "April 25, 2017 Tips & Triks",
//       image: "/asset/image/perfect-places.jpg.png"
//     },
//     {
//       name: "Which Bar to Choose",
//       rating: 5.0,
//       category: "April 24, 2017 Tips & Triks",
//       image: "/asset/image/bar.jpg.png" // Fixed typo here
//     },
//     {
//       name: "Trending Summer Places",
//       rating: 3.0,
//       category: "April 21, 2017 Trending",
//       image: "/asset/image/glass.jpg.png"
//     }
//   ];

//   const renderStars = (rating) => {
//     return [...Array(5)].map((_, i) => (
//       <svg key={i} className={`w-4 h-4 ${i < Math.floor(rating) ? "text-[#02ABB2]" : 'text-gray-300'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
//         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
//       </svg>
//     ));
//   };

//   return (
//     <div className="container mx-auto px-4 py-8 max-w-[80%]">
//       <Text 
//         heading={"Featured Members"}
//         para={[]}
//       />
//       <ToppickComp picks={picks} renderStars={renderStars}/>
//     </div>
//   );
// };

// export default Articles;
import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Clock, User, Bookmark, Share2 } from 'lucide-react';
import Text from '../text/Text';

const Articles = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [savedArticles, setSavedArticles] = useState({});

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const articles = [
    {
      id: 1,
      name: "Perfect Places With Pool",
      rating: 4.5,
      category: "Tips & Tricks",
      date: "April 25, 2017",
      readTime: "5 min read",
      author: "Jane Cooper",
      image: "/asset/image/perfect-places.jpg.png",
      excerpt: "Discover the most stunning places with pools that will make your summer unforgettable. From hidden gems to luxury resorts, we've got you covered.",
      isSaved: false
    },
    {
      id: 2,
      name: "Which Bar to Choose",
      rating: 5.0,
      category: "Tips & Tricks",
      date: "April 24, 2017",
      readTime: "3 min read",
      author: "Robert Fox",
      image: "/asset/image/bar.jpg.png",
      excerpt: "A comprehensive guide to selecting the perfect bar for any occasion. Learn about ambiance, drink quality, and what makes a bar truly exceptional.",
      isSaved: false
    },
    {
      id: 3,
      name: "Trending Summer Places",
      rating: 3.0,
      category: "Trending",
      date: "April 21, 2017",
      readTime: "7 min read",
      author: "Wade Warren",
      image: "/asset/image/glass.jpg.png",
      excerpt: "Explore the hottest destinations this summer. From beach clubs to mountain retreats, find out where everyone is going and why.",
      isSaved: false
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg 
        key={i} 
        className={`w-4 h-4 ${i < Math.floor(rating) ? "text-[#02ABB2] fill-current" : 'text-gray-300'}`} 
        fill={i < Math.floor(rating) ? "currentColor" : "none"}
        viewBox="0 0 24 24"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ));
  };

  const toggleSaveArticle = (id) => {
    setSavedArticles(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const ArticleCard = ({ article }) => (
    <div 
      className={`group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-700 transform hover:-translate-y-2 hover:shadow-2xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
      style={{ transitionDelay: `${article.id * 100}ms` }}
    >
      {/* Save button */}
      <button 
        onClick={() => toggleSaveArticle(article.id)}
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md transition-all duration-300 hover:bg-white hover:scale-110"
        aria-label={savedArticles[article.id] ? "Remove from saved" : "Save article"}
      >
        <Bookmark 
          className={`w-5 h-5 ${savedArticles[article.id] ? "text-[#02ABB2] fill-current" : "text-gray-600"}`}
        />
      </button>

      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <div 
          className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${article.image})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        
        {/* Category badge */}
        <div className="absolute bottom-4 left-4 bg-[#02ABB2] text-white text-xs font-bold px-3 py-1.5 rounded-full">
          {article.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-bold text-xl text-gray-800 group-hover:text-[#02ABB2] transition-colors duration-300">
            {article.name}
          </h3>
          <div className="flex items-center bg-amber-50 text-amber-700 px-2 py-1 rounded-lg">
            <span className="font-bold">{article.rating.toFixed(1)}</span>
          </div>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2">
          {article.excerpt}
        </p>

        {/* Article meta */}
        <div className="flex flex-wrap gap-3 text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{article.date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{article.readTime}</span>
          </div>
          <div className="flex items-center">
            <User className="w-4 h-4 mr-1" />
            <span>{article.author}</span>
          </div>
        </div>

        <div className="flex items-center mb-5">
          <div className="flex mr-2">
            {renderStars(article.rating)}
          </div>
          <span className="text-sm text-gray-500">({article.rating})</span>
        </div>

        <div className="flex space-x-3">
          <button className="flex-1 py-3 bg-gradient-to-r from-[#02ABB2] to-teal-600 text-white rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#02ABB2]">
            Read Article
          </button>
          <button className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-lg text-gray-600 hover:bg-gray-200 transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-[#02ABB2]/10 to-teal-600/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-teal-600/10 to-[#02ABB2]/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-[80%] relative z-10">
        {/* Premium section header */}
       <div className="text-center mb-16 transition-all duration-1000 
  ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}">
  
  <div className="inline-block relative mb-6">
    {/* Heading */}
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 relative z-10 leading-snug">
      Featured Articles
    </h2>
    <div className="absolute -bottom-3 left-0 w-full h-4 bg-gradient-to-r from-teal-200 to-blue-200 rounded-full transform -skew-y-1 z-0"></div>
  </div>
  
  {/* Subtext */}
  <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-2">
    Discover the latest insights, tips, and trends from our expert contributors
  </p>
  
  {/* Decorative line */}
  <div className="mt-8 flex justify-center">
    <div className="h-1 w-20 bg-gradient-to-r from-[#02ABB2] to-teal-600 rounded-full"></div>
  </div>
</div>


        {/* Articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map(article => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {/* View all button */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-block relative">
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#02ABB2] to-teal-600 text-white text-lg font-medium rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#02ABB2]">
              View All Articles
              <svg className="ml-3 w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            
            {/* Decorative element behind button */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#02ABB2]/20 to-teal-600/20 rounded-full blur-xl -z-10"></div>
          </div>
          
          <p className="mt-4 text-gray-500">
            Explore 100+ expert articles and guides
          </p>
        </div>
      </div>
    </div>
  );
};

export default Articles;
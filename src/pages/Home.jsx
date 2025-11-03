
import React, { useState, useEffect } from "react";
import Banner from "../components/banner";
import Toppick from "../components/home/toppick";
import Category from "../components/home/category";
import Reviews from "../components/home/Reviews";
import TopPicks from "../components/home/toppick";
import Articles from "../components/home/Articles";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
    <Banner
  height={"h-[500px] md:h-[600px] lg:h-[700px]"}
  bgimage={"/asset/image/bg-home.png"}
  text={"Discover Places That People Love"}
  subtext={`We will help you to find the best places to spend time in any city in the <br/> <div class="text-center">world</div> `}
>
  <div className="flex flex-col items-center justify-center w-full px-4">
    {/* Search Bar */}
    <div
      className={`flex flex-col sm:flex-row items-stretch sm:items-center rounded-lg shadow-lg w-full max-w-3xl transition-all duration-500 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      {/* Input 1 */}
      <div className="flex items-center bg-white rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none border border-gray-300 p-2 transition-all duration-300 focus-within:ring-2 focus-within:ring-teal-500 w-full sm:w-auto">
        <input
          type="text"
          placeholder="I'm looking for..."
          className="flex-grow focus:outline-none text-sm sm:text-base"
        />
        <i className="fas fa-chevron-down text-gray-400 ml-2"></i>
      </div>

      {/* Input 2 */}
      <input
        type="text"
        placeholder="Location"
        className="flex-grow p-2 border border-t sm:border-t-0 border-gray-300 focus:outline-none transition-all duration-300 focus-within:ring-2 focus-within:ring-teal-500 text-sm sm:text-base"
      />

      {/* Button */}
      <button className="bg-teal-500 text-white p-2 rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none hover:bg-teal-600 transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 w-full sm:w-auto">
        Search
      </button>
    </div>

    {/* Categories */}
    <div
      className={`flex flex-wrap justify-center gap-6 mt-6 text-gray-600 transition-all duration-500 delay-100 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <div className="flex items-center space-x-2 cursor-pointer group">
        <i className="fas fa-utensils group-hover:text-teal-500 transition-colors duration-300"></i>
        <span className="group-hover:text-teal-500 transition-colors duration-300 text-sm sm:text-base">
          Restaurants
        </span>
      </div>
      <div className="flex items-center space-x-2 cursor-pointer group">
        <i className="fas fa-coffee group-hover:text-teal-500 transition-colors duration-300"></i>
        <span className="group-hover:text-teal-500 transition-colors duration-300 text-sm sm:text-base">
          Coffee
        </span>
      </div>
      <div className="flex items-center space-x-2 cursor-pointer group">
        <i className="fas fa-cocktail group-hover:text-teal-500 transition-colors duration-300"></i>
        <span className="group-hover:text-teal-500 transition-colors duration-300 text-sm sm:text-base">
          Nightlife
        </span>
      </div>
      <div className="flex items-center space-x-2 cursor-pointer group">
        <i className="fas fa-shopping-bag group-hover:text-teal-500 transition-colors duration-300"></i>
        <span className="group-hover:text-teal-500 transition-colors duration-300 text-sm sm:text-base">
          Shopping
        </span>
      </div>
    </div>
  </div>
</Banner>

      
      {/* New Special Section */}
      <div className="relative py-16 bg-gradient-to-br from-teal-50 to-blue-50 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-teal-200 opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-blue-200 opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className={`max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} delay-150`}>
            <div className="md:flex">
              {/* Image side */}
              <div className="md:w-1/2">
                <div className="h-64 md:h-full w-full bg-cover bg-center transition-transform duration-700 hover:scale-105" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')" }}></div>
              </div>
              
              {/* Content side */}
              <div className="md:w-1/2 p-8 md:p-12">
                <div className="uppercase tracking-wide text-sm text-teal-600 font-semibold">Exclusive Membership</div>
                <h2 className="mt-2 text-3xl font-bold text-gray-900">Africa B2B Club</h2>
                <p className="mt-4 text-gray-600">Connecting African buyers with local suppliers</p>
                
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start group cursor-pointer">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-teal-500 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-lg text-gray-700 group-hover:text-teal-600 transition-colors duration-300">Find African Buyers</p>
                  </li>
                  <li className="flex items-start group cursor-pointer">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-teal-500 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-lg text-gray-700 group-hover:text-teal-600 transition-colors duration-300">Promote Your Products</p>
                  </li>
                  <li className="flex items-start group cursor-pointer">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-teal-500 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-lg text-gray-700 group-hover:text-teal-600 transition-colors duration-300">Expand into African markets</p>
                  </li>
                </ul>
                
                <div className="mt-8">
                  <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                    Join Now
                    <svg className="ml-2 -mr-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className={`mb-16 transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} delay-300`}>
          <TopPicks />
        </div>
        
        <div className={`mb-16 transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} delay-400`}>
          <Category />
        </div>
        
        <div className={`mb-16 transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} delay-500`}>
          <Reviews />
        </div>
        
        <div className={`mb-16 transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} delay-600`}>
          <Articles />
        </div>
      </div>
    </>
  );
};

export default Home;
// import React from 'react'

//  const Map = () => {
//   return (
//     <>
//         <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
//                     <div className="relative">
//                         <img src="https://placehold.co/400x200" alt="Map showing location" className="w-full h-48 object-cover"/>
//                         <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
//                             <div className="bg-teal-500 p-2 rounded-full">
//                                 <i className="fas fa-map-marker-alt text-white"></i>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="p-4">
//                         <div className="flex items-center mb-2">
//                             <i className="fas fa-map-marker-alt text-teal-500 mr-2"></i>
//                             <span className="text-gray-800">31 Crosby St, New York</span>
//                         </div>
//                         <div className="flex items-center mb-2">
//                             <i className="fas fa-phone-alt text-gray-500 mr-2"></i>
//                             <a href="tel:3103179140" className="text-blue-500">(310) 317-9140</a>
//                         </div>
//                         <div className="flex items-center mb-2">
//                             <i className="fas fa-clock text-gray-500 mr-2"></i>
//                             <span className="text-gray-500">Open until 6:00 PM</span>
//                         </div>
//                         <div className="bg-gray-100 p-2 rounded mb-2">
//                             <div className="text-gray-800">Mon - Sat 7:00 AM - 6:00 PM</div>
//                             <div className="text-gray-800">Sun 8:00 AM - 5:30 PM</div>
//                         </div>
//                         <a href="#" className="text-blue-500">AAW.com</a>
//                     </div>
//                 </div>
//     </>
//   )
// }
// export default Map
import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Clock, ExternalLink, Navigation, Star, X } from 'lucide-react';

const Map = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [showInfo, setShowInfo] = useState(true);

  useEffect(() => {
    setIsVisible(true);
    
    // Simulate map loading
    const timer = setTimeout(() => {
      setMapLoaded(true);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      {/* Map Container */}
      <div className="relative h-64">
        {/* Map Image with Loading State */}
        <div className={`w-full h-full bg-cover bg-center ${mapLoaded ? 'scale-100' : 'scale-105'}`} 
             style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')" }}>
          {!mapLoaded && (
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#02ABB2]"></div>
            </div>
          )}
          
          {/* Map Marker */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-[#02ABB2] shadow-md flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-3 h-3 bg-[#02ABB2] rotate-45"></div>
            </div>
          </div>
          
          {/* Map Controls */}
          <div className="absolute top-4 right-4 flex flex-col space-y-2">
            <button className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-50 transition-colors">
              <Navigation className="w-4 h-4 text-gray-700" />
            </button>
            <button className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-50 transition-colors">
              <Star className="w-4 h-4 text-gray-700" />
            </button>
          </div>
          
          {/* Info Toggle Button */}
          <button 
            onClick={() => setShowInfo(!showInfo)}
            className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            {showInfo ? <X className="w-4 h-4 text-gray-700" /> : <MapPin className="w-4 h-4 text-gray-700" />}
          </button>
          
          {/* Rating Badge */}
          {showInfo && (
            <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow px-3 py-2">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-amber-500 mr-1" />
                <span className="font-bold text-gray-800">4.5</span>
                <span className="text-gray-500 text-sm ml-1">(2.1k)</span>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Location Details - Collapsible */}
      {showInfo && (
        <div className="p-4 border-t border-gray-200">
          {/* Address */}
          <div className="flex items-start mb-3">
            <MapPin className="w-5 h-5 text-[#02ABB2] mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-gray-800">31 Crosby St, New York, NY 10013</p>
              <button className="text-[#02ABB2] text-sm hover:underline">
                Get directions
              </button>
            </div>
          </div>
          
          {/* Phone */}
          <div className="flex items-start mb-3">
            <Phone className="w-5 h-5 text-gray-600 mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <a href="tel:3103179140" className="text-[#02ABB2] hover:underline">
                (310) 317-9140
              </a>
            </div>
          </div>
          
          {/* Hours */}
          <div className="flex items-start mb-3">
            <Clock className="w-5 h-5 text-gray-600 mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <div className="text-gray-800">
                <div>Mon - Sat: 7:00 AM - 6:00 PM</div>
                <div>Sun: 8:00 AM - 5:30 PM</div>
              </div>
              <div className="flex items-center mt-1">
                <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                <span className="text-green-600 text-sm">Open now</span>
              </div>
            </div>
          </div>
          
          {/* Website */}
          <div className="flex items-start">
            <ExternalLink className="w-5 h-5 text-gray-600 mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <a href="https://aaw.com" target="_blank" rel="noopener noreferrer" className="text-[#02ABB2] hover:underline">
                AAW.com
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Map;
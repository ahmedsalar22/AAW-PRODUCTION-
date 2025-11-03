import React, { useState, useEffect } from 'react';
import { Mail, User, Briefcase, Star, MessageSquare, Check } from 'lucide-react';

export const JamesCard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`bg-white rounded-2xl my-2 shadow-lg overflow-hidden transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      {/* Card Header */}
      <div className="p-5 border-b border-gray-100">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-[#02ABB2]/10 flex items-center justify-center mr-3">
            <User className="w-4 h-4 text-[#02ABB2]" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800">Featured Expert</h3>
        </div>
      </div>
      
      {/* Profile Section */}
      <div className="p-6">
        {/* Profile Image */}
        <div className="relative mb-6">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Profile picture of James Gordon"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/150x150";
              }}
            />
          </div>
          
          {/* Verification Badge */}
          <div className="absolute bottom-2 right-1/2 transform translate-x-1/2 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center border-2 border-white">
            <Check className="w-4 h-4 text-white" />
          </div>
        </div>
        
        {/* Name and Title */}
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">James Gordon</h2>
          <div className="flex items-center justify-center text-gray-600 mb-2">
            <Briefcase className="w-4 h-4 mr-1" />
            <span>Business Consultant</span>
          </div>
          
          {/* Rating */}
          <div className="flex items-center justify-center mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber-500 fill-current" />
              ))}
            </div>
            <span className="text-gray-500 text-sm ml-2">(4.9)</span>
          </div>
        </div>
        
        {/* Bio */}
        <p className="text-gray-600 text-center mb-6">
          Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus.
        </p>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <div className="text-xl font-bold text-gray-800">124</div>
            <div className="text-xs text-gray-500">Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-gray-800">98%</div>
            <div className="text-xs text-gray-500">Response</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-gray-800">5+</div>
            <div className="text-xs text-gray-500">Years Exp.</div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="space-y-3">
          <button 
            onClick={() => setIsFollowing(!isFollowing)}
            className={`w-full py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center ${isFollowing ? 'bg-gray-100 text-gray-700' : 'bg-[#02ABB2] text-white hover:bg-teal-600'}`}
          >
            {isFollowing ? (
              <>
                <Check className="w-5 h-5 mr-2" />
                Following
              </>
            ) : (
              <>
                <User className="w-5 h-5 mr-2" />
                Follow
              </>
            )}
          </button>
          
          <button className="w-full py-3 bg-white border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors flex items-center justify-center">
            <Mail className="w-5 h-5 mr-2" />
            Send Message
          </button>
        </div>
      </div>
      
      {/* Card Footer */}
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
        <div className="flex items-center justify-center">
          <MessageSquare className="w-4 h-4 text-gray-500 mr-1" />
          <span className="text-sm text-gray-500">Usually responds within 24 hours</span>
        </div>
      </div>
    </div>
  );
};
// import React from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <>
//       <header className=" py-4 px-6">
//         <div className="container max-w-[90%] mx-auto mb-4 flex gap-3 items-center justify-between">
//           <div className="">
//             <img src="/asset/image/logo.png" alt="" />
//             </div>
//             <div className="mt-8 bg-green-100 p-8 rounded shadow-md w-80 flex items-center justify-center">
//               <span className="text-red-600 text-xl font-semibold">ADS</span>
//           </div>
//         </div>
//         <div className="bg-[#02ABB2] p-4">
//           <div className="container max-w-[90%] mx-auto  flex justify-between items-center ">
//             <nav className="flex space-x-4">
//               <Link to="/" className="text-white">
//                 Homepage
//               </Link>
//               <Link to="/Map-Example" className="text-white">
//                 Map examples
//               </Link>
//               <Link to="/Categories" className="text-white">
//                 Categories
//               </Link>
//               <Link to="/aboutus" className="text-white">
//                 About
//               </Link>

              
//             </nav>
//             <div className=" flex space-x-4">
//               <Link to="/login">
//               <button className="border border-gray-600 text-gray-600 px-4 py-2 rounded">
//                 Log In
//               </button>
//               </Link>
//               <button className="bg-[#02ABB2] text-white px-4 py-2 rounded">
//                 Add Listing
//               </button>
//               <button className="text-gray-600">EN</button>
//             </div>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="py-4 px-6">
        {/* Top bar (logo + ads) */}
        <div className="container max-w-[90%] mx-auto mb-4 flex flex-col md:flex-row gap-3 items-center justify-between">
          <div>
            <img src="/asset/image/logo.png" alt="Logo" className="w-32 md:w-40" />
          </div>
          <div className="mt-4 md:mt-0 bg-green-100 p-6 md:p-8 rounded shadow-md w-full md:w-80 flex items-center justify-center">
            <span className="text-red-600 text-xl font-semibold">ADS</span>
          </div>
        </div>

        {/* Navigation bar */}
        <div className="bg-[#02ABB2] p-4">
          <div className="container max-w-[90%] mx-auto flex justify-between items-center">
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="text-white">Homepage</Link>
              <Link to="/Map-Example" className="text-white">Map examples</Link>
              <Link to="/Categories" className="text-white">Categories</Link>
              <Link to="/aboutus" className="text-white">About</Link>
            </nav>

            {/* Desktop Buttons */}
            <div className="hidden md:flex space-x-4">
              <Link to="/login">
                <button className="border border-gray-600 text-gray-600 px-4 py-2 rounded">Log In</button>
              </Link>
              <button className="bg-[#02ABB2] border border-white text-white px-4 py-2 rounded">
                Add Listing
              </button>
              <button className="text-gray-600">EN</button>
            </div>

            {/* Hamburger button for mobile */}
            <button
              className="md:hidden text-white"
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-[#02ABB2] text-white flex flex-col items-center justify-center z-50">
          {/* Close button */}
          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setMenuOpen(false)}
          >
            <X size={32} />
          </button>

          {/* Nav Links */}
          <nav className="flex flex-col gap-8 text-2xl font-semibold text-center">
            <Link to="/" onClick={() => setMenuOpen(false)}>Homepage</Link>
            <Link to="/Map-Example" onClick={() => setMenuOpen(false)}>Map examples</Link>
            <Link to="/Categories" onClick={() => setMenuOpen(false)}>Categories</Link>
            <Link to="/aboutus" onClick={() => setMenuOpen(false)}>About</Link>
          </nav>

          {/* Buttons */}
          <div className="flex flex-col gap-4 mt-10 w-3/4">
            <Link to="/login">
              <button className="border border-white text-white px-4 py-3 rounded w-full" onClick={() => setMenuOpen(false)}>
                Log In
              </button>
            </Link>
            <button className="bg-white text-[#02ABB2] px-4 py-3 rounded w-full" onClick={() => setMenuOpen(false)}>
              Add Listing
            </button>
            <button className="text-white" onClick={() => setMenuOpen(false)}>EN</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

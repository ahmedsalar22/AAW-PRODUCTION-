

// const Footer = () => {
//   return (
//     <>
//       <footer className="text-white-600 body-font bg-[#262424]  ">
//         <div className="container max-w-[80%] px-5 py-24 mx-auto relative">
//           <div className="grid grid-cols-12 items-start mb-5">
//             <div className="col-span-3">
//               <img
//                 src="/asset/image/footer-logo.png"
//                 className="m-w-full"
//                 alt=""
//               />
//             </div>
//             {[
//               {
//                 title: "Useful Links",
//                 subType: [
//                   "About AAW",
//                   "Work With Us",
//                   "Advertising",
//                   "Reviews",
//                 ],
//               },
//               {
//                 title: "Top Places",
//                 subType: [
//                   "Saturdays Surf",
//                   "Purl Soho",
//                   "Sam Brocato Salon",
//                   "Judd Foundation",
//                 ],
//               },
//             ].map(({ title, subType }) => {
//               return (
//                 <>
//                   <div className="col-span-3" key={title}>
//                     <div className="text-white text-xl mb-3">{title}</div>
//                     {subType.map((sub) => (
//                       <div className="text-[#CFCFCF] mb-3" key={sub}>
//                         {sub}
//                       </div>
//                     ))}
//                   </div>
//                 </>
//               );
//             })}

//             <div className="col-span-3">
//               <div className="text-white text-xl mb-3">Follow Us</div>
//               <div className="flex gap-3 flex-wrap">
//                 {["facebook", "googleplus", "linkdin", "twitter", "p"].map(
//                   (img) => (
//                     <img src={`/asset/image/${img}.png`} alt={img} key={img} />
//                   )
//                 )}
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col justify-center items-center gap-3 absolute bottom-0 w-full">
//             <div className="border-t-[1px] border-t-[#5E5C5C]  w-full text-center p-5 text-[#5E5C5C]">
//               AAW©2017. Made in NYC
//             </div>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;
const Footer = () => {
  return (
    <footer className="text-white body-font bg-[#262424]">
      <div className="container max-w-[90%] px-5 py-16 mx-auto relative">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-6 mb-10">
          
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <img
              src="/asset/image/footer-logo.png"
              className="max-w-[150px] sm:max-w-[180px] md:max-w-full"
              alt="Footer Logo"
            />
          </div>

          {/* Links */}
          {[
            {
              title: "Useful Links",
              subType: [
                "About AAW",
                "Work With Us",
                "Advertising",
                "Reviews",
              ],
            },
            {
              title: "Top Places",
              subType: [
                "Saturdays Surf",
                "Purl Soho",
                "Sam Brocato Salon",
                "Judd Foundation",
              ],
            },
          ].map(({ title, subType }) => (
            <div key={title}>
              <div className="text-white text-lg sm:text-xl font-semibold mb-4">{title}</div>
              {subType.map((sub) => (
                <div
                  className="text-[#CFCFCF] mb-2 text-sm sm:text-base cursor-pointer hover:text-white transition"
                  key={sub}
                >
                  {sub}
                </div>
              ))}
            </div>
          ))}

          {/* Social */}
          <div>
            <div className="text-white text-lg sm:text-xl font-semibold mb-4">Follow Us</div>
            <div className="flex gap-3 flex-wrap justify-center md:justify-start">
              {["facebook", "googleplus", "linkdin", "twitter", "p"].map((img) => (
                <img
                  src={`/asset/image/${img}.png`}
                  alt={img}
                  key={img}
                  className="w-6 h-6 sm:w-8 sm:h-8 cursor-pointer hover:opacity-80"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#5E5C5C] w-full text-center pt-6 text-[#8C8C8C] text-sm sm:text-base">
          AAW©2017. Made in NYC
        </div>
      </div>
    </footer>
  );
};

export default Footer;

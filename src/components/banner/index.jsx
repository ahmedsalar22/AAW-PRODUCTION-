// /* eslint-disable react/prop-types */

// const Banner = ({ bgimage, text, subtext, height,children }) => {
//   return (
//     <div
//       className={`w-full ${height ? height : 'h-[300px]'} bg-cover flex flex-col items-center justify-center`}
//       style={{ backgroundImage: `url("${bgimage}")` }}
//     >
//       {text && (
//         <h2
//           className="text-center text-white text-4xl font-bold"
//           style={{ fontFamily: "Arial, sans-serif" }}
//         >
//           {text}
//         </h2>
//       )}
//       {subtext && (
//         <p
//           className="text-white text-center"
//           style={{ fontFamily: "Arial, sans-serif" }}
//           dangerouslySetInnerHTML={{ __html: subtext }}
//         />
//       )}
//       {children}
//     </div>
//   );
// };

// export default Banner;
/* eslint-disable react/prop-types */

const Banner = ({ bgimage, text, subtext, height, children }) => {
  return (
    <div
      className={`w-full ${height ? height : "h-[300px] md:h-[400px] lg:h-[500px]"} 
      bg-cover bg-center flex flex-col items-center justify-center px-4`}
      style={{ backgroundImage: `url("${bgimage}")` }}
    >
      {text && (
        <h2
          className="text-center text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          {text}
        </h2>
      )}
      {subtext && (
        <p
          className="text-white text-center mt-2 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl"
          style={{ fontFamily: "Arial, sans-serif" }}
          dangerouslySetInnerHTML={{ __html: subtext }}
        />
      )}
      {children}
    </div>
  );
};

export default Banner;

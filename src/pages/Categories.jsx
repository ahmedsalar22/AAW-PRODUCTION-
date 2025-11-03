import Banner from "../components/banner";
import Text from "../components/text/Text";
import ReviewTipsComp from "../components/ReviewTipsComp/ReviewTipsComp";
import { Link } from "react-router-dom";
import { useState } from "react";
import OurPricing from "./OurPricing";

const Categories = () => {
  const reviews = [
    {
      name: "Chose Type",
      rating: 4,
      text: "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis semnibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsanipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erataconsequat auctor eu in elit. Class aptent taciti socosqu ad litora torquent per conubia.",
      image: "https://placehold.co/50x50",
      alt: "Profile picture of Dorian Breen",
    },
    {
      name: "Gloria Trillo",
      rating: 3,
      text: "Phasellus a tempor libero. Mauris vitae aliquet ipsum, nec vulputate leo.",
      image: "https://placehold.co/50x50",
      alt: "Profile picture of Gloria Trillo",
    },
    {
      name: "Bernard Show",
      rating: 5,
      text: "In ut volutpat enim. Nam eget venenatis lorem. Nunc in varius eros, eget pretium ligula. Vestibulum vitae metus sagittis, faucibus ex ac, dictum nibh. Ut interdum dolor nec quam gravida eleifend.",
      image: "https://placehold.co/50x50",
      alt: "Profile picture of Bernard Show",
    },
    {
      name: "Antonie Bluer",
      rating: 5,
      text: "Curabitur finibus tellus arcu, non condimentum purus sodales id. Nam ornare porttitor velit, vel luctus turpis feugiat ac. In fermentum maximus varius. Fusce non pharetra magna. Etiam viverra gravida lectus.",
      image: "https://placehold.co/50x50",
      alt: "Profile picture of Antonie Bluer",
    },
    {
      name: "Kevin Igorevich",
      rating: 5,
      text: "Curabitur finibus tellus arcu, non condimentum purus sodales id. Nam ornare porttitor velit, vel luctus turpis feugiat ac. In fermentum maximus varius. Fusce non pharetra magna. Etiam viverra gravida lectus. Aliquam erat volutpat. Nam fringilla accumsan magna, nec gravida ex suscipit vitae.",
      image: "https://placehold.co/50x50",
      alt: "Profile picture of Kevin Igorevich",
    },
  ];

  const [isActive, setisActive] = useState("work");
  const Review = ({ name, rating, text, image, alt }) => (
    <div className="flex items-start p-4 border-b">
      <img src={image} alt={alt} className="w-12 h-12 rounded-full mr-4" />
      <div>
        <h3 className="font-bold text-lg">{name}</h3>
        <div className="flex items-center mb-1">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <i
                key={i}
                className={`fas fa-star ${
                  i < rating ? "text-blue-500" : "text-gray-300"
                }`}
              ></i>
            ))}
          </div>
        </div>
        <p className="text-gray-600">{text}</p>
      </div>
    </div>
  );
  return (
    <div className="">
      <Banner
        bgimage={"/asset/image/bg-login.png"}
        text={"Discover places that people love."}
        subtext={
          "We will help you to find the best places to spend time in any city in the world."
        }
      />

      <div className=" container mx-auto mt-10 grid grid-cols-12 max-w-[90%]">
        <div className="col-span-2 flex py-0 md:py-28">
          <ul className="flex flex-col gap-4">
            <Link to={"/"}> Back To Home</Link>

            <li
              onClick={() => {
                setisActive("work");
              }}
              className={`${isActive === "work" && "font-bold"} cursor-pointer`}
            >
              How it Works
            </li>
            <li
              onClick={() => {
                setisActive("pricing");
              }}
              className={`${
                isActive === "pricing" && "font-bold"
              } cursor-pointer`}
            >
              Our Pricing
            </li>
            <li
              onClick={() => {
                setisActive("offer");
              }}
              className={`${
                isActive === "offer" && "font-bold"
              } cursor-pointer`}
            >
              Special Offers
            </li>
          </ul>
        </div>
        <div className="col-span-10 p-10">
            {isActive === "work" ? (
            <>
              <Text
                heading={"How it Works"}
                para={"Maecenas mauris arcu, congue ac lorem vel libero."}
              />

              <div className="mx-auto mb-5">
                {[
                  "Chose Type",
                  "Find Location",
                  "Review Listing",
                  "Vist More",
                ].map((type, index) => (
                  <div
                    className="flex items-start gap-4 border-2 rounded-lg p-5 border-b"
                    key={type}
                  >
                    <img src={`/asset/image/howwork${index + 1}.png`} />
                    <div>
                      <h3 className="font-bold text-lg mb-4">{type}</h3>

                      <p className="text-gray-600">
                        Aenean sollicitudin, lorem quis bibendum auctor, nisi
                        elit consequat ipsum, nec sagittis sem nibh id elit.
                        Duis sed odio sit amet nibh vulputate cursus a sit amet
                        mauris. Morbi accumsan ipsum velit. Nam nec tellus a
                        odio tincidunt auctor a ornare odio. Sed non mauris
                        vitae erata consequat auctor eu in elit. Class aptent
                        taciti socosqu ad litora torquent per conubia.
                      </p>
                    </div>
                  </div>
                ))}
                <div className="flex justify-center ">
                  <button className="bg-teal-500 text-white py-2 px-4 my-3 w-max rounded">
                    Get Started Now
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <Text
                heading={
                  isActive === "pricing" ? "Our Pricing" : "Speical Offers"
                }
                para={"Maecenas mauris arcu, congue ac lorem vel libero."}
              />
              <OurPricing />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Categories;

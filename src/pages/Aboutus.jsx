import React from "react";
import Banner from "../components/banner";
import Description from "../components/Description/description";

import Form from "../components/Form/Form";
Form
Banner;

const Aboutus = () => {
  return (
    <>
      <Banner
        bgimage={"/asset/image/bg-home.png"}
        text={"Discover Places That People Love"}
        subtext={`We will help you to find the best places to spend time in any city in the <br/> <div class="text-center">world</div> `}
      ></Banner>
      <div className="h-[250px] bg-black">
        <span>map</span>
      </div>
      <div className="grid grid-cols-12 gap-3 mt-3">
      <div className="col-span-9">
      <div className=" w-[832px] p-3 shadow-sm rounded text-center m-auto ">
        <Description
          value={`Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio siton amet nibh
vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed auris vitae
erata consequat auctor eu in elit. Class aptent taciti socosqu ad litora torquent per conubia. In pretium mi non velit tincidunt aliquam.
Nam elementu nulla accumsan cursus varius. Vestibulum faucibus urna leo, commodo tellus sodales molestie tellus ullamcorper eu.`}
        />
         <Form/>
         
      </div>
      </div>
      <div className="col-span-3 ">
      <div className="mt-8 bg-green-100 p-8 rounded shadow-md w-80 flex items-center justify-center">
                        <span className="text-red-600 text-xl font-semibold">ADS</span>
                    </div>

      </div>
      </div>
    </>
  );
};

export default Aboutus;

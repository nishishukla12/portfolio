import { CheckIcon } from "@heroicons/react/16/solid";
import React from "react";

function AboutMe() {
  return (
    <div className="mt-[-4rem] bg-black pb-[3rem]">
      <div
        className="w-[80%] pt-[5rem] sm:pt-[7rem] md:pt-[10rem] mx-auto grid items-center grid-cols-1
       lg:grid-cols-2 gap-[2rem]"
      >
        <div>
          <p className="heading_mini">About Me</p>
          <h1 className="heading_primary">
            Professional <span className="text-yellow-400">Website </span>
            for your bussiness
          </h1>
          <p className="text-[15px] mt-[1.3rem] text-white">
          I believe in creating designs that not only look great 
              but also provide an intuitive and seamless user experience.
               My approach is centered around understanding the unique needs 
               of each client and translating their vision into a digital reality. 
               I strive to balance creativity with usability,
                ensuring that each project I undertake is both v
                isually appealing and highly functional.
          </p>
          <div className="mt-[2rem] space-y-3">
            <div className="flex items-center space-x-4">
              <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
              <p className="text-[18px] text-white">Website Designer</p>
            </div>
            <div className="flex items-center space-x-4">
              <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
              <p className="text-[18px] text-white">Html Developer</p>
            </div>
            <div className="flex items-center space-x-4">
              <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
              <p className="text-[18px] text-white">Wordpress Designer</p>
            </div>
            <div className="flex items-center space-x-4">
              <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
              <p className="text-[18px] text-white">Shopify Designer</p>
            </div>
          </div>
        </div>
        <div className="lg:ml-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-[2rem]">
            <div className="p-6 text-center bg-yellow-500">
              <p className="text-[50px] text-black font-bold">4+</p>
              <p className="text-[20px] text-black font-600">
                Years Experience
              </p>
            </div>
            <div className="p-6 text-center bg-yellow-500">
              <p className="text-[50px] text-black font-bold">50+</p>
              <p className="text-[20px] text-black font-600">Happy Client</p>
            </div>
            <div className="p-6 text-center bg-yellow-500">
              <p className="text-[50px] text-black font-bold">100+</p>
              <p className="text-[20px] text-black font-600">Project Done</p>
            </div>
            <div className="p-6 text-center bg-yellow-500">
              <p className="text-[50px] text-black font-bold">3+</p>
              <p className="text-[20px] text-black font-600">Award Win</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;

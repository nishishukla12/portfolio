import React from "react";
import SkillCard from "./Helper/SkillCard";

function Skills() {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-black">
      <div className="grid w-[80%] mx-auto grid-cols-1 lg:grid-cols-7 gap-[2rem] text-center">
        <div className="col-span-3">
          <p className="heading_mini">My Skills</p>
          <h1 className="heading_primary">
            Let's Explore Popular{" "}
            <span className="text-yellow-300">skills</span> & Experience
          </h1>
          <p className="text-[15px] mb-[1.5rem] text-white opacity-70 mt-[1.5rem]">
          Designing websites that provide an optimal viewing experience across a wide range of devices,
          from desktop monitors to mobile phones.
          </p>
          <button
            className="relative flex h-[50px] w-40 items-center justify-center
                font-semibold overflow-hidden bg-red-500 text-white shadow-2xl transition-all before:absolute before:h-0
                before:w-0 before:rounded-full before:bg-blue-600 before:duration-500 before:ease-out hover:before:h-56
                 hover:before:w-56 left-0 right-0 m-auto"
          >
            <a className="relative z-10 m-auto left-0 right-0" href="#hero-sec">Learn More</a>
          </button>
        </div>
        <div className="col-span-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem] text-center">
          <div>
              <SkillCard
                title="Html5"
                image="/images/html-logo.png"
                percent="80%"
              />
            </div>
            <div>
              <SkillCard
                title="Css3"
                image="/images/css-logo.png"
                percent="80%"
              />
            </div>
            <div>
              <SkillCard
                title="React"
                image="/images/react.svg"
                percent="50%"
              />
            </div>
            <div>
              <SkillCard
                title="wordpress"
                image="/images/wordpress-logo.png"
                percent="60%"
              />
            </div>
            <div>
              <SkillCard
                title="Figma"
                image="/images/Figma-Logo.png"
                percent="60%"
              />
            </div>
            <div>
              <SkillCard
                title="Tailwind Css"
                image="/images/tailwind-logo.png"
                percent="65%"
              />
            </div>
            <div>
              <SkillCard
                title="Shopify"
                image="/images/shopify.svg"
                percent="70%"
              />
            </div>
          
            <div>
              <SkillCard
                title="JavaScript"
                image="/images/js.svg"
                percent="40%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;

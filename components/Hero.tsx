import React from "react";
import TypeWriteEffect from "./Helper/TypeWriteEffect";
import Image from "next/image";

function Hero() {
  return (
    <div className="w-[100vw] pt-[4vh] md:pt-[12vh] h-[85vh] md:h-[100vh] custom-bg">
      <div className="flex justify-center flex-col w-[80%] h-[100%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-[3rem] items-center">
          <div>
            <h1 className="text-[#c4cfde] mb-[1.3rem]">WELCOME TO MY PORTFOLIO</h1>
            <div>
              <h1
                className="xl:text-[50px] lg:text-[40px] sm:text-[35px] text-[25px] 
        font-semibold leading-[2.6rem] text-white"
              >
                Hi, I&apos;m <span className="text-yellow-300">Nishi Shukla</span>
              </h1>
              <TypeWriteEffect />
              <p className="mt-[1.2rem] text-[15px] md:text-[17px] text-[#c4cfde]">
      
               Hello! I’m Nishi Shukla, a passionate and creative web designer with over 4 years of experience in webite designing and user-friendly websites.
                My journey in web design began with a fascination for the intersection of aesthetics and functionality, driving me to continuously
                hone my skills and stay ahead of industry trends.
              </p>
              <div className="mt-[2rem] flex items-center space-x-6">
                <button
                  className="relative flex h-[50px] w-40 items-center justify-center
                font-semibold overflow-hidden bg-yellow-500 text-white shadow-2xl transition-all before:absolute before:h-0
                before:w-0 before:rounded-full before:bg-white before:duration-500 before:ease-out hover:before:h-56
                 hover:before:w-56 hover:text-yellow-500 hover:border-yellow-500 hover:border-2"
                >
                  <span className="relative z-10">Hire Me</span>
                </button>
                <button
                  className="before:ease relative h-12 w-40 overflow-hidden bg-white text-black
                 font-semibold shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48
                  before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90
                   before:bg-black before:transition-all before:duration-300 hover:text-white hover:shadow-black 
                   hover:before:-rotate-180 hover:border-white hover:border-2"
                >
                  <span className="relative z-10">Download CV</span>
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <Image
              src={"/images/my-profile-image.png"}
              alt="hero"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

import { EnvelopeIcon, MapIcon, PhoneIcon } from "@heroicons/react/16/solid";
import React from "react";

function Footer() {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-black" id="footer-section">
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] border-b-[1.4px] pb-5 border-gray-600 border-opacity-40">
        <div>
          <div className="font-logo text-white text-[18px]">
            <span className="text-[30px] md:text-[40px] text-yellow-400">
              WD
            </span>
            Nishi
          </div>
          <h1 className="text-[14px] mt-[0.5rem] text-white opacity-70">
          Feel free to connect with me for professional inquiries,
           collaboration opportunities, or just to expand your network!
          </h1>
          <p className="mt-[1.5rem] text-yellow-300 underline font-semibold">
            nishishukla406@gmail.com
          </p>
        </div>
        <div className="md:mx-auto">
          <h1 className="text-white font-semibold mb-[1.4rem] text-[17px]">
            Quick Link
          </h1>
          <ul className="md:flex hidden  flex-col p-0">
          <li className="opacity-80">
            <a className="nav_link" href="#">
              Home
            </a>
          </li>
          <li className="opacity-80">
            <a className="nav_link" href="#about-sec">
              About
            </a>
          </li>
          <li className="opacity-80">
            <a className="nav_link" href="#service-sec">
              Services
            </a>
          </li>
          <li className="opacity-80">
            <a className="nav_link" href="#proj-section">
              Project
            </a>
          </li>
          <li className="opacity-80">
            <a className="nav_link" href="#">
              Contact us
            </a>
          </li>
        </ul>
          {/* <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300">
            About
          </p>
          <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300">
            Services
          </p>
          <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300">
            Project
          </p>
          <p className="text-[15px] text-white opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300">
            Contact
          </p> */}
        </div>
        <div className="lg:mx-auto">
          <h1 className="text-white font-semibold mb-[1.4rem] text-[17px]">
            Address
          </h1>
          <div className="flex items-center mt-[1rem] space-x-2">
            <MapIcon className="w-[1rem] h-[1rem] text-yellow-300" />
            <p className="text-[17px] font-normal text-white opacity-75">
              56 Naubasta Kanpur, Uttar Pradesh
            </p>
          </div>
          <div className="flex items-center mt-[1rem] space-x-2">
            <EnvelopeIcon className="w-[1rem] h-[1rem] text-yellow-300" />
            <p className="text-[17px] font-normal text-white opacity-75">
              wd.nishishukla406@gmail.com
            </p>
          </div>
          <div className="flex items-center mt-[1rem] space-x-2">
            <PhoneIcon className="w-[1rem] h-[1rem] text-yellow-300" />
            <p className="text-[17px] font-normal text-white opacity-75">
              +91 8318910501
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[1.4rem] w-[80%] mx-auto text-white opacity-70">
        &#169; Copyright wd nishishukla 2024
      </div>
    </div>
  );
}

export default Footer;
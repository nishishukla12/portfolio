import { Bars3CenterLeftIcon } from "@heroicons/react/16/solid";
import React, { useEffect, useState } from "react";

interface Props {
  showNavHandler: () => void;
}

function Nav({ showNavHandler }: Props) {
  const [navSticky, setNaSticky] = useState(false);
  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNaSticky(true);
      }
      if (window.scrollY <= 90) {
        setNaSticky(true);
      }
    };
    window.addEventListener("scroll", handler);
  }, []);
  const stickyStyle = navSticky ? "bg-[#212428] shadow-gray-900 shadow-sm" : "";
  return (
    <div
      className={`fixed w-[100%] ${stickyStyle} transition-all duration-300 z-[1000]`}
    >
      <div className="flex items-center h-[12vh] justify-between w-[80%] mx-auto">
        <div className="font-logo text-white text-[18px]">
          <span className="text-[30px] md:text-[40px] text-yellow-400">WD</span>
          Nishi
        </div>
        <ul className="md:flex hidden items-center space-x-10">
          <li>
            <a className="nav_link" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="nav_link" href="#">
              About
            </a>
          </li>
          <li>
            <a className="nav_link" href="#">
              Services
            </a>
          </li>
          <li>
            <a className="nav_link" href="#">
              Blog
            </a>
          </li>
          <li>
            <a className="nav_link" href="#">
              Contact
            </a>
          </li>
        </ul>
        <Bars3CenterLeftIcon
          onClick={showNavHandler}
          className="w-[2.3rem] md:hidden h-[2.3rem] text-white rotate-180"
        />
      </div>
    </div>
  );
}

export default Nav;

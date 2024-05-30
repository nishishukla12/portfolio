import { XMarkIcon } from "@heroicons/react/16/solid";
import React from "react";

interface Props {
  showNav: boolean;
  closeNavHandler: () => void;
}

function NavMobile({ showNav, closeNavHandler }: Props) {
  const navOpenStype = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div>
      <div
        className={`fixed top-0 ${navOpenStype} transform transition-all duration-500 z-[10000] 
     left-0 right-0 bottom-0 bg-black bg-opacity-70 w-[100vw] h-[100vh]`}
      ></div>
      <ul
        className={`text-white ${navOpenStype} fixed flex items-center justify-center flex-col h-[100%] transform transition-all duration-300 delay-300 
         w-[60%] bg-red-600 space-y-14 z-[10006]`}
      >
        <li>
          <a className="nav_link text-[25px] sm-text-[30px]" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="nav_link text-[25px] sm-text-[30px]" href="#">
            About
          </a>
        </li>
        <li>
          <a className="nav_link text-[25px] sm-text-[30px]" href="#">
            Services
          </a>
        </li>
        <li>
          <a className="nav_link text-[25px] sm-text-[30px]" href="#">
            Blog
          </a>
        </li>
        <li>
          <a className="nav_link text-[25px] sm-text-[30px]" href="#">
            Contact
          </a>
        </li>
        <XMarkIcon
          onClick={closeNavHandler}
          className="absolute top-[-1.4rem] right-[1.4rem] w-[2.2rem] h-[2.2rem] text-white"
        />
      </ul>
    </div>
  );
}

export default NavMobile;

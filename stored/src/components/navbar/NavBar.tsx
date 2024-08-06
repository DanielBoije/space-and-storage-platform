"use client";
import Image from "next/image";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import storedLogo from "../../../public/stored-transparent.png";
import NavBarButtons from "./NavBarButtons";

const NavBar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const toggleNavbar = () => {
    setIsClicked(!isClicked);
  };
  return (
    <nav className="bg-indigo-900 sticky top-0 min-w-64">
      <div className="mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/">
                <Image
                  src={storedLogo}
                  width={100}
                  height={100}
                  alt="Picture of the author"
                />
              </a>
            </div>
          </div>
          <NavBarButtons />
          <div className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleNavbar}
            >
              {isClicked ? <IoClose size={24} /> : <IoMenu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isClicked && <NavBarButtons mobileView />}
    </nav>
  );
};

export default NavBar;

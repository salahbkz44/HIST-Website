import React from "react";
import Logo from "../assets/nav-logo.svg";
import LogoBg from "../assets/logo-bg.svg";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-around bg-hist-green text-white font-inter font-light text-2xl h-20">
      {/* Left Navigation Links */}
      <ul className="flex justify-around flex-1 space-x-4 h-full !pl-10 !pr-2">
        <li className="relative flex justify-center flex-1 items-center h-full hover:font-medium hover:bg-hist-green-effect hover:text-hist-beige hover:border-b-2 border-hist-beige group">
          <a href="#" className="px-4 py-2 flex items-center">
            HIST Academy
          </a>
          {/* Dropdown Menu */}
          <ul className="absolute text-xl top-full left-0 w-full bg-hist-green text-white  font-light shadow-lg  overflow-hidden transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
            <li className=" hover:bg-hist-green-effect hover:text-hist-beige hover:border-b-2 border-hist-beige !px-4 !py-3 transition-colors duration-200">
              <a href="#" className="block">
                Presentation
              </a>
            </li>
            <li className="hover:bg-hist-green-effect  hover:text-hist-beige hover:border-b-2 border-hist-beige !px-4 !py-3 transition-colors duration-200">
              <a href="#" className="block">
                Nos Programmes
              </a>
            </li>
            <li className="hover:bg-hist-green-effect  hover:text-hist-beige hover:border-b-2 border-hist-beige !px-4 !py-3 transition-colors duration-200">
              <a href="#" className="block">
                Espace Etudiant
              </a>
            </li>
            <li className="hover:bg-hist-green-effect  hover:text-hist-beige hover:border-b-2 border-hist-beige !px-4 !py-3 transition-colors duration-200">
              <a href="#" className="block">
                Admission
              </a>
            </li>
          </ul>
        </li>
        <li className="flex justify-center flex-1 items-center h-full hover:font-medium hover:bg-hist-green-effect hover:text-hist-beige hover:border-b-2 border-hist-beige">
          <a href="#" className="px-4 py-2 flex items-center">
            CEC
          </a>
        </li>
        <li className="flex justify-center flex-1 items-center h-full hover:font-medium hover:bg-hist-green-effect hover:text-hist-beige hover:border-b-2 border-hist-beige">
          <a href="#" className="px-4 py-2 flex items-center">
            HRP
          </a>
        </li>
      </ul>

      {/* Centered Logo */}
      <div className="relative min-w-1/4 flex items-center justify-center">
        <img
          src={LogoBg}
          alt="Logo Background"
          className="absolute -top-4 w-full"
        />
        <img src={Logo} alt="HIST Logo" className="relative w-4/6 z-10" />
      </div>

      {/* Right Navigation Links */}
      <ul className="flex justify-around flex-1 space-x-4 h-full !pr-10 !pl-2">
        <li className="flex justify-center flex-1 items-center h-full hover:font-medium hover:bg-hist-green-effect hover:text-hist-beige hover:border-b-2 border-hist-beige">
          <a href="#" className="px-4 py-2 flex items-center">
            COMMUNAUTE EDUCATIVE ET PROFESSIONNELLE
          </a>
        </li>
        <li className="flex justify-center !px-5 items-center h-full hover:font-medium hover:bg-hist-green-effect hover:text-hist-beige hover:border-b-2 border-hist-beige">
          <a href="#" className="px-4 py-2 flex items-center">
            CONTACT US
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

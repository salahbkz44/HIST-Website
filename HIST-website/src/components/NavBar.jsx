import React, { useState } from "react";
import Logo from "../assets/nav-logo.svg";
import LogoBg from "../assets/logo-bg.svg";
import LogoMobile from "../assets/nav-logo-mobile.png";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showHistSubMenu, setShowHistSubMenu] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-hist-green text-white font-inter font-light text-2xl h-20">
      {/* Desktop Layout */}
      <div className="hidden lg:flex items-center justify-between h-full">
        {/* Left Nav */}
        <ul className="flex justify-around max-w-3/8 w-1/3 flex-1 space-x-4 h-full !pl-10 !pr-2">
          <li className="relative flex justify-center flex-1 items-center h-full hover:font-medium hover:bg-hist-green-effect hover:text-hist-beige hover:border-b-2 border-hist-beige group">
            <Link to="/hist-academy" className="!px-4 !py-2 flex items-center">
              HIST Academy
            </Link>
            <ul className="absolute text-xl top-full left-0 w-full bg-hist-green text-white font-light shadow-lg overflow-hidden transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible">
              <li className="hover:bg-hist-green-effect hover:text-hist-beige hover:border-b-2 border-hist-beige !px-4 !py-3 transition-colors duration-200">
                <HashLink
                  to="/hist-academy#presentation"
                  className="block"
                  smooth
                >
                  Presentation
                </HashLink>
              </li>
              <li className="hover:bg-hist-green-effect hover:text-hist-beige hover:border-b-2 border-hist-beige !px-4 !py-3 transition-colors duration-200">
                <HashLink
                  to="/hist-academy#nos-programs"
                  className="block"
                  smooth
                >
                  Nos Programmes
                </HashLink>
              </li>
              <li className="hover:bg-hist-green-effect hover:text-hist-beige hover:border-b-2 border-hist-beige !px-4 !py-3 transition-colors duration-200">
                <HashLink
                  to="/hist-academy#espace-etudiant"
                  className="block"
                  smooth
                >
                  Espace Etudiant
                </HashLink>
              </li>
              <li className="hover:bg-hist-green-effect hover:text-hist-beige hover:border-b-2 border-hist-beige !px-4 !py-3 transition-colors duration-200">
                <Link to="/admission" className="block">
                  Admission
                </Link>
              </li>
            </ul>
          </li>
          <li className="flex justify-center flex-1 items-center h-full hover:font-medium hover:bg-hist-green-effect hover:text-hist-beige hover:border-b-2 border-hist-beige">
            <Link to="/cec" className="!px-4 !py-2 flex items-center">
              CEC
            </Link>
          </li>
          <li className="flex justify-center flex-1 items-center h-full hover:font-medium hover:bg-hist-green-effect hover:text-hist-beige hover:border-b-2 border-hist-beige">
            <Link to="/hrp" className="!px-4 !py-2 flex items-center">
              HRP
            </Link>
          </li>
        </ul>

        {/* Centered Logo */}
        <div className="absolute top-0 w-1/4 flex items-center justify-center left-1/2 transform -translate-x-1/2">
          <img
            src={LogoBg}
            alt="Logo Background"
            className="absolute -top-4 w-full"
          />
          <Link to="/" className="relative w-4/6 z-10">
            <img src={Logo} alt="HIST Logo" />
          </Link>
        </div>

        {/* Right Nav */}
        <ul className="flex justify-around w-1/3 max-w-3/8 flex-1 space-x-4 h-full !pr-10 !pl-2">
          <li className="flex justify-center flex-1 items-center h-full hover:font-medium hover:bg-hist-green-effect hover:text-hist-beige hover:border-b-2 border-hist-beige">
            <Link
              to="/communaute-educative-et-professionelle"
              className="!px-4 !py-2 flex items-center"
            >
              COMMUNAUTE EDUCATIVE
            </Link>
          </li>
          <li className="flex justify-center !px-5 items-center h-full hover:font-medium hover:bg-hist-green-effect hover:text-hist-beige hover:border-b-2 border-hist-beige">
            <HashLink
              to="#contact"
              className="!px-4 !py-2 flex items-center"
              smooth
            >
              CONTACT US
            </HashLink>
          </li>
        </ul>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden flex items-center justify-between h-full !px-4">
        {/* Hamburger Icon */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="z-50"
        >
          {mobileMenuOpen ? (
            <X className="w-8 h-8" />
          ) : (
            <Menu className="w-8 h-8" />
          )}
        </button>

        {/* Centered Logo */}
        <div className="z-50 absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
          <div className="absolute w-28 h-28 bg-white rounded-b-full drop-shadow-2xl"></div>

          <img
            src={LogoMobile}
            alt="HIST Logo"
            className="relative w-full h-full z-10"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-hist-green text-white text-xl font-light !p-4 space-y-4 z-40">
          <div>
            <Link to="/" className="block !py-4 hover:text-hist-beige">
              Home
            </Link>
            <button
              onClick={() => setShowHistSubMenu(!showHistSubMenu)}
              className="w-full !py-4 text-left font-medium hover:text-hist-beige flex items-center justify-between"
            >
              <span>HIST Academy</span>
              {showHistSubMenu ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
            {showHistSubMenu && (
              <ul className="!pl-4 space-y-2">
                <li>
                  <HashLink
                    to="/hist-academy#presentation"
                    className="block !py-2 hover:text-hist-beige"
                    smooth
                  >
                    Presentation
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    to="/hist-academy#nos-programs"
                    className="block !py-2 hover:text-hist-beige"
                    smooth
                  >
                    Nos Programmes
                  </HashLink>
                </li>
                <li>
                  <HashLink
                    to="/hist-academy#espace-etudiant"
                    className="block !py-2 hover:text-hist-beige"
                    smooth
                  >
                    Espace Etudiant
                  </HashLink>
                </li>
                <li>
                  <Link
                    to="/admission"
                    className="block !py-2 hover:text-hist-beige"
                  >
                    Admission
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <Link to="/cec" className="block !py-4 hover:text-hist-beige">
            CEC
          </Link>
          <Link to="/hrp" className="block !py-4 hover:text-hist-beige">
            HRP
          </Link>
          <Link
            to="/communaute-educative-et-professionelle"
            className="block !py-4 hover:text-hist-beige"
          >
            COMMUNAUTE EDUCATIVE
          </Link>
          <HashLink
            to="#contact"
            className="block !py-4 hover:text-hist-beige"
            smooth
          >
            CONTACT US
          </HashLink>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

import React, { useContext, useState } from "react";
import darkModeIcon from "../assets/images/darkModeIcon.png";
import lightModeIcon from "../assets/images/lightModeIcon.png";
import darkHamburger from "../assets/images/darkHamburger.png";
import closeLight from "../assets/images/closeLight.png";
import closeDark from "../assets/images/closeDark.png";
import lightHamburger from "../assets/images/lightHamburger.png";
import logo from "../assets/images/logo.png";
import { ThemeContext, ToggleThemeContext } from "../App";

const NavBar = () => {
  const theme = useContext(ThemeContext);
  const toggleTheme = useContext(ToggleThemeContext);
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 flex items-center justify-between lg:h-[120px] md:h-[96px] sm:h-[72px] lg:px-[112px] md:px-[80px] sm:px-[24px] w-screen shadow-custom z-10 ${
          theme === "dark"
            ? `bg-gradient-to-r from-[rgba(2,20,40)] to-[rgba(0,0,0)]`
            : `bg-bgWhite`
        }`}
      >
        {/* logo */}
        <div className="cursor-pointer">
          <img
            src={logo}
            alt="logo-png"
            className="lg:w-[104px] sm:w-[80px] h-auto"
          />
        </div>
        {/* left-side */}
        <div className="flex gap-[124px]">
          {/* links */}
          <div className="lg:flex md:hidden sm:hidden lg:gap-[72px] md:gap-[60px] items-center">
            <p className="text-primary font-bold text-[20px] cursor-pointer">
              Home
            </p>
            <p className="text-subtleGrey font-normal text-[20px] cursor-pointer">
              About
            </p>
            <p className="text-subtleGrey font-normal text-[20px] cursor-pointer">
              Blog
            </p>
            <p className="text-subtleGrey font-normal text-[20px] cursor-pointer">
              Contact
            </p>
          </div>
          {/* buttons */}
          <div className="lg:flex md:flex sm:hidden gap-[48px] items-center">
            <button className="px-[30px] py-[15px] bg-[rgba(247,91,49,0.25)] rounded-[8px] text-primary">
              Sign Up
            </button>
            <div onClick={() => toggleTheme()} className="cursor-pointer">
              <img
                src={theme === "dark" ? lightModeIcon : darkModeIcon}
                alt="website-theme-png"
              />
            </div>
          </div>
          {/* mobile stuff */}
          <div className="lg:hidden md:hidden sm:flex sm:gap-[20px] sm:items-center">
            <div onClick={() => toggleTheme()} className="cursor-pointer">
              <img
                src={theme === "dark" ? lightModeIcon : darkModeIcon}
                alt="website-theme-png"
              />
            </div>
            <div onClick={() => setNavOpen(true)}>
              <img
                src={theme === "dark" ? darkHamburger : lightHamburger}
                alt="hamburger-menu"
              />
            </div>
          </div>
          {/* mobile navigation */}
          {navOpen ? (
            <div
              className={`lg:hidden md:hidden sm:flex sm:flex-col sm:absolute sm:top-0 sm:left-0 sm:h-screen sm:w-screen transition-transform duration-500 ease-in ${
                theme === "dark" ? `sm:bg-bgDark` : `sm:bg-bgWhite`
              }`}
            >
              <div
                className="w-screen flex justify-end px-[24px] h-[72px] items-center"
                onClick={() => setNavOpen(false)}
              >
                <img
                  src={theme === "dark" ? closeDark : closeLight}
                  alt="hamburger-menu"
                />
              </div>
              <div className="lg:hidden md:hidden sm:flex sm:flex-col sm:items-center sm:justify-center sm:h-full sm:gap-12">
                <p className="text-primary font-bold text-[18px] cursor-pointer">
                  Home
                </p>
                <p className="text-subtleGrey font-normal text-[18px] cursor-pointer">
                  About
                </p>
                <p className="text-subtleGrey font-normal text-[18px] cursor-pointer">
                  Blog
                </p>
                <p className="text-subtleGrey font-normal text-[18px] cursor-pointer">
                  Contact
                </p>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavBar;

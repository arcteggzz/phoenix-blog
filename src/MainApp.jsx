import React, { useContext } from "react";
import NavBar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import { ThemeContext } from "./App";

const MainApp = () => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <div
        className={`w-screen max-w-full flex flex-col items-center min-h-screen ${
          theme === "dark" ? `bg-bgDark` : `bg-bgWhite`
        }`}
      >
        <div
          className={`w-screen shadow-custom z-10 ${
            theme === "dark"
              ? `bg-gradient-to-r from-[rgba(2,20,40,0.6)] to-[rgba(0, 0, 0, 0.4)]`
              : `bg-bgWhite`
          }`}
        >
          <div className="xl:w-[1440px] lg:w-[90vh] md:w-[920px] sm:w-screen mx-auto">
            <NavBar />
          </div>
        </div>
        <div
          className={`xl:w-[1440px] lg:w-[90vh] md:w-[920px] sm:w-screen mx-auto`}
        >
          <HeroSection />
        </div>
      </div>
    </>
  );
};

export default MainApp;

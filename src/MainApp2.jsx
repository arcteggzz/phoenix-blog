import React, { useContext } from "react";
import NavBar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import { ThemeContext } from "./App";

const MainApp = () => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <div
        className={`flex flex-col items-center min-h-screen overflow-x-hidden	${
          theme === "dark" ? `bg-bgDark` : `bg-bgWhite`
        }`}
      >
        <NavBar />
        <HeroSection />
      </div>
    </>
  );
};

export default MainApp;

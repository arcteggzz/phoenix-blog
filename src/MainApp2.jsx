import React, { useContext } from "react";
import NavBar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import PhoenixBlog from "./Components/PhoenixBlog";
import PhoenixFeature from "./Components/PhoenixFeature";
import { ThemeContext } from "./App";

import section3A2 from "./assets/images/section3A2.png";
import section3B2 from "./assets/images/section3B2.png";
import section3C from "./assets/images/section3C.png";

const MainApp = () => {
  const theme = useContext(ThemeContext);
  const featuresData = [
    {
      order: 0,
      headerText: "Gain Access to Top Web3 Articles",
      paragraphText:
        "Get the chance to save the writings of your favorite writers, sign up for their newsletters, and follow other individuals who share your interests. Personalize your feeds, collaborate with friends onmaterial, and learn more about various topics.",
      buttonText: "Read Articles",
      image: section3A2,
    },
    {
      order: 1,
      headerText: "Gain Income from Publisized Articles",
      paragraphText:
        "The website is powered by the Ethereum blockchain and allows authors to earn cryptocurrency. It allows for writers to convert their blog entries, tales, poems, and so on into crowd-funded NFTs that can then be sold repeatedly.",
      buttonText: "Start Writing",
      image: section3B2,
    },
    {
      order: 0,
      headerText: "Collaborate with fellow Creators",
      paragraphText:
        "Interact with fellow creators and produce engaging content. Meet creators who are enthusiastic in blockchain and other Web3 components. Send out newsletters and gather any works that catch your attention.",
      buttonText: "Start Writing",
      image: section3C,
    },
  ];

  return (
    <>
      <div
        className={`flex flex-col items-center min-h-screen overflow-x-hidden	${
          theme === "dark" ? `bg-bgDark` : `bg-bgWhite`
        }`}
      >
        <NavBar />
        <HeroSection />
        <PhoenixBlog />
        <div className="flex flex-col w-full items-center justify-center">
          <PhoenixFeature features={featuresData[0]} />
          <PhoenixFeature features={featuresData[1]} />
          <PhoenixFeature features={featuresData[2]} />
        </div>
      </div>
    </>
  );
};

export default MainApp;

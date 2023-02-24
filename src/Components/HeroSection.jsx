import React, { useContext } from "react";
import heroDark from "../assets/images/heroDark.png";
import heroLight from "../assets/images/heroLight.png";
import { ThemeContext } from "../App";

const HeroSection = () => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <div className="lg:pl-[112px] md:pl-[80px] lg:pr-0 md:pr-0 sm:px-[24px] py-[64px] flex md:flex-row sm:flex-col md:justify-between lg:pt-[120px] md:pt-[96px] sm:pt-[144px]">
        {/* left */}
        <section className="md:text-left sm:text-center lg:pt-[110px] md:pt-[80px] sm:pt-[10px]">
          <h1
            className={`font-medium font-gupter lg:text-[96px] md:text-[64px] sm:text-[56px] lg:w-[580px] md:w-[400px] lg:leading-[115px] md:leading-[84px] sm:leading-[68px] ${
              theme === "dark" ? `text-bgWhite` : `text-lighterGrey`
            }`}
          >
            A hub for <span className="text-primary">Web3</span> Publishing.
          </h1>
          <h2 className="text-subtleGrey font-normal lg:text-[24px] md:text-[22px] sm:text-[18px] mt-[24px] lg:w-[627px] md:w-[420px] lg:leading-[50px] md:leading-[30px] font-ptSans">
            Phoenix’s robust publishing platform pushes the boundaries of
            writing online. As a secured and open-source writing platform, it
            helps iilluminate your web3 journey with stories and experiences.
          </h2>
          <button className="md:px-[56px] sm:px-[28px] md:py-[22px] sm:py-[14px] bg-primary rounded-[8px] text-bgWhite text-[24px] mt-[40px] font-bold font-ptSans">
            Get Started
          </button>
        </section>
        {/* right */}
        <section className="">
          <img src={theme === "dark" ? heroDark : heroLight} alt="hero-image" />
        </section>
      </div>
    </>
  );
};

export default HeroSection;

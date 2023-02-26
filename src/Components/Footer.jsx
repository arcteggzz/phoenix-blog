import React, { useContext } from "react";
import logo from "../assets/images/logo.png";
import githubDark from "../assets/images/githubDark.png";
import githubLight from "../assets/images/githubLight.png";
import instagram from "../assets/images/instagram.png";
import twitter from "../assets/images/twitter.png";
import FooterFeatures from "./FooterFeatures";
import Social from "./Social";

import { ThemeContext } from "../App";

const Footer = () => {
  const theme = useContext(ThemeContext);
  const footerFeatures = [
    {
      header: "Product",
      body1: "Blog",
      body2: "Support",
      body3: "Feedback",
      body4: "Privacy Policy",
    },
    {
      header: "Use Phoenix",
      body1: "Phoenix Wallet",
      body2: "Phoenix Bridge",
      body3: "Phoenix Staking",
      body4: "Phoenix Ecosystem",
    },
    {
      header: "Initiatives",
      body1: "Resources",
      body2: "Newsletters",
      body3: "Sustainability",
      body4: "Advocate program",
    },
  ];
  const social = [
    {
      text: "Twitter",
      image: twitter,
    },
    {
      text: "Github",
      image: theme === "dark" ? githubDark : githubLight,
    },
    {
      text: "Instagram",
      image: instagram,
    },
  ];

  return (
    <>
      <div className="lg:px-[112px] md:px-[80px] sm:px-[24px] lg:pt-[100px] md:pt-[140px] sm:pt-[100px] text-center flex flex-col gap-[43px]">
        <div className="flex md:flex-row sm:flex-col sm:gap-[48px] md:justify-between sm:justify-start">
          {/* logo */}
          <div className="cursor-pointer">
            <img
              src={logo}
              alt="logo-png"
              className="lg:w-[104px] sm:w-[80px] h-auto"
            />
          </div>
          {/* features */}
          <div className="md:flex md:gap-[120px] sm:grid sm:grid-cols-2 sm:gap-[48px]">
            <FooterFeatures footerFeatures={footerFeatures[0]} />
            <FooterFeatures footerFeatures={footerFeatures[1]} />
            <FooterFeatures footerFeatures={footerFeatures[2]} />
          </div>
          {/* connect */}
          <div className="flex flex-col gap-[24px] sm:text-left">
            <h2
              className={`text-[20px] font-bold ${
                theme === "dark" ? `text-bgWhite` : `text-lighterGrey`
              }`}
            >
              Connect
            </h2>
            <div className="flex flex-col gap-[20px]">
              <Social social={social[0]} />
              <Social social={social[1]} />
              <Social social={social[2]} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

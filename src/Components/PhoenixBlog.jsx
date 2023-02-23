import React, { useContext } from "react";
import section2Dark from "../assets/images/section2Dark.png";
import section2Light from "../assets/images/section2Light.png";
import { ThemeContext } from "../App";

const PhoenixBlog = () => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <div className="lg:px-[112px] md:px-[80px] sm:px-[24px] lg:py-[160px] md:py-[140px] sm:py-[100px] text-center">
        <img src={theme === "dark" ? section2Dark : section2Light} alt="" />
      </div>
    </>
  );
};

export default PhoenixBlog;

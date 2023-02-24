import React, { useContext } from "react";

import { ThemeContext } from "../App";

const PhoenixFeature = ({ features }) => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <div
        className={`w-full text-center lg:px-[112px] md:px-[80px] sm:px-[24px] lg:py-[80px] md:py-[60px] sm:py-[72px] flex sm:flex-col-reverse sm:gap-[40px] md:justify-between sm:text-center md:gap-[126px] ${
          features.order ? `md:flex-row-reverse` : `md:flex-row`
        }`}
      >
        <img
          src={features.image}
          alt=""
          className="lg:w-[40vw] md:w-[40vw] sm:w-[75vw] h-auto"
        />

        <section className="md:text-left sm:text-center">
          <h2
            className={`font-bold font-gupter lg:text-[48px] md:text-[32px] sm:text-[28px] lg:w-[470px] md:w-[300px] lg:leading-[58px] md:leading-[40px] sm:leading-[32px] ${
              theme === "dark" ? `text-bgWhite` : `text-lighterGrey`
            }`}
          >
            {features.headerText}
          </h2>
          <h3 className="text-subtleGrey font-normal lg:text-[18px] md:text-[16px] sm:text-[16px] mt-[24px] lg:w-[470px] md:w-[300px] lg:leading-[31px] md:leading-[24px]">
            {features.paragraphText}
          </h3>
          <button className="md:px-[24px] sm:px-[16px] md:py-[12px] sm:py-[8px] bg-[rgba(247,91,49,0.25)] rounded-[8px] text-primary mt-[40px] font-bold font-ptSans border-2 border-primary">
            {features.buttonText}
          </button>
        </section>
      </div>
    </>
  );
};

export default PhoenixFeature;

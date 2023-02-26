import React, { useContext } from "react";
import { ThemeContext } from "../App";

const ContactUs = () => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <div
        className={`flex flex-col items-center lg:px-[112px] md:px-[80px] sm:px-[24px] lg:py-[120px] md:py-[80px] sm:py-[80px] lg:mt-[100px] sm:mt-[80px] text-center ${
          theme === "dark"
            ? `border-y-[1px] border-y-[#181919]`
            : `border-y-[1px] border-y-[#F3F3F3]`
        }`}
      >
        <h2
          className={`font-bold font-gupter lg:text-[24px] md:text-[24px] sm:text-[22px] lg:w-[900px] md:w-[600px] lg:leading-[28px] md:leading-[20px] sm:leading-[24px] ${
            theme === "dark" ? `text-bgWhite` : `text-lighterGrey`
          }`}
        >
          Would you like to get weekly updates from us? Kindly subscribe to our
          newsletters?
        </h2>
        <input
          type="email"
          name=""
          id=""
          className={`block md:px-[20px] sm:px-[20px] md:py-[15px] sm:py-[14px] rounded-[8px] text-subtleGrey mt-[64px] font-normal font-ptSans ${
            theme === "dark"
              ? `bg-bgDark border-bgWhite`
              : `bg-bgWhite border-bgDark`
          } border-[0.5px] md:w-[400px] sm:w-[80vw]`}
          placeholder="Email"
        />
        <button className="md:px-[30px] sm:px-[20px] md:py-[15px] sm:py-[14px] bg-primary rounded-[8px] text-bgWhite mt-[47px] font-bold font-ptSans">
          Subscribe
        </button>
      </div>
    </>
  );
};

export default ContactUs;

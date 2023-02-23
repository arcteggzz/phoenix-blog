import React, { useContext } from "react";
import { ThemeContext } from "../App";

const Social = ({ social }) => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <div className="flex gap-[10px] text-left">
        <img src={social.image} alt="" />
        <h3
          className={`text-[16px] font-normal ${
            theme === "dark" ? `text-bgWhite` : `text-lighterGrey`
          }`}
        >
          {social.text}
        </h3>
      </div>
    </>
  );
};

export default Social;

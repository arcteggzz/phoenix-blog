import React, { useContext } from "react";

import { ThemeContext } from "../App";

const FooterFeatures = ({ footerFeatures }) => {
  const theme = useContext(ThemeContext);
  const pStyle = `text-[16px] font-normal ${
    theme === "dark" ? `text-bgWhite` : `text-lighterGrey`
  }`;
  return (
    <>
      <div className="flex flex-col gap-[24px] text-left">
        <h3
          className={`text-[20px] font-bold ${
            theme === "dark" ? `text-bgWhite` : `text-lighterGrey`
          }`}
        >
          {footerFeatures.header}
        </h3>
        <div className="flex flex-col gap-[22px]">
          <p className={pStyle}>{footerFeatures.body1}</p>
          <p className={pStyle}>{footerFeatures.body2}</p>
          <p className={pStyle}>{footerFeatures.body3}</p>
          <p className={pStyle}>{footerFeatures.body4}</p>
        </div>
      </div>
    </>
  );
};

export default FooterFeatures;

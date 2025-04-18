import React from "react";
import brandTagBlack from "../assets/brand-with-tagline-x.png";
import brandTagWhite from "../assets/brand-with-tagline.png";
import "../css/Logo.css";

function Logo() {
  const isDarkTheme = window.matchMedia("prefers-color-scheme:dark");
  return (
    <div className="w-auto">
      {/* <img src={brandLogo} alt="" className="img-fluid brand-logo" /> */}
      <img
        src={isDarkTheme ? brandTagBlack : brandTagWhite}
        alt=""
        className="brand-name img-fluid mx-2 brand-tagline"
      />
    </div>
  );
}

export default Logo;

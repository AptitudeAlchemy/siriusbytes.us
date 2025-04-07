import React from "react";
import brandTagline from "../assets/brand-with-tagline-x.png";
import "../css/Logo.css";

function Logo() {
  return (
    <div className="d-flex justify-content-start align-items-center">
      {/* <img src={brandLogo} alt="" className="img-fluid brand-logo" /> */}
      <img
        src={brandTagline}
        alt=""
        className="brand-name img-fluid mx-2 brand-tagline"
      />
    </div>
  );
}

export default Logo;

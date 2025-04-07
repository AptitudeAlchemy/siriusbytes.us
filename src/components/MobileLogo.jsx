import React from "react";
import brandLogo from "../assets/brand-with-tagline-x.png";


function MobileLogo() {
  return (
    <>

      <img
        src={brandLogo}
        alt=""
        className="brand-logo img-fluid"
        width={128}
      />
    </>
  );
}

export default MobileLogo;

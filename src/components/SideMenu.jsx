import React from "react";
import "../css/SideMenu.css";
import Nav from "./MobileNav";
import MobileLogo from "./MobileLogo";

function SideMenu() {
  const navLinks = [
    {
      _id: 0,
      title: "services",
      route: "services",
    },
    {
      _id: 1,
      title: "projects",
      route: "projects",
    },
    {
      _id: 2,
      title: "contact me",
      route: "contact-me",
    },
    {
      _id: 4,
      title: "terms & conditions",
      route: "terms-and-conditions",
    },
  ];

  return (
    <div className="SideMenu px-4 bg-light pt-5">
      <div className="d-flex justify-content-center align-items-start flex-column">
        {/* <div className="d-flex justify-content-center align-items-center">
          <img
            src={brandIcon}
            alt=""
            className="me-4 brand-logo img-fluid"
            width={48}
          />
        <MobileLogo />
        </div> */}
        <Nav navLinks={navLinks} />
        <span
          className="text-uppercase align-self-center"
          style={{ fontSize: "14px", fontFamily: "poppins-regular" }}
        >
          Made by <span style={{fontFamily:'poppins-semibold'}}>Madhan</span> with{" "}
          <i className="fas fa-heart text-danger"></i>
        </span>
      </div>
    </div>
  );
}

export default SideMenu;

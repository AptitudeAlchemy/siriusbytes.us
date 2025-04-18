import React, { useContext, useEffect, useState } from "react";
import "../css/SideMenu.css";
import Nav from "./MobileNav";
import { appContext } from "../AppContext";

function SideMenu() {
  const context = useContext(appContext);

  const navLinks = [
    {
      _id: 0,
      title: "home",
      route: "/siriusbytes.us/",
    },
    {
      _id: 1,
      title: "services",
      route: "services",
    },
    {
      _id: 2,
      title: "projects",
      route: "projects",
    },
    {
      _id: 3,
      title: "contact me",
      route: "#contact-me",
    },
    {
      _id: 4,
      title: "terms & conditions",
      route: "terms-and-conditions",
    },
  ];

  return context.isExpanded ? (
    <div className="SideMenu px-4 bg-light pt-5">
      <div className="d-flex justify-content-center align-items-start flex-column">
        <Nav navLinks={navLinks} />
        <span
          className="text-uppercase align-self-center"
          style={{ fontSize: "14px", fontFamily: "poppins-regular" }}
        >
          Made by <span style={{ fontFamily: "poppins-semibold" }}>Madhan</span>{" "}
          with <i className="fas fa-heart text-danger"></i>
        </span>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default SideMenu;

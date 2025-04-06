import React from "react";
import brandLogo from "/favicon.png";
import brandTagline from "../assets/brand-with-tagline-x.png";

import "../css/Header.css";
import DropHeaderSection from "./DropHeaderSection";

function Header() {
  const navLinks = [
    { _id: 0, title: "our services", route: "our-services" },
    { _id: 1, title: "projects", route: "projects" },
    { _id: 2, title: "contact me", route: "contact-me" },
    { _id: 4, title: "terms & conditions", route: "terms-and-conditions" },
  ];

  return (
    <>
      <header className="Header container-fluid px-0 mx-0 w-100 h-100 py-3 d-flex justify-content-start align-items-start">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-start align-items-center">
            {/* <img src={brandLogo} alt="" className="img-fluid brand-logo" /> */}
            <img
              src={brandTagline}
              alt=""
              className="brand-name img-fluid mx-2 brand-tagline"
            />
          </div>
          <nav className="d-flex justify-content-center align-items-center bg-transparent">
            {navLinks.map((link) => (
              <a
                key={link._id}
                href={`#${link.route}`}
                className="mx-4 text-secondary"
              >
                {link.title}
              </a>
            ))}
          </nav>

          {/* <button className="btn-grad">Get started</button> */}
          <button className="btn text-dark">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </header>
      {/* <DropHeaderSection></DropHeaderSection> */}
    </>
  );
}

export default Header;

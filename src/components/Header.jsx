import React from "react";

import "../css/Header.css";
import Nav from "./Nav";
import TopSearchBar from "./TopSearchBar";
import Logo from "./Logo";

function Header() {
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
      title: "contact us",
      route: "contact-us",
    },
    {
      _id: 4,
      title: "terms & conditions",
      route: "terms-and-conditions",
    },
  ];
  return (
    <>
      <header className="Header container-fluid px-0 mx-0 w-100 h-100 py-3 d-flex justify-content-start align-items-start f-brand">
        <div className="container d-flex justify-content-between align-items-center">
          <Logo />

          <Nav navLinks={navLinks} />

          {/* <button className="btn-grad">Get started</button> */}
          <TopSearchBar />
        </div>
      </header>
    </>
  );
}

export default Header;

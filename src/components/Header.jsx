import React from "react";

import "../css/Header.css";
import Nav from "./Nav";
import TopSearchBar from "./TopSearchBar";
import Logo from "./Logo";

function Header() {
  const currentRoute = location.pathname;

  const navLinks = [
    {
      _id: 0,
      title: "home",
      route: "/",
    },
    {
      _id: 1,
      title: "projects",
      route: "projects",
    },
    {
      _id: 2,
      title: "services",
      route: currentRoute.split("/")[2] == "" ? "#services" : "services",
    },
    {
      _id: 4,
      title: "contact us",
      route: "#contact-us",
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

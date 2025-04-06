import React from "react";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import SideMenu from "../components/SideMenu";

function HomePage() {
  const screenWidth = window.screen.width;

  return (
    <>
      <section
        className="container-fluid w-auto m-0 p-0"
        style={{ overflowX: "hidden" }}
      >
        <span className="particle-grad-sm-r particle-grad"></span>
        <span
          className="particle-grad-rg-l particle-grad"
          // style={{ top: "25%" }}
        ></span>
        <div className="container-fluid">
          {screenWidth >= 1080 ? <Header /> : <MobileHeader />}
          {screenWidth < 1080 ? <SideMenu /> : <></>}
          {/* <DropHeaderSection /> */}
        </div>
      </section>
    </>
  );
}

export default HomePage;

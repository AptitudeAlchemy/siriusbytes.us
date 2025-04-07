import React from "react";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import SideMenu from "../components/SideMenu";
import HeroContainer from "../components/HeroContainer";

function HomePage() {
  const screenWidth = window.screen.width;

  return (
    <>
      <section
        className="container-fluid w-auto m-0 p-0"
        style={{ overflowX: "hidden" }}
      >
        <div className="container-fluid">
          {screenWidth >= 1080 ? <Header /> : <MobileHeader />}
          {screenWidth < 1080 ? <SideMenu /> : <></>}

          <HeroContainer />
        </div>
      </section>
    </>
  );
}

export default HomePage;

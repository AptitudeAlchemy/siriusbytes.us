import React from "react";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import SideMenu from "../components/SideMenu";
import HeroContainer from "../components/HeroContainer";
import ScrollDown from "../components/ScrollDown";
import Services from "../components/Services";

function HomePage() {
  const screenWidth = window.screen.width;

  return (
    <>
      <section
        className="container-fluid w-auto m-0 p-0"
        style={{ overflowX: "hidden", background: "var(--white-glass)" }}
      >
        <div className="container-fluid">
          {screenWidth >= 1080 ? <Header /> : <MobileHeader />}
          {screenWidth < 1080 ? <SideMenu /> : <></>}
          <HeroContainer></HeroContainer>
          {screenWidth >= 1080 ? <ScrollDown></ScrollDown> : <></>}
          <Services></Services>
        </div>
      </section>
    </>
  );
}

export default HomePage;

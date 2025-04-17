import React from "react";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import SideMenu from "../components/SideMenu";
import HeroContainer from "../components/HeroContainer";
import ScrollDown from "../components/ScrollDown";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Faqs from "../components/Faqs";

function HomePage() {
  const screenWidth = window.screen.width;

  return (
    <>
      <section
        className="container-fluid w-auto m-0 p-0"
        style={{ overflowX: "hidden" }}
      >
        <div className="container-fluid">
          <HeroContainer></HeroContainer>
          {screenWidth >= 1080 ? <ScrollDown></ScrollDown> : <></>}
          <Services></Services>
          <Faqs></Faqs>
        </div>
      </section>
    </>
  );
}

export default HomePage;

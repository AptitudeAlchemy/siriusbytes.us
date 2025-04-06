import React from "react";
import Header from "../components/Header";
import DropHeaderSection from "../components/DropHeaderSection";
import backgroundVideo from "../videos/hero-video.mp4";

function HomePage() {
  const screenWidth = window.screen.availWidth;

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
          <Header />
          {/* <DropHeaderSection /> */}
        </div>
      </section>
    </>
  );
}

export default HomePage;

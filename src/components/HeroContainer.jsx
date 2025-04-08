import React from "react";
import heroImage from "../assets/svgs/hero.svg";
import "../css/HeroContainer.css";
import AngleRightButton from "./AngleRightButton";

function HeroContainer() {
  return (
    <div
      className="HeroContainer container-fluid px-3 d-flex justify-content-center h-100"
      style={{
        // background: "var(--white-glass)",
        minHeight: "calc(100vh - 30vh)",
      }}
    >
      <div className="container pt-5 w-100 ">
        <div className="row w-100 mx-0">
          <div
            className={`w-100 col pt-5 d-flex justify-content-center align-items-${
              screen.width < 1080 ? "center" : "start"
            } flex-column`}
          >
            <div className="hero-description">
              <h2 className="h2 fw-bold text-uppercase">
                Innovating at the Speed of Light{" "}
                <i className="fas fa-rocket"></i>
              </h2>
              <h5 className="h5 my-5">
                At SiriusBytes, I build future-forward tech solutions that
                empower businesses to scale smarter, move faster, and stay ahead
                in an ever-evolving digital world.
              </h5>
            </div>
            <AngleRightButton
              title={"contact me"}
              route={"contact-me"}
            ></AngleRightButton>
            {/* <div className="row w-100 d-flex justify-content-between align-items-center">
              <div className="col w-100">
                
              </div>
            </div> */}
          </div>
          <img
            src={heroImage}
            alt=""
            className={`col-sm img-fluid ${
              screen.width < 1080 ? "mt-5" : "mt-0"
            }`}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroContainer;

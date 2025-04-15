import React from "react";
import heroImage from "../assets/svgs/hero.svg";
import "../css/HeroContainer.css";
import Button from "./Button";

function HeroContainer() {
  return (
    <section
      className="HeroContainer container-fluid px-3 d-flex justify-content-center h-100 f-brand"
      style={{
        // background: "var(--white-glass)",
        minHeight: "calc(100vh - 30vh)",
      }}
    >
      <div className="container pt-5 w-100 ">
        <div className="row w-100 mx-0">
          <div
            className={`col pt-5 d-flex justify-content-center align-items-${
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

            <Button
              title={"contact me"}
              route={"contact-me"}
              icon={"phone"}
            ></Button>
            <span className="text-secondary f-small">
              Are you a student looking for affordable projects?&nbsp;
              <a href="#" className="link">
                see here.
              </a>
            </span>
          </div>
          <img
            src={heroImage}
            alt=""
            className={`w-50 col img-fluid ${
              screen.width < 1080 ? "mt-5 pb-5" : "mt-0"
            }`}
          />
        </div>
      </div>
    </section>
  );
}

export default HeroContainer;

import React from "react";
import heroImage from "../assets/svgs/hero.webp";
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
          <div className="hero-description-column col pt-5 ">
            <div className="hero-description d-grid place-items-center">
              <h2 className="h2 fw-bold text-uppercase">
                Innovating at the Speed of Light{" "}
                <i className="fas fa-rocket"></i>
              </h2>
              <h5 className="h5 my-5 f-poppins-semibold">
                At <strong>Sirius Bytes</strong>, We build future-forward tech
                solutions that empower businesses to scale smarter, move faster,
                and stay ahead in an ever-evolving digital world.
              </h5>

              <Button
                _id={0}
                title={"get started"}
                route={"get-started"}
                icon={"rocket"}
              ></Button>
              <br />
              <span className="text-dark f-small">
                Are you a student looking for affordable projects?&nbsp;
                <a href="#" className="link">
                  see here.
                </a>
              </span>
            </div>
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

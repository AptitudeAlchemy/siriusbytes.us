import React from "react";
import heroImage from "../assets/svgs/hero.svg";
import "../css/HeroContainer.css";

function HeroContainer() {
  return (
    <div
      className="HeroContainer container-fluid px-3 d-flex justify-content-center"
      style={{
        background: "var(--white-glass)",
        minHeight: "calc(100vh - 5rem)",
      }}
    >
      <div className="container py-5 w-100 ">
        <div className="row w-100">
          <div className="col-sm pt-5 d-flex justify-content-around align-items-center flex-column">
            <div className="hero-description">
              <h2 className="h2">
                Innovating at the Speed of Light{" "}
                <i className="fas fa-rocket"></i>
              </h2>
              <h5 className="h5 my-5">
                At SiriusBytes, we build future-forward tech solutions that
                empower businesses to scale smarter, move faster, and stay ahead
                in an ever-evolving digital world.
              </h5>
            </div>
            <div className="row w-100 d-flex justify-content-between align-items-center">
              <div className="col-sm link-bg">
                <a
                  href="#"
                  className="btn text-light w-100"
                  style={{ background: "var(--brand-primary)" }}
                >
                  <span className="me-2">Contact Us</span>
                  <i className="fas fa-angle-right"></i>
                </a>
              </div>
              <div className="col-sm link-bg">
                <a
                  href="#"
                  className=" btn text-light w-100"
                  style={{ background: "var(--brand-primary)" }}
                >
                  <span className="me-2">Explore</span>
                  <i className="fas fa-angle-right"></i>
                </a>
              </div>
            </div>
          </div>
          <img src={heroImage} alt="" className="col-sm img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default HeroContainer;

import React from "react";
import brandLogo from "../assets/brand-with-tagline-x.png";

function MobileHeader() {
  const styles = {
    header: {
      position: "fixed",
      top: "0",
      left: "0",
      background: "var(--white-glass)",
    },
  };

  return (
    <>
      <header className="container-fluid" style={styles.header}>
        <div className="container p-4 px-4 d-flex justify-content-between align-items-center">
          <img
            src={brandLogo}
            alt=""
            className="brand-logo img-fluid"
            width={128}
          />
          <a onClick={toggleMenu} className="toggle-btn p-2 btn text-dark">
            <i
              className="fas fa-bars side-menu-opener"
              style={{ fontSize: "1.5rem" }}
            ></i>
          </a>
        </div>
      </header>
    </>
  );
}

export default MobileHeader;

import React from "react";
import brandLogo from "../assets/brand-with-tagline-x.png";
import MobileLogo from "./MobileLogo";

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
          <MobileLogo />
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

let isToggled = false;

function toggleMenu() {
  const sidemenu = document.querySelector(".SideMenu");
  if (!isToggled) {
    sidemenu.style.display = "block";
  } else sidemenu.style.display = "none";

  changeToggleIcon();
  isToggled = !isToggled;
}

function changeToggleIcon() {
  const iconElement = document.querySelector(".side-menu-opener");
  const classes = iconElement.classList;

  if (classes.contains("fa-xmark")) {
    classes.replace("fa-xmark", "fa-bars");
  } else if (classes.contains("fa-bars")) {
    classes.replace("fa-bars", "fa-xmark");
  }
}

window.onscroll = (e) => {
  const sidemenu = document.querySelector(".SideMenu");
  sidemenu.style.display = "none";
  if (isToggled) changeToggleIcon();
  isToggled = false;
};

export default MobileHeader;

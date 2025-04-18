import React, { useContext } from "react";
import MobileLogo from "./MobileLogo";

import { appContext } from "../AppContext";

function MobileHeader() {
  const context = useContext(appContext);

  const styles = {
    header: {
      position: "fixed",
      top: "0",
      left: "0",
      background: "var(--white-glass)",
      zIndex: 1000,
    },
  };

  return (
    <>
      <header className="container-fluid" style={styles.header}>
        <div className="container p-4 px-4 d-flex justify-content-between align-items-center">
          <MobileLogo />
          <a
            className="toggle-btn p-2 text-dark"
            onClick={context.setIsExpanded}
          >
            <i
              className={`fas fa-${
                context.isExpanded ? "xmark" : "bars"
              } side-menu-opener`}
              style={{ fontSize: "1.5rem" }}
            ></i>
          </a>
        </div>
      </header>
    </>
  );
}

function toggleSideMenu(sideMenuState) {
  const sidemenu = document.querySelector(".SideMenu");
  if (sideMenuState) {
    sidemenu.style.display = "none";
  } else sidemenu.style.display = "block";
}
export default MobileHeader;

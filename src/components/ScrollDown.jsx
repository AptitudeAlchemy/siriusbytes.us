import React from "react";
import "../css/animations.css";

function ScrollDown() {
  return (
    <section className="position-relative container py-5 d-flex justify-content-center align-items-center flex-column">
      <h4 className="h6 text-dark text-uppercase">scroll down</h4>
      <i className="my-3 scroll-down fas fa-angles-down"></i>
    </section>
  );
}

export default ScrollDown;

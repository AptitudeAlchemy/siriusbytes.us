import React from "react";

function AngleRightButton({ title, route }) {
  return (
    <>
      <a
        href={`#${route}`}
        className="link button-link my-2 btn text-light text-uppercase"
        style={{ backgroundColor: "var(--brand-primary)" }}
      >
        <span className="h6">{title}</span>
        <i className="fas fa-angle-right ms-2"></i>
      </a>
    </>
  );
}

export default AngleRightButton;

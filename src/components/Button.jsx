import React from "react";

function Button({ title, route, icon }) {
  return (
    <>
      <a
        href={`#${route}`}
        className="link button-link my-2 btn text-light text-uppercase"
        style={{
          backgroundColor: "var(--brand-primary)",
          fontFamily: "poppins-regular",
        }}
      >
        <span className="h6">{title}</span>
        <i className={`fas fa-${icon} ms-2`}></i>
      </a>
    </>
  );
}

export default Button;

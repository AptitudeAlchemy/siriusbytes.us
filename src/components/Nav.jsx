import React from "react";

function Nav({ navLinks }) {
  return (
    <nav className="d-flex justify-content-center align-items-center bg-transparent">
      {navLinks.map((link) => (
        <a
          key={link._id}
          href={`${link.route}`}
          className="mx-4"
          style={{ fontSize: "0.9em" }}
        >
          {link.title}
        </a>
      ))}
    </nav>
  );
}

export default Nav;

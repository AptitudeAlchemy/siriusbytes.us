import React from "react";
import SearchLinks from "./SearchLinks";

function Nav({ navLinks }) {
  return (
    <nav className="w-100 py-5">
      <ul className="p-0 w-100">
        {navLinks.map((link) => (
          <li key={link._id} className="w-100 p-2 bg-transparent mt-2">
            <a href={`#${link.route}`} className="text-dark">
              {link.title}
            </a>
          </li>
        ))}
      </ul>
      <SearchLinks />
    </nav>
  );
}

export default Nav;

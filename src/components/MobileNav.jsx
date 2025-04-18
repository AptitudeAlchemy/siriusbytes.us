import React, { useContext } from "react";
import SearchLinks from "./SearchLinks";
import { Link } from "react-router-dom";

import { appContext } from "../AppContext";

function Nav({ navLinks }) {
  const context = useContext(appContext);

  return (
    <nav className="w-100 py-5">
      <ul className="p-0 w-100">
        {navLinks.map((link) => (
          <li key={link._id} className="w-100 p-2 bg-transparent mt-2">
            <Link
              to={link.route}
              className="text-dark"
              onClick={context.setIsExpanded}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
      <SearchLinks />
    </nav>
  );
}

export default Nav;

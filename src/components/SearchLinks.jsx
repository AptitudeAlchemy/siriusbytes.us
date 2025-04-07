import React from "react";

function SearchLinks() {
  const searchLinks = [
    { _id: 0, title: "Show projects", route: "projects" },
    { _id: 1, title: "What clients say!", route: "clients-feedback" },
    { _id: 2, title: "About me", route: "about-me" },
  ];

  const clientWidth = window.screen.width;

  return (
    <div className={`${clientWidth < 1080 ? "" : "px-5 container"}`}>
      <ul className="w-100 p-0 m-0">
        {searchLinks.map((link) => (
          <SearchItem key={link._id} link={link}></SearchItem>
        ))}
      </ul>
    </div>
  );
}

function SearchItem({ link }) {
  return (
    <li className="w-100 py-2 border px-2 my-2 d-flex justify-content-between align-items-center">
      <a href={`#${link.route}`} className="text-dark">
        {link.title}
      </a>
      <i className="fas fa-arrow-right"></i>
    </li>
  );
}

export default SearchLinks;

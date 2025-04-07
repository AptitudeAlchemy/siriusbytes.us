import React from "react";

function TopSearchBar({ searchLinks }) {
  return (
    <>
      <button className="search-btn btn text-dark" onClick={showSearch}>
        <i className="fas fa-search"></i>
      </button>
      <div
        id="top-search-bar"
        className="search-bar container-fluid py-5 d-none d-flex justify-content-center align-items-center"
      >
        <div className="px-5 container d-flex justify-content-center align-items-center flex-column">
          <ul className="w-100">
            {searchLinks.map((link) => (
              <li
                key={link._id}
                className="py-2 border px-2 my-2 d-flex justify-content-between align-items-center"
              >
                <a href={`#${link.route}`} className="text-dark">
                  {link.title}
                </a>
                <i className="fas fa-arrow-right"></i>
              </li>
            ))}
          </ul>
          <button
            onClick={hideSearch}
            className="btn border d-flex justify-content-center align-items-center"
            style={{ float: "right" }}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
    </>
  );
}

function showSearch() {
  const searchElement = document.getElementById("top-search-bar");

  if (searchElement.classList.contains("d-none")) {
    searchElement.classList.remove("d-none");
  }
}

function hideSearch() {
  const searchElement = document.getElementById("top-search-bar");
  if (!searchElement.classList.contains("d-none"))
    searchElement.classList.add("d-none");
}

export default TopSearchBar;

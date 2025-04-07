import React from "react";
import SearchLinks from "./SearchLinks";

function TopSearchBar() {
  return (
    <>
      <button className="search-btn btn text-dark" onClick={showSearch}>
        <i className="fas fa-search"></i>
      </button>
      <div
        id="top-search-bar"
        className="search-bar container-fluid py-5 d-none d-flex justify-content-center align-items-center flex-column "
      >
        <SearchLinks hideSearch={hideSearch}></SearchLinks>
        <button onClick={hideSearch} className="mt-4 btn border ">
          <i className="fas fa-times"></i>
        </button>
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

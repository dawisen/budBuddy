import React from "react";
import "./search.css";
const Searchbar = ({ handleSearch }) => {
  
  return (
    <div className="searchDiv">
      <form className="d-flex">
        <input
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(event) => {
            handleSearch(event.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default Searchbar;
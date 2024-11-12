// src/components/SearchBar/SearchBar.js
import React, { useContext } from "react";
import { ContentContext } from "../../context/ContentContext";
import "./SearchBar.css";

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useContext(ContentContext);

  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Search..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;

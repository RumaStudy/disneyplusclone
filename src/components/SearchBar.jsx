import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SearchBar.css";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  };
  return (
    <>
      <input
        type="text"
        value={searchValue}
        className="SearchBar"
        onChange={handleChange}
        placeholder="영화를 검색해주세요."
      />
    </>
  );
};

export default SearchBar;

import React from "react";

const SearchBar = ({ responseData }) => {
  return (
    <div>
      <input
        placeholder=" Search..."
        onChange={(e) => {
          responseData(e.target.value);
        }}
        style={{ width: "100%", padding: "6px 10px" }}
      ></input>
    </div>
  );
};

export default SearchBar;

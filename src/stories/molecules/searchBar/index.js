import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ placeholder }) => {
  return (
    <div className="relative w-full">
      <input
        placeholder={placeholder}
        className="rounded-12 w-full border border-main-color shadow-custom px-14 py-10 placeholder:text-gray-900 pr-12"
      />
      <SearchIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-main-color" />
    </div>
  );
};

export default SearchBar;

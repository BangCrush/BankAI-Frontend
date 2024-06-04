import React, { useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ placeholder, setSearchWord, setClicked }) => {
  const inputRef = useRef(null);
  const handleSearchword = () => {
    if (inputRef.current) {
      setSearchWord(inputRef.current.value);
    }
    setClicked(5);
  };

  return (
    <div className="relative w-full">
      <input
        ref={inputRef}
        placeholder={placeholder}
        className="rounded-12 w-full border border-main-color shadow-custom px-14 py-10 placeholder:text-gray-900 pr-12 focus:outline-none"
      />
      <div
        onClick={handleSearchword}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
      >
        <SearchIcon className="text-main-color" />
      </div>
    </div>
  );
};

export default SearchBar;

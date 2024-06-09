import React, { useRef } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ placeholder, setSearchWord, setClicked, readonly }) => {
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const handleSearchword = () => {
    if (inputRef.current) {
      setSearchWord(inputRef.current.value);
    }
    setClicked(5);
  };

  const handleClick = () => {
    navigate("/product");
  };

  return (
    <div className="relative w-full" onClick={readonly ? handleClick : null}>
      <input
        ref={inputRef}
        placeholder={placeholder}
        className="rounded-12 w-full border border-main-color shadow-custom px-14 py-10 placeholder:text-gray-900 pr-12 focus:outline-none"
        readOnly={readonly ? true : false}
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

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";

const SelectBox = ({ text, selectedOption, setSelectedOption }) => {
  const [isOpen, setIsOpen] = useState(false);

  const options = Array.from({ length: 28 }, (_, i) => `${i + 1}일`);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionSelect = (item) => {
    setSelectedOption(item);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col gap-1">
      <div className="text-14">{text}</div>
      <div className="relative">
        <div
          className="rounded-10 focus:outline-none bg-gray-input px-12 py-15 w-full text-14 cursor-pointer flex justify-between"
          onClick={handleToggle}
        >
          <span
            className={`{${selectedOption}? "text-black-900": "text-gray-placeholder"}`}
          >
            {selectedOption ? selectedOption : "옵션을 선택하세요"}
          </span>
          <KeyboardArrowDownIcon className="text-superSubColor" />
        </div>

        {isOpen && (
          <div className="absolute top-full left-0 z-10 w-full rounded-12 border mt-1 bg-white p-3 gray-border">
            {options.map((item, index) => (
              <div
                key={`${item}+${index}`}
                className="px-10 py-10 cursor-pointer hover:bg-gray-200 bg-white text-15"
                onClick={() => handleOptionSelect(item)}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectBox;

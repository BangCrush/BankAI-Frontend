import { useState } from "react";

const InherentInput = ({ onChange }) => {
  const [firstPart, setFirstPart] = useState("");
  const [secondPart, setSecondPart] = useState("");

  const handleFirstPartChange = (e) => {
    const value = e.target.value;
    setFirstPart(value);
    onChange(value + secondPart); // Combine and call onChange
  };

  const handleSecondPartChange = (e) => {
    const value = e.target.value;
    setSecondPart(value);
    onChange(firstPart + value); // Combine and call onChange
  };

  return (
    <div className="flex items-center space-x-3 w-full">
      <input
        placeholder="950101"
        className="rounded-10 bg-gray-input px-12 py-15 placeholder:text-gray-placeholder text-14 w-1/2"
        onChange={handleFirstPartChange}
      />
      <div className="w-15 h-2 bg-gray-900"></div>

      <input
        type="password"
        placeholder="2"
        className="rounded-10 text-center bg-gray-input px-12 py-15 w-40 placeholder:text-gray-placeholder text-14"
        onChange={handleSecondPartChange}
      />
      <div className="flex justify-around w-1/2">
        <div className="w-6 h-6 bg-gray-placeholder rounded-99"></div>
        <div className="w-6 h-6 bg-gray-placeholder rounded-99"></div>
        <div className="w-6 h-6 bg-gray-placeholder rounded-99"></div>
        <div className="w-6 h-6 bg-gray-placeholder rounded-99"></div>
        <div className="w-6 h-6 bg-gray-placeholder rounded-99"></div>
        <div className="w-6 h-6 bg-gray-placeholder rounded-99"></div>
      </div>
    </div>
  );
};

export default InherentInput;

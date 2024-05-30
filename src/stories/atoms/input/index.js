import React from "react";

const Input = ({ placeholder, onChange, value, msg, type, readonly }) => {
  return (
    <div className="flex flex-col flex-grow">
      <input
        placeholder={placeholder}
        className="rounded-10 focus:outline-none bg-gray-input px-12 py-15 w-full placeholder:text-gray-placeholder text-14 flex-auto"
        onChange={onChange}
        value={value}
        type={type ? "password" : "text"}
        readOnly={readonly ? true : false}
      ></input>
      <div className="text-13 text-err-color p-5">{msg}</div>
    </div>
  );
};

export default Input;

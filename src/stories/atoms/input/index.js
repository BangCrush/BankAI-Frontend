const Input = ({ placeholder, onChange, value, msg, type }) => {
  return (
    <div className="flex flex-col">
      <input
        placeholder={placeholder}
        className="rounded-10 bg-gray-input px-12 py-15 w-full placeholder:text-gray-placeholder text-14"
        onChange={onChange}
        value={value}
        type={type ? "password" : "text"}
      ></input>
      <div className="text-13 text-err-color p-5">{msg}</div>
    </div>
  );
};

export default Input;

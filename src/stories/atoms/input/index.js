const Input = ({ placeholder, onChange, value }) => {
  return (
    <input
      placeholder={placeholder}
      className="rounded-10 bg-gray-input px-12 py-15 w-full placeholder:text-gray-placeholder text-14"
      onChange={onChange}
      value={value}
    ></input>
  );
};

export default Input;

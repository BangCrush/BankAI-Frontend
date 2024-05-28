const Input = ({ placeholder }) => {
  return (
    <input
      placeholder={placeholder}
      className="rounded-10 bg-gray-input px-12 py-15 w-full placeholder:text-gray-placeholder text-12"
    ></input>
  );
};

export default Input;

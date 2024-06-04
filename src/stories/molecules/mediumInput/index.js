const MediumInput = ({ placeholder, active, text, value, onChange, error }) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center pt-10 mb-10">
        <input
          placeholder={placeholder}
          readOnly={active ? false : true}
          value={value ? "" : value}
          className={`rounded-10 outline-none bg-gray-input px-12 py-15 max-w-190 placeholder:font-semibold ${active ? "placeholder:text-gray" : "placeholder:text-main-color"} text-13 mr-10`}
          onChange={onChange}
        />
        <div className="text-14 text-black font-semibold">{text}</div>
      </div>
      {error && <div className="text-13 text-err-color px-5">{error}</div>}
    </div>
  );
};

export default MediumInput;

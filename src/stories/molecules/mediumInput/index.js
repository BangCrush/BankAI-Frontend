const MediumInput = ({ placeholder, active, text }) => {
  return (
    <div className="flex items-center">
      <input
        placeholder={placeholder}
        readOnly={active ? false : true}
        className={`rounded-10 bg-gray-input px-12 py-15 max-w-190 placeholder:font-semibold ${active ? "placeholder:text-gray" : "placeholder:text-main-color"} text-12 mr-10`}
      />
      <div className="text-14 text-black font-semibold">{text}</div>
    </div>
  );
};

export default MediumInput;

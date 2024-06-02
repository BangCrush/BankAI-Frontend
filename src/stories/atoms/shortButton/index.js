const ShortButton = ({ text, active }) => {
  return (
    <button
      className={`text-white text-14 font-semibold p-12 rounded-12  ${active ? "bg-main-color cursor-pointer" : "bg-sub-color"}`}
      disabled={!active}
    >
      {text}
    </button>
  );
};

export default ShortButton;

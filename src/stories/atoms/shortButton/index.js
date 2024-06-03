const ShortButton = ({ text, active, onClick }) => {
  return (
    <button
      className={`text-white text-14 font-semibold p-12 rounded-12  ${active ? "bg-main-color cursor-pointer" : "bg-sub-color"}`}
      disabled={!active}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ShortButton;

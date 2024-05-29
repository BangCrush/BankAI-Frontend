const LongButton = ({ text, active, onClick }) => {
  return (
    <button
      className={`text-white font-semibold py-15 rounded-12 w-full ${active ? "bg-main-color cursor-pointer" : "bg-sub-color"}`}
      onClick={active ? onClick : null}
      disabled={!active}
    >
      {text}
    </button>
  );
};

export default LongButton;

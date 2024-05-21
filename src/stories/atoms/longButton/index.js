const LongButton = ({ text, active }) => {
  return (
    <button className={`text-white font-semibold py-18 rounded-12 w-full ${active ? 'bg-main-color' : 'bg-sub-color'}`}>
      {text}
    </button>
  );
};

export default LongButton;

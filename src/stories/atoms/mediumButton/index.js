import "../../../styles/button.css";

const MediumButton = ({ text, sub, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`text-14 text-nowrap font-semibold py-10 px-35 w-full rounded-12 bg-main-color text-center ${sub ? "bg-white text-main-color border border-main-color" : "bg-main-color text-white "}`}
    >
      <p className="inline">{text}</p>
    </button>
  );
};

export default MediumButton;

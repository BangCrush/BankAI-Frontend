import "../../../styles/button.css";

const MediumButton = ({ text, sub }) => {
  return (
    <button
      className={`text-12 text-nowrap font-semibold py-10 px-35 rounded-12 bg-main-color max-w-115 ${sub ? "bg-white text-main-color border border-main-color" : "bg-main-color text-white "}`}
    >
      <p className="inline">{text}</p>
    </button>
  );
};

export default MediumButton;

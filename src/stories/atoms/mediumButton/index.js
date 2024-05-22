import "../../../styles/button.css";

const MediumButton = ({ text, sub }) => {
  return (
    <button
      className={`text-14 font-semibold py-10 px-35 rounded-12 bg-main-color ${sub ? "bg-white text-main-color border border-main-color" : "bg-main-color text-white "}`}
    >
      {text}
    </button>
  );
};

export default MediumButton;

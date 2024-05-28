import PwdNum from "stories/atoms/pwdNum";

const PwdLine = ({ onClick,numbers }) => {
  return (
    <div
      className={`flex w-330`}
    >
      {numbers.map((num) => (
        <PwdNum onClick={onClick} num={num} />
      ))}
    </div>
  );
};

export default PwdLine;

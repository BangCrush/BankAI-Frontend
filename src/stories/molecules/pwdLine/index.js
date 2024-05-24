import PwdNum from "stories/atoms/pwdNum";

const PwdLine = ({ numbers }) => {
  return (
    <div
      className={`flex w-330`}
    >
      {numbers.map((num) => (
        <PwdNum num={num} />
      ))}
    </div>
  );
};

export default PwdLine;

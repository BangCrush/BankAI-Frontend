import { Backspace } from "@mui/icons-material";

const PwdNum = ({ num }) => {
  return (
    <button
      className={`text-20 text-nowrap min-w-110 min-h-80`}
    >
      {num>-1 && (
        <p className="inline">{num}</p>
      )}
      {num===-2 && (
        <p className="inline text-14">전체삭제</p>
      )}
      {num===-1 && (
        <Backspace/>
      )}
    </button>
  );
};

export default PwdNum;

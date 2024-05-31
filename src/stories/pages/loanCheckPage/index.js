import { Divider } from "@mui/material";
import LongButton from "stories/atoms/longButton";
import LoanInfo from "stories/molecules/loanInfo";

function LoanCheckPage({prodName,loanAmount,loanRate}) {
  return <div className="space-y-5 flex flex-col justify-center w-560">
    <p className="text-20 font-extrabold text-center">신용대출을 신청하시겠어요?</p>
    <p className="text-16 font-semibold whitespace-pre-wrap text-center">신용대출 신청과 동시에{"\n"}대출 금액이 즉시 입금됩니다.</p>
    <Divider />
    <LoanInfo loanInfo={{
      prodName: prodName,
      loanAmount: loanAmount,
      loanRate: loanRate,
    }} />
    <LongButton text="신청합니다" active={true} />
  </div>;
}

export default LoanCheckPage;

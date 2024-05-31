import ErrorIcon from "@mui/icons-material/Error";
import LongButton from "stories/atoms/longButton";
function TransferWarningPage() {
    return (<div className="flex-col space-y-10 text-center w-560">
        <ErrorIcon sx={{ fontSize: 100, color: "rgb(135, 133, 246)" }} />
        <p className="text-20 font-bold whitespace-pre-wrap text-center">예금주를 확인할 수 없습니다.{"\n"}계좌번호를 다시 입력해주세요.</p>
        <LongButton text="확인" active={true} />
        
    </div>);
}

export default TransferWarningPage;
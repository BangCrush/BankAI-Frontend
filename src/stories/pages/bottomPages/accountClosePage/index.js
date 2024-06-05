import ErrorIcon from "@mui/icons-material/Error";
import LongButton from "stories/atoms/longButton";
function AccountClosePage({onPopup}) {
    return (<div className="flex-col space-y-10 text-center w-560">
        <ErrorIcon sx={{ fontSize: 100, color: "rgb(135, 133, 246)" }} />
        <p className="text-20 font-bold whitespace-pre-wrap text-center">이후엔 계좌 복구가 불가능합니다.{"\n"}정말 계좌를 해지하시겠습니까?</p>
        <LongButton text="확인" onClick={onPopup} active={true} />
        
    </div>);
}

export default AccountClosePage;
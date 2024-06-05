import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LongButton from "stories/atoms/longButton";
function BottomSuccessPage({ onClose, text }) {
    return (<div className="flex-col space-y-10 text-center w-560">
        <CheckCircleIcon sx={{ fontSize: 100, color: "rgb(135, 133, 246)" }} />
        <p className="text-20 font-bold whitespace-pre-wrap text-center">{text}</p>
        <LongButton text="확인" active={true} onClick={onClose} />
        
    </div>);
}

export default BottomSuccessPage;
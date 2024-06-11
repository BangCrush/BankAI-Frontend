import { checkPw, transfer } from "api/accountApi";
import { PwdWindowOptions } from "constants/password";
import { accFormatter } from "globalFunc/formatter";
import { useCallback, useContext, useEffect, useState } from "react";
import LongButton from "stories/atoms/longButton";
import TransferInfo from "stories/molecules/transferInfo";
import BottomSheet from "stories/organisms/bottomSheet";
import AlertModal from "stories/molecules/alertModal";
import BottomSuccessPage from "../BottomSuccessPage";
import { AudioStateContext, VideoStateContext } from "App";

function TransferCheckPage({ name, accNum, amount, confirm }) {
  const accCode = new URL(window.location.href).searchParams.get("accCode");
  const [open, setOpen] = useState(false);
  const [err, setErr] = useState(false);
  const [alert, setAlert] = useState("");
  const {setText} = useContext(AudioStateContext);
  const {setSrc} = useContext(VideoStateContext);

  useEffect(() => {
    if (confirm) {
      checkPwd();
    }
  }, [confirm]);

  const tryTransfer = useCallback(() => {
    transfer({
      inAccCode: accFormatter(accNum),
      outAccCode: accFormatter(accCode),
      amount: amount,
    }).then((res) => {
      if (res.status === 201) {
        setSrc("/assets/noVoice.mov");
        setText("계좌이체가 완료되었습니다.");
        setOpen(true);
        setTimeout(() => {
          window.location.href = "/main";
        }, 5000);
      } else {
        setAlert(res.message);
        setErr(true);
      }
    });
  }, [accNum, accCode, amount, err]);
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.pwd) {
        checkPw({ accCode: accCode, accPwd: event.data.pwd }).then((res) => {
          if (res.data.check) {
            window.close();
            tryTransfer();
          } else {
            setAlert("비밀번호가 일치하지 않습니다.");
            setErr(true);
            window.close();
          }
        });
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [accCode, tryTransfer]);

  const checkPwd = () => {
    window.open("/password?type=single", "_blank", PwdWindowOptions);
  };
  return (
    <div className="space-y-20 flex flex-col justify-center w-560">
      <TransferInfo name={name} accNum={accNum} amount={amount} />
      <LongButton text="확인" active={true} onClick={checkPwd} />
      <BottomSheet
        open={open}
        setOpen={setOpen}
        page={
          <BottomSuccessPage
            text={"계좌이체가 정상적으로 완료되었습니다."}
            onClose={() => {
              window.location.href = "/main";
            }}
          />
        }
      />
      <AlertModal
        severity={"error"}
        open={err}
        setOpen={setErr}
        content={alert}
        handleClose={() => {
          setErr(false);
        }}
      />
    </div>
  );
}

export default TransferCheckPage;

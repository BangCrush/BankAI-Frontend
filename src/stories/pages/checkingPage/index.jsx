import { LinearProgress } from "@mui/material";
import { PwdWindowOptions } from "constants/password";
import { usePostCreateAccount } from "hooks/queries/accountQueries";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SavingsIcon from "@mui/icons-material/Savings";
import BottomSuccessPage from "../bottomPages/BottomSuccessPage";
import BottomSheet from "stories/organisms/bottomSheet";

const CheckingPage = () => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(false);
  const { mutate: createAccount } = usePostCreateAccount();
  const location = useLocation();
  const { prodCode } = location.state || {};
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.pwd) {
        setStatus(true);
      }
      if (event.data.isMatched) {
        createAccount({
          prodCode: prodCode,
          accountPwd: event.data.pwd,
          period: 1200,
        });
        setOpen(true);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [createAccount, prodCode]);

  if (!status) {
    window.open("/password?type=double", "_blank", PwdWindowOptions);
  }

  return (
    <div className="self-center justify-self-center text-center text-main-color text-50">
      <SavingsIcon color="inherit" fontSize="inherit" />
      <p>계좌 생성 중입니다.</p>
      <LinearProgress color="inherit" />
      <BottomSheet
        open={open}
        onClose={() => setOpen(false)}
        page={
          <BottomSuccessPage
            text={"입출금계좌가 정상적으로 개설되었습니다."}
            onClose={() => {
              window.location.href = "/main";
            }}
          />
        }
      />
    </div>
  );
};

export default CheckingPage;

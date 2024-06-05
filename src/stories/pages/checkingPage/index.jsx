import { CircularProgress } from "@mui/material";
import { PwdWindowOptions } from "constants/password";
import { usePostCreateAccount } from "hooks/queries/accountQueries";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const CheckingPage = () => {
  const [initialPwd, setInitialPwd] = useState(null);
  const [status,setStatus] = useState(false);
  const { mutate: createAccount, ok } = usePostCreateAccount();
  const location = useLocation();
  const { prodCode } = location.state || {};
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.pwd) {
        setStatus(true);
      }
      if (event.data.isMatched) {
        createAccount({prodCode:prodCode,accountPwd:event.data.pwd,period:1200});
        window.parent.location.href = "/main";
        window.close();
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [setInitialPwd]);

   
    
    if (!status)
    {
      window.open("/password?type=double", "_blank", PwdWindowOptions);
    }
  
  return (
    <div className="self-center justify-self-center">
      <CircularProgress size={"10rem"} disableShrink color="inherit" sx={{marginBlock:'auto'}} className="text-main-color" />
    </div>
  );
};

export default CheckingPage;

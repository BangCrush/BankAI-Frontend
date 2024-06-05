import { CircularProgress } from "@mui/material";
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

    let options =
      "toolbar=no,scrollbars=no,resizable=no,status=no,menubar=no,width=400, height=540, top=200,left=200";
    
    if (!status)
    {
      window.open("http://localhost:3000/password", "_blank", options);
    }
  
  return (
    <div className="self-center justify-self-center">
      <CircularProgress size={"10rem"} disableShrink color="inherit" sx={{marginBlock:'auto'}} className="text-main-color" />
    </div>
  );
};

export default CheckingPage;

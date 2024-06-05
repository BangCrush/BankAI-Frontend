import { checkPw, transfer } from "api/accountApi";
import { PwdWindowOptions } from "constants/password";
import { accFormatter } from "globalFunc/formatter";
import { useEffect } from "react";
import LongButton from "stories/atoms/longButton";
import TransferInfo from "stories/molecules/transferInfo";


function TransferCheckPage({ name, accNum, amount, moveNextPage }) {
  const accCode = new URL(window.location.href).searchParams.get("accCode");

  const tryTransfer = ()=>{
    transfer({
      inAccCode:accFormatter(accNum),
      outAccCode:accFormatter(accCode),
      amount:amount
    }).then((res)=>{
      if(res.status===201){
        alert("이체 성공")
        window.location.href="/main"
      } else {
        alert("이체 실패")
      }
    })
  }
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.pwd) {
        checkPw({accCode:accCode,accPwd:event.data.pwd}).then((res)=>{
          if(res.data.check){
            window.close();
            tryTransfer();
          } else {
            alert("비밀번호가 틀렸습니다.")
            window.close();
          }
        })
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

 

  const checkPwd = ()=>{
    window.open("/password","_blank",PwdWindowOptions)
  }
  return (
    <div className="space-y-20 flex flex-col justify-center w-560">
      <TransferInfo name={name} accNum={accNum} amount={amount} />

      <LongButton text="확인" active={true} onClick={checkPwd}/>
    </div>
  );
}

export default TransferCheckPage;

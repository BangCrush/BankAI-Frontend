import { useEffect, useState } from "react";
import Input from "stories/atoms/input";
import LongButton from "stories/atoms/longButton";
import Title from "stories/atoms/title";
import HeaderBar from "stories/molecules/headerBar";

import { usePostCreateAccount } from "hooks/queries/accountQueries";
import { PwdWindowOptions } from "constants/password";

const Page4 = ({ savingForm, setSavingForm }) => {
  const [allDone, setAllDone] = useState(null);
  const { mutate: createAccount, ok, msg } = usePostCreateAccount();
  const handleAmount = (e) => {
    setSavingForm((draft) => {
      draft.amount = e.target.value;
    });
  };

  const handleButtonClick = () => {
    if (!allDone) {
      onPopup();
    } else {
      handleSend();
    }
  };

  const handleSend = () => {
    createAccount(savingForm);
    window.location.href = "/main";
  };

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.pwd) {
        setSavingForm((draft) => {
          draft.accountPwd = event.data.pwd;
        });
      }
      if (event.data.isMatched && savingForm.accountPwd) {
        setAllDone(true);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [setSavingForm]);

  const onPopup = () => {
   
    window.open("/password?type=double", "_blank", PwdWindowOptions);
  };
  return (
    <div>
      <HeaderBar text={"적금가입"} />
      <Title text1={"최초로 저축할 금액을 입력해주세요"} />
      <div className="mt-25">
        <Input placeholder={"10000"} onChange={handleAmount} />
        {!ok && msg && <div className="text-13 text-err-color p-5">{msg}</div>}
      </div>
      <div className="flex flex-col justify-center items-center mt-10 absolute left-0 bottom-0 w-full px-40 mb-50">
        <LongButton
          text={"다음"}
          active={!msg && (ok || !!savingForm.amount)}
          onClick={handleButtonClick}
        />
      </div>
    </div>
  );
};

export default Page4;

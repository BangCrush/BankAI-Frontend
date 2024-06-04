<<<<<<< Updated upstream
import { useState } from "react";
=======
import { useEffect, useState } from "react";
>>>>>>> Stashed changes
import Input from "stories/atoms/input";
import LongButton from "stories/atoms/longButton";
import Title from "stories/atoms/title";
import HeaderBar from "stories/molecules/headerBar";
import PwdPage from "../pwdPage";
<<<<<<< Updated upstream

const Page4 = ({ moveNextPage, savingForm, setSavingForm }) => {
  const [initialPwd, setInitialPwd] = useState(null);

=======
import { usePostCreateAccount } from "hooks/queries/accountQueries";

const Page4 = ({ savingForm, setSavingForm }) => {
  const [initialPwd, setInitialPwd] = useState(null);
  const [allDone, setAllDone] = useState(null);
  const { mutate: createAccount } = usePostCreateAccount();

>>>>>>> Stashed changes
  const handleAmount = (e) => {
    setSavingForm((draft) => {
      draft.amount = e.target.value;
    });
  };

<<<<<<< Updated upstream
=======
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

>>>>>>> Stashed changes
  const onPopup = () => {
    setInitialPwd(savingForm.pwd);
    let options =
      "toolbar=no,scrollbars=no,resizable=no,status=no,menubar=no,width=400, height=540, top=200,left=200";
    window.open("http://localhost:3000/password", "_blank", options);
  };
  return (
    <div>
      <HeaderBar text={"적금가입"} />
      <Title text1={"최초로 저축할 금액을 입력해주세요"} />
      <div className="mt-25">
        <Input placeholder={"10000"} onChange={handleAmount} />
      </div>
      <div className="flex flex-col justify-center items-center mt-10 absolute left-0 bottom-0 w-full px-40 mb-50">
        <LongButton
          text={"다음"}
          active={!!savingForm.amount}
<<<<<<< Updated upstream
          onClick={onPopup}
=======
          onClick={
            allDone === null && savingForm.accountPwd === null
              ? onPopup
              : handleSend
          }
>>>>>>> Stashed changes
        />
      </div>
      {initialPwd && <PwdPage initialPwd={initialPwd} />}
    </div>
  );
};

export default Page4;

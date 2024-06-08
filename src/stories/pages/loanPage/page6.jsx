import { PwdWindowOptions } from "constants/password";
import { usePostCreateAccount } from "hooks/queries/accountQueries";
import React, { useEffect, useState } from "react";
import LongButton from "stories/atoms/longButton";
import SelectBox from "stories/atoms/selectBox";
import Title from "stories/atoms/title";
import HeaderBar from "stories/molecules/headerBar";

const Page6 = ({ loanForm, setLoanForm }) => {
  const [allDone, setAllDone] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");

  const options = Array.from({ length: 28 }, (_, i) => `${i + 1}`);
  const { mutate: createAccount, ok, msg } = usePostCreateAccount();

  useEffect(() => {
    setLoanForm((draft) => {
      draft.atDate = setSelectedOption;
    });
  }, [selectedOption, setLoanForm]);

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.pwd) {
        setLoanForm((draft) => {
          draft.accountPwd = event.data.pwd;
        });
      }
      if (event.data.isMatched && event.data.pwd) {
        setAllDone(true);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [setLoanForm]);

  const onPopup = () => {
    window.open("/password?type=double", "_blank", PwdWindowOptions);
  };

  const handleSend = () => {
    createAccount(loanForm);
    window.location.href = "/main";
  };

  const handleButtonClick = () => {
    if (!allDone) {
      onPopup();
    } else {
      handleSend();
    }
  };

  return (
    <div className="px-40 pt-30 w-full flex flex-col flex-1">
      <HeaderBar text={"대출가입"} />
      <Title text1={"자동 납부일을 선택해주세요"} />
      <div className="mt-35">
        <SelectBox
          options={options}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </div>
      <div className="max-w-640 flex flex-col justify-center items-center absolute left-0 bottom-0 w-full px-40 mb-50">
        <LongButton
          text={"다음"}
          active={!msg && (ok || !!selectedOption)}
          onClick={handleButtonClick}
        />
      </div>
    </div>
  );
};

export default Page6;

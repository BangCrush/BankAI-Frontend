import React, { useState } from "react";
import Input from "stories/atoms/input";
import LongButton from "stories/atoms/longButton";
import Title from "stories/atoms/title";
import useValid from "hooks/useValid";
import InherentInput from "stories/atoms/inherentInput";
import { usePostEmailCheck, usePostEmailSend } from "hooks/queries/userQueries";
import ShortButton from "stories/atoms/shortButton";

const Page1 = ({ moveNextPage, registForm, setRegistForm }) => {
  const { validText, isValid } = useValid(registForm);
  const [error, setError] = useState(false);
  const [code, setCode] = useState(null);

  const { mutate: checkEmail, emailOk, emailCode } = usePostEmailSend();

  const handleChange = (field) => (e) => {
    const value = e.target.value;
    setRegistForm((draft) => {
      draft[field] = value;
    });
  };

  const handleInherentNumber = (value) => {
    setRegistForm((draft) => {
      draft.userInherentNumber = value;
    });
  };

  const handleClick = () => {
    if (
      isValid.isUserName &&
      isValid.isUserNameEn &&
      isValid.isUserPhone &&
      isValid.isUserEmail &&
      isValid.isUserInherentNumber
    ) {
      moveNextPage();
    } else {
      setError(true);
    }
  };

  // console.log(emailCode);
  // console.log("dd", emailOk);
  const handleEmailCheck = () => {
    checkEmail(registForm.userEmail);
  };

  return (
    <div>
      <Title text1={"회원가입"} text2={""} />
      <div className="pl-10">개인정보를 입력해주세요.</div>
      <div className="mt-35 flex flex-col space-y-4">
        <Input
          placeholder={"홍길동"}
          onChange={handleChange("userName")}
          msg={validText.userName}
        />
        <Input
          placeholder={"HONG GILL DONG"}
          onChange={handleChange("userNameEn")}
          msg={validText.userNameEn}
        />
        <InherentInput
          onChange={handleInherentNumber}
          msg={validText.userInherentNumber}
        />
        <Input
          placeholder={"01012341223"}
          onChange={handleChange("userPhone")}
          msg={validText.userPhone}
        />
        <div className="flex items-center justify-between space-x-3">
          <Input
            placeholder={"banksi@gmail.com"}
            onChange={handleChange("userEmail")}
            msg={validText.userEmail}
          />
          <span className="mb-10" onClick={handleEmailCheck}>
            <ShortButton text={"중복체크"} />
          </span>
        </div>
        {emailOk && (
          <Input
            placeholder={"1234"}
            onChange={() => setCode}
            msg={validText.userPhone}
          />
        )}
      </div>
      <div className="flex flex-col justify-center items-center absolute left-0 bottom-0 w-full px-40 mb-50">
        <LongButton
          text={"다음"}
          active={
            isValid.isUserName &&
            isValid.isUserNameEn &&
            isValid.isUserPhone &&
            isValid.isUserEmail &&
            isValid.isUserInherentNumber
          }
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Page1;

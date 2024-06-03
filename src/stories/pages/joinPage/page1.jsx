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
  const [code, setCode] = useState(null);

  const { mutate: sendEmail, emailOk, emailCode } = usePostEmailSend();
  const { mutate: checkEmail, ok } = usePostEmailCheck();

  const handleChange = (field) => (e) => {
    const value = e.target.value;
    setRegistForm((draft) => {
      draft[field] = value;
    });
  };

  const handleCode = (e) => {
    setCode(e.target.value);
    if (code === emailCode) {
      setCode(true);
    }
  };

  const handleInherentNumber = (value) => {
    setRegistForm((draft) => {
      draft.userInherentNumber = value;
    });
  };

  const handleClick = () => {
    if (
      isValid.isUserNameKr &&
      isValid.isUserNameEn &&
      isValid.isUserPhone &&
      isValid.isUserEmail &&
      isValid.isUserInherentNumber &&
      ok
    ) {
      moveNextPage();
    }
  };

  const handleEmailCheck = () => {
    checkEmail(registForm.userEmail);
  };

  const handleEmailSend = () => {
    sendEmail(registForm.userEmail);
  };

  return (
    <div>
      <Title text1={"회원가입"} text2={""} />
      <div className="pl-10">개인정보를 입력해주세요.</div>
      <div className="mt-35 flex flex-col space-y-4">
        <Input
          placeholder={"홍길동"}
          value={registForm.userNameKr}
          msg={validText.userNameKr}
          readonly={true}
        />
        <Input
          placeholder={"HONG GILL DONG"}
          onChange={handleChange("userNameEn")}
          msg={validText.userNameEn}
        />
        <InherentInput
          onChange={handleInherentNumber}
          value={registForm.userInherentNumber}
          readonly={true}
          msg={validText.userInherentNumber}
        />
        <Input
          placeholder={"01012341223"}
          value={registForm.userPhone}
          readonly={true}
          msg={validText.userPhone}
        />
        <div className="flex justify-between space-x-3">
          <Input
            placeholder={"banksi@gmail.com"}
            onChange={handleChange("userEmail")}
            validate={ok ? true : false}
            msg={
              ok !== null
                ? ok
                  ? "사용가능한 이메일입니다."
                  : "중복된 이메일입니다."
                : validText.userEmail
            }
          />
          <span className="mt-2" onClick={handleEmailCheck}>
            <ShortButton
              text={"중복체크"}
              active={validText.userEmail ? false : true}
            />
          </span>
        </div>
        {ok && (
          <div className="flex justify-between space-x-3">
            <Input
              placeholder={"메일로 전송된 코드를 입력해주세요"}
              onChange={handleCode}
              validate={code === emailCode ? true : false}
              msg={
                code !== null
                  ? code === emailCode
                    ? "인증되었습니다."
                    : "잘못 입력하였습니다."
                  : ""
              }
            />

            <span className="mt-2" onClick={handleEmailSend}>
              <ShortButton
                text={"메일전송"}
                active={validText.userEmail ? false : true}
              />
            </span>
          </div>
        )}
      </div>
      <div className="flex flex-col justify-center items-center absolute left-0 bottom-0 w-full px-40 mb-50">
        <LongButton
          text={"다음"}
          active={
            isValid.isUserNameKr &&
            isValid.isUserNameEn &&
            isValid.isUserPhone &&
            isValid.isUserEmail &&
            isValid.isUserInherentNumber &&
            ok &&
            code === emailCode
          }
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Page1;

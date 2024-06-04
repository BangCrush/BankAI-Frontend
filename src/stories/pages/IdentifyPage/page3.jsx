import { usePostSms, usePostSmsVerify } from "hooks/queries/userQueries";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "stories/atoms/input";
import LongButton from "stories/atoms/longButton";
import ShortButton from "stories/atoms/shortButton";
import Title from "stories/atoms/title";

const Page3 = ({ registForm, setRegistForm }) => {
  const { mutate: sendSms, msg, ok } = usePostSms();
  const { mutate: verifySms, verifyMsg, verifyOk } = usePostSmsVerify();

  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const handleChange = (field) => (e) => {
    const value = e.target.value;
    setRegistForm((draft) => {
      draft[field] = value;
    });
  };

  const handleSmsSend = () => {
    sendSms(registForm.userPhone);
  };
  const handleSmsVerify = () => {
    verifySms({'userPhone':registForm.userPhone, 'verificationCode':code});
  };

  const handleCode = (e) => {
    setCode(e.target.value);
  };

  const handleNextStep = () => {
    if (verifyOk && ok) {
      navigate("/join", { state: { registForm } });
    }
  };

  return (
    <>
      <Title text1={"휴대폰 본인인증을"} text2={"진행해주세요"} />
      <div className="mt-35 flex flex-col space-y-5">
        {ok && (
          <div className="flex flex-col flex-grow">
            <div className="flex justify-between space-x-3">
              <Input placeholder={"1234"} onChange={handleCode} />
              <span className="mt-2">
                <ShortButton
                  text={"인증하기"}
                  active={!!code}
                  onClick={handleSmsVerify}
                />
              </span>
            </div>
            {verifyOk !== null ? (
              verifyOk ? (
                <div className="text-13 text-main-color p-5">
                  인증되었습니다!
                </div>
              ) : (
                <div className="text-13 text-err-color p-5">{verifyMsg}</div>
              )
            ) : null}
          </div>
        )}

        <div className="flex flex-col flex-grow">
          <div className="flex justify-between space-x-3">
            <Input
              placeholder={"01082278983"}
              onChange={handleChange("userPhone")}
              msg={msg ? msg : null}
              validate={ok ? true : false}
            />
            <span className="mt-2">
              <ShortButton
                text={"문자전송"}
                active={!!registForm.userPhone}
                onClick={handleSmsSend}
              />
            </span>
          </div>
          {ok !== null ? (
            ok ? (
              <div className="text-13 text-main-color p-5">전송되었습니다!</div>
            ) : (
              <div className="text-13 text-err-color p-5">
                잘못입력하였습니다
              </div>
            )
          ) : null}
        </div>

        <Input
          placeholder={"970114"}
          value={registForm.userInherentNumber}
          readOnly={true}
        />
        <Input
          placeholder={"홍길동"}
          value={registForm.userNameKr}
          readOnly={true}
        />
      </div>
      <div className="flex flex-col justify-center items-center absolute left-0 bottom-0 w-full px-40 mb-50">
        <LongButton
          text={"다음"}
          active={!!registForm.userPhone && verifyOk}
          onClick={handleNextStep}
        />
      </div>
    </>
  );
};

export default Page3;

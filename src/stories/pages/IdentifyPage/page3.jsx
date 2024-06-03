import { usePostSms } from "hooks/queries/userQueries";
import React, { useState } from "react";
import Input from "stories/atoms/input";
import LongButton from "stories/atoms/longButton";
import ShortButton from "stories/atoms/shortButton";
import Title from "stories/atoms/title";
import HeaderBar from "stories/molecules/headerBar";

const Page3 = ({ identifyForm, setIdentifyForm }) => {
  const { mutate: sendSms, msg, ok } = usePostSms();
  const [code, setCode] = useState("");

  const handleChange = (field) => (e) => {
    const value = e.target.value;
    setIdentifyForm((draft) => {
      draft[field] = value;
    });
  };

  const handleSmsSend = () => {
    sendSms(identifyForm.userPhone);
  };

  const handleCode = (e) => {
    setCode(e.target.value);
  };

  return (
    <div>
      <HeaderBar text={"본인인증"} />
      <Title text1={"휴대폰 본인인증을"} text2={"진행해주세요"} />
      <div className="mt-35 flex flex-col space-y-5">
        {ok && <Input placeholder={"1234"} onChange={handleCode} />}
        <div className="flex flex-col flex-grow">
          <div className="flex justify-between space-x-3">
            <Input
              placeholder={"01082278983"}
              value={identifyForm.userPhone}
              onChange={handleChange("userPhone")}
              msg={msg ? msg : null}
              validate={ok ? true : false}
            />
            <span className="mt-2">
              <ShortButton
                text={"문자전송"}
                active={!!identifyForm.userPhone}
                onClick={handleSmsSend}
              />
            </span>
          </div>
          {ok ? (
            <div className="text-13 text-main-color p-5">전송되었습니다!</div>
          ) : (
            <div className="text-13 text-err-color p-5">잘못입력하였습니다</div>
          )}
        </div>

        <Input
          placeholder={"970114"}
          value={identifyForm.userInherentNumber}
          readOnly={true}
        />
        <Input
          placeholder={"홍길동"}
          value={identifyForm.userName}
          readOnly={true}
        />
      </div>
      <div className="flex flex-col justify-center items-center absolute left-0 bottom-0 w-full px-40 mb-50">
        <LongButton
          text={"다음"}
          active={!!identifyForm.userPhone}
          onClick={() => {
            alert("본인인증!");
          }}
        />
      </div>
    </div>
  );
};

export default Page3;

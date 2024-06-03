import React, { useState } from "react";
import Input from "stories/atoms/input";
import LongButton from "stories/atoms/longButton";
import Title from "stories/atoms/title";
import HeaderBar from "stories/molecules/headerBar";

const Page1 = ({ moveNextPage, identifyForm, setIdentifyForm }) => {
  const [name, setName] = useState("");

  const handleName = (e) => {
    const newName = e.target.value;
    setName(newName);
    setIdentifyForm((draft) => {
      draft.userName = newName;
    });
  };

  return (
    <div>
      <HeaderBar text={"본인인증"} />
      <Title text1={"이름을"} text2={"입력해주세요"} />
      <div className="mt-35">
        <Input placeholder={"홍길동"} onChange={handleName} />
      </div>
      <div className="flex flex-col justify-center items-center absolute left-0 bottom-0 w-full px-40 mb-50">
        <LongButton text={"다음"} active={!!name} onClick={moveNextPage} />
      </div>
    </div>
  );
};

export default Page1;

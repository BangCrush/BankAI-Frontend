import React, { useState } from "react";
import InherentInput from "stories/atoms/inherentInput";
import Input from "stories/atoms/input";
import LongButton from "stories/atoms/longButton";
import Title from "stories/atoms/title";
import HeaderBar from "stories/molecules/headerBar";

const Page2 = ({ moveNextPage, registForm, setRegistForm }) => {
  const [inherent, setInherent] = useState("");

  const handleInherent = (newInherent) => {
    setInherent(newInherent);
    setRegistForm((draft) => {
      draft.userInherentNumber = newInherent;
    });
  };

  return (
    <div>
      <HeaderBar text={"본인인증"} />
      <Title text1={"주민등록번호를"} text2={"입력해주세요"} />
      <div className="mt-35 flex flex-col space-y-5">
        <InherentInput onChange={handleInherent} />
        <Input placeholder={"홍길동"} value={registForm.userName} />
      </div>
      <div className="flex flex-col justify-center items-center absolute left-0 bottom-0 w-full px-40 mb-50">
        <LongButton text={"다음"} active={!!inherent} onClick={moveNextPage} />
      </div>
    </div>
  );
};

export default Page2;

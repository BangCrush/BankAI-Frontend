import React, { useState } from "react";
import Input from "stories/atoms/input";
import LongButton from "stories/atoms/longButton";
import Title from "stories/atoms/title";
import HeaderBar from "stories/molecules/headerBar";

const Page3 = ({ registForm, setRegistForm }) => {
  const [agency, setAgency] = useState("");
  const [phone, setPhone] = useState("");

  const handleAgency = (e) => {
    setAgency(e.target.value);
  };

  const handlePhone = (e) => {
    const newPhone = e.target.value;
    setPhone(newPhone);
    setRegistForm((draft) => {
      draft.userPhone = newPhone;
    });
  };

  return (
    <div>
      <HeaderBar text={"본인인증"} />
      <Title text1={"주민등록번호를"} text2={"입력해주세요"} />
      <div className="mt-35 flex flex-col space-y-5">
        <Input placeholder={"01082278983"} onChange={handlePhone} />
        <Input placeholder={"kt"} onChange={handleAgency} />
        <Input placeholder={"970114"} value={registForm.userInherentNumber} />
        <Input placeholder={"홍길동"} value={registForm.userName} />
      </div>
      <div className="flex flex-col justify-center items-center absolute left-0 bottom-0 w-full px-40 mb-50">
        <LongButton
          text={"다음"}
          active={!!agency && !!phone}
          onClick={() => {
            alert("본인인증!");
          }}
        />
      </div>
    </div>
  );
};

export default Page3;

import React, { useState } from "react";
import Input from "stories/atoms/input";
import LongButton from "stories/atoms/longButton";
import ShortButton from "stories/atoms/shortButton";
import Title from "stories/atoms/title";

const Page2 = ({ moveNextPage, registForm, setRegistForm }) => {
  const [name, setName] = useState("");

  const handleName = (e) => {
    const newName = e.target.value;
    setName(newName);
    setRegistForm((draft) => {
      draft.userName = newName;
    });
  };
  const onPopup = () => {
    const url = "zipcode";
    window.open(url, "_blank", "width=500, height=480");
  };

  return (
    <div>
      <Title text1={"회원가입"} text2={""} />
      <div className="pl-10">주소지를 입력해주세요.</div>
      <div className="mt-35 flex flex-col space-y-4">
        <div className="flex items-center justify-between space-x-3">
          <Input placeholder={"우편번호"} onChange={handleName} />
          <span className="mb-10" onClick={onPopup}>
            <ShortButton text={"찾기"} />
          </span>
        </div>

        <Input placeholder={"주소"} onChange={handleName} />
        <Input placeholder={"상세주소"} onChange={handleName} />
      </div>
      <div className="flex flex-col justify-center items-center fixed left-0 bottom-0 w-full px-40 mb-50">
        <LongButton text={"다음"} active={!!name} onClick={moveNextPage} />
      </div>
    </div>
  );
};

export default Page2;

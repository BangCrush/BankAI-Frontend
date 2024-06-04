import React from "react";
import InherentInput from "stories/atoms/inherentInput";
import Input from "stories/atoms/input";
import LongButton from "stories/atoms/longButton";
import Title from "stories/atoms/title";

const Page2 = ({ moveNextPage, registForm, setRegistForm }) => {
  const handleInherent = (newInherent) => {
    setRegistForm((draft) => {
      draft.userInherentNumber = newInherent;
    });
  };

  return (
    <>
      <Title text1={"주민등록번호를"} text2={"입력해주세요"} />
      <div className="mt-35 flex flex-col space-y-5">
        <InherentInput onChange={handleInherent} />
        <Input placeholder={"홍길동"} value={registForm.userNameKr} />
      </div>
      <div className="flex flex-col justify-center items-center absolute left-0 bottom-0 w-full px-40 mb-50">
        <LongButton
          text={"다음"}
          active={!!registForm.userInherentNumber}
          onClick={moveNextPage}
        />
      </div>
    </>
  );
};

export default Page2;

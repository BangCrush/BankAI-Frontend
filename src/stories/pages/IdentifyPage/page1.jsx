import React from "react";
import Input from "stories/atoms/input";
import LongButton from "stories/atoms/longButton";
import Title from "stories/atoms/title";

const Page1 = ({ moveNextPage, registForm, setRegistForm }) => {
  const handleName = (e) => {
    setRegistForm((draft) => {
      draft.userNameKr = e.target.value;
    });
  };

  return (
    <>
      <Title text1={"이름을"} text2={"입력해주세요"} />
      <div className="mt-35">
        <Input placeholder={"홍길동"} onChange={handleName} />
      </div>
      <div className="flex flex-col justify-center items-center absolute left-0 bottom-0 w-full px-40 mb-50">
        <LongButton
          text={"다음"}
          active={!!registForm.userNameKr}
          onClick={moveNextPage}
        />
      </div>
    </>
  );
};

export default Page1;

import React, { useState } from "react";
import LongButton from "stories/atoms/longButton";
import SelectBox from "stories/atoms/selectBox";
import Title from "stories/atoms/title";
import HeaderBar from "stories/molecules/headerBar";

const Page6 = ({ moveNextPage, mock }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const options = Array.from({ length: 28 }, (_, i) => `${i + 1}`);

  return (
    <div className="px-40 pt-30 w-full flex flex-col flex-1">
      <HeaderBar text={"대출가입"} />
      <Title text1={"자동 납부일을 선택해주세요"} />
      <div className="mt-35">
        <SelectBox
          options={options}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
      </div>
      <div className="flex flex-col justify-center items-center absolute left-0 bottom-0 w-full px-40 mb-50">
        <LongButton
          text={"다음"}
          active={!!selectedOption}
          onClick={moveNextPage}
        />
      </div>
    </div>
  );
};

export default Page6;

import { useState } from "react";
import AccSelectBox from "stories/atoms/accSelectBox";
import LongButton from "stories/atoms/longButton";
import SelectBox from "stories/atoms/selectBox";
import Title from "stories/atoms/title";
import HeaderBar from "stories/molecules/headerBar";

const Page3 = ({ moveNextPage, depositForm, setDepositForm }) => {
  const [selectedDay, setSelectedDay] = useState(null);

  return (
    <div>
      <HeaderBar text={"적금가입"} />
      <Title text1={"자동 이체일을 선택해주세요"} />
      <div className="mt-25">
        <SelectBox
          selectedOption={selectedDay}
          setSelectedOption={setSelectedDay}
        />
      </div>
      <div className="flex flex-col justify-center items-center mt-10 absolute left-0 bottom-0 w-full px-40 mb-50">
        <LongButton
          text={"다음"}
          active={!!selectedDay}
          onClick={moveNextPage}
        />
      </div>
    </div>
  );
};

export default Page3;

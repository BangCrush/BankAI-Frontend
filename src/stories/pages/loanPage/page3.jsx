import { useState } from "react";
import LongButton from "stories/atoms/longButton";
import SelectBox from "stories/atoms/selectBox";
import Title from "stories/atoms/title";
import HeaderBar from "stories/molecules/headerBar";

const Page3 = ({ moveNextPage, loanForm, setLoanForm }) => {
  const [selectedJob, setSelectedJob] = useState(null);

  const options = ["학생/군인", "무직", "프리랜서", "서비스 종사자"];

  return (
    <div className="px-40 pt-30 w-full flex flex-col">
      <HeaderBar text={"대출 가입"} />
      <Title text1={"대출 신용도 확인"} />
      <div className="pl-10">직업명을 선택해주세요</div>

      <div className="mt-25">
        <SelectBox
          options={options}
          selectedOption={selectedJob}
          setSelectedOption={setSelectedJob}
        />
      </div>

      <div className="flex flex-col justify-center items-center mt-10 absolute left-0 bottom-0 w-full px-40 mb-50">
        <LongButton
          text={"다음"}
          active={!!selectedJob}
          onClick={moveNextPage}
        />
      </div>
    </div>
  );
};

export default Page3;

import { useEffect, useState } from "react";
import LongButton from "stories/atoms/longButton";
import SelectBox from "stories/atoms/selectBox";
import Title from "stories/atoms/title";
import HeaderBar from "stories/molecules/headerBar";

const Page2 = ({ jobForm, setJobForm, moveToPage3, moveToPage4 }) => {
  const [selectedJob, setSelectedJob] = useState(null);

  const options = ["학생/군인", "무직", "직장인", "프리랜서"];

  useEffect(() => {
    setJobForm((draft) => {
      draft.jobName = selectedJob;
    });
  }, [selectedJob]);

  const handleNextClick = () => {
    if (selectedJob === "학생/군인" || selectedJob === "무직") {
      moveToPage4();
    } else {
      moveToPage3();
    }
  };

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

      <div className="max-w-640 flex flex-col justify-center items-center mt-10 absolute left-0 bottom-0 w-full px-40 mb-50">
        <LongButton
          text={"다음"}
          active={!!jobForm.jobName}
          onClick={handleNextClick}
        />
      </div>
    </div>
  );
};

export default Page2;

import { useEffect, useState } from "react";
import Input from "stories/atoms/input";
import LongButton from "stories/atoms/longButton";
import ShortButton from "stories/atoms/shortButton";
import Title from "stories/atoms/title";
import HeaderBar from "stories/molecules/headerBar";
import { usePutJobInfo } from "hooks/queries/userQueries";

const Page3 = ({ moveNextPage, jobForm, setJobForm }) => {
  const [zipcode, setZipcode] = useState(null);
  const { mutate: putJobInfo, isLoading, isError } = usePutJobInfo();

  const handleChange = (field) => (e) => {
    const value = e.target.value;
    setJobForm((draft) => {
      draft[field] = value;
    });
  };

  const onPopup = () => {
    const url = "zipcode";
    window.open(url, "_blank", "width=500, height=480");
  };

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.address) {
        setJobForm((draft) => {
          draft.companyAddr = event.data.address;
        });
      }
      if (event.data.zonecode) {
        console.log("zipcode", event.data.zonecode);
        setZipcode(event.data.zonecode);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [setJobForm]);

  const handleNextClick = async () => {
    putJobInfo(jobForm);
    moveNextPage();
  };

  return (
    <div className="px-40 pt-30 w-full flex flex-col">
      <HeaderBar text={"대출 가입"} />
      <Title text1={"대출 신용도 확인"} />
      <div className="pl-10">직장정보를 입력해주세요.</div>

      <div className="mt-35 flex flex-col space-y-4">
        <Input placeholder={"직장명"} onChange={handleChange("companyName")} />
        <div className="flex justify-between space-x-3">
          <Input
            placeholder={"직장 우편번호"}
            value={zipcode || ""}
            readonly={true}
          />
          <span className="mt-2" onClick={onPopup}>
            <ShortButton text={"검색"} active={true} />
          </span>
        </div>
        <Input
          placeholder={"직장 주소"}
          value={jobForm.companyAddr || ""}
          readonly={true}
          onChange={handleChange("companyAddr")}
        />
        <Input
          placeholder={"직장 전화번호"}
          onChange={handleChange("companyPhone")}
        />
      </div>

      <div className="max-w-640 flex flex-col justify-center items-center mt-10 absolute left-0 bottom-0 w-full px-40 mb-50">
        <LongButton
          text={"다음"}
          active={
            !!jobForm.companyName &&
            !!jobForm.companyAddr &&
            !!jobForm.companyPhone
          }
          onClick={handleNextClick}
          disabled={isLoading}
        />
      </div>
    </div>
  );
};

export default Page3;

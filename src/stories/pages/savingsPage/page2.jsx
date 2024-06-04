import { useGetAllAccount } from "hooks/queries/accountQueries";
import { useState } from "react";
import AccSelectBox from "stories/atoms/accSelectBox";
import LongButton from "stories/atoms/longButton";
import Title from "stories/atoms/title";
import HeaderBar from "stories/molecules/headerBar";

const Page2 = ({ moveNextPage, depositForm, setDepositForm }) => {
  const [selectedAcc, setSelectedAcc] = useState(null);
  const { data: allAccount } = useGetAllAccount();

  let accCodes = [];
  if (allAccount) {
    accCodes = allAccount.map((item) => item.accCode);
  }

  return (
    <div>
      <HeaderBar text={"적금가입"} />
      <Title text1={"어느계좌에서 출금할까요?"} />
      <div className="mt-25">
        {accCodes && (
          <AccSelectBox
            options={accCodes}
            selectedOption={selectedAcc}
            setSelectedOption={setSelectedAcc}
          />
        )}
      </div>
      <div className="flex flex-col justify-center items-center mt-10 absolute left-0 bottom-0 w-full px-40 mb-50">
        <LongButton
          text={"다음"}
          active={!!selectedAcc}
          onClick={moveNextPage}
        />
      </div>
    </div>
  );
};

export default Page2;

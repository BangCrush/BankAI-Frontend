import { useState } from "react";
import LongButton from "stories/atoms/longButton";
import Title from "stories/atoms/title";
import HeaderBar from "stories/molecules/headerBar";
import MediumInput from "stories/molecules/mediumInput";

const Page1 = ({ moveNextPage, depositForm, setDepositForm }) => {
  const [money, setMoney] = useState(0);
  const [error, setError] = useState(true);

  const onMoneyChange = (e) => {
    const value = e.target.value;
    // 숫자인지 확인
    if (!isNaN(value)) {
      setMoney(value);
      if (value && Number(value) < 100) {
        setError("최소 100만원 이상 입력해야 합니다.");
      } else {
        setError("");
      }
    } else {
      setError("숫자를 입력해야 합니다.");
    }
  };

  return (
    <div>
      <HeaderBar text={"적금가입"} />
      <Title text1={"얼마를 저축할까요?"} />
      <div className="mt-25">
        <MediumInput
          placeholder={"최소 100만원"}
          active={true}
          text={"만원 을"}
          onChange={onMoneyChange}
          error={error}
        />
        <MediumInput
          placeholder={"12개월"}
          active={false}
          text={"만기로 저축"}
        />
      </div>
      <div className="flex flex-col justify-center items-center mt-10 absolute left-0 bottom-0 w-full px-40 mb-50">
        <LongButton
          text={"다음"}
          active={!!money && !error}
          onClick={moveNextPage}
        />
      </div>
    </div>
  );
};

export default Page1;

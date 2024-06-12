import { useState, useEffect } from "react";
import LongButton from "stories/atoms/longButton";
import Title from "stories/atoms/title";
import HeaderBar from "stories/molecules/headerBar";
import MediumInput from "stories/molecules/mediumInput";

const Page1 = ({
  moveNextPage,
  depositForm,
  setDepositForm,
  prodMin,
  prodCode,
  result,
  setResult,
  setOptions,
  setType,
  setSrc,
}) => {
  const [error, setError] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setResult(null);
  }, []);

  const handleProgress = () => {
    setProgress(progress + 1);
  };
  // progress 0: data 입력 진행중, progress 1: data 입력받음
  useEffect(() => {
    if (progress === 0) {
      if (result && result.result) {
        if (result.result < 30000) {
          setError("최소 금액을 확인해주세요.");
          return;
        }
        setDepositForm((draft) => {
          console.log(result.result);
          draft.amount = result.result;
          draft.prodCode = prodCode;
          draft.period = 12;
        });
        handleProgress();
      }
    }
    if (progress === 1) {
      if (result === "맞아") {
        setError(false);
        setResult(null);
        moveNextPage();
      } else {
        setProgress(0);
        setResult(null);
        setSrc("/assets/inputDepositAmount.mov");
        setType("number");
      }
    }
  }, [result]);

  useEffect(() => {
    if (progress === 1) {
      setOptions([{ name: "맞아" }, { name: "다시 입력할래" }]);
      setType("text");
      setSrc("/assets/checkAmount.mov");
    }
  }, [progress]);

  const onMoneyChange = (e) => {
    const value = e.target.value;
    setDepositForm((draft) => {
      draft.amount = value * 10000;
    });
    clearTimeout();
    // 숫자인지 확인
    if (!isNaN(value)) {
      setTimeout(() => {
        if (Number(value) < prodMin / 10000) {
          setError(`최소 ${prodMin / 10000}만원 이상 입력해야 합니다.`);
          setDepositForm((draft) => {
            draft.amount = 0;
          });
        } else {
          setError("");
          setDepositForm((draft) => {
            draft.amount = value * 10000;
            draft.prodCode = prodCode;
          });
        }
      }, 500);
    } else {
      setError("숫자를 입력해야 합니다.");
    }
  };

  return (
    <div>
      <HeaderBar text={"예금가입"} />
      <Title text1={"얼마를 저축할까요?"} />
      <div className="mt-25">
        <MediumInput
          placeholder={`최소 ${prodMin / 10000}만원`}
          active={true}
          text={"만원 을"}
          onChange={onMoneyChange}
          error={error}
          value={depositForm.amount / 10000}
        />
        <MediumInput
          placeholder={"12개월"}
          active={false}
          text={"만기로 저축"}
        />
      </div>
      <div className="flex flex-col justify-center items-center mt-10 absolute left-0 bottom-0 w-full px-40 mb-50">
        <LongButton text={"다음"} active={!error} onClick={moveNextPage} />
      </div>
    </div>
  );
};

export default Page1;

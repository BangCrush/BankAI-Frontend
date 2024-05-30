import HeaderBar from "stories/molecules/headerBar";
import Input from "stories/atoms/input";
import LongButton from "stories/atoms/longButton";
import { useState } from "react";

const Page1 = ({moveNextPage, setTransferForm}) => {

  const [inAcc, setInAcc] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInAcc = (e) => {
    const newAcc = e.target.value;
    setInAcc(newAcc);
    if (!(/^\d+$/.test(newAcc))) {
      setErrorMessage("숫자만 입력해주세요");
    } else{
      setErrorMessage("");
    }
    setTransferForm((draft) => {
      draft.inAccCode = newAcc;
    });
  };

  return (
    <div>
      <HeaderBar text={"이체"}></HeaderBar>
      <div className="pt-24 pb-50 relative">
        <p className="text-20 font-extrabold mb-24">
          어떤 계좌로 돈을 보낼까요?
        </p>
        <Input placeholder={"계좌번호"} onChange={handleInAcc}></Input>
        <div className="flex flex-col justify-center items-center mt-10 fixed left-0 bottom-0 w-full px-40 mb-50">
          <LongButton text={"다음"} active={!!inAcc & errorMessage === ""} onClick={moveNextPage}/>
        </div>
        { !!inAcc? <p className="ml-10 check-valid text-13 text-err-color">{errorMessage}</p> : "" }
      </div>
    </div>
  );
};

export default Page1;

import HeaderBar from "stories/molecules/headerBar";
import Input from "stories/atoms/input";
import LongButton from "stories/atoms/longButton";
import BottomSheet from "stories/organisms/bottomSheet";
import { useState } from "react";
import TransferWarningPage from "../bottomPages/transferWarningPage";

const Page1 = ({
  moveNextPage,
  transferForm,
  setTransferForm,
  accBal,
  accInfo,
  setAccInfo,
}) => {
  const [inAcc, setInAcc] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [open, setOpen] = useState(false);

  const status = 202;

  const handleInputAcc = (e) => {
    const newAcc = e.target.value;
    setInAcc(newAcc);
    if (!/^\d+$/.test(newAcc)) {
      setErrorMessage("숫자만 입력해주세요");
    } else {
      setErrorMessage("");
    }
  };

  const handleSendAcc = () => {
    setTransferForm((draft) => {
      draft.inAccCode = inAcc;
    });
    setAccInfo((draft) => {
      draft.accCode = inAcc;
      draft.userName = "기모이";
    });
    moveNextPage();
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <HeaderBar text={"이체"}></HeaderBar>
      <div className="pt-24 pb-50 relative">
        <p className="text-20 font-extrabold mb-24">
          어떤 계좌로 돈을 보낼까요?
        </p>

        <Input placeholder={"계좌번호"} onChange={handleInputAcc}></Input>
        <div className="flex flex-col justify-center items-center mt-10 fixed left-0 bottom-0 w-full px-40 mb-50">
          <LongButton
            text={"다음"}
            active={!!inAcc & (errorMessage === "")}
            onClick={status === 200 ? handleSendAcc : handleOpen}
          />
        </div>
        {!!inAcc ? (
          <p className="ml-10 check-valid text-13 text-err-color">
            {errorMessage}
          </p>
        ) : (
          ""
        )}
      </div>
      <BottomSheet
        open={open}
        setOpen={setOpen}
        page={<TransferWarningPage></TransferWarningPage>}
      />
    </div>
  );
};

export default Page1;

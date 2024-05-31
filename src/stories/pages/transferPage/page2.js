import HeaderBar from "stories/molecules/headerBar";
import LongButton from "stories/atoms/longButton";
import BottomSheet from "stories/organisms/bottomSheet";
import { useState } from "react";
import TransferCheckPage from "../bottomPages/transferCheckPage";
import TransferWarningPage from "../bottomPages/transferWarningPage";
const Page2 = ({
  moveNextPage,
  transferForm,
  setTransferForm,
  accBal,
  accInfo,
  setAccInfo,
}) => {
  const [amount, setAmount] = useState("");
  const [inputWidth, setInputWidth] = useState(190);
  const [errorMessage, setErrorMessage] = useState("");
  const [open, setOpen] = useState(false);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setAmount(value);
    if (!/^\d+$/.test(value)) {
      setErrorMessage("숫자만 입력해주세요");
    } else {
      setErrorMessage("");
    }
    setInputWidth(value.length * 15);
    if (value.length === 0) setInputWidth(190);
  };

  const handleOpen = () => {
    setTransferForm((draft) => {
      draft.amount = amount;
    });
    setOpen(true);
  };

  return (
    <div>
      <HeaderBar text={"이체"}></HeaderBar>
      <div className="pt-24 pb-50">
        <p className="text-20">
          <span className="font-extrabold">내 보통예금 계좌</span>에서
        </p>
        <p className="text-14 mb-30">잔액 {accBal.toLocaleString()}원</p>
        <p className="text-20">
          <span className="font-extrabold">{accInfo.userName}님</span>에게
        </p>
        <p className="text-11 text-gray-950 mb-24">뱅크시 {accInfo.accCode}</p>
        <input
          type="text"
          className={`text-24 font-extrabold focus:outline-none placeholder:font-extrabold placeholder:text-24 h-30 ${amount > accBal ? "text-err-color" : ""}`}
          placeholder="얼마를 보낼까요?"
          value={amount}
          onChange={handleInputChange}
          style={{ width: `${inputWidth}px` }}
        />
        <span className="font-extrabold text-24 here">
          {" "}
          {amount ? `원` : ""}
        </span>
        {!!amount ? (
          <p className="ml-10 check-valid text-13 text-err-color">
            {errorMessage}
          </p>
        ) : (
          ""
        )}

        <div className="flex flex-col justify-center items-center mt-10 fixed left-0 bottom-0 w-full px-40 mb-50">
          <LongButton
            text={"다음"}
            active={!!amount & (errorMessage === "") & (amount <= accBal)}
            onClick={handleOpen}
          />
          <BottomSheet
            open={open}
            setOpen={setOpen}
            page={
              true ? (
                <TransferWarningPage></TransferWarningPage>
              ) : (
                <TransferCheckPage
                  name={accInfo.userName}
                  accNum={accInfo.accCode}
                  amount={amount}
                  moveNextPage={moveNextPage}
                ></TransferCheckPage>
              )
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Page2;

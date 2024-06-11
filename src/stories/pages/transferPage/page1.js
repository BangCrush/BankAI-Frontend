import HeaderBar from "stories/molecules/headerBar";
import Input from "stories/atoms/input";
import LongButton from "stories/atoms/longButton";
import BottomSheet from "stories/organisms/bottomSheet";
import { useEffect, useState } from "react";
import TransferWarningPage from "../bottomPages/transferWarningPage";
import { searchAccount } from "api/accountApi";
import { accFormatter } from "globalFunc/formatter";

const Page1 = ({
  moveNextPage,
  setTransferForm,
  setAccInfo,
  result,
  setResult,
  setOptions,
  setType,
  setSrc,
}) => {
  const [inAcc, setInAcc] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setResult(null);
  }, [])

  useEffect(() => {
    if (progress === 0) {
      if (result && result.result) {
        setInAcc(result.result);
        setProgress(1);
      }
    } else if (progress === 1) {
      if (result === "맞아") {
        handleSearchAcc();
      } else {
        setProgress(0);
        setSrc("/assets/inputInAccNum.mov");
        setType("number");
      }
    }
  }, [result]);

  useEffect(() => {
    if (progress === 1) {
      setOptions([{ name: "맞아" }, { name: "다시 입력할래" }]);
      setType("text");
      setSrc("/assets/checkAccNum.mov");
    }
  }, [progress]);

  const handleInputAcc = (e) => {
    const newAcc = e.target.value;
    setInAcc(newAcc);
    if (!/^\d+$/.test(newAcc)) {
      setErrorMessage("숫자만 입력해주세요");
    } else {
      setErrorMessage("");
    }
  };

  const handleSearchAcc = () => {
    searchAccount(accFormatter(inAcc)).then((res) => {
      if (res.status === 200) {
        handleSendAcc(res.data.userName);
      } else {
        handleOpen();
      }
    });
  };

  const handleSendAcc = (userName) => {
    setTransferForm((draft) => {
      draft.inAccCode = inAcc;
    });
    setAccInfo((draft) => {
      draft.accCode = inAcc;
      draft.userName = userName;
    });
    moveNextPage();
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <HeaderBar text={"이체"}></HeaderBar>
      <div className="pt-24 pb-50">
        <p className="text-20 font-extrabold mb-24">
          어떤 계좌로 돈을 보낼까요?
        </p>

        <Input
          placeholder={"계좌번호"}
          onChange={handleInputAcc}
          value={inAcc}
        ></Input>
        <div className="max-w-640 flex flex-col justify-center items-center mt-10 fixed left-0 bottom-0 w-full px-40 mb-50">
          <LongButton
            text={"다음"}
            active={!!inAcc & (errorMessage === "")}
            onClick={handleSearchAcc}
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

import { useState } from "react";
import PwdPage from "../pwdPage";

const Page3 = ({
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
    })
    setOpen(true);
  };

  return (
    <PwdPage></PwdPage>
  );
};

export default Page3;

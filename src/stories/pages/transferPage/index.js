import { useEffect, useState } from "react";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import { useImmer } from "use-immer";
import AudioRecordPage from "../audioRecordPage";

const TransferPage = () => {
  const [page, setPage] = useState(1);
  const [result, setResult] = useState(null);

  const transferAIList = [
    { name: "메인 페이지", data: "/main" },
    { name: "계좌번호", data: result },
    { name: "이체금액", data: result },
    { name: "비밀번호 입력페이지", data: "/password" },
  ];

  useEffect(() => {
    if (result) {
      const findData = transferAIList.find((data) => result === data.name);
      if (
        findData &&
        (findData.result === "메인 페이지" ||
          findData.result === "비밀번호 입력페이지")
      ) {
        window.location.href = findData.result;
      } else if (findData) {
        setResult(findData.result);
      }
    }
  }, [result]);

  const accBal = 89523400;

  const moveNextPage = () => {
    setPage((currentPage) => currentPage + 1);
  };

  const [transferForm, setTransferForm] = useImmer({
    inAccCode: "",
    inBankCode: "C04",
    outAccCode: "",
    outBankCode: "C04",
    amount: 0,
  });

  const [accInfo, setAccInfo] = useImmer({
    accCode: "",
    userName: "",
  });

  return (
    <div>
      {page === 1 && (
        <Page1
          moveNextPage={moveNextPage}
          transferForm={transferForm}
          setTransferForm={setTransferForm}
          accBal={accBal}
          accInfo={accInfo}
          setAccInfo={setAccInfo}
          result={result}
        />
      )}
      {page === 2 && (
        <Page2
          moveNextPage={moveNextPage}
          transferForm={transferForm}
          setTransferForm={setTransferForm}
          accBal={accBal}
          accInfo={accInfo}
          setAccInfo={setAccInfo}
        />
      )}
      {page === 3 && (
        <Page3
          moveNextPage={moveNextPage}
          transferForm={transferForm}
          setTransferForm={setTransferForm}
          accBal={accBal}
          accInfo={accInfo}
          setAccInfo={setAccInfo}
        />
      )}
      <AudioRecordPage
        setResult={setResult}
        options={transferAIList}
        type={"number"}
      />
    </div>
  );
};

export default TransferPage;

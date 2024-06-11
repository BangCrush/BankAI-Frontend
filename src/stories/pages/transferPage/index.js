import { useContext, useEffect, useState } from "react";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import { useImmer } from "use-immer";
import { useNavigate } from "react-router-dom";
import { VideoStateContext, VoiceServiceStateContext } from "App";

const TransferPage = () => {
  const [page, setPage] = useState(1);
  const { result, setResult, setOptions, setType } = useContext(
    VoiceServiceStateContext,
  );
  const {setSrc} = useContext(VideoStateContext);

  const transferAIList = [
    { name: "메인 페이지", data: "/main" },
    { name: "계좌번호", data: result },
    { name: "이체금액", data: result },
    { name: "비밀번호 입력페이지", data: "/password" },
  ];

  useEffect(() => {
    setOptions(transferAIList);
    setType("number");
    setSrc("/assets/inputInAccNum.mov");
    setResult(null);
  }, []);

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
          accInfo={accInfo}
          setAccInfo={setAccInfo}
          result={result}
          setResult={setResult}
          setOptions={setOptions}
          setType={setType}
          setSrc={setSrc}
        />
      )}
      {page === 2 && (
        <Page2
          moveNextPage={moveNextPage}
          transferForm={transferForm}
          setTransferForm={setTransferForm}
          accInfo={accInfo}
          setAccInfo={setAccInfo}
          result={result}
          setResult={setResult}
          setOptions={setOptions}
          setType={setType}
          setSrc={setSrc}
        />
      )}
      {page === 3 && (
        <Page3
          moveNextPage={moveNextPage}
          transferForm={transferForm}
          setTransferForm={setTransferForm}
          accInfo={accInfo}
          setAccInfo={setAccInfo}
        />
      )}
    </div>
  );
};

export default TransferPage;

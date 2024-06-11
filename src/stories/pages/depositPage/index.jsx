import { useState, useEffect, useContext } from "react";
import Page1 from "./page1";
import { useImmer } from "use-immer";
import Page2 from "./page2";
import { useLocation } from "react-router-dom";
import { productSubscription } from "constants/products";
import { AudioStateContext, VideoStateContext, VoiceServiceStateContext } from "App";

const DepositPage = () => {
  const [page, setPage] = useState(1);
  const location = useLocation();
  const { prodCode, prodMin } = location.state || {};

  const { result, setResult, setOptions, setType } = useContext(
    VoiceServiceStateContext,
  );
  const {setSrc,setIsVideoPlaying} = useContext(VideoStateContext);
  const {setText,setAudio} = useContext(AudioStateContext);
  const transferAIList = [
    { name: "메인 페이지", data: "/main" },
    { name: "계좌번호", data: result },
    { name: "이체금액", data: result },
    { name: "비밀번호 입력페이지", data: "/password" },
  ];

  useEffect(() => {
    setIsVideoPlaying(0);
    setAudio(null);
    setOptions(transferAIList);
    setResult(null);
    setType("number");
    setSrc("/assets/inputDepositAmount.mov");
  }, []);

  const [depositForm, setDepositForm] = useImmer(productSubscription);

  const moveNextPage = () => {
    setPage((currentPage) => currentPage + 1);
  };

  return (
    <div>
      {page === 1 && (
        <Page1
          moveNextPage={moveNextPage}
          depositForm={depositForm}
          setDepositForm={setDepositForm}
          prodMin={prodMin}
          prodCode={prodCode}
          result={result}
          setOptions={setOptions}
          setType={setType}
          setSrc={setSrc}
          setResult={setResult}
        />
      )}

      {page === 2 && (
        <Page2
          depositForm={depositForm}
          setDepositForm={setDepositForm}
          result={result}
          setOptions={setOptions}
          setType={setType}
          setSrc={setSrc}
          setResult={setResult}
        />
      )}
    </div>
  );
};

export default DepositPage;

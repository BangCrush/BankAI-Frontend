import { useState, useEffect } from "react";
import PwdDots from "stories/molecules/pwdDots";
import PwdKeyboard from "stories/organisms/pwdKeyboard";

const PwdPage = () => {
  const [pwd, setPwd] = useState("");
  const [finalPwd, setFinalPwd] = useState("");
  const [isMatched, setIsMatched] = useState(null);
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (step === 1 && pwd.length === 4) {
      setStep(2);
      setFinalPwd(""); // 입력란비움
    } else if (step === 2 && finalPwd.length === 4) {
      if (pwd === finalPwd) {
        setIsMatched(true);

        window.opener.postMessage({ pwd, isMatched: "true" }, "*");
        window.close();
      } else {
        setIsMatched(false);
        setFinalPwd("");
        setStep(1);
      }
    }
  }, [pwd, finalPwd, step]);

  return (
    <div className="w-400 flex flex-col gap-20 border p-20">
      <h2 className="flex flex-col justify-center items-center text-20 font-semibold p-20 mx-auto">
        {step === 1 ? "비밀번호를 입력해 주세요" : "비밀번호를 재입력해 주세요"}
        {isMatched === false && (
          <div className="text-sm text-err-color font-semibold mt-3">
            비밀번호가 일치하지 않습니다.
          </div>
        )}
      </h2>

      <PwdDots input={step === 1 ? pwd : finalPwd} />
      <PwdKeyboard
        input={step === 1 ? pwd : finalPwd}
        setInput={step === 1 ? setPwd : setFinalPwd}
      />
    </div>
  );
};

export default PwdPage;

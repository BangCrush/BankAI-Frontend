import { postFindId } from "api/userApi";
import { usePostEmailSend, usePostFindId } from "hooks/queries/userQueries";
import { useState } from "react";
import Input from "stories/atoms/input";
import LongButton from "stories/atoms/longButton";
import ShortButton from "stories/atoms/shortButton";
import AlertModal from "stories/molecules/alertModal";

function FindIdPage() {
  const [alertType, setAlertType] = useState(null);
  const [alertContent, setAlertContent] = useState(null);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [emailSended, setEmailSended] = useState(false);
  const [inputCode, setInputCode] = useState(false);
  const [ok, setOk] = useState(false);
  const { mutate: sendEmail, emailCode } = usePostEmailSend();
  const { mutate: findId, id } = usePostFindId();

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleCode = (e) => {
    setInputCode(e.target.value);
  };
  const handleVerify = () => {
    if (inputCode === emailCode) {
      setOk(true);
      setAlertType("success");
      setAlertContent("인증번호가 일치합니다.");
      setOpen(true);
    } else {
      setAlertType("error");
      setAlertContent("인증번호가 일치하지 않습니다.");
      setOpen(true);
    }
  };
  const onConfirm = () => {
    if (name === null || name === "") {
      setAlertType("error");
      setAlertContent("이름을 입력해주세요");
      setOpen(true);
      return;
    }
    if (email === null || email === "") {
      setAlertType("error");
      setAlertContent("이메일을 입력해주세요");
      setOpen(true);
      return;
    }
    if (!emailSended) {
      setEmailSended(true);
      sendEmail(email);
      return;
    }
    if (!ok) {
      setAlertType("error");
      setAlertContent("이메일 인증번호를 확인해주세요");
      setOpen(true);
      return;
    }
    findId({ name, email });
  };

  return (
    <div id="findId" className="w-400 flex flex-col gap-40 border p-20">
      {id ? (
        <div className="flex flex-col justify-center items-center text-20 font-semibold p-20 mx-auto">
          아이디는 {id} 입니다.
        </div>
      ) : (
        <>
          <h2 className="flex flex-col justify-center items-center text-20 font-semibold p-20 mx-auto">
            아이디 찾기
          </h2>
          <Input placeholder="이름" onChange={handleName} />
          <Input placeholder="이메일" onChange={handleEmail} />
          {emailSended ? (
            <div className="flex gap-10">
              <Input placeholder="인증번호 입력" onChange={handleCode} />
              <ShortButton text="인증" active={true} onClick={handleVerify} />
            </div>
          ) : null}
          <LongButton text="확인" active={true} onClick={onConfirm} />
          <AlertModal
            open={open}
            setOpen={setOpen}
            severity={alertType}
            content={alertContent}
            handleClose={() => {
              setOpen(false);
            }}
          />
        </>
      )}
    </div>
  );
}

export default FindIdPage;

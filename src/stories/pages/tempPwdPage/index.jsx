import { usePostLogin, usePostTempPwd } from "hooks/queries/userQueries";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Input from "stories/atoms/input";
import LongButton from "stories/atoms/longButton";
import Title from "stories/atoms/title";
import { useImmer } from "use-immer";
import { useRef } from "react";
import AlertModal from "stories/molecules/alertModal";

const TempPwdPage = () => {
  const [tempPwdForm, setTempPwdForm] = useImmer({
    userNameKr: "",
    userId: "",
    userEmail: "",
  });

  const nameRef = useRef(null);
  const idRef = useRef(null);
  const emailRef = useRef(null);
  const [open, setOpen] = useState(false);

  const { mutate: postTempPwd } = usePostTempPwd();

  const handleTempPwdForm = () => {
    let name = nameRef.current.value;
    let id = idRef.current.value;
    let email = emailRef.current.value;

    setTempPwdForm((draft) => {
      draft.userNameKr = name;
      draft.userEmail = email;
      draft.userId = id;
    });
  };

  useEffect(() => {
    if (tempPwdForm.userEmail) {
      // console.log(tempPwdForm);
      postTempPwd(tempPwdForm);
      setOpen(true);
      setTimeout(() => {
        window.close();
      }, 3000);
    }
  }, [tempPwdForm]);

  return (
    <div className="max-w-350">
      <Title text1={"임시 비밀번호 발급"} text2={""} />
      <div className="grid grid-cols-1 gap-20 mt-20">
        <input
          className="rounded-10 focus:outline-none bg-gray-input px-12 py-15 w-300 placeholder:text-gray-placeholder text-14 flex-auto"
          type="text"
          ref={nameRef}
          placeholder="이름"
        />
        <input
          className="rounded-10 focus:outline-none bg-gray-input px-12 py-15 w-300 placeholder:text-gray-placeholder text-14 flex-auto"
          type="text"
          ref={idRef}
          placeholder="아이디"
        />
        <input
          className="rounded-10 focus:outline-none bg-gray-input px-12 py-15 w-300 placeholder:text-gray-placeholder text-14 flex-auto"
          type="text"
          ref={emailRef}
          placeholder="회원가입 당시 사용한 이메일"
        />
      </div>
      <div className="max-w-400 flex flex-col justify-center items-center mt-10 absolute left-0 bottom-0 w-300 px-40 mb-50">
        <LongButton
          text={"비밀번호 재발급"}
          onClick={handleTempPwdForm}
          active={true}
        />
      </div>
      <AlertModal open={open} setOpen={setOpen} severity={"success"} content={`임시 비밀번호가 발급되었습니다.`} handleClose={()=>{setOpen(true)}}/>
    </div>
  );
};

export default TempPwdPage;

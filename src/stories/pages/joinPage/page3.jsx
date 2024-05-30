import useValid from "hooks/useValid";
import React, { useState } from "react";
import Input from "stories/atoms/input";
import LongButton from "stories/atoms/longButton";
import Title from "stories/atoms/title";

const Page3 = ({ moveNextPage, registForm, setRegistForm }) => {
  // 서버통신 코드 로직
  // const { mutate: signUp } = useMutation(postSignUp);

  const [name, setName] = useState("");
  const { validText, isValid } = useValid(registForm);
  const [error, setError] = useState(false);

  const handleName = (e) => {
    const newName = e.target.value;
    setName(newName);
    setRegistForm((draft) => {
      draft.userName = newName;
    });
  };

  const handleClick = () => {
    if (
      isValid.isUserId &&
      isValid.isUserPassword &&
      isValid.isUserRePassword
    ) {
      // 서버에 보내기
      // signUp({
      //   userId: registForm.userId,
      //   userPwd: registForm.userPwd,
      //   userName: registForm.userName,
      //   userNameEn: registForm.userNameEn,
      //   userInherentNumber: registForm.userInherentNumber,
      //   userPhone: registForm.userPhone,
      //   userAddr: registForm.userAddr,
      //   userAddrDetail: registForm.userAddrDetail,
      //   userEmail: registForm.userEmail,
      // });
    } else {
      setError(
        !isValid.isUserId ||
          !isValid.isUserPassword ||
          !isValid.isUserRePassword,
      );
    }
  };

  return (
    <div>
      <Title text1={"회원가입"} text2={""} />
      <div className="pl-10">아이디/패스워드를 설정해주세요.</div>
      <div className="mt-35 flex flex-col space-y-4">
        <Input placeholder={"아이디"} onChange={handleName} />
        <Input placeholder={"비밀번호"} onChange={handleName} />
        <Input placeholder={"비밀번호 재확인"} onChange={handleName} />
      </div>
      <div className="flex flex-col justify-center items-center fixed left-0 bottom-0 w-full px-40 mb-50">
        <LongButton text={"가입하기"} active={!!name} onClick={handleClick} />
      </div>
    </div>
  );
};

export default Page3;

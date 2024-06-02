import { usePostIdCheck } from "hooks/queries/userQueries";
import useValid from "hooks/useValid";
import React, { useState } from "react";
import { useMutation } from "react-query";
import Input from "stories/atoms/input";
import LongButton from "stories/atoms/longButton";
import ShortButton from "stories/atoms/shortButton";
import Title from "stories/atoms/title";

const Page3 = ({ registForm, setRegistForm }) => {
  // 서버통신 코드 로직
  // const { mutate: signUp } = useMutation(postSignUp);
  // server
  const { mutate: checkId, ok } = usePostIdCheck();

  const { validText, isValid } = useValid(registForm);
  const [error, setError] = useState(false);

  const handleChange = (field) => (e) => {
    const value = e.target.value;
    setRegistForm((draft) => {
      draft[field] = value;
    });
  };

  const handleId = () => {
    checkId(registForm.userId);
  };

  const handleClick = () => {
    if (isValid.isUserPassword && isValid.isUserRePassword) {
      window.location.href = "/login";
      alert("후에 서버통신 해야된다!");
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
        <div className="flex items-center justify-between space-x-3">
          <Input
            placeholder={"아이디"}
            onChange={handleChange("userId")}
            msg={validText.userId}
          />
          <span className="mb-10" onClick={handleId}>
            <ShortButton text={"중복체크"} />
          </span>
        </div>

        <Input
          placeholder={"비밀번호"}
          onChange={handleChange("userPwd")}
          msg={validText.userPwd}
          type="password"
        />
        <Input
          placeholder={"비밀번호 재확인"}
          onChange={handleChange("userRePwd")}
          msg={validText.userRePwd}
          type="password"
        />
      </div>
      <div className="flex flex-col justify-center items-center absolute left-0 bottom-0 w-full px-40 mb-50">
        <LongButton
          text={"가입하기"}
          active={isValid.isUserPassword && isValid.isUserRePassword}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Page3;

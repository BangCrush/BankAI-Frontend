import { useEffect, useState } from "react";

const useValid = (changeValue) => {
  const [validText, setValidText] = useState({
    userPwd: "",
    userRePwd: "",
    userNameKr: "",
    userNameEn: "",
    userInherentNumber: "",
    userPhone: "",
    userEmail: "",
  });

  const [isValid, setIsValid] = useState({
    isUserPassword: false,
    isUserRePassword: false,
    isUserNameKr: false,
    isUserNameEn: false,
    isUserInherentNumber: false,
    isUserPhone: false,
    isUserEmail: false,
  });

  // 이메일 형식 유효성 체크
  const validateEmail = (email) => {
    const exp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return exp.test(email);
  };

  // 비밀번호 형식 유효성 체크
  // 8자 이상 18자 이하, 대소문자, 특수문자, 숫자 하나이상 포함
  const validatePassword = (password) => {
    const exp =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    return exp.test(password);
  };

  // 이름 형식 유효성 체크
  // 숫자, 특수문자, 영어 x
  const validateName = (name) => {
    const exp = /^[가-힣]+$/;
    return exp.test(name);
  };

  // 영문 이름 형식 유효성 체크
  // 영어 대문자로만 구성(공백허용)
  const validateNameEn = (nameEn) => {
    const exp = /^[A-Z\s]+$/;
    return exp.test(nameEn);
  };

  // 전화번호 형식 유효성 체크
  // 숫자로만 구성
  const validatePhone = (phoneNumber) => {
    const exp = /^[0-9]+$/;
    return exp.test(phoneNumber);
  };

  const validateInherentNumber = (inherentNumber) => {
    const exp = /^[0-9]+$/;
    return exp.test(inherentNumber);
  };

  useEffect(() => {
    setValidText({
      ...validText,
      userNameKr: changeValue.userNameKr
        ? validateName(changeValue.userNameKr)
          ? ""
          : "특수문자와 숫자를 제외한 실명을 입력해주세요."
        : "",
      userNameEn: changeValue.userNameEn
        ? validateNameEn(changeValue.userNameEn)
          ? ""
          : "특수문자와 숫자를 제외한 대문자 영어로 입력해주세요."
        : "",
      userPhone: changeValue.userPhone
        ? validatePhone(changeValue.userPhone)
          ? ""
          : "숫자만 입력해주세요."
        : "",
      userEmail: changeValue.userEmail
        ? validateEmail(changeValue.userEmail)
          ? ""
          : "이메일 형식이 올바르지 않습니다."
        : "",
      userPwd: changeValue.userPwd
        ? validatePassword(changeValue.userPwd)
          ? ""
          : "비밀번호는 6자 이상 18자 이하, 대소문자, 특수문자, 숫자 하나이상 포함해야합니다."
        : "",
      userRePwd: changeValue.userRePwd
        ? changeValue.userPwd === changeValue.userRePwd
          ? ""
          : "비밀번호가 일치하지 않습니다."
        : "",
      userInherentNumber: changeValue.userInherentNumber
        ? validateInherentNumber(changeValue.userInherentNumber)
          ? ""
          : "주민등록번호 형식이 올바르지 않습니다."
        : "",
    });

    setIsValid({
      isUserNameKr: validateName(changeValue.userNameKr),
      isUserNameEn: validateNameEn(changeValue.userNameEn),
      isUserPhone: validatePhone(changeValue.userPhone),
      isUserEmail: validateEmail(changeValue.userEmail),
      isUserPassword: validatePassword(changeValue.userPwd),
      isUserRePassword: changeValue.userPwd === changeValue.userRePwd,
      isUserInherentNumber: validateInherentNumber(
        changeValue.userInherentNumber,
      ),
    });
  }, [changeValue]);

  return { validText, isValid };
};

export default useValid;

import { postEmailCheck, postEmailSend, postIdCheck } from "api/userApi";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";

// 아이디 중복 체크
export const usePostIdCheck = () => {
  const [ok, setOk] = useState(false);
  const mutation = useMutation((id) => postIdCheck(id), {
    onSuccess: () => {
      console.log("성공");
      setOk(true);
    },
    onError: () => {
      setOk(false);
    },
  });

  return { mutate: mutation.mutate, ok };
};

// 이메일 전송
export const usePostEmailSend = () => {
  const [emailOk, setEmailOk] = useState(null);
  const [emailCode, setEmailCode] = useState(null);
  const mutation = useMutation((email) => postEmailSend(email), {
    onSuccess: (res) => {
      setEmailOk(true);
      setEmailCode(res.data);
    },
    onError: () => {
      setEmailOk(false);
    },
  });

  return { mutate: mutation.mutate, emailOk, emailCode };
};

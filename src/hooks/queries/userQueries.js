import {
  postEmailCheck,
  postEmailSend,
  postIdCheck,
  postRegister,
} from "api/userApi";
import { useState } from "react";
import { useMutation } from "react-query";

// 아이디 중복 체크
export const usePostIdCheck = () => {
  const [ok, setOk] = useState(null);
  const mutation = useMutation((id) => postIdCheck(id), {
    onSuccess: (res) => {
      if (res.data.check) {
        setOk(false);
      } else {
        setOk(true);
      }
    },
  });

  return { mutate: mutation.mutate, ok };
};

export const usePostEmailCheck = () => {
  const [ok, setOk] = useState(null);
  const mutation = useMutation((email) => postEmailCheck(email), {
    onSuccess: (res) => {
      if (res.data.check) {
        setOk(false);
      } else {
        setOk(true);
      }
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
      if (res.data.check) {
        setEmailOk(false);
      } else {
        setEmailOk(true);
        setEmailCode(res.data);
      }
    },
  });

  return { mutate: mutation.mutate, emailOk, emailCode };
};

export const usePostRegister = () => {
  const mutation = useMutation((params) => postRegister(params), {
    onSuccess: (res) => {
      console.log(res);
    },
  });

  return { mutate: mutation.mutate };
};

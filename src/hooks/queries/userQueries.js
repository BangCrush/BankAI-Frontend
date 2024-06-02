import {
  postEmailCheck,
  postEmailSend,
  postIdCheck,
  postLogin,
  postRegister,
} from "api/userApi";
import { $axios } from "libs/axios";
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

export const usePostLogin = () => {
  const [msg, setMsg] = useState(null);
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);

  const mutation = useMutation((params) => postLogin(params), {
    onSuccess: (res) => {
      console.log(res);
      if (res.status === 202) {
        setMsg(res.message);
      } else {
        const accessToken = res.data.accessToken;
        const expirationTime =
          res.data.refreshTokenExpirationTime - 60 * 60 * 1000; // 1시간 전
        $axios.defaults.headers.common["Authorization"] =
          `Bearer ${accessToken}`;

        const now = Date.now();
        if (now >= expirationTime) {
          // 리프레시 토큰으로 새로운 액세스 토큰 요청
          // const newAccessToken = refreshResponse.data.accessToken;
          // 새로운 액세스 토큰 설정
          // $axios.defaults.headers.common[
          //   "Authorization"
          // ] = `Bearer ${newAccessToken}`;
        }
        setIsLoginSuccess(true);
      }
    },
  });

  return { mutate: mutation.mutate, msg, isLoginSuccess };
};
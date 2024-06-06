import {
  fixMyInfo,
  getMyInfo,
  onSilentRefresh,
  postEmailCheck,
  postEmailSend,
  postIdCheck,
  postLogin,
  postRegister,
  postReissue,
  postSmsSend,
  postSmsVerify,
  postTempPwd,
  putJobInfo,
} from "api/userApi";
import Cookies from "js-cookie";
import { $axios } from "libs/axios";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";

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
    onSuccess: async (res) => {
      if (res.status === 202) {
        setMsg(res.message);
      } else {
        const accessToken = res.data.accessToken;
        const refreshToken = res.data.refreshToken;

        const expirationTime = 30 * 60 * 1000;
        const refreshBefore = 10 * 60 * 1000;
        const now = Date.now();
        const accessTokenExpiration = now + expirationTime;

        $axios.defaults.headers.common["Authorization"] =
          `Bearer ${accessToken}`;
        Cookies.set("refreshToken", refreshToken, { expires: 7 });
        Cookies.set("accessToken", accessToken);
        Cookies.set("accessTokenExpiration", accessTokenExpiration);

        setTimeout(onSilentRefresh, expirationTime - refreshBefore);

        setIsLoginSuccess(true);
      }
    },
  });

  return { mutate: mutation.mutate, msg, isLoginSuccess };
};

export const useGetMyInfo = () => {
  return useQuery({
    queryKey: ["getAllProducts"],
    queryFn: () => getMyInfo(),
    select: (res) => res.data,
  });
};

export const usePostSms = () => {
  const [msg, setMsg] = useState(null);
  const [ok, setOk] = useState(null);

  const mutation = useMutation((userPhone) => postSmsSend(userPhone), {
    onSuccess: (res) => {
      if (res.status === 202) {
        setMsg(res.message);
        console.log("인증번호 발송 실패");
      } else {
        console.log("인증번호 발송 성공");
        setOk(true);
      }
    },
  });

  return { mutate: mutation.mutate, msg, ok };
};

export const usePostSmsVerify = () => {
  const [verifyMsg, setVerifyMsg] = useState(null);
  const [verifyOk, setVerifyOk] = useState(null);

  const mutation = useMutation(
    ({ userPhone, verificationCode }) =>
      postSmsVerify({ userPhone, verificationCode }),
    {
      onSuccess: (res) => {
        if (res.status === 202) {
          setVerifyMsg(res.message);
          console.log("인증번호 불일치");
          setVerifyOk(false);
        } else {
          console.log("인증번호 일치");
          setVerifyOk(true);
        }
      },
    },
  );

  return { mutate: mutation.mutate, verifyMsg, verifyOk };
};
export const usePutJobInfo = () => {
  const [ok, setOk] = useState(null);
  const mutation = useMutation((jobInfo) => putJobInfo(jobInfo), {
    onSuccess: (res) => {
      if (res.status === 200) {
        setOk(true);
      }
    },
  });

  return { mutate: mutation.mutate, ok };
};
export const useFixMyInfo = () => {
  const [ok, setOk] = useState(null);
  const mutation = useMutation((newData) => fixMyInfo(newData), {
    onSuccess: (res) => {
      if (res.status === 200) {
        setOk(true);
      }
    },
  });

  return { mutate: mutation.mutate, ok };
};
export const usePostTempPwd = () => {
  const mutation = useMutation((params) => postTempPwd(params), {
    onSuccess: (res) => {
      console.log(res);
    },
  });

  return { mutate: mutation.mutate };
};
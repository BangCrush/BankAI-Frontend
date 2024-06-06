import Cookies from "js-cookie";
import { $axios } from "libs/axios";

const USER_API = {
  ID_CHECK: () => "/register/check-id",
  EMAIL_CHECK: () => "/register/check-email",
  EMAIL_SEND: (email) => `/register/authenticate?email=${email}`,
  REGISTER: () => "/register",
  LOGIN: () => "/login",
  MY_INFO: () => "/users/user-info",
  REISSUE: () => "/login/reissue",
  SMS_SEND: () => "/register/sms-certification/send",
  SMS_VERIFY: () => "/register/sms-certification/verify",
  JOB_INFO: () => "/users/job-info",
  TEMP_PWD: () => "/login/temp-pwd",
};

export const postIdCheck = async (id) => {
  const res = await $axios.post(USER_API.ID_CHECK(), { userId: id });
  return res.data;
};

export const postEmailCheck = async (email) => {
  const res = await $axios.post(USER_API.EMAIL_CHECK(email), {
    userEmail: email,
  });
  return res.data;
};

export const postEmailSend = async (email) => {
  const res = await $axios.post(USER_API.EMAIL_SEND(email));
  return res.data;
};

export const postRegister = async (params) => {
  const res = await $axios.post(USER_API.REGISTER(), params);
  return res.message;
};

export const postLogin = async (params) => {
  const res = await $axios.post(USER_API.LOGIN(), params);
  return res.data;
};

export const getMyInfo = async () => {
  const res = await $axios.get(USER_API.MY_INFO());
  return res.data;
};

export const postReissue = async ({ accessToken, refreshToken }) => {
  const res = await $axios.post(USER_API.REISSUE(), {
    accessToken,
    refreshToken,
  });
  return res.data;
};

export const onLogInSuccess = (res) => {
  const { accessToken } = res.data;
  $axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
};

export const onSilentRefresh = async () => {
  const refreshToken = Cookies.get("refreshToken");
  const accessToken = Cookies.get("accessToken");
  $axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

  if (refreshToken) {
    try {
      const res = await postReissue({ accessToken, refreshToken });
      if (res) {
        $axios.defaults.headers.common["Authorization"] =
          `Bearer ${res.data.accessToken}`;
      }
    } catch (error) {
      if (error.response?.status === 401) {
        console.log("refresh token 만료");
      }
    }
  } else {
    console.log("No refresh token found");
    window.location.href = "/login";
  }
};

export const postSmsSend = async (userPhone) => {
  const res = await $axios.post(USER_API.SMS_SEND(), { userPhone });
  return res.data;
};

export const postSmsVerify = async ({ userPhone, verificationCode }) => {
  const res = await $axios.post(USER_API.SMS_VERIFY(), {
    userPhone,
    verificationCode,
  });
  return res.data;
};

export const putJobInfo = async (jobInfo) => {
  const res = await $axios.put(USER_API.JOB_INFO(), jobInfo);
  return res.data;
};

export const fixMyInfo = async (newData) => {
  const res = await $axios.put(USER_API.MY_INFO(), newData);
  return res.data;
}

export const postTempPwd = async (params) => {
  const res = await $axios.post(USER_API.TEMP_PWD(), params);
  return res.data;
};
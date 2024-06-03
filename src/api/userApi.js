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

export const getMyInfo = async (params) => {
  const res = await $axios.get(USER_API.MY_INFO(), {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYW1zaWNsb3ZlciIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE3MTczNDc4NjF9.y5em2qX-ziuBU34AKcZDN01LiuRTBP_Y3JZpAwYcgr4`,
    },
  });
  return res.data;
};

export const postReissue = async ({ accessToken, refreshToken }) => {
  const res = await $axios.post(USER_API.REISSUE(), {
    accessToken,
    refreshToken,
  });
  $axios.defaults.headers.common["Authorization"] = accessToken;
  return res.data;
};

export const onLogInSuccess = (res) => {
  const { accessToken } = res.data;
  $axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
};

export const onSilentRefresh = async () => {
  const refreshToken = Cookies.get("refreshToken");
  const accessToken = Cookies.get("accessToken");

  if (refreshToken) {
    try {
      const response = await postReissue({ accessToken, refreshToken });
      if (response) {
        onLogInSuccess(response);
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

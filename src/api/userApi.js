import { $axios } from "libs/axios";

const USER_API = {
  ID_CHECK: () => "/register/check-id",
  EMAIL_CHECK: () => "/register/check-email",
  EMAIL_SEND: (email) => `/register/authenticate?email=${email}`,
  REGISTER: () => "/register",
  LOGIN: () => "/login",
  MY_INFO: () => "/users/user-info",
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

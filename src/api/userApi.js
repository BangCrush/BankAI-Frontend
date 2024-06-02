import { $axios } from "libs/axios";

const USER_API = {
  ID_CHECK: () => "/register/check-id",
  EMAIL_CHECK: () => "/register/check-email",
  EMAIL_SEND: (email) => `/register/authenticate?email=${email}`,
  REGISTER: () => "/register",
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

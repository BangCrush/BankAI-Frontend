import { $axios } from "libs/axios";

const USER_API = {
  ID_CHECK: () => "/register/check-id",
  EMAIL_SEND: (email) => `/register/authenticate?email=${email}`,
};

export const postIdCheck = async (id) => {
  const res = await $axios.post(USER_API.ID_CHECK(), { userId: id });
  return res.status;
};

export const postEmailSend = async (email) => {
  const res = await $axios.post(USER_API.EMAIL_SEND(email));
  return res.data;
};

// export const postEmailSend = async (email) => {
//   const res = await $axios.post(USER_API.EMAIL_SEND(email));
//   return res.data;
// };

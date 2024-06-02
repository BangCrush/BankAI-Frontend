import { $axios } from "libs/axios";

const USER_API = {
  ID_CHECK: () => `/register/check-id`,
};

// 아이디 중복체크
export const postIdCheck = async (id) => {
  const res = await $axios.post(USER_API.ID_CHECK(), { userId: id });
  return res.status;
};

import { $axios } from "libs/axios";

const ACCOUNT_API = {
  ALL_ACCOUNT: () => "/account/list",
  SUM_ACCOUNT: () => "/account/assets",
};

export const getAllAccount = async () => {
  const res = await $axios.get(ACCOUNT_API.ALL_ACCOUNT());
  return res.data;
};

export const getSumAccount = async () => {
  const res = await $axios.get(ACCOUNT_API.SUM_ACCOUNT());
  return res.data;
};

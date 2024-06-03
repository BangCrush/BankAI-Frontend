import { $axios } from "libs/axios";

const ACCOUNT_API = {
  ALL_ACCOUNT: () => "/account/list",
  SUM_ACCOUNT: () => "/account/assets",
  HISTORY_ACCOUNT: (accCode, page) =>
    `/account/history?acc=${accCode}&page=${page}`,
  BALANCE_ACCOUNT: (accCode) => `/account/balance?acc=${accCode}`,
};

export const getAllAccount = async () => {
  const res = await $axios.get(ACCOUNT_API.ALL_ACCOUNT());
  return res.data;
};

export const getSumAccount = async () => {
  const res = await $axios.get(ACCOUNT_API.SUM_ACCOUNT());
  return res.data;
};

export const getHistoryAccount = async ({ accCode, page }) => {
  const res = await $axios.get(ACCOUNT_API.HISTORY_ACCOUNT(accCode, page));
  return res.data;
};

export const getBalanceAccount = async (accCode) => {
  const res = await $axios.get(ACCOUNT_API.BALANCE_ACCOUNT(accCode));
  return res.data;
};

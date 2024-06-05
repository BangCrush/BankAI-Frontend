import { $axios } from "libs/axios";

const ACCOUNT_API = {
  ALL_ACCOUNT: () => "/account/list",
  SUM_ACCOUNT: () => "/account/assets",
  HISTORY_ACCOUNT: (accCode, page) =>
    `/account/history?acc=${accCode}&page=${page}`,
  BALANCE_ACCOUNT: (accCode) => `/account/balance?acc=${accCode}`,
  CREATE_ACCOUNT: () => "account/opening",
  SEARCH_ACCOUNT: (accCode) => `/account/search?acc=${accCode}`,
  CHECK_LIMIT: () => "/account/check-limit",
  CHECK_PW: () => "/account/check-pw",
  TRANSFER: () => "/account/transfer",
};

export const transfer = async ({inAccCode,outAccCode,amount}) => {
  const res = await $axios.post(ACCOUNT_API.TRANSFER(),{
    inAccCode,
    outAccCode,
    amount,
    inBankCode:"C04",
    outBankCode:"C04"
  });
  return res.data;
}

export const checkLimit = async ({accCode,amount}) => {
  const res = await $axios.post(ACCOUNT_API.CHECK_LIMIT(),{
    accCode,
    amount
  });
  return res.data;
}

export const checkPw = async ({accCode,accPwd}) => {
  const res = await $axios.post(ACCOUNT_API.CHECK_PW(),{
    accCode,
    accPwd
  });
  return res.data;
}

export const searchAccount = async (accCode) => {
  const res = await $axios.get(ACCOUNT_API.SEARCH_ACCOUNT(accCode));
  return res.data;
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

export const postCreateAccount = async (params) => {
  const res = await $axios.post(ACCOUNT_API.CREATE_ACCOUNT(), params);
  return res.data;
};

export const deleteAccount = async (params) => {
  const res = await $axios.delete(ACCOUNT_API.DELETE_ACCOUNT(),{data:params});
  return res.data.message;
};
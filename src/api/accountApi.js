import { $axios } from "libs/axios";

const ACCOUNT_API = {
  ALL_ACCOUNT: () => "/account/list",
  SUM_ACCOUNT: () => "/account/assets",
};

export const getAllAccount = async () => {
  const res = await $axios.get(ACCOUNT_API.ALL_ACCOUNT(), {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYW1zaWNsb3ZlciIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE3MTczNDc4NjF9.y5em2qX-ziuBU34AKcZDN01LiuRTBP_Y3JZpAwYcgr4`,
    },
  });
  return res.data;
};

export const getSumAccount = async () => {
  const res = await $axios.get(ACCOUNT_API.SUM_ACCOUNT(), {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzYW1zaWNsb3ZlciIsImF1dGgiOiJST0xFX1VTRVIiLCJleHAiOjE3MTczNDc4NjF9.y5em2qX-ziuBU34AKcZDN01LiuRTBP_Y3JZpAwYcgr4`,
    },
  });
  return res.data;
};

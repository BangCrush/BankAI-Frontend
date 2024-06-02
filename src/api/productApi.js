import { $axios } from "libs/axios";

const PRODUCT_API = {
  ALL_PRODUCT: () => "/product/",
};
export const getAllProduct = async () => {
  const res = await $axios.get(PRODUCT_API.ALL_PRODUCT());
  return res.data;
};

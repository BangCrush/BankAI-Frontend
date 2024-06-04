import { $axios } from "libs/axios";

const PRODUCT_API = {
  ALL_PRODUCT: () => "/product/",
  PRODUCT_DETAIL: (prodCode) => `/product/detail?code=${prodCode}`,
  SELECTED_PRODUCT: (prodType) => `/product/${prodType}`
};

export const getAllProduct = async () => {
  const res = await $axios.get(PRODUCT_API.ALL_PRODUCT());
  return res.data;
};

export const getDetailProduct = async (prodCode) => {
  const res = await $axios.get(PRODUCT_API.PRODUCT_DETAIL(prodCode));
  return res.data;
};

export const getSelectedProduct = async (prodType) =>{
  const res = await $axios.get(PRODUCT_API.SELECTED_PRODUCT(prodType));
  return res.data
}
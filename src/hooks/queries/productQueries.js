import { getAllProduct, getDetailProduct, getSearchProduct, getSelectedProduct } from "api/productApi";
import { useQuery } from "react-query";

export const useGetAllProduct = () => {
  return useQuery({
    queryKey: ["getAllProducts"],
    queryFn: () => getAllProduct(),
    select: (res) => res.data,
  });
};

export const useGetProductDetail = (prodCode) => {
  return useQuery({
    queryKey: ["getProductDetail", prodCode],
    queryFn: () => getDetailProduct(prodCode),
    select: (res) => res.data,
  });
};

export const useGetSelectedProducts = (prodType) => {
  return useQuery({
    queryKey: ["getSelectdeProducts", prodType],
    queryFn: () => getSelectedProduct(prodType),
    select: (res) => res.data,
  });
};

export const useGetSearchProducts = (searchWord) => {
  return useQuery({
    queryKey: ["getSearchProduct", searchWord],
    queryFn: () => getSearchProduct(searchWord),
    select: (res) => res.data,
  });
};
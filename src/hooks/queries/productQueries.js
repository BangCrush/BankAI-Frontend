import { getAllProduct, getDetailProduct, getSelectedProduct } from "api/productApi";
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
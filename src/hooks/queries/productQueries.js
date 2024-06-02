import { getAllProduct } from "api/productApi";
import { useQuery } from "react-query";

export const useGetAllProduct = () => {
  return useQuery({
    queryKey: ["getAllProducts"],
    queryFn: () => getAllProduct(),
    select: (res) => res.data,
  });
};

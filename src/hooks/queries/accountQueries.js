import { getAllAccount } from "api/accountApi";
import { useQuery } from "react-query";

export const useGetAllAccount = () => {
  return useQuery({
    queryKey: ["getAllProducts"],
    queryFn: () => getAllAccount(),
    select: (res) => res.data,
  });
};

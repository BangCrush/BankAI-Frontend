import { getAllAccount, getSumAccount } from "api/accountApi";
import { useQuery } from "react-query";

export const useGetAllAccount = () => {
  return useQuery({
    queryKey: ["getAllAccounts"],
    queryFn: () => getAllAccount(),
    select: (res) => res.data,
  });
};

export const useGetSumAccount = () => {
  return useQuery({
    queryKey: ["getSumAccounts"],
    queryFn: () => getSumAccount(),
    select: (res) => res.data.assets,
  });
};

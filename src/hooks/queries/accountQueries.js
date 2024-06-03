import {
  getAllAccount,
  getBalanceAccount,
  getHistoryAccount,
  getSumAccount,
} from "api/accountApi";
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
    select: (res) => res.data,
  });
};

export const useGetHistoryAccount = (accCode, page) => {
  return useQuery({
    queryKey: ["getHistoryAccount", accCode, page],
    queryFn: () => getHistoryAccount(accCode, page),
    select: (res) => res.data,
  });
};

export const useGetBalanceAccount = (accCode) => {
  return useQuery({
    queryKey: ["getBalanceAccount", accCode],
    queryFn: () => getBalanceAccount(accCode),
    select: (res) => res.data,
  });
};

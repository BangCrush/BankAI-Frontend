import {
  deleteAccount,
  getAllAccount,
  getBalanceAccount,
  getHistoryAccount,
  getSumAccount,
  postCreateAccount,
} from "api/accountApi";
import { useMutation, useQuery } from "react-query";

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

export const usePostCreateAccount = () => {
  const mutation = useMutation((params) => postCreateAccount(params), {
    onSuccess: (res) => {
      console.log(res);
    },
  });

  return { mutate: mutation.mutate };
};

export const useDeleteAccount = () => {
  const mutation = useMutation((params) => deleteAccount(params), {
    onSuccess: (res) => {
      console.log(res);
    },
  });

  return { mutate: mutation.mutate };
};

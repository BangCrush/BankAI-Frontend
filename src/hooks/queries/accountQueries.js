import {
  getAllAccount,
  getBalanceAccount,
  getHistoryAccount,
  getSumAccount,
  postCreateAccount,
} from "api/accountApi";
import { useState } from "react";
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
  const [msg, setMsg] = useState(null);
  const [ok, setOk] = useState(false);
  const mutation = useMutation((params) => postCreateAccount(params), {
    onSuccess: (res) => {
      if (res.status === 202) {
        setMsg(res.message);
        setOk(false);
      } else {
        setOk(true);
      }
      console.log(res);
    },
  });

  return { mutate: mutation.mutate, ok, msg };
};

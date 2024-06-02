import { postIdCheck } from "api/userApi";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";

// 아이디 중복 체크
export const usePostIdCheck = () => {
  const [ok, setOk] = useState(false);
  const mutation = useMutation((id) => postIdCheck(id), {
    onSuccess: () => {
      console.log("성공");
      setOk(true);
    },
    onError: () => {
      setOk(false);
    },
  });

  return { mutate: mutation.mutate, ok };
};

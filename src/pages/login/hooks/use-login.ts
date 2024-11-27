import { login } from "@/supabase/auth/index.ts";
import { useMutation } from "@tanstack/react-query";
import { loginType } from "../types/login.types.ts";

export const useLogin = () => {
  const { mutate: handleLogin, isError } = useMutation({
    mutationKey: ["login"],
    mutationFn: login,
  });
  const onSubmit = (fieldValues: loginType) => {
    if (!!fieldValues.email && !!fieldValues.password) {
      handleLogin(fieldValues);
    }
  };

  return { isError, onSubmit };
};

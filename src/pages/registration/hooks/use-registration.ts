import { register } from "@/supabase/auth/index.ts";
import { useMutation } from "@tanstack/react-query";
import { registrationType } from "../types/registration.types";

export const useRegistration = () => {
  const { mutate: handleRegistration, isSuccess } = useMutation({
    mutationKey: ["registration"],
    mutationFn: register,
  });

  const onSubmit = (fieldValues: registrationType) => {
    if (!!fieldValues.email && !!fieldValues.password) {
      handleRegistration(fieldValues);
    }
  };

  return { isSuccess, onSubmit };
};

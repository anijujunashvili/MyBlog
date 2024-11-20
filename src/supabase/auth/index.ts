import { supabase } from "..";

export const register = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return supabase.auth.signUp({ email, password });
};

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const res = await supabase.auth.signInWithPassword({ email, password });
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log("erroria");
    return error;
  }
};

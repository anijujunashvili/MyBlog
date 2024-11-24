import { supabase } from "@/supabase";
import { Database } from "../supabase.types.ts";

export const fillUserInfo = async (
  payload: Database["public"]["Tables"]["profiles"]["Row"],
) => {
  const { data: response, error } = await supabase
    .from("profiles")
    .upsert(payload)
    .throwOnError();

  if (error) {
    throw new Error(error.message);
  }
  return response;
};

export const getUserInfo = async (id: string | number) => {
  const data = await supabase.from("profiles").select("*").eq("id", id);

  return data;
};

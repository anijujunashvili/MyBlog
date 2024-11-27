import { useMutation, useQuery } from "@tanstack/react-query";
import { fillUserInfo, getUserInfo } from "@/supabase/profile";
import { profilePayloadtype } from "../types/profile.types.ts";

export const useProfile = (userId: string) => {
  const { data: userInfo } = useQuery({
    queryKey: ["getUser", userId],
    queryFn: () => getUserInfo(userId as string),
    enabled: !!userId,
    select: (data) => data?.data?.[0],
  });

  const {
    mutate: handleFillUserInfo,
    isPending,
    isSuccess,
  } = useMutation({
    mutationKey: ["fill_user_info"],
    mutationFn: fillUserInfo,
  });

  const onSubmit = (profilePayload: profilePayloadtype) => {
    handleFillUserInfo({ ...profilePayload, id: String(userId) });
  };

  return { userInfo, isPending, isSuccess, onSubmit };
};

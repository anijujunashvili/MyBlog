import { Database } from "@/supabase/supabase.types";
import { useMutation } from "@tanstack/react-query";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { fillUserInfo, getUserInfo } from "@/supabase/profile";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAtom } from "jotai";
import { userAtom } from "@/store/auth";

import { useTranslation } from "react-i18next";
type profileRow = Database["public"]["Tables"]["profiles"]["Row"];
type profilePayloadtype = Omit<profileRow, "id" | "updated_at">;

export const UserProfilePage = () => {
  const [user] = useAtom(userAtom);

  const { t } = useTranslation();

  const [profilePayload, setProfilePayload] = useState<profilePayloadtype>({
    avatar_url: "",
    full_name_ka: "",
    phone: "",
    full_name_en: "",
  });

  const userId = user?.user?.id;

  useEffect(() => {
    if (userId) {
      getUserInfo(userId).then((res) => {
        if (res?.data !== null) {
          const data = res?.data[0];
          if (data) {
            setProfilePayload({
              phone: data.phone,
              full_name_ka: data.full_name_ka,
              full_name_en: data.full_name_en,
              avatar_url: data.avatar_url,
            });
          }
        }
      });
    }
  }, [user, userId]);

  const {
    mutate: handleFillUserInfo,
    isPending,
    isSuccess,
  } = useMutation({
    mutationKey: ["fill_user_info"],
    mutationFn: fillUserInfo,
  });

  const handleInput = (e: ChangeEvent<HTMLInputElement>, name: string) => {
    const value = (e.target as HTMLInputElement).value;

    setProfilePayload({
      phone: name === "phone" ? value : profilePayload.phone,
      full_name_en:
        name === "full_name_en" ? value : profilePayload.full_name_en,
      full_name_ka:
        name === "full_name_ka" ? value : profilePayload.full_name_ka,
      avatar_url: name === "avatar_url" ? value : profilePayload.avatar_url,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleFillUserInfo({ ...profilePayload, id: String(user?.user?.id) });
  };
  return (
    <>
      {user ? (
        <div className="flex h-screen items-start justify-center">
          <div className="w-full max-w-lg rounded-xl border bg-card text-cardForeground shadow">
            <h1 className="pt-6 text-center text-xl font-bold">
              {t("profile.headline")}
            </h1>
            <h3 className="text-center">
              {isPending ? "მიმდინარეობს მონაცემების დამუშავება..." : ""}
            </h3>
            {isSuccess && (
              <h3 className="text-center text-green-600">
                მონაცემები განახლებულია !
              </h3>
            )}
            <div className="flex flex-col space-y-1.5 p-6">
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="avatar_url" className="mt-4 font-medium">
                    {t("profile.avatar_url")}
                  </label>
                  <div className="flex flex-row justify-between space-x-2">
                    <Input
                      type="text"
                      id="avatar_url"
                      className="my-2 w-4/5"
                      name="avatar_url"
                      value={String(profilePayload.avatar_url)}
                      onChange={(e) => handleInput(e, "avatar_url")}
                    />
                    <img
                      src={String(profilePayload.avatar_url)}
                      alt={String(profilePayload.full_name_ka)}
                      className="flex h-14 w-14 rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="full_name_ka" className="mt-4 font-medium">
                    {t("profile.full_name_ka")}
                  </label>
                  <Input
                    type="text"
                    id="full_name_ka"
                    className="mt-2"
                    name="full_name_ka"
                    value={String(profilePayload.full_name_ka)}
                    onChange={(e) => handleInput(e, "full_name_ka")}
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="full_name_en" className="mt-4 font-medium">
                    {t("profile.full_name_en")}
                  </label>
                  <Input
                    type="text"
                    id="full_name_en"
                    className="mt-2"
                    name="full_name_en"
                    value={String(profilePayload.full_name_en)}
                    onChange={(e) => handleInput(e, "full_name_en")}
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="phone" className="mt-4 font-medium">
                    {t("profile.phone")}
                  </label>
                  <Input
                    type="text"
                    id="phone"
                    className="mt-2"
                    name="phone"
                    value={String(profilePayload.phone)}
                    onChange={(e) => handleInput(e, "phone")}
                  />
                </div>
                <Button
                  type="submit"
                  className="mt-4 w-full bg-primary hover:bg-primary/90 dark:bg-primary dark:text-white dark:hover:bg-primary/90"
                >
                  {t("profile.save")}
                </Button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div>ასეთი მომხმაებელი არ მოიძებნა</div>
      )}
    </>
  );
};

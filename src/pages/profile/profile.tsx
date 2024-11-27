import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAtom } from "jotai";
import { userAtom } from "@/store/auth";
import { useForm, Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { profilePayloadtype } from "./types/profile.types.ts";
import { useProfile } from "./hooks/use-profile.ts";

export const UserProfilePage = () => {
  const [user] = useAtom(userAtom);

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<profilePayloadtype>({
    defaultValues: {
      avatar_url: " ",
      full_name_ka: " ",
      full_name_en: " ",
      phone: " ",
    },
    mode: "onChange",
  });

  const { t } = useTranslation();

  const userId = user?.user?.id;

  const { userInfo, isPending, isSuccess, onSubmit } = useProfile(
    userId as string,
  );

  useEffect(() => {
    if (userInfo) {
      setValue("avatar_url", userInfo.avatar_url);
      setValue("full_name_ka", userInfo.full_name_ka);
      setValue("full_name_en", userInfo.full_name_en);
      setValue("phone", userInfo.phone);
    }
  }, [userInfo, setValue]);

  return (
    <>
      {user ? (
        <div className="flex h-screen items-start justify-center">
          <div className="w-full max-w-lg rounded-xl border bg-card text-cardForeground shadow">
            <h1 className="pt-6 text-center text-xl font-bold">
              {t("profile.headline")}
            </h1>
            <h3 className="text-center">
              {isPending ? t("profile.pending") : ""}
            </h3>
            {isSuccess && (
              <h3 className="text-center text-green-600">
                {t("profile.updated")}
              </h3>
            )}
            <div className="flex flex-col space-y-1.5 p-6">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label className="mt-4 font-medium">
                    {t("profile.avatar_url")}
                  </label>
                  <div className="flex flex-row justify-between space-x-2">
                    <Controller
                      name="avatar_url"
                      control={control}
                      rules={{
                        required: true,
                        minLength: {
                          value: 30,
                          message: "validate.avatar",
                        },
                      }}
                      render={({ field: { onChange, value } }) => {
                        return (
                          <Input
                            onChange={onChange}
                            type="text"
                            value={String(value)}
                            className="mb-2 mt-2"
                          />
                        );
                      }}
                    />

                    <img
                      src={String(userInfo?.avatar_url)}
                      alt={String(userInfo?.full_name_ka)}
                      className="flex h-14 w-14 rounded-full"
                    />
                  </div>
                  {errors.avatar_url && (
                    <span role="alert" className="pt-2 text-red-500">
                      {t(String(errors.avatar_url.message))}
                    </span>
                  )}
                </div>
                <div>
                  <label htmlFor="full_name_ka" className="mt-4 font-medium">
                    {t("profile.full_name_ka")}
                  </label>
                  <Controller
                    name="full_name_ka"
                    control={control}
                    rules={{
                      required: true,
                      minLength: {
                        value: 10,
                        message: "validate.name_length",
                      },
                    }}
                    render={({ field: { onChange, value } }) => {
                      return (
                        <Input
                          onChange={onChange}
                          value={String(value)}
                          className="mb-2 mt-2"
                        />
                      );
                    }}
                  />
                  {errors.full_name_ka && (
                    <span role="alert" className="pt-2 text-red-500">
                      {t(String(errors.full_name_ka.message))}
                    </span>
                  )}
                </div>
                <div className="mt-4">
                  <label htmlFor="full_name_en" className="mt-4 font-medium">
                    {t("profile.full_name_en")}
                  </label>
                  <Controller
                    name="full_name_en"
                    control={control}
                    rules={{
                      required: true,
                      minLength: {
                        value: 10,
                        message: "validate.name_length",
                      },
                    }}
                    render={({ field: { onChange, value } }) => {
                      return (
                        <Input
                          onChange={onChange}
                          value={String(value)}
                          className="mb-2 mt-2"
                        />
                      );
                    }}
                  />
                  {errors.full_name_en && (
                    <span role="alert" className="pt-2 text-red-500">
                      {t(String(errors.full_name_en.message))}
                    </span>
                  )}
                </div>
                <div className="mt-4">
                  <label htmlFor="phone" className="mt-4 font-medium">
                    {t("profile.phone")}
                  </label>
                  <Controller
                    name="phone"
                    control={control}
                    rules={{
                      required: true,
                      minLength: {
                        value: 9,
                        message: "validate.phone",
                      },
                    }}
                    render={({ field: { onBlur, value, onChange } }) => {
                      return (
                        <Input
                          onChange={onChange}
                          onBlur={onBlur}
                          value={String(value)}
                          className="mb-2 mt-2"
                        />
                      );
                    }}
                  />
                  {errors.phone && (
                    <span role="alert" className="pt-2 text-red-500">
                      {t(String(errors.phone.message))}
                    </span>
                  )}
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
        <div className="container h-screen text-center">
          {t("profile.no_user")}
        </div>
      )}
    </>
  );
};

import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { loginBtn, cont, OuterCont, label } from "./login.style.ts";
import { useForm, Controller } from "react-hook-form";
import { loginType } from "./types/login.types.ts";
import { useLogin } from "./hooks/use-login.ts";

export const LoginPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<loginType>({
    defaultValues: { email: "", password: "" },
    mode: "onChange",
  });

  const { isError, onSubmit } = useLogin();

  const { t } = useTranslation();

  return (
    <>
      <div className={OuterCont()}>
        <div className={cont()}>
          <div className="flex flex-col space-y-1.5 p-6">
            <div className="text-center text-2xl font-bold">
              {t("login.login-headline")}
            </div>
            {isError ? t("validate.login_error") : ""}
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label className={label()} htmlFor="email">
                    {t("login.email")}
                  </label>
                  <Controller
                    name="email"
                    control={control}
                    rules={{
                      required: true,
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "validate.email",
                      },
                      minLength: {
                        value: 13,
                        message: "validate.email_length",
                      },
                    }}
                    render={({ field: { onChange, value, onBlur } }) => {
                      return (
                        <Input
                          onChange={onChange}
                          onBlur={onBlur}
                          value={value}
                          className="mb-2 mt-2"
                          placeholder="ana@example.com"
                        />
                      );
                    }}
                  />
                  {errors.email && (
                    <span role="alert" className="pt-2 text-red-500">
                      {t(String(errors.email.message))}
                    </span>
                  )}
                </div>
                <div className="mb-2 mt-4">
                  <label className={label()} htmlFor="password">
                    {t("login.password")}
                  </label>
                  <Controller
                    name="password"
                    control={control}
                    rules={{
                      required: true,
                      minLength: {
                        value: 6,
                        message: "validate.password",
                      },
                    }}
                    render={({ field: { onChange, value, onBlur } }) => {
                      return (
                        <Input
                          onChange={onChange}
                          onBlur={onBlur}
                          value={value}
                          type="password"
                          className="mt-2"
                        />
                      );
                    }}
                  />
                  {errors.password && (
                    <span role="alert" className="pt-2 text-red-500">
                      {t(String(errors.password.message))}
                    </span>
                  )}
                </div>
                <Button className={loginBtn()} type="submit">
                  {t("login.login")}
                </Button>
              </form>
            </div>
            <div className="flex items-center justify-between pt-0">
              <div className="text-sm hover:underline">
                <Link to="/" className="text-primary">
                  {t("login.forgot-pass")}
                </Link>
              </div>
              <div className="text-sm text-gray-600">
                {t("login.have-account")}
                <Link
                  className="ml-1 text-primary hover:underline"
                  to="/registration"
                >
                  {t("login.sign-up")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

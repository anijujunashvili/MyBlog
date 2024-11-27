import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useForm, Controller } from "react-hook-form";
import {
  Regbtn,
  OuterCont,
  cont,
  label,
  headline,
} from "./registration.styles.ts";
import { registrationType } from "./types/registration.types.ts";
import { useRegistration } from "./hooks/use-registration.ts";

export const RegistrationPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<registrationType>({
    defaultValues: { name: "", email: "", password: "", confirm_password: "" },
    mode: "onChange",
  });

  const { isSuccess, onSubmit } = useRegistration();
  const { t } = useTranslation();

  return (
    <>
      <div className={OuterCont()}>
        <div className={cont()}>
          <div className="flex flex-col space-y-1.5 p-6">
            <div className={headline()}>{t("registration.reg-headline")}</div>
            {isSuccess && <p>{t("validate.reg_done")}</p>}
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label className={label()} htmlFor="name">
                    {t("registration.name")}
                  </label>
                  <Controller
                    name="name"
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
                          value={value}
                          className="mb-2 mt-2"
                          placeholder="Ani Zhuzhunashvili"
                        />
                      );
                    }}
                  />
                  {errors.name && (
                    <span role="alert" className="pt-2 text-red-500">
                      {t(String(errors.name.message))}
                    </span>
                  )}
                </div>
                <div>
                  <label className={label()} htmlFor="email">
                    {t("registration.email")}
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
                    render={({ field: { onChange, value } }) => {
                      return (
                        <Input
                          onChange={onChange}
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
                <div className="mt-4">
                  <label className={label()} htmlFor="password">
                    {t("registration.password")}
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
                    render={({ field: { onChange, value } }) => {
                      return (
                        <Input
                          onChange={onChange}
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
                <div className="mt-4">
                  <label className={label()} htmlFor="confirmPassword">
                    {t("registration.confirm-password")}
                  </label>
                  <Controller
                    name="confirm_password"
                    control={control}
                    rules={{
                      required: true,
                      validate: (value) => {
                        if (watch("password") != value) {
                          return "validate.confirm_password";
                        }
                      },
                    }}
                    render={({ field: { onChange, value } }) => {
                      return (
                        <Input
                          onChange={onChange}
                          value={value}
                          type="password"
                          className="mt-2"
                        />
                      );
                    }}
                  />
                  {errors.confirm_password && (
                    <span role="alert" className="pt-2 text-red-500">
                      {t(String(errors.confirm_password.message))}
                    </span>
                  )}
                </div>
                <Button className={Regbtn()} type="submit">
                  {t("registration.sign-up")}
                </Button>
              </form>
            </div>
            <div className="flex items-center justify-center p-6 pt-0">
              <div className="text-sm text-gray-600">
                {t("registration.have-account")}
                <Link className="ml-1 text-primary hover:underline" to="/login">
                  {t("registration.login")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

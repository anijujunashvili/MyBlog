import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Regbtn,
  OuterCont,
  cont,
  label,
  headline,
} from "./registration.styles.ts";

export const RegistrationPage = () => {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { t } = useTranslation();
  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;

    setFields({
      name: fields.name,
      email: value,
      password: fields.password,
      confirmPassword: fields.confirmPassword,
    });
  };

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;

    setFields({
      name: value,
      email: fields.email,
      password: fields.password,
      confirmPassword: fields.confirmPassword,
    });
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;

    setFields({
      name: fields.name,
      email: fields.email,
      password: value,
      confirmPassword: fields.confirmPassword,
    });
  };

  const handleConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;

    setFields({
      name: fields.name,
      email: fields.email,
      password: fields.password,
      confirmPassword: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(fields);
  };
  return (
    <>
      <div className={OuterCont()}>
        <div className={cont()}>
          <div className="flex flex-col space-y-1.5 p-6">
            <div className={headline()}>{t("registration.reg-headline")}</div>
            <div>
              <form onSubmit={handleSubmit}>
                <div>
                  <label className={label()} htmlFor="name">
                    {t("registration.name")}
                  </label>
                  <Input
                    type="text"
                    id="name"
                    className="mt-2"
                    name="name"
                    value={fields.name}
                    onChange={handleName}
                    placeholder="Ani Zhuzhunashvili"
                  />
                </div>
                <div>
                  <label className={label()} htmlFor="email">
                    {t("registration.email")}
                  </label>
                  <Input
                    type="text"
                    id="email"
                    className="mt-2"
                    name="email"
                    value={fields.email}
                    onChange={handleEmail}
                    placeholder="ana@example.com"
                  />
                </div>
                <div className="mt-4">
                  <label className={label()} htmlFor="password">
                    {t("registration.password")}
                  </label>
                  <Input
                    type="password"
                    id="password"
                    className="mt-2"
                    name="password"
                    value={fields.password}
                    onChange={handlePassword}
                  />
                </div>
                <div className="mt-4">
                  <label className={label()} htmlFor="confirmPassword">
                    {t("registration.confirm-password")}
                  </label>
                  <Input
                    type="password"
                    id="confirmPassword"
                    className="mt-2"
                    name="password"
                    value={fields.confirmPassword}
                    onChange={handleConfirmPassword}
                  />
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

import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChangeEvent, FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { loginBtn, cont, OuterCont, label } from "./login.style.ts";
import { login } from "@/supabase/auth/index.ts";
import { useMutation } from "@tanstack/react-query";

export const LoginPage = () => {
  const [fields, setFields] = useState({ email: "", password: "" });
  const { t } = useTranslation();
  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;

    setFields({
      email: value,
      password: fields.password,
    });
  };

  const { data, mutate: handleLogin } = useMutation({
    mutationKey: ["login"],
    mutationFn: login,
  });

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value;

    setFields({
      email: fields.email,
      password: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(fields);
    if (!!fields.email && !!fields.password) {
      handleLogin(fields);
      //console.log("login:", data);

      //როცა პაროლი არასწორად შემყავს 400 კოდს აბრუნებს მაგრამ useMutation isSuccess მაგ შემთხვევაშიც true-ა. ამიტომ
      //data?.error != null ამას ვამოწმებ
    }
  };

  return (
    <>
      <div className={OuterCont()}>
        <div className={cont()}>
          <div className="flex flex-col space-y-1.5 p-6">
            <div className="text-center text-2xl font-bold">
              {t("login.login-headline")}
            </div>
            {data && data?.error != null
              ? "სამწუხაროდ პაროლი ან მეილი არ არის სწორი"
              : ""}
            <div>
              <form onSubmit={handleSubmit}>
                <div>
                  <label className={label()} htmlFor="email">
                    {t("login.email")}
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
                    {t("login.password")}
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

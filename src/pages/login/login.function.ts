import { ChangeEvent, FormEvent, useState } from "react";

const [fields, setFields] = useState({ email: "", password: "" });
export const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
  const value = (e.target as HTMLInputElement).value;
  console.log(12);
  setFields({
    email: value,
    password: fields.password,
  });
};

export const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
  const value = (e.target as HTMLInputElement).value;

  setFields({
    email: fields.email,
    password: value,
  });
};

export const handleSubmit = (e: FormEvent) => {
  e.preventDefault();
  console.log(fields);
};

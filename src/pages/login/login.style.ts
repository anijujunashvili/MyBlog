import { cva } from "class-variance-authority";

export const loginBtn = cva([
  "loginBtn_a",
  "mb-5",
  "mt-4",
  "w-full",
  "bg-primary",
  "hover:bg-primary/90",
  "text-white",
  "dark:bg-primary",
  "dark:text-white",
  "dark:hover:bg-primary/90",
]);

export const cont = cva([
  "cont_a",
  "text-card-foreground",
  "w-full",
  "max-w-md",
  "rounded-xl",
  "border",
  "bg-card shadow",
]);

export const OuterCont = cva([
  "outerCont_a",
  "flex",
  "h-screen",
  "items-center",
  "justify-center",
  "py-8",
]);

export const label = cva(["label_a", "text-sm", "font-medium"]);

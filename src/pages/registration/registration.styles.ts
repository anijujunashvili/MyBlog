import { cva } from "class-variance-authority";

export const Regbtn = cva([
  "regBtn_a",
  "text-primary-foreground",
  "dark:text-primary-foreground",
  "mb-5",
  "hover:bg-primary/90",
  "text-white",
  "dark:hover:bg-primary/90",
  "mt-4",
  "w-full",
  "bg-primary",
  "dark:bg-primary",
]);

export const OuterCont = cva([
  "outerCont_a",
  "flex",
  "h-screen",
  "items-center",
  "justify-center",
  "py-8",
]);

export const cont = cva([
  "cont_a",
  "text-card-foreground",
  "w-full",
  "max-w-md",
  "rounded-xl",
  "border",
  "bg-card",
  "shadow",
]);

export const label = cva(["label_a", "text-sm", "font-medium"]);
export const headline = cva([
  "headline_a",
  "text-center",
  "text-2xl",
  "font-bold",
]);

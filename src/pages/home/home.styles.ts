import { cva } from "class-variance-authority";

export const Tags = cva([
  "tags",
  "focus:ring-ring",
  "text-primary-foreground",
  " inline-flex",
  " items-center",
  "rounded-md",
  "border",
  " border-transparent",
  "bg-primary",
  "px-2.5",
  "py-0.5",
  "text-xs",
  "text-white",
  "font-semibold",
  "shadow",
  "transition-colors",
  "hover:bg-primary/80",
  "focus:outline-none",
  "focus:ring-2",
  "focus:ring-offset-2",
]);

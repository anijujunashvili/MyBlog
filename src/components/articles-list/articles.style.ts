import { cva } from "class-variance-authority";

export const articleCont = cva([
  "article_A",
  "text-card-foreground",
  "rounded-xl",
  "border",
  "bg-card",
  "shadow",
]);
export const articleImg = cva([
  "art_img",
  "h-[200px]",
  "w-full",
  "rounded-lg",
  "object-cover",
]);
export const artHead = cva([
  "artHead_a",
  "text-muted-foreground",
  "flex",
  "items-center",
  "space-x-2",
  "text-sm",
]);
export const blogTabs = cva([
  "blogTabs",
  "focus:ring-ring",
  "text-secondary-foreground",
  "inline-flex",
  "items-center",
  "rounded-md",
  "border",
  "border-transparent",
  "bg-secondary",
  "px-2.5",
  "py-0.5",
  "text-xs",
  "font-semibold",
  "transition-colors",
  "hover:bg-secondary/80",
  "focus:outline-none",
  "focus:ring-2",
  "focus:ring-offset-2",
  "cursor-pointer",
]);

import { cva } from "class-variance-authority";

export const authorName = cva([
  "name",
  "mb-2",
  "text-3xl",
  "font-bold",
  "text-foreground",
]);

export const badge = cva([
  "badge",
  "rounded-full",
  "bg-primary/10",
  "px-3",
  "py-1",
  "text-sm",
  "font-normal",
  "text-primary",
]);

export const authorCard = cva([
  "authCard",
  "mb-4",
  "flex",
  "flex-col",
  "items-center",
  "rounded-lg",
  "border-none",
  "bg-card",
  "p-8",
  "shadow-lg",
  "md:flex-row",
  "md:items-start",
]);

export const authAvatar = cva([
  "avatar",
  "relative",
  "mb-4",
  "flex",
  "h-32",
  "w-32",
  "shrink-0",
  "overflow-hidden",
  "rounded-full",
  "border-4",
  "border-primary",
  "md:mb-0",
  "md:mr-8",
]);

export const socCont = cva([
  "socCont",
  "mb-4",
  "flex",
  "justify-center",
  "space-x-4",
  "md:justify-start",
]);

export const socBtn = cva([
  "soc",
  "h-9",
  "w-9",
  "gap-2",
  "rounded-full",
  "border",
  "bg-white",
  "text-sm",
  "text-foreground",
  "hover:bg-accent",
]);

export const followers = cva([
  "followersCont",
  "text-mutedForeground",
  "flex",
  "justify-center",
  "space-x-4",
  "text-sm",
  "md:justify-start",
]);

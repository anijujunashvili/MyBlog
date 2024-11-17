import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

import { popTags, authors, blogs } from "@/static/static.ts";

import { useTranslation } from "react-i18next";
import { comItem, Author } from "./header.styles.ts";

const SearchComp = () => {
  const { t } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="relative flex w-10 items-center border-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-search text-muted-foreground"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-96 items-end">
        <Command>
          <CommandInput placeholder={t("header.search")} />
          <CommandList>
            <CommandEmpty>{t("header.not-found")}</CommandEmpty>
            <CommandGroup heading={t("header.tags")}>
              {popTags.map((tags, i) => {
                return (
                  <CommandItem key={i}>
                    <div className={comItem()}>{tags}</div>
                  </CommandItem>
                );
              })}
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading={t("header.authors")}>
              {authors.map((author) => {
                return (
                  <CommandItem key={author.id}>
                    <div className={Author()}>{author.name}</div>
                  </CommandItem>
                );
              })}
            </CommandGroup>
            <CommandGroup heading={t("header.articles")}>
              {blogs.map((blog) => {
                return (
                  <CommandItem key={blog.id}>
                    <div>
                      <p className="text-sm font-bold text-foreground">
                        {blog.title}
                      </p>
                      <p>by&nbsp;{blog.author}</p>
                    </div>
                  </CommandItem>
                );
              })}
            </CommandGroup>
            <CommandGroup heading={t("header.all-results")}>
              <CommandItem>{t("header.view-all")}</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SearchComp;

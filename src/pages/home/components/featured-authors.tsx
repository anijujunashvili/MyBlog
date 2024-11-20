import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { authors } from "@/static/static.ts";

const FeaturedAuthors = () => {
  const { t } = useTranslation();
  return (
    <div className="text-card-foreground rounded-xl border bg-card shadow">
      <div className="flex flex-col space-y-1.5 p-6">
        <div className="font-semibold leading-none tracking-tight">
          {t("home-page.authors")}
        </div>
      </div>
      <div className="p-6 pt-0">
        <ul className="space-y-4">
          {authors.map((author) => {
            return (
              <li key={author.id}>
                <Link className="flex items-center space-x-4" to="/author/1">
                  <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                    <img
                      className="aspect-square h-full w-full"
                      alt="Avatar of Alice Johnson"
                      src={author.img}
                    />
                  </span>
                  <div>
                    <div className="font-semibold hover:underline">
                      {author.name}
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {author.direction}
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FeaturedAuthors;

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { popTags } from "@/static/static.ts";
import { Tags } from "../home.styles.ts";

const PopularTags = () => {
  const { t } = useTranslation();
  return (
    <div className="text-card-foreground rounded-xl border bg-card shadow">
      <div className="flex flex-col space-y-1.5 p-6">
        <div className="font-semibold leading-none tracking-tight">
          {t("home-page.popular-tags")}
        </div>
      </div>
      <div className="p-6 pt-0">
        <div className="flex flex-wrap gap-2">
          {popTags.map((tag: string, i: number) => {
            return (
              <Link to="/search" key={i}>
                <div className={Tags()}>{tag}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularTags;

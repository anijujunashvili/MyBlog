import { Link } from "react-router-dom";
import { articleCont, articleImg, artHead } from "./articles.style.ts";

import i18n from "i18next";
import dayjs from "dayjs";
import { PropsWithChildren } from "react";
import { Props, Blog } from "./types/interface.ts";

export const ArticlesList: React.FC<PropsWithChildren<Props>> = ({
  blogs,
}: Props) => {
  const currentLanguage = i18n.language;

  return (
    <>
      {!blogs ? (
        <div className="flext flex-col">
          <h1 className="text-center text-2xl font-semibold">
            Blog list is empty
          </h1>
        </div>
      ) : (
        blogs?.map((blog: Blog) => {
          const imgPath = import.meta.env.VITE_SUPABASE_STORAGE_URL;
          const createdDate = dayjs(blog.created_at);
          const nowDate = dayjs();
          const hoursDiff = nowDate.diff(createdDate, "hour");
          const minuteDiff = nowDate.diff(createdDate, "minute");
          const created =
            hoursDiff > 24
              ? createdDate.format("HH:mm - DD/MM/YYYY")
              : hoursDiff > 1
                ? `${hoursDiff} hours ago`
                : `${minuteDiff} minutes ago`;
          return (
            <Link to={`blog/${blog.id}`} key={blog.id}>
              <div className={articleCont()}>
                <div className="flex flex-col space-y-1.5 p-6">
                  <div className="mb-4">
                    <img
                      src={`${imgPath}${blog.image_url}`}
                      alt={
                        currentLanguage == "ka"
                          ? String(blog.title_ka)
                          : String(blog.title_en)
                      }
                      className={articleImg()}
                    />
                  </div>
                  <div className="text-2xl font-bold">
                    {currentLanguage == "ka"
                      ? String(blog.title_ka)
                      : String(blog.title_en)}
                  </div>
                  <div className={artHead()}>
                    <span>John Doe</span>
                    <span>&#8226;</span>
                    <span>{created}</span>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <p className="text-muted-foreground">
                    {currentLanguage == "ka"
                      ? String(blog.description_ka)
                      : String(blog.description_en)}
                  </p>
                </div>
              </div>
            </Link>
          );
        })
      )}
    </>
  );
};

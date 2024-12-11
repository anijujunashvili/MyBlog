import { Link } from "react-router-dom";
import {
  // blogTabs,
  articleCont,
  articleImg,
  artHead,
} from "./articles.style.ts";
import { getBlogList } from "@/supabase/blogs";
import { useQuery } from "@tanstack/react-query";
import i18n from "i18next";

export const ArticlesList = () => {
  const currentLanguage = i18n.language;
  const { data: blogs } = useQuery({
    queryKey: ["getBlogs", currentLanguage],
    queryFn: getBlogList,
  });

  return (
    <>
      {!blogs ? (
        <div className="flext flex-col">
          <h1 className="text-center text-2xl font-semibold">
            Blog list is empty
          </h1>
        </div>
      ) : (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        blogs?.map((blog: any) => {
          const imgPath = import.meta.env.VITE_SUPABASE_STORAGE_URL;

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
                    John Doe
                    <span>-</span>
                    <span>{String(blog.created_at)}</span>
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

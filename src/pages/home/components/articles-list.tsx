import { blogs } from "@/static/static.ts";
import { Link } from "react-router-dom";
import { blogTabs, articleCont, articleImg, artHead } from "../home.styles.ts";

const ArticlesList = () => {
  return (
    <>
      {blogs.map((blog) => {
        return (
          <div className={articleCont()} key={blog.id}>
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="mb-4">
                <img src={blog.img} alt={blog.title} className={articleImg()} />
              </div>
              <div className="text-2xl font-bold">{blog.title}</div>
              <div className={artHead()}>
                <Link className="hover:underline" to="/">
                  {blog.author}
                </Link>
                <span>-</span>
                <span>{blog.date}</span>
                <span>-</span>
                <span>{blog.time}</span>
              </div>
            </div>
            <div className="p-6 pt-0">
              <p className="text-muted-foreground">{blog.intro}</p>
            </div>
            <div className="flex items-center p-6 pt-0">
              <div className="flex space-x-2">
                {blog.tags.map((tag, i) => {
                  return (
                    <div className={blogTabs()} key={i}>
                      {tag}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ArticlesList;

import PopularTags from "./components/popular-tags.tsx";
import FeaturedAuthors from "./components/featured-authors.tsx";
import ArticlesList from "./components/articles-list.tsx";
export const HomePageView = () => {
  return (
    <>
      <div className="flex-grow px-4 py-8">
        <div className="container mx-auto flex flex-col gap-8 md:flex-row">
          <div className="flex flex-col space-y-8 md:w-2/3">
            <ArticlesList />
          </div>
          <div className="space-y-8 md:w-1/3">
            <PopularTags />
            <FeaturedAuthors />
          </div>
        </div>
      </div>
    </>
  );
};

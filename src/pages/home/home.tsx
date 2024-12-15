import PopularTags from "./components/popular-tags.tsx";
import FeaturedAuthors from "./components/featured-authors.tsx";
import { ArticlesList } from "@/components/articles-list";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { useDebounce } from "@uidotdev/usehooks";
import { useGetBlogs } from "@/react-query/use-query";
import { useSearchParams, useNavigate } from "react-router-dom";
import qs from "qs";
import { useEffect } from "react";

type SearchType = {
  search: string;
};
export const HomePageView = () => {
  const searchDefValues = {
    search: "",
  };
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const parsedDeafaultParams = {
    ...searchDefValues,
    ...qs.parse(searchParams.toString()),
  };
  const { control, watch } = useForm<SearchType>({
    defaultValues: parsedDeafaultParams,
  });

  const watchText = watch("search").toString();

  const searchText = useDebounce(watchText, 500);
  const blogs = useGetBlogs(searchText, "ka");

  useEffect(() => {
    const params = qs.stringify(control._formValues, { skipNulls: true });
    if (control._formValues.search) {
      setSearchParams(params);
    }
    if (watchText === "") {
      navigate("/");
    }
  }, [control._formValues, setSearchParams, watchText, navigate]);
  return (
    <>
      <div className="flex-grow px-4 py-8">
        <div className="container mx-auto flex flex-col gap-8 md:flex-row">
          <div className="flex flex-col space-y-8 md:w-2/3">
            <Controller
              control={control}
              name="search"
              render={({ field: { onChange, value } }) => (
                <Input
                  onChange={onChange}
                  value={value}
                  placeholder="Type text..."
                />
              )}
            />
            <ArticlesList blogs={blogs} />
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

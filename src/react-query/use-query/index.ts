import { getBlogList } from "@/supabase/blogs";
import { useQuery } from "@tanstack/react-query";

export const useGetBlogs = (searchText: string, lang: string) => {
  const { data: blogs } = useQuery({
    queryKey: ["getBlogs", searchText],
    queryFn: () => getBlogList(searchText, lang),
  });
  return blogs;
};

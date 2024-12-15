import { supabase } from "..";
type BlogType = {
  title_ka: string;
  title_en: string;
  description_ka: string;
  description_en: string;
  image_file: null | File;
  user_id?: string;
};
export const addBlog = async (payload: BlogType) => {
  if (payload?.image_file) {
    supabase.storage
      .from("blog_images")
      .upload(
        `${Math.random()}${payload?.image_file?.name}`,
        payload?.image_file,
      )
      .then((res) => {
        return supabase.from("blogs").insert({
          title_ka: payload.title_ka,
          title_en: payload.title_en,
          description_ka: payload.description_ka,
          description_en: payload.description_en,
          image_url: res.data?.fullPath,
          user_id: payload.user_id,
        });
      })
      .then((res) => {
        console.log("Successfully Created Blog: ", res);
      });
  }
};

export const getBlogList = async (search = "", lang = "en") => {
  try {
    const searchField = lang === "en" ? "title_en" : "title_en";

    const result =
      search === ""
        ? await supabase
            .from("blogs")
            .select("*")
            .order("created_at", { ascending: false })
        : await supabase
            .from("blogs")
            .select("*")
            .ilike(searchField, `%${search ?? ""}%`)
            .order("created_at", { ascending: false });

    return result.data;
  } catch (error) {
    console.log("Error during get blog list", error);
  }
};

import { useForm, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { addBlog } from "@/supabase/blogs";
import { useMutation } from "@tanstack/react-query";
import { userAtom } from "@/store/auth";
import { useAtom } from "jotai";
import SuccessMsg from "./success_msg.tsx";
import { BlogType } from "../types/index.ts";

export const WriteBlog = () => {
  const [user] = useAtom(userAtom);
  const BlogdefaultValues = {
    title_ka: "",
    title_en: "",
    description_ka: "",
    description_en: "",
    image_file: null,
  };
  const { control, handleSubmit } = useForm<BlogType>({
    defaultValues: BlogdefaultValues,
  });

  const { mutate: CreateBlog, isSuccess } = useMutation({
    mutationKey: ["addBlog"],
    mutationFn: addBlog,
  });

  const onSubmit = (fieldsValues: BlogType) => {
    if (fieldsValues?.image_file) {
      const payload = { ...fieldsValues, user_id: user?.user?.id };
      CreateBlog(payload);
    }
  };
  return (
    <>
      {isSuccess ? (
        <SuccessMsg />
      ) : (
        <div className="flex flex-col items-center justify-center">
          <div className="w-1/2">
            <h1 className="text-center text-2xl font-black">Write Blog</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="text-sm font-semibold">Title (ka)</label>
                <Controller
                  name="title_ka"
                  control={control}
                  render={({ field: { onChange, value } }) => {
                    return (
                      <Input
                        onChange={onChange}
                        value={value}
                        className="mb-2 mt-2"
                      />
                    );
                  }}
                />
              </div>
              <div>
                <label className="text-sm font-semibold">Title (en)</label>
                <Controller
                  name="title_en"
                  control={control}
                  render={({ field: { onChange, value } }) => {
                    return (
                      <Input
                        onChange={onChange}
                        value={value}
                        className="mb-2 mt-2"
                      />
                    );
                  }}
                />
              </div>
              <div>
                <label className="text-sm font-semibold">
                  Description (ka)
                </label>
                <Controller
                  name="description_ka"
                  control={control}
                  render={({ field: { onChange, value } }) => {
                    return (
                      <Textarea
                        onChange={onChange}
                        placeholder="Type your message here."
                        value={value}
                      />
                    );
                  }}
                />
              </div>
              <div>
                <label className="text-sm font-semibold">
                  Desctiption (en)
                </label>
                <Controller
                  name="description_en"
                  control={control}
                  render={({ field: { onChange, value } }) => {
                    return (
                      <Textarea
                        onChange={onChange}
                        placeholder="Type your message here."
                        value={value}
                      />
                    );
                  }}
                />
              </div>
              <div>
                <label className="text-sm font-semibold">Image</label>

                <Controller
                  name="image_file"
                  control={control}
                  render={({ field: { onChange } }) => {
                    return (
                      <Input
                        type="file"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          onChange(file);
                        }}
                        className="mb-2 mt-2"
                      />
                    );
                  }}
                />
              </div>
              <div>
                <Button type="submit">Add</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

import { useForm, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";

type SearchType = {
  search: string;
};
const Search = () => {
  const { control } = useForm<SearchType>({
    defaultValues: { search: "" },
  });
  return (
    <Controller
      control={control}
      name="search"
      render={({ field: { onChange, value } }) => (
        <Input onChange={onChange} value={value} placeholder="Type text..." />
      )}
    />
  );
};

export default Search;

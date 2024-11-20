import { createClient } from "@supabase/supabase-js";
import { Database } from "./supabase.types";

// Create a single supabase client for interacting with your database
export const supabase = createClient<Database>(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY,
);

//npx supabase gen types --lang=typescript --project-id nlmpmehbboluzlwlhwma --schema public > src/supabase/supabase.types.ts

import { Database } from "@/supabase/supabase.types";

export type profileRow = Database["public"]["Tables"]["profiles"]["Row"];
export type profilePayloadtype = Omit<profileRow, "id">;

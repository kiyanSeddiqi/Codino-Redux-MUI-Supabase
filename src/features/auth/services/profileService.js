import { supabase } from "../../../lib/supabase";

export async function getCompleteUser(authUser) {
  const { data: profile, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", authUser.id)
    .single();

  if (error) throw error;

  return {
    ...authUser,
    ...profile,
  };
}

export async function updateSupabaseProfile(userId, profileData) {
  const { data, error } = await supabase
    .from("profile")
    .update(profileData)
    .eq("id", userId)
    .select()
    .single();

  if (error) throw error;

  return data;
}

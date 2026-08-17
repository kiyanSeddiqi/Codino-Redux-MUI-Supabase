import { supabase } from "../../../lib/supabase";

export async function getCompleteUser(authUser) {
  const { data: profile, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", authUser.id)
    .single();

  if (error) throw error;

  const googleName =
    authUser.user_metadata?.full_name || authUser.user_metadata?.name || "";

  let firstName = profile.first_name;
  let lastName = profile.last_name;

  if (!firstName && !lastName && googleName) {
    const nameParts = googleName.trim().split(/\s+/);

    firstName = nameParts[0] || "";
    lastName = nameParts.slice(1).join(" ") || "";
  }

  return {
    ...authUser,
    ...profile,
    first_name: firstName,
    last_name: lastName,
  };
}

export async function updateSupabaseProfile(userId, profileData) {
  const { data, error } = await supabase
    .from("profiles")
    .update(profileData)
    .eq("id", userId)
    .select()
    .single();

  if (error) throw error;

  return data;
}

export async function uploadAvatar(userId, file) {
  const fileExt = file.name.split(".").pop();
  const filePath = `${userId}/avatar.${fileExt}`;

  const { data, error } = await supabase.storage
    .from("avatars")
    .upload(filePath, file, {
      upsert: true,
    });

  if (error) throw error;

  const { data: publicUrlData } = supabase.storage
    .from("avatars")
    .getPublicUrl(filePath);

  return `${publicUrlData.publicUrl}?t=${Date.now()}`;
}

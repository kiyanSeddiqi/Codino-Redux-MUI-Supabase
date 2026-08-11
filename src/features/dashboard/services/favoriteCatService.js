import { supabase } from "../../../lib/supabase";

export async function getUserFavoriteCategories(userId) {
  const { data, error } = await supabase
    .from("user_favorite_categories")
    .select("*")
    .eq("user_id", userId);

  if (error) throw error;

  return data;
}

export async function addFavoriteCategory(userId, categorySlug) {
  const { data, error } = await supabase
    .from("user_favorite_categories")
    .insert({ user_id: userId, category_slug: categorySlug })
    .select()
    .single();

  if (error) throw error;

  return data;
}

export async function removeFavoriteCategory(userId, categorySlug) {
  const { error } = await supabase
    .from("user_favorite_categories")
    .delete()
    .eq("user_id", userId)
    .eq("category_slug", categorySlug);

  if (error) throw error;
}

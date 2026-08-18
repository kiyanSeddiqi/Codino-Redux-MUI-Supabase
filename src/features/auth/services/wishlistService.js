import { supabase } from "../../../lib/supabase";

export async function getUserWishlist(userId) {
  const { data, error } = await supabase
    .from("user_wishlist")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data;
}

export async function addToWishlist(userId, productId) {
  const { data, error } = await supabase
    .from("user_wishlist")
    .insert({
      user_id: userId,
      product_id: productId,
    })
    .select()
    .single();

  if (error) throw error;

  return data;
}

export async function removeFromWishlist(userId, productId) {
  const { data, error } = await supabase
    .from("user_wishlist")
    .delete()
    .eq("user_id", userId)
    .eq("product_id", productId)
    .select()
    .single();

  if (error) throw error;

  return data;
}

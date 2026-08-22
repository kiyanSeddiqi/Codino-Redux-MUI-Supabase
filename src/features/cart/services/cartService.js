import { supabase } from "../../../lib/supabase";

export async function getCart(userId) {
  const { data, error } = await supabase
    .from("user_cart")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data;
}

export async function addToCart(userId, productId) {
  const { data, error } = await supabase
    .from("user_cart")
    .insert({
      user_id: userId,
      product_id: productId,
    })
    .select()
    .single();

  if (error) throw error;

  return data;
}

export async function removeFromCart(userId, productId) {
  const { data, error } = await supabase
    .from("user_cart")
    .delete()
    .eq("user_id", userId)
    .eq("product_id", productId)
    .select()
    .single();

  if (error) throw error;

  return data;
}

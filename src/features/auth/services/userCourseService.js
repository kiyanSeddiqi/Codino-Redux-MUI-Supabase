import { supabase } from "../../../lib/supabase";

export async function enrollInCourse(userId, productId) {
  const { data, error } = await supabase
    .from("user_courses")
    .insert({
      user_id: userId,
      product_id: productId,
    })
    .select()
    .single();

  if (error) {
    console.error("ENROLL COURSE ERROR:", error);
    throw error;
  }

  return data;
}

export async function getUserCourses(userId) {
  const { data, error } = await supabase
    .from("user_courses")
    .select("*")
    .eq("user_id", userId)
    .order("enrolled_at", { ascending: false });

  if (error) {
    console.error("GET USER COURSES ERROR:", error);
    throw error;
  }

  return { data };
}

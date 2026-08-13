import { supabase } from "../../../lib/supabase";

export async function getProducts() {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    console.error("GET PRODUCTS ERROR:", error);
    throw error;
  }

  const products = data.map((product) => {
    const { data: imageData } = supabase.storage
      .from("product-images")
      .getPublicUrl(product.image);

    return {
      ...product,
      imageUrl: imageData.publicUrl,
    };
  });

  return products;
}

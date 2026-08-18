import { Box } from "@mui/material";
import { productData } from "../../../../../data/productData";
import ProductCard from "../../../../../features/product/components/ProductCard";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {
  addToWishlist,
  getUserWishlist,
  removeFromWishlist,
} from "../../../../../features/auth/services/wishlistService";

function WishList() {
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (!user?.id) return;

    async function removeWishlistHandler() {
      try {
        const data = await removeFromWishlist(user.id, 2);
        console.log("REMOVED:", data);
      } catch (err) {
        console.error("REMOVE WISHLIST ERROR:", err);
      }
    }

    removeWishlistHandler();
  }, [user?.id]);

  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, minmax(0 ,1fr))",
            md: "repeat(2, minmax(0 ,1fr))",
            lg: "repeat(3, minmax(0 ,1fr))",
          },
          gap: 2.5,
        }}
      >
        {productData.slice(15, 17).map((item) => (
          <ProductCard key={item.id} itemData={item} layout="featured" />
        ))}
      </Box>
    </>
  );
}

export default WishList;

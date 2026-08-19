import { Box, Typography } from "@mui/material";
import { productData } from "../../../../../data/productData";
import ProductCard from "../../../../../features/product/components/ProductCard";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {
  addToWishlist,
  getUserWishlist,
  removeFromWishlist,
} from "../../../../../features/auth/services/wishlistService";
import useWishlist from "../../../../../features/product/hooks/useWishlist";
import { wishListContainer, wishListPlaceholder } from "./WishListStyle";
import SvgIcon from "../../../../../components/ui/SvgIcon/SvgIcon";
import useProducts from "../../../../../features/product/hooks/useProducts";
import ProductCardSkeleton from "../../../../../features/product/components/ProductCardSkeleton";

function WishList() {
  const { wishlist, loading } = useWishlist();
  const { products } = useProducts();

  const wishListProducts = products.filter((product) =>
    wishlist.some((item) => item.product_id === product.id),
  );

  return (
    <>
      {loading ? (
        <Box sx={wishListContainer}>
          {Array.from({ length: 3 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </Box>
      ) : wishlist.length > 0 ? (
        <Box sx={wishListContainer}>
          {wishListProducts.map((item) => (
            <ProductCard key={item.id} itemData={item} layout="featured" />
          ))}
        </Box>
      ) : (
        <Box sx={wishListPlaceholder}>
          <SvgIcon name="noData" size={350} />
          <Typography sx={{ fontWeight: "500" }}>
            موردی برای نمایش وجود ندارد!
          </Typography>
          <Typography component="span" variant="subtitle2">
            در حال حاضر هیچ محتوایی برای نمایش وجود نداره...
          </Typography>
        </Box>
      )}
    </>
  );
}

export default WishList;

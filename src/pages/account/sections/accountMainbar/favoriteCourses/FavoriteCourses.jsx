import { Box } from "@mui/material";
import { favoriteCourseGrid } from "./favoriteCoursesStyle";
import { productData } from "../../../../../data/productData";
import ProductCard from "../../../../../features/product/components/ProductCard";

function FavoriteCourses() {
  return (
    <>
      <Box sx={favoriteCourseGrid}>
        {productData.slice(15, 17).map((item) => (
          <ProductCard key={item.id} itemData={item} layout="featured" />
        ))}
      </Box>
    </>
  );
}

export default FavoriteCourses;

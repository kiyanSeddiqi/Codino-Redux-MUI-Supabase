import { Box, Typography } from "@mui/material";
import {
  flexCol,
  sectionStyle,
  sectionTitle,
} from "../../../../styles/globalStyles";
import ProductCard from "../../../../features/product/components/ProductCard";
import { featuredContainer } from "../../../../features/product/styles/productCardStyles";
import { coursesCardCotainer } from "../../../courses/Sections/Filter/coursesFilterStyles";
import useProducts from "../../../../features/product/hooks/useProducts";
import ProductCardSkeleton from "../../../../features/product/components/ProductCardSkeleton";

function ExpertCourses() {
  const { products, loading } = useProducts();

  const expertCourses = products.filter((item) => item.tags.includes("expert"));

  return (
    <>
      <Box component="section" sx={{ ...sectionStyle, alignItems: "start" }}>
        <Typography component="h4" sx={sectionTitle}>
          دوره های متخصص
        </Typography>
        <Box sx={coursesCardCotainer}>
          {loading
            ? Array.from({ length: 5 }).map((_, index) => (
                <ProductCardSkeleton key={index} />
              ))
            : expertCourses.map((item) => (
                <ProductCard key={item.id} itemData={item} layout="featured" />
              ))}
          {}
        </Box>
      </Box>
    </>
  );
}

export default ExpertCourses;

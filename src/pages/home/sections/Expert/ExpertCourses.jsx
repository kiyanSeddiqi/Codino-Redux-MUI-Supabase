import { Box, Typography } from "@mui/material";
import {
  flexCol,
  sectionStyle,
  sectionTitle,
} from "../../../../styles/globalStyles";
import { productData } from "../../../../data/productData";
import ProductCard from "../../../../features/product/components/ProductCard";
import { featuredContainer } from "../../../../features/product/styles/productCardStyles";

function ExpertCourses() {
  const expertCourses = productData.filter((item) =>
    item.tags.includes("expert"),
  );

  return (
    <>
      <Box component="section" sx={{ ...sectionStyle, alignItems: "start" }}>
        <Typography component="h4" sx={sectionTitle}>
          دوره های متخصص
        </Typography>
        <Box sx={featuredContainer}>
          {expertCourses.map((item) => (
            <ProductCard key={item.id} itemData={item} layout="featured" />
          ))}
        </Box>
      </Box>
    </>
  );
}

export default ExpertCourses;

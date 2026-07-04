import { Box, Typography } from "@mui/material";
import {
  flexCol,
  sectionStyle,
  sectionTitle,
} from "../../../../styles/globalStyles";
import { expertContainer } from "./expertCoursesStyles";
import { productData } from "../../../../data/productData";
import ProductCard from "../../../../features/product/components/ProductCard";

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
        <Box sx={expertContainer}>
          {expertCourses.map((item) => (
            <ProductCard key={item.id} itemData={item} layout="expert" />
          ))}
        </Box>
      </Box>
    </>
  );
}

export default ExpertCourses;

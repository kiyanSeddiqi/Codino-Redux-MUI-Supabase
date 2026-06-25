import { Box, Typography } from "@mui/material";
import { flexCol } from "../../../../styles/globalStyles";
import { expertContainer } from "./expertCoursesStyles";
import { productData } from "../../../../data/productData";
import ProductCard from "../../../../features/product/components/ProductCard";

function ExpertCourses() {
  const expertCourses = productData.filter((item) =>
    item.category.includes("expert"),
  );

  return (
    <>
      <Box
        component="section"
        sx={{ ...flexCol(2.5), mb: 12.5, alignItems: "start" }}
      >
        <Typography
          component="h4"
          sx={{ fontSize: { xs: "20px", lg: "24px" }, fontWeight: 600 }}
        >
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

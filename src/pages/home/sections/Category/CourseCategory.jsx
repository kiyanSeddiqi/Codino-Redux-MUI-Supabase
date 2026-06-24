import { Box, Typography } from "@mui/material";
import {
  courseCategoryContainer,
  courseCategoryGrid,
  courseCategoryGridItem,
  courseCategoryTitle,
} from "./courseCategoryStyles";
import { categoryMenuData } from "../../../../data/menu";
import { Link } from "react-router-dom";
import SvgIcon from "../../../../components/ui/SvgIcon/SvgIcon";

function CourseCategory() {
  return (
    <>
      <Box component="section" sx={courseCategoryContainer}>
        <Box sx={courseCategoryTitle}>
          <Typography component="h4">چی میخوای یاد بگیری؟</Typography>
          <Typography sx={{ lineHeight: "32px" }}>
            دسته‌بندی‌های آموزشی کدیاد رو ببین و از جایی شروع کن که برات جذابه.
          </Typography>
        </Box>
        <Box sx={courseCategoryGrid}>
          {categoryMenuData[0]?.children?.map((item, i) => (
            <Box
              key={i}
              component={Link}
              to={item.path}
              sx={courseCategoryGridItem}
            >
              <SvgIcon name={item.iconName} size={28} />
              <Box component="span">{item.title}</Box>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default CourseCategory;

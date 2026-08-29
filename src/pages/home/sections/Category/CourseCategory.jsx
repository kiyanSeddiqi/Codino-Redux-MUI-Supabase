import { Box, Typography } from "@mui/material";
import { courseCategoryCard, courseCategoryGrid } from "./courseCategoryStyles";
import { Link } from "react-router-dom";
import SvgIcon from "../../../../components/ui/SvgIcon/SvgIcon";
import {
  flexCol,
  sectionStyle,
  sectionTitle,
} from "../../../../styles/globalStyles";
import { categoryData } from "../../../../data/categoryData";

function CourseCategory() {
  return (
    <>
      <Box component="section" sx={sectionStyle}>
        <Box sx={flexCol("6px")}>
          <Typography component="h2" sx={sectionTitle}>
            چی میخوای یاد بگیری؟
          </Typography>
          <Typography sx={{ lineHeight: "32px" }}>
            دسته‌بندی‌های آموزشی کدینو رو ببین و از جایی شروع کن که برات جذابه.
          </Typography>
        </Box>
        <Box sx={courseCategoryGrid}>
          {categoryData?.map((item, i) => {
            if (item.children.length === 0) return;
            return (
              <Box
                key={i}
                component={Link}
                to={`courses/${item.slug}`}
                sx={(theme) => courseCategoryCard(theme, "120px")}
              >
                <SvgIcon name={item.iconName} size={28} />
                <Typography component="span">{item.title}</Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
    </>
  );
}

export default CourseCategory;

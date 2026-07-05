import { Box, Divider, Typography } from "@mui/material";
import { flexBox, flexCol } from "../../../../styles/globalStyles";
import { outlineSectionTitle, outlineStats } from "./courseOutlineStyles";
import { outlineData } from "../../../../data/courseOutlineData";
import CourseOutlineAccordion from "./CourseOutlineAccordion";

function CourseOutlines() {
  return (
    <>
      <Box component="section" sx={flexCol(2.5)}>
        <Box sx={flexBox(3)}>
          <Typography component="h5" sx={outlineSectionTitle}>
            سرفصل های دوره
          </Typography>
          <Box sx={flexBox(2)}>
            <Typography component="span" sx={outlineStats}>
              12 فصل
            </Typography>
            <Divider orientation="vertical" flexItem />
            <Typography component="span" sx={outlineStats}>
              152 جلسه
            </Typography>
          </Box>
        </Box>
        <Box sx={flexCol(2.5)}>
          {outlineData.map((item) => (
            <CourseOutlineAccordion key={item.id} itemData={item} />
          ))}
        </Box>
      </Box>
    </>
  );
}

export default CourseOutlines;

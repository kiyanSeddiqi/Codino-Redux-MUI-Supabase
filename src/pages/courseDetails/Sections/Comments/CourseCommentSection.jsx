import { Box, Typography } from "@mui/material";
import {
  flexBox,
  flexCol,
  sectionTitle,
} from "../../../../styles/globalStyles";
import { courseCommentData } from "../../../../data/courseCommentData";

function CourseCommentSection() {
  return (
    <>
      <Box id="#comment" component="section" sx={flexCol(2.5)}>
        <Box sx={flexBox(2.5)}>
          <Typography component="h4" sx={sectionTitle}>
            دیدگاه ها
          </Typography>
          <Typography
            component="span"
            variant="subtitle2"
            sx={{ color: "text.secondary" }}
          >
            {courseCommentData.length} دیدگاه
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default CourseCommentSection;

import { Box, Typography } from "@mui/material";
import {
  flexBox,
  flexCol,
  sectionTitle,
} from "../../../../styles/globalStyles";
import { courseCommentData } from "../../../../data/courseCommentData";
import CommentList from "./CommentList";

function CourseCommentSection() {
  return (
    <>
      <Box id="comments" component="section" sx={flexCol(2.5)}>
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
        <CommentList />
      </Box>
    </>
  );
}

export default CourseCommentSection;

import { Box, Button, Chip, Typography } from "@mui/material";
import { flexBetween, flexBox } from "../../../../styles/globalStyles";
import { lessonItemTitleBox } from "./courseChapterStyles";
import SvgIcon from "../../../../components/ui/SvgIcon/SvgIcon";
function CourseLessons({ lessonData }) {
  return (
    <>
      <Box component="li" sx={flexBetween("row")}>
        <Box sx={lessonItemTitleBox}>
          <Typography
            component="span"
            variant="subtitle2"
            sx={{ color: "primary.main", minWidth: "64px" }}
          >
            جلسه {lessonData.id}
          </Typography>
          <Box sx={flexBox("10px")}>
            <Typography
              component="span"
              sx={{ fontSize: { xs: "12px", lg: "14px" } }}
            >
              {lessonData.title}
            </Typography>
            {lessonData.isFree ? (
              <Chip label="رایگان" color="error" sx={{ lineHeight: "16px" }} />
            ) : (
              <Chip label="نقدی" color="info" sx={{ lineHeight: "16px" }} />
            )}
          </Box>
        </Box>
        <Box sx={flexBox(2.5)}>
          <Typography
            component="span"
            variant="subtitle2"
            sx={{ color: "text.secondary" }}
          >
            {lessonData.duration}
          </Typography>
          {lessonData.isFree && (
            <Button
              variant="outlined"
              sx={{ minWidth: 0, bgcolor: "menuItemBg" }}
            >
              <SvgIcon name="playVideo" size={24} />
            </Button>
          )}
        </Box>
      </Box>
    </>
  );
}

export default CourseLessons;

import { Box, Button, Chip, Typography } from "@mui/material";
import { flexBetween, flexBox } from "../../../../styles/globalStyles";
import { lessonItemTitle, lessonItemTitleBox } from "./courseChapterStyles";
import SvgIcon from "../../../../components/ui/SvgIcon/SvgIcon";
function CourseLessons({ lessonData }) {
  return (
    <>
      <Box component="li" sx={flexBetween(4, "row")}>
        <Box sx={lessonItemTitleBox}>
          <Typography
            component="span"
            variant="subtitle2"
            sx={{
              color: "primary.main",
              minWidth: "64px",
              lineHeight: "21px",
            }}
          >
            جلسه {lessonData.id}
          </Typography>
          <Box sx={flexBox("10px")}>
            <Typography component="span" sx={lessonItemTitle}>
              {lessonData.title}
            </Typography>
            {lessonData.isFree ? (
              <Chip
                label="رایگان"
                color="warning"
                sx={{
                  lineHeight: "16px",
                  display: { xs: "none", sm: "block" },
                }}
              />
            ) : (
              <Chip
                label="نقدی"
                color="normal"
                sx={{
                  lineHeight: "16px",
                  display: { xs: "none", md: "block" },
                }}
              />
            )}
          </Box>
        </Box>
        <Box sx={flexBox(2.5)}>
          <Typography
            component="span"
            sx={{
              color: "text.secondary",
              fontSize: { xs: "12px", md: "14px" },
            }}
          >
            {lessonData.duration}
          </Typography>
          {lessonData.isFree && (
            <Button
              variant="outlined"
              sx={{
                minWidth: 0,
                bgcolor: "bgAccent",
                p: { xs: "6px", md: "10px" },
              }}
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

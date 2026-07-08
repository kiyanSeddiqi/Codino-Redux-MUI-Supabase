import { Box, Typography } from "@mui/material";
import { flexCol, sectionTitle } from "../../../../styles/globalStyles";

function CoursePrerequisiteSection() {
  return (
    <>
      <Box id="prerequisites" component="section" sx={flexCol(2.5)}>
        <Typography sx={sectionTitle} component="h4">
          پیش نیازها
        </Typography>
        <Box
          sx={{
            ...flexCol(2.5),
            mb: 3,
            "& p": { fontSize: { xs: "14px", md: "16px" } },
          }}
        >
          <Typography>آموزش جاوا اسکریپت</Typography>
          <Typography>آموزش HTML و CSS</Typography>
          <Typography>آموزش الگوریتم و فلوچارت</Typography>
        </Box>
      </Box>
    </>
  );
}

export default CoursePrerequisiteSection;

import { Box, Divider, Typography } from "@mui/material";
import { flexBox, flexCol } from "../../../../styles/globalStyles";

import { chapterSectionTitle, chapterStats } from "./courseChapterStyles";
import { chaptersData } from "../../../../data/courseChapterData";
import ChapterAccordion from "./ChapterAccordion";

function CourseChapterSection({ currentProductId }) {
  const sessionsNumber = chaptersData.reduce(
    (acc, curr) => acc + curr.lessons.length,
    0,
  );

  return (
    <>
      <Box id="chapter" component="section" sx={flexCol(2.5)}>
        <Box sx={{ ...flexBox(2), flexWrap: "wrap" }}>
          <Typography component="h2" sx={chapterSectionTitle}>
            سرفصل های دوره
          </Typography>
          <Box sx={flexBox(2)}>
            <Typography component="span" sx={chapterStats}>
              {chaptersData.length} فصل
            </Typography>
            <Divider orientation="vertical" flexItem />
            <Typography component="span" sx={chapterStats}>
              {sessionsNumber} جلسه
            </Typography>
          </Box>
        </Box>
        <Box sx={flexCol(2.5)}>
          {chaptersData.map((item) => (
            <ChapterAccordion
              key={item.id}
              itemData={item}
              currentId={currentProductId}
            />
          ))}
        </Box>
      </Box>
    </>
  );
}

export default CourseChapterSection;

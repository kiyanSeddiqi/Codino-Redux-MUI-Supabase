import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Typography,
} from "@mui/material";
import { useId, useState } from "react";
import {
  chapterAccordion,
  chapterAccordionSummary,
  chapterLessonStats,
  courseChapterNum,
  courseChapterTitle,
  lessonEmptyBox,
} from "./courseChapterStyles";
import { flexBetween, flexBox, flexCol } from "../../../../styles/globalStyles";
import { ExpandMore } from "@mui/icons-material";
import CourseLessons from "./CourseLessons";

function ChapterAccordion({ itemData }) {
  const [expanded, setExpanded] = useState(false);
  const id = useId();
  return (
    <>
      <Accordion
        sx={chapterAccordion}
        expanded={expanded}
        onChange={() => setExpanded(!expanded)}
      >
        <AccordionSummary
          sx={chapterAccordionSummary}
          expandIcon={<ExpandMore />}
          aria-controls={`${id}-panel1-content`}
          id={`${id}-panel1-header`}
        >
          <Box
            sx={{
              ...flexBetween(1, "row"),
              width: "100%",
              flexWrap: "wrap",
            }}
          >
            <Box sx={flexBox(2.5)}>
              <Typography component="strong" sx={courseChapterNum}>
                {itemData.id}
              </Typography>
              <Typography sx={courseChapterTitle}>{itemData.title}</Typography>
            </Box>
            <Box sx={flexBox(2.5)}>
              <Box sx={chapterLessonStats}>
                <Typography component="span">{itemData.duration}</Typography>
                <Divider orientation="vertical" flexItem />
                <Typography component="span">
                  {itemData.lessons.length} جلسه
                </Typography>
              </Box>
            </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails sx={{ p: 0 }}>
          <Divider sx={{ my: 3 }} />
          {itemData.lessons.length > 0 ? (
            <Box component="ul" sx={flexCol(3)}>
              {itemData.lessons.map((lesson) => (
                <CourseLessons key={lesson.id} lessonData={lesson} />
              ))}
            </Box>
          ) : (
            <Box sx={lessonEmptyBox}>
              هنوز ویدئویی برای این فصل ثبت نشده است
            </Box>
          )}
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default ChapterAccordion;

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
  courseChapterNum,
  courseChapterTitle,
  outlineAccordion,
  outlineAccordionSummary,
  outlineLessonStats,
} from "./courseOutlineStyles";
import { flexBetween, flexBox } from "../../../../styles/globalStyles";
import { ExpandMore } from "@mui/icons-material";

function CourseOutlineAccordion({ itemData }) {
  const [expanded, setExpanded] = useState(false);
  const id = useId();
  return (
    <>
      <Accordion
        sx={outlineAccordion}
        expanded={expanded}
        onChange={() => setExpanded(!expanded)}
      >
        <AccordionSummary
          sx={outlineAccordionSummary}
          expandIcon={<ExpandMore />}
          aria-controls={`${id}-panel1-content`}
          id={`${id}-panel1-header`}
        >
          <Box sx={{ ...flexBetween("row"), width: "100%" }}>
            <Box sx={flexBox(2.5)}>
              <Typography component="strong" sx={courseChapterNum}>
                {itemData.id}
              </Typography>
              <Typography sx={courseChapterTitle}>{itemData.title}</Typography>
            </Box>
            <Box sx={flexBox(2.5)}>
              <Box sx={outlineLessonStats}>
                <Typography component="span">{itemData.duration}</Typography>
                <Divider orientation="vertical" flexItem />
                <Typography component="span">{itemData.duration}</Typography>
              </Box>
            </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails sx={{ p: 0 }}>
          <Divider sx={{ my: 3 }} />
          {itemData.lessons.map((lesson) => (
            <p>{lesson.title}</p>
          ))}
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default CourseOutlineAccordion;

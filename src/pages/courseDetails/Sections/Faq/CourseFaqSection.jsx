import { Box, Typography } from "@mui/material";
import { flexCol, sectionTitle } from "../../../../styles/globalStyles";
import { courseFaqData } from "../../../../data/courseFaqData";
import FaqAccordion from "../../../home/Sections/FAQ/FaqAccordion";

function CourseFaqSection() {
  return (
    <>
      <Box id="#faq" component="section" sx={flexCol(2.5)}>
        <Typography sx={sectionTitle} component="h4">
          سوالات متداول
        </Typography>
        <Box>
          {courseFaqData.map((item) => (
            <FaqAccordion key={item.id} itemData={item} />
          ))}
        </Box>
      </Box>
    </>
  );
}

export default CourseFaqSection;

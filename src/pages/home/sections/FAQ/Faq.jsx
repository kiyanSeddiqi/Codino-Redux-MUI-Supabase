import { Box, Typography } from "@mui/material";
import { faqContainer } from "./faqStyles";
import { flexCol, sectionTitle } from "../../../../styles/globalStyles";
import { faqData } from "../../../../data/faqData";
import FaqAccordion from "./FaqAccordion";

function faq() {
  return (
    <>
      <Box sx={faqContainer}>
        <Box sx={flexCol(1)}>
          <Typography component="h4" sx={sectionTitle}>
            سوالات متداول
          </Typography>
          <Typography
            component="span"
            variant="subtitle2"
            sx={{ color: "text.secondary" }}
          >
            جواب سوالت رو اینجا پیدا کن...
          </Typography>
        </Box>
        {faqData.map((item) => (
          <FaqAccordion key={item.id} itemData={item} />
        ))}
      </Box>
    </>
  );
}

export default faq;

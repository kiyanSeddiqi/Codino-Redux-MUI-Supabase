import { Add, Remove } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { useId, useState } from "react";
import { faqAccordion, faqAccordionSummary } from "./faqStyles";

function FaqAccordion({ itemData }) {
  const [expanded, setExpanded] = useState(false);
  const id = useId();
  return (
    <>
      <Accordion
        sx={faqAccordion}
        expanded={expanded}
        onChange={() => setExpanded(!expanded)}
      >
        <AccordionSummary
          sx={faqAccordionSummary}
          expandIcon={expanded ? <Remove /> : <Add />}
          aria-controls={`${id}-panel1-content`}
          id={`${id}-panel1-header`}
        >
          <Typography
            sx={{
              lineHeight: "24px",
              fontWeight: 500,
              fontSize: {
                xs: "14px",
                sm: "16px",
              },
            }}
          >
            {itemData.q}
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ pt: 0 }}>
          <Typography
            sx={{
              fontSize: {
                xs: "14px",
                sm: "16px",
              },
              lineHeight: "24px",
            }}
          >
            {itemData.a}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default FaqAccordion;

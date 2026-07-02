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
          <Typography sx={{ fontWeight: 500 }}>{itemData.q}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ pt: 0 }}>
          <Typography>{itemData.a}</Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default FaqAccordion;

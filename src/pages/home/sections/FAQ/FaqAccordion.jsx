import { Add, Remove } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { useId, useState } from "react";

function FaqAccordion({ itemData }) {
  const [expanded, setExpanded] = useState(false);
  const id = useId();
  return (
    <>
      <Accordion
        sx={{ bgcolor: "background.default" }}
        expanded={expanded}
        onChange={() => setExpanded(!expanded)}
      >
        <AccordionSummary
          sx={{
            flexDirection: "row-reverse",
            alignItems: "center",
            gap: 2,
            "& .MuiAccordionSummary-content": {
              margin: 0,
            },
            "& .MuiSvgIcon-root": {
              color: "primary.main",
            },
          }}
          expandIcon={expanded ? <Remove /> : <Add />}
          aria-controls={`${id}-panel1-content`}
          id={`${id}-panel1-header`}
        >
          <Typography component="span">{itemData.q}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{itemData.a}</Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default FaqAccordion;

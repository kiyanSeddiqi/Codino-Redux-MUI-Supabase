import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { useId, useState } from "react";

function CategoryFilterList({ itemData }) {
  const [expanded, setExpanded] = useState(false);
  const id = useId();
  return (
    <>
      <Accordion
        sx={{}}
        expanded={expanded}
        onChange={() => setExpanded(!expanded)}
      >
        <AccordionSummary
          sx={{ flexDirection: "row-reverse", gap: 1 }}
          expandIcon={<ExpandMore sx={{ color: "primary.main" }} />}
          aria-controls={`${id}-panel1-content`}
          id={`${id}-panel1-header`}
        >
          <Typography variant="caption" sx={{ fontWeight: 500 }}>
            {itemData.title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: 0 }}>
          {itemData?.children.map((child) => (
            <Typography variant="caption" sx={{ display: "block" }}>
              {child.title}
            </Typography>
          ))}
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default CategoryFilterList;

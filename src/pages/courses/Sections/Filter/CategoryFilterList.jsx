import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import { useId, useState } from "react";
import {
  filterAccordion,
  filterAccordionTitle,
  filterOption,
  filterOptionCheckbox,
} from "./coursesFilterStyles";
import { flexCol } from "../../../../styles/globalStyles";

function CategoryFilterList({ itemData }) {
  const [expanded, setExpanded] = useState(false);
  const id = useId();
  return (
    <>
      <Accordion
        sx={filterAccordion}
        expanded={expanded}
        onChange={() => setExpanded(!expanded)}
      >
        <AccordionSummary
          sx={{ ...filterAccordionTitle, flexDirection: "row-reverse", gap: 1 }}
          expandIcon={
            <ExpandMore sx={{ color: "primary.main", fontSize: "20px" }} />
          }
          aria-controls={`${id}-panel1-content`}
          id={`${id}-panel1-header`}
        >
          <Typography variant="caption" sx={{ fontWeight: 500 }}>
            {itemData.title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: 0, pr: 4 }}>
          <FormGroup sx={{ gap: 1 }}>
            {itemData?.children.map((child, i) => {
              if (child.slug.length === 0) return;
              return (
                <FormControlLabel
                  key={i}
                  sx={filterOption}
                  control={<Checkbox sx={filterOptionCheckbox} />}
                  label={child.title}
                />
              );
            })}
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default CategoryFilterList;

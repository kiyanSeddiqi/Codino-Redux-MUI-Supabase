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
import { useEffect, useId, useState } from "react";
import {
  filterAccordion,
  filterAccordionTitle,
  filterOption,
  filterOptionCheckbox,
} from "./coursesFilterStyles";
import { flexCol } from "../../../../styles/globalStyles";
import { useNavigate } from "react-router-dom";

function CategoryFilterList({ itemData, currentSlug, onClose }) {
  const id = useId();
  const navigate = useNavigate();

  const hasActiveChild =
    itemData.slug === currentSlug ||
    itemData.children.some((child) => child.slug === currentSlug);

  const [expanded, setExpanded] = useState(hasActiveChild);

  useEffect(() => {
    setExpanded(hasActiveChild);
  }, [hasActiveChild]);

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
          <FormGroup sx={{ gap: 1, pl: "12px" }}>
            {itemData?.children.map((child, i) => {
              if (child.slug.length === 0) return;
              return (
                <FormControlLabel
                  key={i}
                  sx={filterOption}
                  control={
                    <Checkbox
                      checked={child.slug === currentSlug}
                      onChange={() => {
                        if (child.slug === currentSlug) {
                          navigate("/courses");
                        } else {
                          navigate(`/courses/${child.slug}`);
                        }
                        onClose?.(false);
                      }}
                      sx={filterOptionCheckbox}
                    />
                  }
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

import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Typography,
} from "@mui/material";
import { useId, useState } from "react";
import { filterAccordion, filterAccordionTitle } from "./coursesFilterStyles";
import { flexBox } from "../../../../styles/globalStyles";

function StatusAccordion() {
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
          sx={filterAccordionTitle}
          expandIcon={<ExpandMore />}
          aria-controls={`${id}-panel1-content`}
          id={`${id}-panel1-header`}
        >
          <Typography sx={{ fontWeight: 500 }}>وضعیت دوره</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: 0 }}>
          <Box
            sx={{
              ...flexBox("12px"),
              flexWrap: "wrap",
              "& > *": { borderRadius: "6px" },
              mt: "12px",
            }}
          >
            <Button variant="outlined">همه دوره ها</Button>
            <Button variant="outlined">درحال بروز رسانی</Button>
            <Button variant="outlined">به اتمام رسیده </Button>
            <Button variant="outlined">به زودی </Button>
          </Box>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default StatusAccordion;

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
import {
  filterAccordion,
  filterAccordionTitle,
  activeFilterBtn,
} from "./coursesFilterStyles";
import { flexBox } from "../../../../styles/globalStyles";

function StatusAccordion({ statusValue, dispatch }) {
  const [expanded, setExpanded] = useState(true);
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
              mt: "12px",
            }}
          >
            <Button
              sx={activeFilterBtn}
              onClick={() => dispatch({ type: "SET_STATUS", payload: "all" })}
              variant={statusValue === "all" ? "contained" : "outlined"}
            >
              همه دوره ها
            </Button>
            <Button
              sx={activeFilterBtn}
              onClick={() =>
                dispatch({ type: "SET_STATUS", payload: "updating" })
              }
              variant={statusValue === "updating" ? "contained" : "outlined"}
            >
              درحال بروز رسانی
            </Button>
            <Button
              sx={activeFilterBtn}
              onClick={() =>
                dispatch({ type: "SET_STATUS", payload: "completed" })
              }
              variant={statusValue === "completed" ? "contained" : "outlined"}
            >
              به اتمام رسیده
            </Button>
            <Button
              sx={activeFilterBtn}
              onClick={() => dispatch({ type: "SET_STATUS", payload: "soon" })}
              variant={statusValue === "soon" ? "contained" : "outlined"}
            >
              به زودی
            </Button>
          </Box>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default StatusAccordion;

import { ExpandMore, Search } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  InputBase,
  Typography,
} from "@mui/material";
import { useId, useState } from "react";
import { flexBetween, flexCol } from "../../../../styles/globalStyles";
import {
  catAccordion,
  catAccordionSummary,
  searchBox,
} from "./coursesFilterStyles";

function CategoryAccordion() {
  const [expanded, setExpanded] = useState(false);
  const id = useId();
  return (
    <>
      <Accordion
        sx={catAccordion}
        expanded={expanded}
        onChange={() => setExpanded(!expanded)}
      >
        <AccordionSummary
          sx={catAccordionSummary}
          expandIcon={<ExpandMore />}
          aria-controls={`${id}-panel1-content`}
          id={`${id}-panel1-header`}
        >
          <Typography sx={{ fontWeight: 500 }}>دسته بندی ها</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: 0 }}>
          <Box sx={flexCol(2)}>
            <Box sx={searchBox}>
              <Search sx={{ fontSize: "22px" }} />
              <InputBase
                type="text"
                autoComplete="off"
                name="search"
                placeholder="جستجو ..."
              />
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default CategoryAccordion;

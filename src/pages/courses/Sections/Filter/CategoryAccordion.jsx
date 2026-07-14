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
  filterAccordion,
  filterAccordionTitle,
  filterListBox,
  searchBox,
} from "./coursesFilterStyles";
import CategoryFilterList from "./CategoryFilterList";
import { categoryData } from "../../../../data/categoryData";

function CategoryAccordion() {
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
            <Box sx={filterListBox}>
              {categoryData.map((item) => {
                if (item.children.length === 0) return;
                return <CategoryFilterList key={item.id} itemData={item} />;
              })}
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default CategoryAccordion;

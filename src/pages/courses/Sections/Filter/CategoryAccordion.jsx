import { ExpandMore, Search } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  InputBase,
  Typography,
} from "@mui/material";
import { useId, useMemo, useState } from "react";
import { flexBetween, flexCol } from "../../../../styles/globalStyles";
import {
  filterAccordion,
  filterAccordionTitle,
  filterListBox,
  searchBox,
} from "./coursesFilterStyles";
import CategoryFilterList from "./CategoryFilterList";
import { categoryData } from "../../../../data/categoryData";
import { useParams } from "react-router-dom";

function CategoryAccordion({ onClose }) {
  const { slug } = useParams();
  const [expanded, setExpanded] = useState(true);
  const [searchQury, setSearchQuery] = useState("");
  const id = useId();

  const filteredCats = useMemo(() => {
    const query = searchQury.trim().toLocaleLowerCase();

    if (!query) return categoryData;

    return categoryData.filter((item) => {
      const parentMatch = item.title.toLocaleLowerCase().includes(query);

      const childMatch = item.children.some((child) =>
        child.title.toLocaleLowerCase().includes(query),
      );

      return parentMatch || childMatch;
    });
  }, [searchQury]);

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
                value={searchQury}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </Box>
            <Box sx={filterListBox}>
              {filteredCats.map((item) => {
                if (!item.children.length) return null;
                return (
                  <CategoryFilterList
                    key={item.id}
                    itemData={item}
                    currentSlug={slug}
                    onClose={onClose}
                  />
                );
              })}
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default CategoryAccordion;

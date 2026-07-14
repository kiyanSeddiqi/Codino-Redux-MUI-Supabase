import { ChevronLeft, Search, Tune } from "@mui/icons-material";
import { flexBox } from "../../../../styles/globalStyles";
import { filterSidebar, searchBox } from "./coursesFilterStyles";
import { Box, Button, Divider, InputBase, Typography } from "@mui/material";
import CategoryAccordion from "./CategoryAccordion";
import StatusAccordion from "./StatusAccordion";
import SwitchboxFilter from "./SwitchboxFilter";

function FilterSidebar() {
  return (
    <>
      <Box sx={filterSidebar} component="aside">
        <Box>
          {/* FILTER HEADER */}
          <Box sx={flexBox("12px")}>
            <Tune />
            <Typography component="span">فیلتر ها</Typography>
            <Button variant="text">حذف همه</Button>
          </Box>
          {/* SEARCH BOX */}
          <Box sx={searchBox}>
            <Search sx={{ fontSize: "22px" }} />
            <InputBase
              type="text"
              autoComplete="off"
              name="search"
              placeholder="جستجو از میان نتایج"
            />
            <Button
              sx={{ fontSize: "10px", p: "6px 8px", borderRadius: "4px" }}
            >
              جستجو
            </Button>
          </Box>
        </Box>
        <Divider />
        <CategoryAccordion />
        <Divider />
        <StatusAccordion />
        <Divider />
        <SwitchboxFilter />
      </Box>
    </>
  );
}

export default FilterSidebar;

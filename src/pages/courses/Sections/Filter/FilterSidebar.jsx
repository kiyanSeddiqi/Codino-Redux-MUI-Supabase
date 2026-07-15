import { ChevronLeft, Search, Tune } from "@mui/icons-material";
import { flexBox } from "../../../../styles/globalStyles";
import { filterSidebar, searchBox } from "./coursesFilterStyles";
import { Box, Button, Divider, InputBase, Typography } from "@mui/material";
import CategoryAccordion from "./CategoryAccordion";
import StatusAccordion from "./StatusAccordion";
import SwitchboxFilter from "./SwitchboxFilter";

function FilterSidebar({
  searchInput,
  onInputChange,
  onSearch,
  onClearFilters,
  onFilterStatus,
  statusValue,
}) {
  return (
    <>
      <Box sx={filterSidebar} component="aside">
        <Box>
          {/* FILTER HEADER */}
          <Box sx={flexBox("12px")}>
            <Tune />
            <Typography component="span">فیلتر ها</Typography>
            <Button onClick={onClearFilters} variant="text">
              حذف همه
            </Button>
          </Box>
          {/* SEARCH BOX */}
          <Box sx={searchBox}>
            <Search sx={{ fontSize: "22px" }} />
            <InputBase
              type="text"
              autoComplete="off"
              name="search"
              placeholder="جستجو از میان نتایج"
              value={searchInput}
              onChange={(e) => onInputChange(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  onSearch();
                }
              }}
            />
            <Button
              onClick={() => onSearch()}
              sx={{ fontSize: "10px", p: "6px 8px", borderRadius: "4px" }}
            >
              جستجو
            </Button>
          </Box>
        </Box>
        <Divider />
        <CategoryAccordion />
        <Divider />
        <StatusAccordion
          onFilterStatus={onFilterStatus}
          statusValue={statusValue}
        />
        <Divider />
        <SwitchboxFilter />
      </Box>
    </>
  );
}

export default FilterSidebar;

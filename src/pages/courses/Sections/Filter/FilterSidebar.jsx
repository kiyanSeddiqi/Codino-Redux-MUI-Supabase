import { Search, Tune } from "@mui/icons-material";
import { flexBox } from "../../../../styles/globalStyles";
import { filterSidebar, searchBox } from "./coursesFilterStyles";
import { Box, Button, Divider, InputBase, Typography } from "@mui/material";
import CategoryAccordion from "./CategoryAccordion";
import StatusAccordion from "./StatusAccordion";
import SwitchboxFilter from "./SwitchboxFilter";

function FilterSidebar({ filters, dispatch }) {
  return (
    <>
      <Box sx={filterSidebar} component="aside">
        <Box>
          {/* FILTER HEADER */}
          <Box sx={{ ...flexBox("12px"), mb: 1 }}>
            <Tune />
            <Typography component="span">فیلتر ها</Typography>
            <Button
              onClick={() => dispatch({ type: "CLEAR_FILTERS" })}
              variant="text"
            >
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
              value={filters.search.input}
              onChange={(e) =>
                dispatch({ type: "SEARCH_INPUT", payload: e.target.value })
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  dispatch({ type: "SEARCH_QUERY" });
                }
              }}
            />
            <Button
              onClick={() => dispatch({ type: "SEARCH_QUERY" })}
              sx={{ fontSize: "10px", p: "6px 8px", borderRadius: "4px" }}
            >
              جستجو
            </Button>
          </Box>
        </Box>
        <Divider />
        <CategoryAccordion />
        <Divider />
        <StatusAccordion statusValue={filters.status} dispatch={dispatch} />
        <Divider />
        <SwitchboxFilter accessValue={filters.access} dispatch={dispatch} />
      </Box>
    </>
  );
}

export default FilterSidebar;

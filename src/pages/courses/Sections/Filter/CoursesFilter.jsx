import { Box } from "@mui/material";
import { filterContainer } from "./coursesFilterStyles";
import FilterSidebar from "./FilterSidebar";
import FilterMainbar from "./FilterMainbar";

function CoursesFilter() {
  return (
    <>
      <Box sx={filterContainer}>
        <FilterSidebar />
        <FilterMainbar />
      </Box>
    </>
  );
}

export default CoursesFilter;

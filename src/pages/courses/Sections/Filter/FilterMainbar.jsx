import { Box } from "@mui/material";
import { filterMainbar } from "./coursesFilterStyles";

function FilterMainbar() {
  return (
    <>
      <Box sx={filterMainbar} component="main"></Box>
    </>
  );
}

export default FilterMainbar;

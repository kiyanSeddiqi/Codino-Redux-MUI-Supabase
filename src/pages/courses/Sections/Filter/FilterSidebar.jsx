import { ChevronLeft, Tune } from "@mui/icons-material";
import { flexBox } from "../../../../styles/globalStyles";
import { filterSidebar } from "./coursesFilterStyles";
import { Box, Button, Typography } from "@mui/material";

function FilterSidebar() {
  return (
    <>
      <Box sx={filterSidebar} component="aside">
        <Box sx={flexBox("12px")}>
          <Tune />
          <Typography component="span">فیلتر ها</Typography>
          <Button
            variant="text"
            sx={{
              "&:hover svg": { opacity: 1, transform: "translateX(0)" },
              gap: 1,
            }}
          >
            حذف همه
            <ChevronLeft
              sx={{
                fontSize: "18px",
                transform: "translateX(22px)",
                opacity: 0,
                transition: "all 0.2s",
              }}
            />
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default FilterSidebar;

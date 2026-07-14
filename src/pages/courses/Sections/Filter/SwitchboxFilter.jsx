import { Box, FormControlLabel, Switch } from "@mui/material";
import { flexCol } from "../../../../styles/globalStyles";
import { switchBoxlLabel, switchboxStyle } from "./coursesFilterStyles";

function SwitchboxFilter() {
  return (
    <>
      <Box sx={flexCol(2)}>
        <FormControlLabel
          sx={switchBoxlLabel}
          control={<Switch sx={switchboxStyle} />}
          label="فقط دوره های کدینو پلاس"
        />
        <FormControlLabel
          sx={switchBoxlLabel}
          control={<Switch sx={switchboxStyle} />}
          label="دوره های اقساطی"
        />
        <FormControlLabel
          sx={switchBoxlLabel}
          control={<Switch sx={switchboxStyle} />}
          label="دوره های رایگان"
        />
      </Box>
    </>
  );
}

export default SwitchboxFilter;

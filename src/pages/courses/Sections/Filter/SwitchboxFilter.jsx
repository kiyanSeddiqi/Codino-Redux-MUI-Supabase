import { Box, FormControlLabel, Switch } from "@mui/material";
import { flexCol } from "../../../../styles/globalStyles";
import { switchBoxlLabel, switchboxStyle } from "./coursesFilterStyles";

function SwitchboxFilter({ onFilterAccess, accessFilter }) {
  return (
    <>
      <Box sx={flexCol(2)}>
        <FormControlLabel
          sx={switchBoxlLabel}
          control={
            <Switch
              sx={switchboxStyle}
              checked={accessFilter.plus}
              onChange={(e) => onFilterAccess("plus", e.target.checked)}
            />
          }
          label="فقط دوره های کدینو پلاس"
        />
        <FormControlLabel
          sx={switchBoxlLabel}
          control={
            <Switch
              sx={switchboxStyle}
              checked={accessFilter.installment}
              onChange={(e) => onFilterAccess("installment", e.target.checked)}
            />
          }
          label="دوره های اقساطی"
        />
        <FormControlLabel
          sx={switchBoxlLabel}
          control={
            <Switch
              sx={switchboxStyle}
              checked={accessFilter.free}
              onChange={(e) => onFilterAccess("free", e.target.checked)}
            />
          }
          label="دوره های رایگان"
        />
      </Box>
    </>
  );
}

export default SwitchboxFilter;

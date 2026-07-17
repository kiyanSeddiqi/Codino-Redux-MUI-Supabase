import { Box, FormControlLabel, Switch } from "@mui/material";
import { flexCol } from "../../../../styles/globalStyles";
import { switchBoxlLabel, switchboxStyle } from "./coursesFilterStyles";

function SwitchboxFilter({ accessValue, dispatch }) {
  return (
    <>
      <Box sx={flexCol(2)}>
        <FormControlLabel
          sx={switchBoxlLabel}
          control={
            <Switch
              sx={switchboxStyle}
              checked={accessValue.plus}
              onChange={(e) =>
                dispatch({
                  type: "SET_ACCESS",
                  name: "plus",
                  checked: e.target.checked,
                })
              }
            />
          }
          label="فقط دوره های کدینو پلاس"
        />
        <FormControlLabel
          sx={switchBoxlLabel}
          control={
            <Switch
              sx={switchboxStyle}
              checked={accessValue.installment}
              onChange={(e) =>
                dispatch({
                  type: "SET_ACCESS",
                  name: "installment",
                  checked: e.target.checked,
                })
              }
            />
          }
          label="دوره های اقساطی"
        />
        <FormControlLabel
          sx={switchBoxlLabel}
          control={
            <Switch
              sx={switchboxStyle}
              checked={accessValue.free}
              onChange={(e) =>
                dispatch({
                  type: "SET_ACCESS",
                  name: "free",
                  checked: e.target.checked,
                })
              }
            />
          }
          label="فقط دوره های رایگان"
        />
      </Box>
    </>
  );
}

export default SwitchboxFilter;

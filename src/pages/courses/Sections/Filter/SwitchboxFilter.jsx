import { Box, FormControlLabel, Switch } from "@mui/material";
import { flexCol } from "../../../../styles/globalStyles";
import { switchBoxlLabel, switchboxStyle } from "./coursesFilterStyles";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

function SwitchboxFilter({ accessValue, dispatch }) {
  const [searchParams] = useSearchParams();
  const filterQuery = searchParams.get("filter");

  useEffect(() => {
    if (filterQuery === "freeCourse") {
      dispatch({ type: "SET_ACCESS", name: "free", checked: true });
    }
    if (filterQuery === "plusCourse") {
      dispatch({ type: "SET_ACCESS", name: "plus", checked: true });
    }
  }, [filterQuery]);

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

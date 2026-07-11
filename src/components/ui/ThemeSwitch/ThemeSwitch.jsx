import { DarkMode, LightMode } from "@mui/icons-material";
import { Box, Tooltip } from "@mui/material";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../../store/slices/themeSlice";
import {
  themeBtn,
  themeIndicator,
} from "../../layout/navigation/styles/navbarStyles";

function ThemeSwitch({ sx }) {
  const dispatch = useDispatch();
  return (
    <>
      <Tooltip title="تغییر تم">
        <Box
          aria-label="دکمه تغییر تم"
          sx={[themeBtn, sx]}
          onClick={() => dispatch(toggleTheme())}
        >
          <DarkMode sx={{ fontSize: 16, color: "primary.main" }} />
          <LightMode sx={{ fontSize: 16 }} />
          <Box component="span" sx={themeIndicator}></Box>
        </Box>
      </Tooltip>
    </>
  );
}

export default ThemeSwitch;

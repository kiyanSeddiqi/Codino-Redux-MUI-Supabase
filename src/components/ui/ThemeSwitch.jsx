import { DarkMode, LightMode } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../store/slices/themeSlice";
import {
  themeBtn,
  themeIndicator,
} from "../layout/navigation/styles/navbarStyles";

function ThemeSwitch({ sx }) {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);
  return (
    <>
      <Box sx={[themeBtn, sx]} onClick={() => dispatch(toggleTheme())}>
        <DarkMode sx={{ fontSize: 16, color: "primary.main" }} />
        <LightMode sx={{ fontSize: 16 }} />
        <Box component="span" sx={themeIndicator}></Box>
      </Box>
    </>
  );
}

export default ThemeSwitch;

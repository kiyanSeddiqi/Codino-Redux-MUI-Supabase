import { DarkMode, LightMode } from "@mui/icons-material";
import { Box } from "@mui/material";
import { themeBall, themeBtn } from "../../styles/styles";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../store/slices/themeSlice";

function ThemeSwitch({ sx }) {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);
  return (
    <>
      <Box sx={[themeBtn, sx]} onClick={() => dispatch(toggleTheme())}>
        <DarkMode sx={{ fontSize: 16, color: "primary.main" }} />
        <LightMode sx={{ fontSize: 16 }} />
        <Box component="span" sx={themeBall}></Box>
      </Box>
    </>
  );
}

export default ThemeSwitch;

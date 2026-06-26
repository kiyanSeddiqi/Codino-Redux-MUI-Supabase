import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";
import { darkLogo, lightLogo } from "../../../data/imgSource";
import { Box } from "@mui/material";
import { logo } from "./logoStyles";

function Logo() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <>
      <Link to="/">
        <Box
          component="img"
          sx={logo}
          src={isDark ? darkLogo : lightLogo}
          alt="نشان تجاری"
        />
      </Link>
    </>
  );
}

export default Logo;

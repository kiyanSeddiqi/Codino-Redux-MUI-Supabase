import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { appBar, navWrapper, toolBar } from "../../../styles/styles";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../store/slices/themeSlice";
import { Link } from "react-router-dom";
import Logo from "../../ui/Logo";
import ThemeSwitch from "../../ui/ThemeSwitch";
import CategoryBtn from "./CategoryBtn";

function Navbar() {
  return (
    <>
      <AppBar sx={appBar}>
        <Toolbar sx={toolBar}>
          <Box sx={navWrapper}>
            <ThemeSwitch />
            <Logo />
            <CategoryBtn />
          </Box>
          <Box>
            <Link>کمی متن تصادفی</Link>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;

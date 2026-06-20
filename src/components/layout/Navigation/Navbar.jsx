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
import Searchbar from "./Searchbar";
import NavbarMenu from "./NavbarMenu";
import { Login } from "@mui/icons-material";

function Navbar({ showAuthModal }) {
  return (
    <>
      <AppBar sx={appBar}>
        <Toolbar sx={toolBar}>
          <Box sx={navWrapper}>
            <ThemeSwitch />
            <Logo />
            <CategoryBtn />
            <Searchbar />
            <NavbarMenu />
          </Box>
          <Button variant="outlined" onClick={() => showAuthModal(true)}>
            <Login />
            <Box
              component="span"
              sx={{ display: { xs: "hidden", lg: "block" } }}
            >
              ورود یا ثبت نام
            </Box>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;

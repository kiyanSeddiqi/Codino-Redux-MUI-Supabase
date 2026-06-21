import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  appBar,
  flexCenter,
  navWrapper,
  toolBar,
} from "../../../styles/styles";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../store/slices/themeSlice";
import { Link } from "react-router-dom";
import Logo from "../../ui/Logo";
import ThemeSwitch from "../../ui/ThemeSwitch";
import CategoryBtn from "./CategoryBtn";
import Searchbar from "./Searchbar";
import Menu from "./Menu";
import { Apps, Login, Search } from "@mui/icons-material";
import { useState } from "react";
import DrawerMenu from "./DrawerMenu";

function Navbar({ showAuthModal }) {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <AppBar sx={appBar}>
        <Toolbar sx={toolBar}>
          <Box sx={navWrapper}>
            <ThemeSwitch sx={{ display: { xs: "none", lg: "flex" } }} />
            <Button
              onClick={() => setOpenDrawer(true)}
              variant="outlined"
              sx={{ minWidth: 0, display: { xs: "flex", lg: "none" } }}
            >
              <Apps />
            </Button>
            <DrawerMenu isOpen={openDrawer} onShow={setOpenDrawer} />
            <Logo />
            <CategoryBtn />
            <Searchbar />
            <Menu />
          </Box>
          <Box sx={flexCenter(1)}>
            <Button
              variant="outlined"
              sx={{ display: { xs: "flex", xl: "none" }, minWidth: 0 }}
            >
              <Search />
            </Button>
            <Button
              variant="outlined"
              sx={{ minWidth: 0 }}
              onClick={() => showAuthModal(true)}
            >
              <Login />
              <Box
                component="span"
                sx={{ display: { xs: "none", lg: "block" } }}
              >
                ورود یا ثبت نام
              </Box>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;

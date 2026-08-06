import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { appBar, navWrapper, toolBar } from "../styles/navbarStyles.js";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../../redux/store/slices/themeSlice.js";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../../ui/Logo/Logo.jsx";
import ThemeSwitch from "../../../ui/ThemeSwitch/ThemeSwitch.jsx";
import Searchbar from "../../../../features/search/components/Searchbar";
import Menu from "./Menu";
import { Apps, Login, Search } from "@mui/icons-material";
import { useState } from "react";
import DrawerMenu from "./DrawerMenu";
import { flexCenter } from "../../../../styles/globalStyles.js";
import SearchModal from "../../../../features/search/components/SearchModal.jsx";
import CategoryMenu from "./CategoryMenu.jsx";
import { openAuthModal } from "../../../../features/auth/redux/authSlice.js";
import { useLogout } from "../../../../features/auth/hooks/useLogout.js";
import Actionbar from "./Actionbar.jsx";
import AccountDrawer from "./AccountDrawer.jsx";

function Navbar({ showSearchModal }) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openAccountDrawer, setOpenAccountDrawer] = useState(false);
  const [openSearchModal, setOpenSearchModal] = useState(false);

  const dispatch = useDispatch();
  const { logoutUser } = useLogout();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const location = useLocation();

  const isAccountPage = location.pathname.includes("/account");

  return (
    <>
      <AppBar sx={appBar}>
        <Toolbar sx={toolBar}>
          <Box sx={navWrapper}>
            {/* Mobile Menu */}
            <Box sx={{ display: { xs: "flex", lg: "none" } }}>
              <Button
                onClick={() =>
                  isAccountPage
                    ? setOpenAccountDrawer(true)
                    : setOpenDrawer(true)
                }
                variant="outlined"
                sx={{ minWidth: 0 }}
              >
                <Apps sx={{ fontSize: { xs: "20px", md: "24px" } }} />
              </Button>
              <DrawerMenu isOpen={openDrawer} onShow={setOpenDrawer} />
              <AccountDrawer
                isOpen={openAccountDrawer}
                onShow={setOpenAccountDrawer}
              />
            </Box>
            {/* Desktop Menu */}
            <ThemeSwitch sx={{ display: { xs: "none", lg: "flex" } }} />
            <Logo />
            <CategoryMenu />
            <Searchbar />
            <Menu />
          </Box>
          <Box sx={flexCenter(1)}>
            <Button
              onClick={() => setOpenSearchModal(true)}
              variant="outlined"
              sx={{ display: { xs: "flex", xl: "none" }, minWidth: 0 }}
            >
              <Search sx={{ fontSize: { xs: "20px", md: "24px" } }} />
            </Button>
            <SearchModal isOpen={openSearchModal} onShow={setOpenSearchModal} />

            {isAuthenticated ? (
              <Actionbar />
            ) : (
              <Button
                variant="outlined"
                sx={{ minWidth: 0 }}
                onClick={() => dispatch(openAuthModal())}
              >
                <Login sx={{ fontSize: { xs: "20px", md: "24px" } }} />
                <Box
                  component="span"
                  sx={{ display: { xs: "none", lg: "block" } }}
                >
                  ورود یا ثبت نام
                </Box>
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;

import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { Close, Login, PermIdentity } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Logo from "../../../ui/Logo/Logo";
import {
  mobileMenuBox,
  mobileMenuListBtn,
  mobileMenuLogoutBtn,
} from "../styles/navbarStyles";
import { flexBetween, flexCol } from "../../../../styles/globalStyles";
import ThemeSwitch from "../../../ui/ThemeSwitch/ThemeSwitch";
import { mobileMenuData } from "../../../../data/menuData";
import { useDispatch, useSelector } from "react-redux";
import SvgIcon from "../../../ui/SvgIcon/SvgIcon";
import { openAuthModal } from "../../../../features/auth/redux/authSlice";
import { useLogout } from "../../../../features/auth/hooks/useLogout";

function DrawerMenu({ isOpen, onShow }) {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { logoutUser } = useLogout();

  async function handleLogout() {
    try {
      await logoutUser();
      onShow(false);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={() => onShow(false)}
        sx={{
          display: { xs: "block", lg: "none" },
        }}
      >
        <Box sx={mobileMenuBox}>
          {/* Header */}
          <Box sx={flexBetween(0, "row")}>
            <Logo />
            <IconButton disableRipple onClick={() => onShow(false)}>
              <Close />
            </IconButton>
          </Box>
          <Divider sx={{ my: 2.5 }} />
          {/* Menu */}
          <List disablePadding sx={flexCol(1)}>
            {mobileMenuData?.map((item) => (
              <ListItemButton
                disableRipple
                key={item.title}
                component={Link}
                to={item.path}
                sx={mobileMenuListBtn}
                onClick={() => onShow(false)}
              >
                <ListItemText
                  sx={{
                    m: 0,
                    "& .MuiListItemText-primary": {
                      fontSize: 14,
                    },
                  }}
                  primary={item.title}
                />
              </ListItemButton>
            ))}
          </List>
          <Box sx={{ mt: "auto", pb: 5 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <ThemeSwitch sx={{ display: { xs: "flex", lg: "none" } }} />
              <Typography component="span" sx={{ fontSize: "14px" }}>
                تغییر تم
              </Typography>
            </Box>
            <Divider sx={{ my: 1 }} />
            {isAuthenticated ? (
              <Box sx={flexCol(1)}>
                <Button
                  onClick={() => onShow(false)}
                  component={Link}
                  to="/account"
                  variant="text"
                  sx={{
                    gap: 2,
                    justifyContent: "flex-start",
                    color: "text.primary",
                  }}
                >
                  <PermIdentity sx={{ fontSize: "20px" }} />
                  <Typography variant="subtitle2">حساب کاربری</Typography>
                </Button>
                <Button
                  onClick={handleLogout}
                  variant="text"
                  sx={mobileMenuLogoutBtn}
                >
                  <SvgIcon name="power" size={20} />
                  <Typography variant="subtitle2">خروج از حساب</Typography>
                </Button>
              </Box>
            ) : (
              <Button onClick={() => dispatch(openAuthModal())}>
                <Login />
                ورود به حساب
              </Button>
            )}
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

export default DrawerMenu;

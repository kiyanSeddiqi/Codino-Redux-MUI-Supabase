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
import { Close, Login } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Logo from "../../../ui/Logo/Logo";
import { drawerMenuData } from "../../../../data/menu";
import { drawerMenuBox, drawerMenuListBtn } from "../styles/navbarStyles";
import { flexBetween, flexCol } from "../../../../styles/globalStyles";
import ThemeSwitch from "../../../ui/ThemeSwitch/ThemeSwitch";

function DrawerMenu({ isOpen, onShow, showAuthModal }) {
  return (
    <>
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={() => onShow(false)}
        sx={{ display: { xs: "block", lg: "none" } }}
      >
        <Box sx={drawerMenuBox}>
          {/* Header */}
          <Box sx={flexBetween(0, "row")}>
            <Logo />
            <IconButton onClick={() => onShow(false)}>
              <Close />
            </IconButton>
          </Box>
          <Divider sx={{ my: 2.5 }} />
          {/* Menu */}
          <List disablePadding sx={flexCol(1)}>
            {drawerMenuData?.map((item) => (
              <ListItemButton
                disableRipple
                key={item.title}
                component={Link}
                to={item.path}
                sx={drawerMenuListBtn}
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
            <Button onClick={() => showAuthModal(true)}>
              <Login />
              ورود به حساب
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

export default DrawerMenu;

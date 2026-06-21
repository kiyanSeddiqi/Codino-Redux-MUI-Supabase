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
import Logo from "../../ui/Logo";
import { Close, Login } from "@mui/icons-material";
import { drawerMenuData } from "../../../data/menu";
import { flexCenter, flexCol } from "../../../styles/styles";
import ThemeSwitch from "../../ui/ThemeSwitch";

function DrawerMenu({ isOpen, onShow }) {
  return (
    <>
      <Drawer
        anchor="right"
        open={isOpen}
        onClose={() => onShow(false)}
        sx={{ display: { xs: "block", lg: "none" } }}
      >
        <Box
          sx={{
            width: 280,
            height: "100%",
            p: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
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
                sx={{
                  textAlign: "right",
                  borderRadius: "10px",
                }}
              >
                <ListItemText
                  sx={{
                    m: 0,
                    "& .MuiListItemText-primary": {
                      fontSize: 14,
                      fontWeight: "500",
                    },
                  }}
                  primary={item.title}
                />
              </ListItemButton>
            ))}
          </List>
          <Box sx={{ mt: "auto" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <ThemeSwitch sx={{ display: { xs: "flex", lg: "none" } }} />
              <Typography component="span" sx={{ fontSize: "14px" }}>
                تغییر تم
              </Typography>
            </Box>
            <Divider sx={{ my: 1 }} />
            <Button>
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

import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import { accountMenuData } from "../../../../data/accountMenuData";
import SvgIcon from "../../../../components/ui/SvgIcon/SvgIcon";
import { NavLink, useNavigate } from "react-router-dom";
import { flexCol } from "../../../../styles/globalStyles";
import { accountListBtn, accountLogoutBtn } from "./accountSidebarStyles";
import { useLogout } from "../../../../features/auth/hooks/useLogout";

function AccountSidebarMenu({ basePath = "", onShow }) {
  const theme = useTheme();
  const { logoutUser } = useLogout();
  const navigate = useNavigate();

  async function handleLogout() {
    navigate("/");
    await logoutUser();
  }

  return (
    <>
      <Box sx={flexCol(2.5)}>
        <List disablePadding sx={flexCol("10px")}>
          {accountMenuData.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton
                disableRipple
                component={NavLink}
                to={
                  basePath
                    ? item.slug
                      ? `${basePath}/${item.slug}`
                      : basePath
                    : item.slug
                }
                onClick={() => (basePath ? onShow(false) : null)}
                end={item.id === 1}
                sx={accountListBtn}
              >
                <ListItemIcon sx={{ minWidth: 0 }}>
                  <SvgIcon
                    name={item.iconName}
                    size={24}
                    accentColor="currentColor"
                  />
                </ListItemIcon>
                <ListItemText
                  primary={item.title}
                  sx={{
                    my: 0,
                    "& .MuiTypography-root": { fontSize: "14px" },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton
            disableRipple
            sx={accountLogoutBtn}
            onClick={handleLogout}
          >
            <ListItemIcon sx={{ minWidth: 0 }}>
              <SvgIcon
                name="power"
                size={24}
                color={theme.palette.error.main}
              />
            </ListItemIcon>
            <ListItemText
              primary="خروج از حساب کاربری"
              sx={{
                my: 0,
              }}
            />
          </ListItemButton>
        </ListItem>
      </Box>
    </>
  );
}

export default AccountSidebarMenu;

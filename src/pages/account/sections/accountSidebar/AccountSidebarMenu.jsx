import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { accountMenuData } from "../../../../data/accountMenuData";
import SvgIcon from "../../../../components/ui/SvgIcon/SvgIcon";
import { NavLink } from "react-router-dom";
import { flexCol } from "../../../../styles/globalStyles";
import { accountListBtn } from "./accountSidebarStyles";

function AccountSidebarMenu() {
  return (
    <>
      <List disablePadding sx={flexCol("10px")}>
        {accountMenuData.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              disableRipple
              component={NavLink}
              to={`${item.slug}`}
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
    </>
  );
}

export default AccountSidebarMenu;

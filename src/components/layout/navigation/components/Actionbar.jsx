import {
  Badge,
  Box,
  Button,
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { flexBetween, flexBox, flexCol } from "../../../../styles/globalStyles";
import { ArrowOutward, PermIdentity, ShoppingCart } from "@mui/icons-material";
import { useId, useState } from "react";
import {
  actionbarMenu,
  actionbarMenuHeader,
  actionbarMenuItem,
} from "../styles/navbarStyles";
import { Link } from "react-router-dom";
import SvgIcon from "../../../ui/SvgIcon/SvgIcon";

const actionbarMenuData = [
  { title: "دوره های من", iconName: "course", slug: "/account/my-courses" },
  { title: "ویرایش حساب", iconName: "editAccount", slug: "/account/edit" },
  { title: "تیکت ها", iconName: "ticket", slug: "/account/tickets" },
  {
    title: "اعلان ها",
    iconName: "notifications",
    slug: "/account/notifications",
  },
  {
    title: "خروج از حساب کاربری",
    iconName: "logout",
    slug: null,
    danger: true,
  },
];

function Actionbar() {
  const id = useId();
  const buttonId = `${id}-button`;
  const menuId = `${id}-menu`;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleOpen = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);
  return (
    <>
      <Box sx={flexBox({ xs: 1, lg: 2 })}>
        <Badge
          sx={{
            "& .MuiBadge-badge": {
              borderRadius: "6px",
            },
          }}
          badgeContent={4}
          color="primary"
        >
          <Button variant="outlined" sx={{ minWidth: 0 }}>
            <ShoppingCart sx={{ fontSize: { xs: "20px", lg: "24px" } }} />
          </Button>
        </Badge>
        <Button
          id={buttonId}
          aria-controls={open ? menuId : undefined}
          aria-haspopup="true"
          aria-expanded={open}
          onClick={handleOpen}
          variant="outlined"
          sx={{ minWidth: 0 }}
        >
          <PermIdentity sx={{ fontSize: { xs: "20px", lg: "24px" } }} />
          <Typography
            variant="subtitle2"
            sx={{ display: { xs: "none", lg: "block" } }}
          >
            کیان صدیقی
          </Typography>
        </Button>
        <Menu
          id={menuId}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          disableScrollLock
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          slotProps={{
            list: {
              "aria-labelledby": buttonId,
              sx: {
                display: "flex",
                width: "max-content",
                padding: 0,
              },
            },
            paper: {
              sx: actionbarMenu,
            },
          }}
        >
          <Box component={Link} to="account" sx={actionbarMenuHeader}>
            <Box sx={flexCol(0.5)}>
              <Typography variant="subtitle2">کیان صدیقی</Typography>
              <Typography variant="caption" sx={{ color: "text.secondary" }}>
                09376242832
              </Typography>
            </Box>
            <ArrowOutward sx={{ rotate: "-90deg", color: "primary.main" }} />
          </Box>
          <Divider sx={{ my: "12px", width: "100%" }} />
          <Box sx={flexCol("10px")}>
            {actionbarMenuData.map((item, index) => (
              <MenuItem
                disableRipple
                key={item.title}
                component={Link}
                to={item.slug}
                onClick={handleClose}
                sx={actionbarMenuItem(item.danger)}
              >
                <ListItemIcon>
                  <SvgIcon
                    name={item.iconName}
                    size={24}
                    accentColor="currentColor"
                  />
                </ListItemIcon>
                <ListItemText
                  slotProps={{
                    primary: {
                      sx: {
                        fontSize: 14,
                      },
                    },
                  }}
                  primary={item.title}
                />
              </MenuItem>
            ))}
          </Box>
        </Menu>
      </Box>
    </>
  );
}

export default Actionbar;

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
  useTheme,
} from "@mui/material";
import { flexBetween, flexBox, flexCol } from "../../../../styles/globalStyles";
import { ArrowOutward, PermIdentity, ShoppingCart } from "@mui/icons-material";
import { useId, useState } from "react";
import {
  actionbarLogoutBtn,
  actionbarMenu,
  actionbarMenuHeader,
  actionbarMenuItem,
} from "../styles/navbarStyles";
import { Link, useNavigate } from "react-router-dom";
import SvgIcon from "../../../ui/SvgIcon/SvgIcon";
import { signOut } from "../../../../features/auth/services/authServices";
import { logout } from "../../../../features/auth/redux/authSlice";
import { useLogout } from "../../../../features/auth/hooks/useLogout";
import { useSelector } from "react-redux";
import { accountMenuData } from "../../../../data/accountMenuData";

function Actionbar() {
  const id = useId();
  const buttonId = `${id}-button`;
  const menuId = `${id}-menu`;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleOpen = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const user = useSelector((state) => state.auth.user) || {};
  const { mobile, first_name, last_name } = user;
  const fullName = [first_name, last_name].filter(Boolean).join(" ");
  const isPersianName = /[\u0600-\u06FF]/.test(fullName);

  const { logoutUser } = useLogout();
  const theme = useTheme();
  const navigate = useNavigate();

  async function handleLogout() {
    handleClose();
    await logoutUser();
    navigate("/");
  }

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
          <Button
            component={Link}
            to="/cart"
            variant="outlined"
            sx={{ minWidth: 0 }}
          >
            <ShoppingCart sx={{ fontSize: { xs: "20px", md: "24px" } }} />
          </Button>
        </Badge>
        <Button
          id={buttonId}
          aria-controls={open ? menuId : undefined}
          aria-haspopup="true"
          aria-expanded={open}
          onClick={handleOpen}
          variant="outlined"
          sx={{ minWidth: 0, maxWidth: "125px" }}
        >
          <PermIdentity sx={{ fontSize: { xs: "20px", md: "24px" } }} />
          {fullName && (
            <Typography
              variant="subtitle2"
              sx={{
                overflow: "hidden",
                display: { xs: "none", sm: "-webkit-box" },
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 1,
                textAlign: isPersianName ? "right" : "left",
                direction: isPersianName ? "rtl" : "ltr",
                fontFamily: isPersianName ? "inherit" : "sans-serif",
                textTransform: isPersianName ? "none" : "lowercase",
              }}
            >
              {fullName}
            </Typography>
          )}
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
            },
            paper: {
              sx: actionbarMenu,
            },
          }}
        >
          <Box
            component={Link}
            to="account"
            sx={actionbarMenuHeader}
            onClick={handleClose}
          >
            <Box sx={flexCol(0.5)}>
              {fullName && (
                <Typography variant="subtitle2" sx={{ lineHeight: "20px" }}>
                  {fullName}
                </Typography>
              )}
              <Typography
                variant="caption"
                sx={{ color: "text.secondary", lineHeight: "16px" }}
              >
                {mobile}
              </Typography>
            </Box>
            <ArrowOutward sx={{ rotate: "-90deg", color: "primary.main" }} />
          </Box>
          <Divider sx={{ my: "12px", width: "100%" }} />
          <Box sx={flexCol("10px")}>
            {accountMenuData.map((item) => {
              if (!item.inActionbar) return;
              return (
                <MenuItem
                  disableRipple
                  key={item.id}
                  component={Link}
                  to={`account/${item.slug}`}
                  onClick={handleClose}
                  sx={actionbarMenuItem}
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
              );
            })}
            <MenuItem
              disableRipple
              onClick={handleLogout}
              sx={actionbarLogoutBtn}
            >
              <ListItemIcon>
                <SvgIcon
                  name="power"
                  size={24}
                  color={theme.palette.error.main}
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
                primary="خروج از حساب کاربری"
              />
            </MenuItem>
          </Box>
        </Menu>
      </Box>
    </>
  );
}

export default Actionbar;

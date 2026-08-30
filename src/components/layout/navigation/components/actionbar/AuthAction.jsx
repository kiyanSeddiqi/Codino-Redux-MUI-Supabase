import { useId, useState } from "react";
import { useSelector } from "react-redux";
import { useLogout } from "../../../../../features/auth/hooks/useLogout";
import {
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
import { Link, useNavigate } from "react-router-dom";
import { ArrowOutward, PermIdentity } from "@mui/icons-material";
import {
  actionMenuStyle,
  authActionFullName,
  authActionLogoutBtn,
  authActionMenuItem,
} from "../../styles/navbarStyles";
import { flexBetween, flexCol } from "../../../../../styles/globalStyles";
import { accountMenuData } from "../../../../../data/accountMenuData";
import SvgIcon from "../../../../ui/SvgIcon/SvgIcon";

function AuthAction() {
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
          <Typography variant="body2" sx={authActionFullName(isPersianName)}>
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
            sx: { ...actionMenuStyle, width: "300px" },
          },
        }}
      >
        <Box
          component={Link}
          to="account"
          sx={{ ...flexBetween(1, "row"), width: "100%" }}
          onClick={handleClose}
        >
          <Box sx={flexCol(0.5)}>
            {fullName && (
              <Typography variant="body2" sx={{ lineHeight: "20px" }}>
                {fullName}
              </Typography>
            )}
            <Typography
              variant="body2"
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
                sx={authActionMenuItem}
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
            sx={authActionLogoutBtn}
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
    </>
  );
}

export default AuthAction;

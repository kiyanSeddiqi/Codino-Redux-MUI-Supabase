import { Opacity, Padding } from "@mui/icons-material";
import { grey } from "@mui/material/colors";
import { position } from "stylis";

export const appBar = (theme) => ({
  borderBottom: 1,
  borderColor: theme.palette.divider,
  minHeight: "94px",
  py: 2.5,
  position: "static",
  bgcolor: theme.palette.background.paper,
  flexDirection: "row",
  color: theme.palette.text.primary,
  boxShadow: "none",
});

export const toolBar = {
  maxWidth: "1660px",
  mx: "auto",
  px: 4,
  width: "100%",
  minHeight: "0 !important",
  justifyContent: "space-between",
};

export const navWrapper = {
  display: "flex",
  alignItems: "center",
  gap: { xs: 1, lg: 2.5 },
};

export const themeBtn = (theme) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "51px",
  height: "30px",
  borderRadius: "50px",
  position: "relative",
  padding: "5px",
  cursor: "pointer",
  bgcolor: "divider",
});

export const themeBall = (theme) => ({
  position: "absolute",
  left: "5px",
  top: "4px",
  borderRadius: "50%",
  width: "22px",
  height: "22px",
  // bgcolor: theme.palette.secondary.main,
  bgcolor: theme.palette.background.default,
  transform:
    theme.palette.mode === "dark" ? "translateX(20px)" : "translateX(0)",
  transition: "transform 0.2s linear",
});

export const logo = {
  width: "95px",
  height: "31px",
  display: "flex",
};

export const coursesMenu = (theme) => ({
  padding: 2.5,
  borderRadius: "10px",
  border: 1,
  borderColor: "divider",
  mt: 0.5,
  scrollbarWidth: "none",
});

export const coursesList = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  width: "300px",
};
export const coursesListScrollable = {
  ...coursesList,
  maxHeight: "63svh",
  overflowY: "auto",
  scrollbarWidth: "none",
  gap: "12px",
};

export const menuDivider = {
  bgcolor: "divider",
  mx: "8px",
  width: "1px",
  height: "63svh",
};

export const navbarSearchInput = (theme) => ({
  borderRadius: "10px",
  height: "46px",
  width: "250px",
  border: "2px solid transparent",
  bgcolor: theme.palette.background.default,
  paddingRight: "40px",
  fontSize: "14px",
  transition: "border 0.3s ease",
  "& input": {
    padding: "0px",
  },
  "& input::placeholder": {
    color: theme.palette.text.secondary,
    opacity: 1,
  },
  "&:focus-within": {
    border: `2px solid ${theme.palette.primary.main}`,
  },
});

export const searchIcon = {
  position: "absolute",
  top: 10,
  right: 9,
  zIndex: 10,
  color: "primary.main",
};

export const navItem = {
  position: "relative",
  paddingY: "16px",
  "&:hover .dropdown": {
    opacity: 1,
    visibility: "visible",
    transform: "translateY(0)",
  },
};

export const navLink = {
  fontWeight: "500",
  transition: "color 0.2s ease",
  "&.active": {
    color: "primary.main",
  },
  "&:hover": {
    color: "primary.main",
  },
};

export const navLinkDropdown = (theme) => ({
  position: "absolute",
  bgcolor: "background.paper",
  top: "100%",
  right: 0,
  minWidth: 242,
  boxShadow: 3,
  borderRadius: "10px",
  opacity: 0,
  visibility: "hidden",
  transform: "translateY(10px)",
  transition: "0.2s ease",
  zIndex: 10,
  p: 2.5,
  display: "flex",
  flexDirection: "column",
  gap: 2,
  border: `1px solid ${theme.palette.divider}`,
});

export const navLinkNested = {
  display: "block",
  padding: "8px 16px",
  borderRadius: "6px",
  color: "text.primary",
  transition: "0.2s ease",
  "&:hover": {
    color: "primary.main",
    bgcolor: "menuItemBg",
  },
};
// ====== AUTH MODAL ======

export const authModalContainer = {
  "& .MuiDialog-paper": {
    p: 4,
    m: 0,
    gap: 5,
    borderRadius: "8px",
    width: "400px",
    maxHeight: "90svh",
    alignItems: "center",
  },
  "& .MuiBackdrop-root": {
    backdropFilter: "blur(6px)",
  },
};

export const authModalPaper = {
  display: "flex",
  flexDirection: "column",
  gap: 3,
  width: "100%",
};

export const authModalSwitchBox = {
  borderRadius: "12px",
  p: "10px",
  bgcolor: "divider",
};

export const authModalSwitchBtn = {
  px: 0,
  flex: 1,
  fontSize: "16px",
  zIndex: 2,
  "&:hover": {
    bgcolor: "transparent",
  },
};

export const authMethodSlider = {
  position: "absolute",
  left: 0,
  width: "50%",
  bgcolor: "background.paper",
  display: "block",
  height: "100%",
  borderRadius: "8px",
  transition: "all 0.3s ease",
  boxShadow: 1,
};

export const authModalForm = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: 3,
};

export const authModalInput = (theme) => ({
  p: "8px 12px",
  borderRadius: "12px",
  border: "2px solid transparent",
  width: "100%",
  height: "44px",
  fontSize: "14px",
  bgcolor: "background.default",
  transition: "border 0.3s ease",
  "& input": {
    padding: "0px",
  },
  "& input::placeholder": {
    color: theme.palette.text.secondary,
    opacity: 1,
    textAlign: "left",
  },
  "&:focus-within": {
    border: `2px solid ${theme.palette.primary.main}`,
  },
});

import { flexBetween } from "../../../../styles/globalStyles";

export const appBar = {
  position: "sticky",
  top: 0,
  zIndex: 1100,
  borderBottom: 1,
  borderColor: "divider",
  py: 2.5,
  bgcolor: "background.default",
  flexDirection: "row",
  color: "text.primary",
  boxShadow: "none",
};

export const toolBar = {
  maxWidth: 1660,
  mx: "auto",
  width: "100%",
  minHeight: "0 !important",
  justifyContent: "space-between",
  px: {
    xs: 2,
    lg: 4,
  },
};

export const navWrapper = {
  display: "flex",
  alignItems: "center",
  gap: { xs: 1, lg: 2.5 },
};

export const themeBtn = {
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
};

export const themeIndicator = (theme) => ({
  position: "absolute",
  left: "5px",
  top: "4px",
  borderRadius: "50%",
  width: "22px",
  height: "22px",
  bgcolor: "background.default",
  transform:
    theme.palette.mode === "dark" ? "translateX(20px)" : "translateX(0)",
  transition: "transform 0.2s ease",
});

// ====== CATEGORY MENU ======
export const categoryMenuBox = {
  padding: 2.5,
  borderRadius: "10px",
  border: 1,
  borderColor: "divider",
  mt: 0.5,
  scrollbarWidth: "none",
};

export const categoryMenuList = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  width: 300,
};

export const categoryMainMenuList = {
  ...categoryMenuList,
  maxHeight: "63svh",
  overflowY: "auto",
  scrollbarWidth: "none",
  gap: "12px",
};

// ====== NAVBAR MENU ======
export const navItem = {
  position: "relative",
  paddingY: "16px",
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
  transition: "0.2s ease",
  zIndex: 10,
  p: 2.5,
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  border: `1px solid ${theme.palette.divider}`,
  transformOrigin: "right top",
});

export const navLinkDropdownBtn = {
  display: "block",
  borderRadius: "6px",
  color: "text.primary",
  transition: "0.2s ease",
  textAlign: "right",
  "&:hover": {
    color: "primary.main",
    bgcolor: "menuItemBg",
  },
};

export const mobileMenuBox = {
  width: 300,
  height: "100%",
  p: 2,
  display: "flex",
  flexDirection: "column",
};

export const mobileMenuListBtn = {
  borderRadius: "10px",
  textAlign: "right",
  "&:hover, &:focus": { bgcolor: "menuItemBg", color: "primary.main" },
  transition: "0.2s ease",
};

export const actionbarMenu = {
  padding: 2.5,
  borderRadius: "10px",
  border: 1,
  borderColor: "divider",
  mt: 0.5,
  minWidth: "300px",
  "& .MuiList-root": {
    width: "100%",
    flexDirection: "column",
  },
};

export const actionbarMenuHeader = {
  ...flexBetween(1, "row"),
  width: "100%",
};

export const actionbarMenuItem = (isDanger = false) => ({
  gap: 2,
  borderRadius: "8px",
  p: "10px",
  transition: "0.2s ease",
  color: isDanger ? "error.main" : "text.primary",
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    color: isDanger ? "error.main" : "text.primary",
  },
  "&:hover": {
    bgcolor: isDanger ? "bgDanger" : "menuItemBg",
    "& .MuiListItemIcon-root": {
      color: isDanger ? "error.main" : "primary.main",
    },
    "& .MuiListItemText-primary": {
      color: isDanger ? "error.main" : "primary.main",
    },
  },
});

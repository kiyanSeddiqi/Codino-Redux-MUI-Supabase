export const appBar = (theme) => ({
  position: "sticky",
  top: 0,
  zIndex: 1100,
  borderBottom: 1,
  borderColor: theme.palette.divider,
  py: 2.5,
  bgcolor: theme.palette.background.paper,
  flexDirection: "row",
  color: theme.palette.text.primary,
  boxShadow: "none",
});

export const toolBar = (theme) => ({
  maxWidth: "1660px",
  mx: "auto",
  width: "100%",
  minHeight: "0 !important",
  justifyContent: "space-between",
  [theme.breakpoints.up("lg")]: {
    padding: "0 32px",
  },
  [theme.breakpoints.down("lg")]: {
    padding: "0 16px",
  },
});

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
  bgcolor: theme.palette.divider,
});

export const themeIndicator = (theme) => ({
  position: "absolute",
  left: "5px",
  top: "4px",
  borderRadius: "50%",
  width: "22px",
  height: "22px",
  bgcolor: theme.palette.background.default,
  transform:
    theme.palette.mode === "dark" ? "translateX(20px)" : "translateX(0)",
  transition: "transform 0.2s linear",
});

// ====== CATEGORY MENU ======
export const categoryMenuBox = (theme) => ({
  padding: 2.5,
  borderRadius: "10px",
  border: 1,
  borderColor: theme.palette.divider,
  mt: 0.5,
  scrollbarWidth: "none",
});

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

export const categoryMenuDivider = (theme) => ({
  bgcolor: theme.palette.divider,
  mx: "8px",
  width: "1px",
  height: "63svh",
});

// ====== NAVBAR MENU ======
export const navItem = {
  position: "relative",
  paddingY: "16px",
};

export const navLink = (theme) => ({
  fontWeight: "500",
  transition: "color 0.2s ease",
  "&.active": {
    color: theme.palette.primary.main,
  },
  "&:hover": {
    color: theme.palette.primary.main,
  },
});

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

export const navLinkDropdownBtn = (theme) => ({
  display: "block",
  borderRadius: "6px",
  color: theme.palette.text.primary,
  transition: "0.2s ease",
  textAlign: "right",
  "&:hover": {
    color: theme.palette.primary.main,
    bgcolor: "menuItemBg",
  },
});

export const drawerMenuBox = {
  width: 300,
  height: "100%",
  p: 2,
  display: "flex",
  flexDirection: "column",
};

export const drawerMenuListBtn = {
  borderRadius: "10px",
  textAlign: "right",
  "&:hover, &:focus": { bgcolor: "menuItemBg", color: "primary.main" },
  transition: "0.2s ease",
};

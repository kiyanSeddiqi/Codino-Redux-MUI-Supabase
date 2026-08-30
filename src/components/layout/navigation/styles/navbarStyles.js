import { flexCol } from "../../../../styles/globalStyles";

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
    xs: 1.5,
    md: 2,
    lg: 4,
  },
  gap: 1,
  "& button": {
    p: { xs: "8px", sm: "10px" },
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

export const categoryMainMenuItem = {
  gap: "4px",
  borderRadius: "6px",
  py: "4px",
  color: "text.main",
  "&.Mui-selected": {
    color: "primary.main",
  },
  transition: "0.2s ease",
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
  bgcolor: "background.default",
};

export const accountMobileMenu = {
  width: 300,
  display: "flex",
  flexDirection: "column",
  bgcolor: "background.default",
  p: 2,
  gap: 2,
};

export const mobileMenuListBtn = {
  borderRadius: "10px",
  textAlign: "right",
  "&:hover, &:focus": { bgcolor: "menuItemBg", color: "primary.main" },
  transition: "0.2s ease",
  p: "10px",
};

export const mobileMenuLogoutBtn = {
  gap: 2,
  color: "error.main",
  "&:hover": { bgcolor: "bgDanger" },
  "&:focus-visible": {
    outline: "2px solid",
    outlineColor: "error.main",
  },
  justifyContent: "flex-start",
};

export const actionMenuStyle = {
  p: 2.5,
  borderRadius: "10px",
  border: 1,
  borderColor: "divider",
  mt: 0.5,
  bgcolor: "background.default",
  "& .MuiList-root": {
    width: "100%",
    flexDirection: "column",
    py: 0,
  },
};

export const authActionFullName = (isPersianName) => ({
  overflow: "hidden",
  display: { xs: "none", sm: "-webkit-box" },
  fontWeight: 600,
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 1,
  textAlign: isPersianName ? "right" : "left",
  direction: isPersianName ? "rtl" : "ltr",
  fontFamily: isPersianName ? "inherit" : "sans-serif",
  textTransform: isPersianName ? "none" : "lowercase",
});

export const authActionMenuItem = {
  gap: 2,
  borderRadius: "8px",
  p: "10px",
  transition: "0.2s ease",
  color: "text.primary",
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    color: "text.primary",
  },
  "&:hover": {
    bgcolor: "menuItemBg",
    "& .MuiListItemIcon-root": {
      color: "primary.main",
    },
    "& .MuiListItemText-primary": {
      color: "primary.main",
    },
  },
};

export const cartActionMenuItem = {
  ...flexCol(2),
  p: 0,
  "&:not(:last-child)": {
    pb: 2,
    borderBottom: 1,
    borderColor: "divider",
  },
  "&:hover": {
    bgcolor: "transparent",
  },
};

export const cartActionImgBox = {
  width: {
    xs: "48px",
    md: "64px",
  },
  aspectRatio: 1,
  borderRadius: "6px",
  flexShrink: 0,
};

export const cartActionImg = {
  width: "100%",
  height: "100%",
  display: "block",
  objectFit: "cover",
  borderRadius: "6px",
};

export const authActionLogoutBtn = (theme) => ({
  gap: 2,
  borderRadius: "8px",
  p: "10px",
  transition: "0.2s ease",
  bgcolor: "background.paper",
  "& .MuiListItemIcon-root": {
    minWidth: 0,
  },
  "&:hover": {
    bgcolor: "bgDanger",
    "& .MuiListItemText-primary": {
      color: theme.palette.mode === "dark" ? "error.light" : "error.dark",
    },
  },

  "& .MuiListItemText-primary": {
    color: "error.main",
  },
});

export const cartActionTitle = {
  fontSize: "14px",
  minWidth: 0,
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
};

export const cartActionMenu = {
  ...flexCol(2),
  maxHeight: "350px",
  overflowY: "auto",
  scrollbarWidth: "auto",
  "&::-webkit-scrollbar": {
    width: "6px",
    mr: 1,
  },
  "&::-webkit-scrollbar-track": {
    bgcolor: "menuItemBg",
  },
  "&::-webkit-scrollbar-thumb": {
    bgcolor: "primary.main",
    borderRadius: "10px",
  },
};

export const deleteIcon = {
  borderRadius: "6px",
  color: "error.main",
  bgcolor: "badgeWarning.light",
  "&:hover": { bgcolor: "badgeWarning.light" },
  ml: 1,
};

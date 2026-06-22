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

export const searchIcon = (theme) => ({
  position: "absolute",
  top: 10,
  right: 9,
  zIndex: 10,
  color: theme.palette.primary.main,
});

export const searchDropdownBox = {
  position: "absolute",
  top: "110%",
  right: 0,
  bgcolor: "background.paper",
  borderRadius: "10px",
  border: 1,
  borderColor: "divider",
  zIndex: 30,
  width: "500px",
  display: "flex",
  flexDirection: "column",
  gap: 2.5,
  boxShadow: 8,
  p: 2.5,
  transformOrigin: "right top",
};

export const searchDropDownListBtn = {
  borderRadius: "10px",
  textAlign: "right",
  "&:hover, &:focus": { bgcolor: "menuItemBg", color: "primary.main" },
  transition: "0.2s ease",
};

export const searchModalDialog = (theme) => ({
  "& .MuiDialog-paper": {
    p: 2,
    m: 0,
    gap: 2,
    borderRadius: "8px",
    minWidth: "50%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      maxWidth: "100%",
      position: "fixed",
      bottom: 0,
      borderRadius: "16px 16px 0 0 ",
      p: "20px 32px 8px ",
    },
    [theme.breakpoints.down("sm")]: {
      p: "16px 16px 8px ",
    },
  },
  "& .MuiBackdrop-root": {
    backdropFilter: "blur(6px)",
  },
  [theme.breakpoints.up("lg")]: {
    display: "none",
  },
  [theme.breakpoints.down("lg")]: {
    display: "block",
  },
});

export const searchModalTitle = (theme) => ({
  p: 0,
  color: "text.secondary",
  fontWeight: "600",
  fontSize: "18px",
  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
  },
});

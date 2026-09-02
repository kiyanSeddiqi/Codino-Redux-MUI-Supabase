export const navbarSearchInput = {
  borderRadius: "10px",
  height: "46px",
  width: "250px",
  border: "2px solid transparent",
  bgcolor: "bgAccent",
  paddingRight: "40px",
  fontSize: "14px",
  color: "text.primary",
  fontWeight: 500,
  transition: "border 0.3s ease",
  "& input": {
    padding: "0px",
  },
  "& input::placeholder": {
    color: "text.secondary",
    opacity: 1,
  },
  "&:focus-within": {
    border: "2px solid",
    borderColor: "primary.main",
  },
};

export const searchIcon = {
  position: "absolute",
  top: 10,
  right: 9,
  zIndex: 10,
  color: "primary.main",
};

export const searchDropdownBox = {
  position: "absolute",
  top: "110%",
  right: 0,
  bgcolor: "background.paper",
  borderRadius: "10px",
  border: 1,
  borderColor: "divider",
  zIndex: 50,
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
  "&:hover, &:focus": { bgcolor: "bgAccent", color: "primary.main" },
  transition: "0.2s ease",
};

export const searchModalDialog = {
  display: { xl: "none", xs: "block" },

  "& .MuiDialog-paper": {
    p: { xs: "16px 16px 8px", sm: "20px 32px 8px", md: 2 },
    m: 0,
    gap: 2,
    borderRadius: { xs: "16px 16px 0 0", md: 2 },
    minWidth: { md: "50%" },
    position: { xs: "fixed", md: "static" },
    bottom: { xs: 0 },
    width: {
      xs: "100%",
      md: "70%",
      lg: "50%",
    },
    maxWidth: "100%",
  },

  "& .MuiBackdrop-root": {
    backdropFilter: "blur(6px)",
  },
};

export const searchModalTitle = {
  p: 0,
  color: "text.secondary",
  fontWeight: "600",
  fontSize: {
    xs: "16px",
    md: "18px",
  },
};

export const tabContainer = {
  position: "sticky",
  top: {
    xs: "83px",
    md: "87px",
    lg: "94px",
  },
  zIndex: 50,
  bgcolor: "background.default",
  pt: "4px",
};

export const tabsComponent = (theme) => ({
  minHeight: "42px",
  borderBottom: 1,
  borderColor: "divider",
  "& .MuiTabs-indicator": {
    display: "none",
  },
  "& .MuiTabs-list": {
    gap: 1,
  },
  "& .MuiTab-root": {
    color: "text.primary",
    border: 1,
    borderBottom: 0,
    borderColor: "divider",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
    fontSize: {
      xs: "14px",
      lg: "16px",
    },
    minHeight: "42px",
    minWidth: 0,
    p: {
      xs: "8px 16px",
      md: "8px 20px",
    },
    bgcolor: "background.paper",
    transition: "background-color .2s, color .2s, border-color .2s",
  },
  "& .MuiTab-root.Mui-selected": {
    bgcolor: "primary.main",
    color: theme.palette.mode === "dark" ? "secondary.contrastText" : "#fff",
    borderColor: "primary.main",
  },
});

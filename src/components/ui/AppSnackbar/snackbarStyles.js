export const appSnackAlert = (theme, severity) => ({
  px: "12px",
  borderRadius: "10px",
  border: 3,
  fontWeight: 500,
  borderColor: theme.palette[severity].main,
  "& .MuiAlert-icon": {
    mr: 0,
  },

  "& .MuiAlert-message": {
    px: 2,
  },

  "& .MuiAlert-action": {
    pl: 0,
    pt: 0,
    alignItems: "center",
  },
});

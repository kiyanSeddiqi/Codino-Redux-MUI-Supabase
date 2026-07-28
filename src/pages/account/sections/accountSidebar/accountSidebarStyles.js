export const gemSubscribeBox = {
  p: 2,
  borderRadius: "12px",
  color: "#fff",
  background: `linear-gradient(to bottom right,#BB86FC, #6700E5 )`,
};

export const accountListBtn = (theme) => ({
  p: "10px",
  borderRadius: "12px",
  textAlign: "right",
  gap: 2,

  "&.active": {
    bgcolor: "primary.main",
    color: theme.palette.mode === "dark" ? "secondary.contrastText" : "#fff",
  },

  "&.active .MuiListItemIcon-root": {
    color: theme.palette.mode === "dark" ? "secondary.contrastText" : "#fff",
  },

  "&.active .MuiTypography-root": {
    fontWeight: 600,
  },

  transition: "all 0.3s ease",
});

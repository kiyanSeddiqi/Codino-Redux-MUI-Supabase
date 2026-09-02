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
  "&:hover": {
    bgcolor: "bgAccent",
    color: theme.palette.mode === "dark" ? "primary.light" : "primary.main",
  },

  "&:hover .MuiListItemIcon-root": {
    color: "primary.main",
  },

  "&.active": {
    bgcolor: "primary.main",
    color: theme.palette.mode === "dark" ? "secondary.contrastText" : "#fff",
  },

  "&.active .MuiListItemIcon-root": {
    color: theme.palette.mode === "dark" ? "secondary.contrastText" : "#fff",
  },

  "& .MuiTypography-root": {
    fontWeight: 600,
  },

  transition: "all 0.3s ease",
});

export const accountLogoutBtn = (theme) => ({
  p: "10px",
  borderRadius: "12px",
  textAlign: "right",
  gap: 2,
  transition: "all 0.3s ease",
  bgcolor: "background.paper",
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

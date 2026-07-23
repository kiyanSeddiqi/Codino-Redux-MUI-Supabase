export const appSnackbarRoot = (theme) => ({
  [theme.breakpoints.down("sm")]: {
    left: "auto",
    right: 8,
    justifyContent: "flex-start",
  },
});

export const appSnackAlert = (theme, severity) => ({
  position: "relative",
  overflow: "hidden",
  pb: 1.5,
  px: "12px",
  borderRadius: "10px",
  border: 3,
  fontWeight: 500,
  fontSize: {
    xs: "12px",
    sm: "14px",
  },
  borderColor: theme.palette[severity].main,
  alignItems: "center",
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

export const appSnackbarProgress = (theme, severity, duration) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  height: 3,
  bgcolor: theme.palette[severity].main,
  transformOrigin: "left",

  animation: `progress ${duration}ms linear forwards`,

  "@keyframes progress": {
    from: {
      transform: "scaleX(0)",
    },
    to: {
      transform: "scaleX(1)",
    },
  },
});

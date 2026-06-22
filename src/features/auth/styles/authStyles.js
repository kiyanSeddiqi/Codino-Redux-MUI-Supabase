export const authModalDialog = (theme) => ({
  "& .MuiDialog-paper": {
    p: 4,
    m: 0,
    gap: 5,
    borderRadius: "8px",
    width: "400px",
    maxHeight: "90svh",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      p: "20px",
      gap: 3,
    },
  },
  "& .MuiBackdrop-root": {
    backdropFilter: "blur(6px)",
  },
});

export const authModalBox = {
  display: "flex",
  flexDirection: "column",
  gap: 3,
  width: "100%",
};

export const authModalSwitchBox = {
  borderRadius: "12px",
  p: "10px",
  bgcolor: "divider",
};

export const authModalSwitchBtn = (theme) => ({
  px: 0,
  flex: 1,
  fontSize: "16px",
  zIndex: 2,
  "&:hover": {
    bgcolor: "transparent",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "14px",
    linHeight: "none",
  },
});

export const authMethodSlider = {
  position: "absolute",
  left: 0,
  width: "50%",
  bgcolor: "background.paper",
  display: "block",
  height: "100%",
  borderRadius: "8px",
  transition: "all 0.3s ease",
  boxShadow: 1,
};

export const authModalForm = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: 3,
};

export const authModalInput = (theme) => ({
  p: "8px 12px",
  borderRadius: "12px",
  border: "2px solid transparent",
  width: "100%",
  height: "44px",
  fontSize: "14px",
  bgcolor: "background.default",
  transition: "border 0.3s ease",
  "& input": {
    padding: "0px",
  },
  "& input::placeholder": {
    color: theme.palette.text.secondary,
    opacity: 1,
    textAlign: "left",
  },
  "&:focus-within": {
    border: `2px solid ${theme.palette.primary.main}`,
  },
});

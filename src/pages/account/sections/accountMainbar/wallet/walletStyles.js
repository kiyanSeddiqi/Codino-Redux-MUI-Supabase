import { flexCol } from "../../../../../styles/globalStyles";

export const chargeDialog = {
  "& .MuiDialog-paper": {
    ...flexCol(2),
    bgcolor: "background.default",
    p: 2,
    borderRadius: { xs: "16px 16px 0 0", md: 2 },
    m: 0,
    position: { xs: "fixed", md: "static" },
    bottom: { xs: 0 },
    width: {
      xs: "100%",
      md: "70%",
      lg: "50%",
    },
    maxWidth: {
      xs: "100%",
      md: "400px",
    },
  },

  "& .MuiBackdrop-root": {
    backdropFilter: "blur(6px)",
  },
};

export const chargeDialogTitle = {
  fontSize: {
    xs: "16px",
    md: "18px",
  },
  fontWeight: 600,
  p: 0,
};

export const chargeDialogLabel = {
  marginBottom: "6px",
  fontSize: "12px",
  display: "block",
};

export const chargeDialogInput = (theme, hasError = false) => ({
  p: "8px 12px",
  borderRadius: "12px",
  border: `2px solid ${hasError ? theme.palette.error.main : theme.palette.divider}`,
  width: "100%",
  height: "44px",
  fontSize: "14px",
  bgcolor: "background.default",
  transition: "border 0.3s ease",
  "& input": {
    padding: "0px",
  },
  "& input::placeholder": {
    color: "text.secondary",
    opacity: 0.8,
  },
  "&:focus-within": {
    border: "2px solid ",
    borderColor: hasError
      ? theme.palette.error.main
      : theme.palette.primary.main,
  },
});

export const chargeErrorLabel = (theme) => ({
  color: theme.palette.mode === "dark" ? "error.light" : "error.main",
  mt: 1,
  display: "block",
  fontWeight: 500,
});

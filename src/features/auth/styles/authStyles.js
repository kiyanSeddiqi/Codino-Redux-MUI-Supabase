import { red } from "@mui/material/colors";
import { flexCol } from "../../../styles/globalStyles";

export const authModalDialog = {
  "& .MuiDialog-paper": {
    m: 0,
    borderRadius: "8px",
    width: "400px",
    maxHeight: "90svh",
    alignItems: "center",
    p: {
      xs: 2.5,
      sm: 4,
    },
    gap: {
      xs: 3,
      sm: 5,
    },
    scrollbarWidth: "none",
  },
  "& .MuiBackdrop-root": {
    backdropFilter: "blur(6px)",
  },
};

export const authModalBox = {
  ...flexCol(3),
  width: "100%",
};

export const authModalSwitchBox = {
  borderRadius: "12px",
  p: "10px",
  bgcolor: "divider",
};

export const authModalSwitchBtn = {
  px: 0,
  flex: 1,
  zIndex: 2,
  fontSize: {
    xs: "14px",
    sm: "16px",
  },
  "&:hover": {
    bgcolor: "transparent",
  },
};

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
  ...flexCol(3),
  width: "100%",
};

export const authModalInput = (theme, hasError = false) => ({
  p: "8px 12px",
  borderRadius: "12px",
  border: `2px solid ${hasError ? theme.palette.error.main : "transparent"}`,
  width: "100%",
  height: "44px",
  fontSize: {
    xs: "14px",
    md: "16px",
  },
  bgcolor: "background.default",
  transition: "border 0.3s ease",
  "& input": {
    padding: "0px",
  },
  "& input::placeholder": {
    color: "text.secondary",
    opacity: 1,
  },
  "&:focus-within": {
    border: "2px solid ",
    borderColor: hasError
      ? theme.palette.error.main
      : theme.palette.primary.main,
  },
});

export const formLabel = {
  marginBottom: "6px",
  fontSize: "14px",
  display: "block",
};

export const formErrorLabel = (theme) => ({
  color: "error.main",
  mt: 1,
  display: "block",
  fontWeight: 500,
});

export const formPasswordIcon = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  left: "15px",
  zIndex: 50,
  "& svg": {
    fontSize: "18px",
    color: "text.secondary",
  },
};

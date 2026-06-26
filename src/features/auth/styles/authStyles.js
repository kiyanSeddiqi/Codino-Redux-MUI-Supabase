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

export const authModalSwitchBtn = (theme) => ({
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
  ...flexCol(3),
  width: "100%",
};

export const authModalInput = {
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
    color: "text.secondary",
    opacity: 1,
    textAlign: "left",
  },
  "&:focus-within": {
    border: "2px solid ",
    borderColor: "primary.main",
  },
};

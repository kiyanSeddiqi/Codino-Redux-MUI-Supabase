import { flexCol } from "../../../../../styles/globalStyles";

export const ticketDialog = {
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

export const ticketDialogTitle = {
  fontSize: {
    xs: "16px",
    md: "18px",
  },
  fontWeight: 600,
  p: 0,
};

export const ticketDialogLabel = {
  marginBottom: "6px",
  fontSize: "12px",
  display: "block",
};

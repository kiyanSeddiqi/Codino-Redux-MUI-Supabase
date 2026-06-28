import { position } from "stylis";
import { flexBox, flexCol } from "../../../../styles/globalStyles";
import { Opacity } from "@mui/icons-material";

export const mentorContainer = {
  display: "flex",
  flexDirection: {
    xs: "column",
    xl: "row",
  },
  gap: 2.5,
};

export const mentorCardWrapper = {
  overflowX: {
    xs: "auto",
    lg: "visible",
  },
  display: {
    xs: "flex",
    lg: "grid",
  },
  gap: 2.5,
  gridTemplateColumns: {
    lg: "repeat(3, minmax(0, 1fr))",
  },
};

export const mentorCard = {
  p: {
    xs: "20px",
    lg: "32px",
  },
  flex: {
    xs: "0 0 70%",
    lg: "initial",
  },
  borderRadius: "24px",
  border: 1,
  borderColor: "divider",
  position: "relative",
  minHeight: {
    xs: "auto",
    xl: "392px",
  },
  width: {
    xs: "100%",
    xl: "auto",
  },
};

export const mentorCardQuoteIcon = {
  position: "absolute",
  top: 5,
  right: 5,
  fontSize: 46,
  opacity: 0.2,
  color: "primary.main",
};

export const mentorCardContent = {
  ...flexCol("16px"),
  p: 0,
  justifyContent: "space-between",
  "&:last-child": { pb: 0 },
  height: "100%",
};

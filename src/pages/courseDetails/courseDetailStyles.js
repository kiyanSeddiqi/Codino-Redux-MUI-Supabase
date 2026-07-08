import { flexCol } from "../../styles/globalStyles";

export const courseContainer = {
  ...flexCol(5),
  mt: 4,
  mb: 6,
};

export const courseContentBox = {
  width: "100%",
  display: "flex",
  gap: 4,
  flexDirection: {
    xs: "column-reverse",
    md: "row",
  },
};

export const courseSidbarBox = {
  flexBasis: {
    md: "35%",
    lg: "30%",
    xl: "25%",
  },
  flexShrink: 0,
  width: {
    xs: "100%",
  },
};

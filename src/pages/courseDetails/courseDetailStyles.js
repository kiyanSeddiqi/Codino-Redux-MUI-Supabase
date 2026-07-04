import { flexCol } from "../../styles/globalStyles";

export const courseContainer = {
  ...flexCol(5),
  mt: 4,
  height: "100vh",
};

export const courseContentBox = {
  width: "100%",
  display: "flex",
  gap: 4,
  flexDirection: {
    xs: "column-reverse",
    lg: "row",
  },
};

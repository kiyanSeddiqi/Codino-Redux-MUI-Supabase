import { flexCol } from "../../../../../styles/globalStyles";

export const wishListContainer = {
  display: "grid",
  gridTemplateColumns: {
    xs: "repeat(1, minmax(0 ,1fr))",
    md: "repeat(2, minmax(0 ,1fr))",
    lg: "repeat(3, minmax(0 ,1fr))",
  },
  gap: 2.5,
};

export const wishListPlaceholder = {
  ...flexCol(2.5),
  alignItems: "center",
  justifyContent: "center",
  my: 12,
};

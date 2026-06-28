import { flexCol } from "../../../../styles/globalStyles";

export const consulationCardBox = {
  p: "40px 32px",
  borderRadius: "24px",
  bgcolor: "menuItemBg",
  color: "primary.main",
  width: {
    xs: "100%",
  },
};

export const consulationCardContent = {
  ...flexCol("20px"),
  p: 0,
  "&:last-child": { pb: 0 },
  height: "100%",
};

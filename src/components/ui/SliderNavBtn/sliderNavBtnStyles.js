import { flexCenter } from "../../../styles/globalStyles";

export const sliderNavBtn = (theme) => ({
  ...flexCenter("9px"),
  p: "10px",
  borderRadius: "6px",
  border: 1,
  borderColor: "divider",
  bgcolor: "background.paper",
  "& > .MuiButtonBase-root ": {
    width: "24px",
    height: "24px",
    p: 0,
    minWidth: 0,
    borderRadius: "2px",
  },
});

import { flexCenter, flexCol } from "../../../styles/globalStyles";

export const footerContainer = {
  borderTop: 1,
  borderColor: "divider",
  py: 2.5,
  px: 2,
  ...flexCol("32px"),
};

export const footerNavList = {
  ...flexCenter("24px"),
  "& .MuiListItem-root": {
    width: "auto",
    p: 0,
  },
};

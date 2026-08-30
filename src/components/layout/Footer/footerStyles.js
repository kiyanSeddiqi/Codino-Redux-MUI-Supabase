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

export const footerMobileNavList = {
  display: "flex",
  justifyContent: "space-around",
  width: "100%",
  gap: 2,
  flexWrap: "wrap",
  "&>*": {
    p: 0,
    width: "auto",
    fontSize: { xs: "14px", sm: "16px" },
  },
};

export const footerDescription = {
  width: { xs: "auto", lg: "75%" },
  color: "text.secondary",
  lineHeight: {
    xs: "28px",
    sm: "32px",
  },
};

import { flexBox, flexCol } from "../../../../styles/globalStyles";

export const bannerContainer = {
  position: "relative",
  mb: 2.5,
  display: "flex",
  flexDirection: {
    xs: "column",
    lg: "row",
  },
  alignItems: "center",
  border: 1,
  borderColor: "divider",
  borderRadius: "24px",
  overflow: "clip",
  p: {
    xs: 0,
    lg: 10,
  },
};

export const bannerTextBox = {
  ...flexCol("20px"),
  width: {
    xs: "100%",
    lg: "50%",
  },
  p: {
    xs: "32px",
    lg: 0,
  },
};

export const bannerText = {
  fontSize: {
    xs: "14px",
    lg: "16px",
  },
  width: {
    xs: "100%",
    lg: "75%",
  },
  lineHeight: "32px",
};

export const bannerImg = {
  position: {
    lg: "absolute",
  },
  left: 0,
  bottom: 0,
  transform: {
    xs: "scale(1.1)",
    lg: "scale(1)",
  },
  transformOrigin: "top",
  width: {
    xs: "100%",
    lg: "50%",
  },
};

export const bannerBtnWrapper = (theme) => ({
  ...flexBox("12px"),
  "&>*": {
    fontSize: "12px",
    width: "100%",
    [theme.breakpoints.up(420)]: {
      width: "auto",
    },
  },
  flexWrap: "wrap",
  [theme.breakpoints.up(420)]: {
    flexWrap: "nowrap",
  },
});

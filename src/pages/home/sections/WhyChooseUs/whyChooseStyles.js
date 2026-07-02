import { flexBox, flexCol } from "../../../../styles/globalStyles";

export const whyChooseUsBox = {
  display: "flex",
  gap: {
    xs: "46px",
    lg: "56px",
  },
  width: "100%",
  alignItems: "center",
  flexDirection: {
    xs: "column",
    lg: "row",
  },
};

export const whyChooseUsImgBox = {
  width: {
    xs: "100%",
    lg: "50%",
  },
};

export const whyChooseUsImg = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

export const whyChooseUsTextBox = {
  width: {
    xs: "100%",
    lg: "50%",
  },
  ...flexCol("20px"),
};

export const whyChooseUsTitle = {
  fontSize: {
    xs: 22,
    sm: 28,
    md: 30,
    lg: 32,
    xl: 36,
  },
  fontWeight: "bold",
};

export const whyChooseUsListItem = {
  ...flexBox("12px"),
  p: "20px 0px",
  "& > svg": {
    color: "primary.main",
  },
  "& > strong": {
    fontWeight: 700,
  },
  borderBottom: 1,
  borderColor: "divider",
};

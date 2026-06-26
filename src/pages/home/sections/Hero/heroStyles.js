import {
  flexCenter,
  flexCol,
  sectionStyle,
} from "../../../../styles/globalStyles";
import { position } from "stylis";

export const heroContainer = {
  ...sectionStyle,
  display: "flex",
  alignItems: "center",
  gap: 5,
  mt: 4,
  flexDirection: {
    xs: "column-reverse",
    lg: "row",
  },
};

export const heroTextBox = (theme) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: 5,
  [theme.breakpoints.up("lg")]: {
    flex: 1,
    width: "auto",
  },
});

export const heroText = (theme) => ({
  display: "flex",
  flexDirection: "column",
  gap: {
    xs: 1,
    md: 2,
  },
});

export const heroTitle = {
  fontWeight: 700,
  fontSize: {
    xs: 22,
    md: 32,
    lg: 42,
  },
};

export const heroBtnWrapper = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  flexWrap: "wrap",
  width: "100%",
};

export const heroStats = {
  display: "flex",
  justifyContent: {
    xs: "space-around",
    xl: "flex-start",
  },
  gap: {
    xs: 2,
    xl: 6,
  },
};

export const heroIconBox = (theme) => ({
  ...flexCol("12px"),
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
  },
});

export const heroStatsText = {
  ...flexCol(0),
  alignItems: {
    xs: "center",
    lg: "flex-start",
  },

  "& > h3": {
    color: "primary.main",
    fontWeight: 700,
  },

  "& > span": {
    fontSize: {
      xs: "12px",
      lg: "14px",
    },
  },
};

export const heroSliderBox = {
  width: {
    xs: "100%",
    lg: "50%",
  },
  height: {
    lg: "100%",
  },
  display: "block",
  aspectRatio: "1 / 1",
  borderRadius: "24px",
  overflow: "hidden",
  position: "relative",
  border: 1,
  borderColor: "divider",
  p: 1,
};

export const heroSliderImg = {
  width: "100%",
  height: "100%",
  display: "block",
  objectFit: "cover",
  borderRadius: "16px",
  aspectRatio: "1 / 1",
};

export const heroSliderNavBox = {
  position: "absolute",
  bottom: "22px",
  right: "22px",
  zIndex: 10,
};

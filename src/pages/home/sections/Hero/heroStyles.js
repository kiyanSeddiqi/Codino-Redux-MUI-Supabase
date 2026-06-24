import { flexCenter, flexCol } from "../../../../styles/globalStyles";
import { position } from "stylis";

export const heroContainer = (theme) => ({
  display: "flex",
  alignItems: "center",
  gap: 5,
  flexDirection: "column-reverse",
  mt: 4,
  mb: 12.5,
  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
  },
});

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
  gap: 1,
  [theme.breakpoints.up("md")]: {
    gap: 2,
  },
});

export const heroTitle = (theme) => ({
  fontWeight: 700,
  fontSize: 42,
  [theme.breakpoints.down("md")]: {
    fontSize: 32,
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: 22,
  },
});

export const heroBtnWrapper = (theme) => ({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  flexWrap: "wrap",
  width: "100%",
});

export const heroStats = (theme) => ({
  display: "flex",
  justifyContent: "space-around",
  [theme.breakpoints.up("xl")]: {
    justifyContent: "start",
    gap: 6,
  },
  [theme.breakpoints.down("sm")]: {
    gap: 2,
  },
});

export const heroIconBox = (theme) => ({
  ...flexCol("12px"),
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
  },
});

export const heroStatsText = (theme) => ({
  ...flexCol(""),
  alignItems: "center",
  "& > h3": {
    color: "primary.main",
    fontWeight: 700,
  },
  [theme.breakpoints.up("lg")]: {
    alignItems: "start",
    "& > span": {
      fontSize: "14px",
    },
  },
  [theme.breakpoints.down("lg")]: {
    "& > span": {
      fontSize: "12px",
    },
  },
});

export const heroSliderBox = (theme) => ({
  width: "100%",
  display: "block",
  aspectRatio: "1 / 1",
  borderRadius: "24px",
  overflow: "hidden",
  position: "relative",
  border: 1,
  borderColor: theme.palette.divider,
  p: 1,
  [theme.breakpoints.up("lg")]: {
    width: "50%",
    height: "100%",
  },
});

export const heroSliderImg = {
  width: "100%",
  height: "100%",
  display: "block",
  objectFit: "cover",
  borderRadius: "16px",
  aspectRatio: "1 / 1",
};

export const heroSliderNavBox = (theme) => ({
  position: "absolute",
  bottom: "22px",
  right: "22px",
  zIndex: 10,
});

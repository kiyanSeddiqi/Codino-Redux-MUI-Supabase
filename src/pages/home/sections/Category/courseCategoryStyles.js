import { flexCenter, flexCol } from "../../../../styles/globalStyles";

export const courseCategoryContainer = (theme) => ({
  ...flexCol(2.5),
  mb: {
    xs: 8,
    md: 12.5,
  },
});

export const courseCategoryTitle = (theme) => ({
  ...flexCol("6px"),
  "& > h4": {
    fontSize: "24px",
    fontWeight: "600",
    [theme.breakpoints.down("lg")]: {
      fontSize: "20px",
    },
  },
});

export const courseCategoryGrid = {
  display: "grid",
  width: "100%",
  gap: {
    xs: "12px",
    sm: 2.5,
  },
  fontSize: "14px",
  gridTemplateColumns: {
    xs: "repeat(2, minmax(0, 1fr))",
    md: "repeat(4, minmax(0, 1fr))",
    lg: "repeat(5, minmax(0, 1fr))",
    xl: "repeat(6, minmax(0, 1fr))",
  },
};

export const courseCategoryGridItem = (theme) => ({
  ...flexCenter(1, "column"),
  width: "100%",
  minHeight: "120px",
  fontSize: "12px",
  textAlign: "center",
  p: 2.5,

  border: 1,
  borderColor: "divider",
  transition: "all 0.3s ease",
  "&:hover": {
    bgcolor: "menuItemBg",
    color: theme.palette.mode === "dark" ? "text.primary" : "primary.main",
    "& svg": {
      color: theme.palette.mode === "dark" ? "#fff !important" : "primary.main",
    },
    borderColor: "primary.main",
  },
  [theme.breakpoints.up("lg")]: {
    fontSize: "14px",
    borderRadius: "24px",
  },
  [theme.breakpoints.up("xs")]: {
    p: "12px",
    borderRadius: "14px",
  },
});

import { flexCenter, flexCol } from "../../../../styles/globalStyles";

export const courseCategoryContainer = (theme) => ({
  ...flexCol(2.5),
  mb: 12.5,
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

export const courseCategoryGrid = (theme) => ({
  display: "grid",
  width: "100%",
  gap: 2.5,
  fontSize: "14px",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  [theme.breakpoints.up("xl")]: {
    gridTemplateColumns: "repeat(6, minmax(0, 1fr))",
  },
  [theme.breakpoints.up("lg")]: {
    gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
  },
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
  },
  [theme.breakpoints.up("xs")]: {
    gap: "12px",
  },
});

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

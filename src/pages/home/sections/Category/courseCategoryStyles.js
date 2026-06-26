import { flexCenter, flexCol } from "../../../../styles/globalStyles";

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
  textAlign: "center",
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
  fontSize: {
    xs: "12px",
    lg: "14px",
  },
  borderRadius: {
    xs: "14px",
    lg: "24px",
  },
  p: {
    xs: "12px",
    lg: "20px",
  },
});

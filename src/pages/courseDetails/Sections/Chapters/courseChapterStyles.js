import { flexBox } from "../../../../styles/globalStyles";

export const chapterSectionTitle = {
  fontSize: {
    xs: "20px",
    lg: "24px",
  },
  fontWeight: 600,
};

export const chapterStats = {
  fontSize: {
    xs: "12px",
    lg: "14px",
  },
  color: "text.secondary",
};

export const chapterAccordion = {
  bgcolor: "background.default",
  p: {
    xs: "14px",
    md: 2.5,
  },
  minHeight: {
    xs: "auto",
    md: "70px",
  },
  boxShadow: "none",
  "&.Mui-expanded": {
    margin: 0,
  },
  "& .MuiAccordionSummary-content.Mui-expanded": {
    my: 0,
  },
  border: 1,
  borderColor: "divider",
  "&.MuiAccordion-root": {
    borderRadius: "12px",
  },
  "&::before": {
    display: "none",
  },
};

export const courseChapterNum = {
  color: "primary.main",
  fontWeight: 700,
  fontSize: "18px",
};

export const courseChapterTitle = {
  fontSize: {
    xs: "14px",
    lg: "16px",
  },
  fontWeight: 600,
  overflow: "hidden",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 1,
};

export const chapterAccordionSummary = {
  px: 0,
  minHeight: 0,
  my: 0,
  gap: 2.5,
  alignItems: "center",
  "& .MuiAccordionSummary-content": {
    margin: 0,
  },
  "& .MuiSvgIcon-root": {
    color: "primary.main",
  },
  "&.Mui-expanded": {
    minHeight: 0,
  },
};

export const chapterLessonStats = {
  ...flexBox(2),
  "& .MuiTypography-root": {
    fontSize: "14px",
    color: "text.secondary",
  },
};

export const lessonItemTitleBox = {
  display: "flex",
  alignItems: {
    lg: "center",
  },
  flexDirection: {
    xs: "column",
    lg: "row",
  },
  gap: {
    xs: "4px",
    lg: "14px",
    lg: "20px",
  },
};

export const lessonEmptyBox = {
  color: "error.main",
  bgcolor: "error.light",
  fontSize: "14px",
  p: "10px 20px",
  borderRadius: "12px",
};

export const lessonItemTitle = {
  fontSize: { xs: "14px", md: "12px", lg: "14px" },
  overflow: "hidden",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 1,
};

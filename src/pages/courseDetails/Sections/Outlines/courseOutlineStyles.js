import { flexBox } from "../../../../styles/globalStyles";

export const outlineSectionTitle = {
  fontSize: {
    xs: "20px",
    lg: "24px",
  },
  fontWeight: 600,
};

export const outlineStats = {
  fontSize: {
    xs: "12px",
    lg: "14px",
  },
  color: "text.secondary",
};

export const outlineAccordion = {
  bgcolor: "background.default",
  p: 2.5,
  minHeight: "70px",
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
};

export const outlineAccordionSummary = {
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

export const outlineLessonStats = {
  ...flexBox(2),
  "& .MuiTypography-root": {
    fontSize: "14px",
    color: "text.secondary",
  },
};

import { flexCol } from "../../../../styles/globalStyles";

export const faqContainer = {
  ...flexCol(2.5),
  mb: "48px",
};

export const faqAccordion = {
  bgcolor: "background.default",
  boxShadow: "none",
  "&.Mui-expanded": {
    margin: 0,
  },
  "& .MuiTypography-root": {
    fontSize: {
      xs: "14px",
      sm: "16px",
    },
    lineHeight: "32px",
  },
  "&.Mui-expanded::before": {
    opacity: 1,
  },
  "& .MuiAccordionSummary-content.Mui-expanded": {
    my: 0,
  },
};

export const faqAccordionSummary = {
  flexDirection: "row-reverse",
  alignItems: "center",
  gap: 2,
  px: 0,
  py: {
    xs: 2,
    md: 2.5,
  },
  minHeight: 0,
  my: 0,
  "& .MuiAccordionSummary-content": {
    margin: 0,
  },
  "& .MuiSvgIcon-root": {
    color: "primary.main",
  },
};

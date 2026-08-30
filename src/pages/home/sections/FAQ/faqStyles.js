import { flexCol } from "../../../../styles/globalStyles";

export const faqContainer = {
  ...flexCol(2.5),
  mb: "48px",
};

export const faqAccordion = {
  bgcolor: "background.default",
  boxShadow: "none",

  "&:before": {
    opacity: 1,
    display: "block",
    borderTop: "1px solid rgba(0, 0, 0, 0.12)",
  },

  "&.Mui-expanded": {
    margin: 0,
    zIndex: 0,

    "&:not(:first-of-type):before": {
      opacity: "1 !important",
      display: "block !important",
      borderTop: "1px solid rgba(0, 0, 0, 0.12) !important",
    },
  },

  "& .MuiTypography-root": {
    fontSize: {
      xs: "14px",
      sm: "16px",
    },
    lineHeight: "32px",
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

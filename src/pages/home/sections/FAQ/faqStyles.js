import { flexCol } from "../../../../styles/globalStyles";

export const faqContainer = {
  ...flexCol(2.5),
  mb: "48px",
};

export const faqAccordion = {
  bgcolor: "background.default",
  boxShadow: "none",
  border: "none",
  borderBottom: 1,
  borderColor: "divider",
  "&.Mui-expanded": {
    margin: 0,
  },
};

export const faqAccordionSummary = {
  flexDirection: "row-reverse",
  alignItems: "center",
  gap: 2,
  px: 0,
  py: 2.5,
  minHeight: 0,
  "& .MuiAccordionSummary-content": {
    margin: 0,
  },
  "& .MuiSvgIcon-root": {
    color: "primary.main",
  },
};

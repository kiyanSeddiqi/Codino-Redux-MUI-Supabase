import { flexBox, flexCol } from "../../../../styles/globalStyles";

export const filterContainer = {
  display: "flex",
  gap: 2.5,
};

export const filterSidebar = {
  display: {
    xs: "none",
    lg: "flex",
  },
  flexDirection: "column",
  gap: 2,
  width: "20%",
};

export const filterMainbar = {
  display: "flex",
  flexDirection: "column",
  flex: 1,
  gap: {
    xs: 5,
    lg: 2.5,
  },
};

export const searchBox = {
  ...flexBox(1),
  position: "relative",
  p: "10px",
  borderRadius: "6px",
  bgcolor: "background.paper",
  border: 1,
  borderColor: "divider",
  "& input": {
    bgcolor: "transparent",
    fontSize: "14px",
    py: 0,
    "&:focus": {
      outline: "none",
    },
  },
};

export const catAccordion = {
  bgcolor: "background.default",
  boxShadow: "none",
  "&::before": {
    opacity: 0,
  },
  "&.Mui-expanded": {
    margin: 0,
  },
  "& .MuiAccordionSummary-content.Mui-expanded": {
    my: 0,
  },
  "& .MuiAccordionSummary-root.Mui-expanded": {
    minHeight: 0,
  },
  "&:focus-visible": {
    bgcolor: "transparent",
  },
};

export const catAccordionSummary = {
  px: 0,
  py: 1,
  minHeight: 0,
  my: 0,
  "& .MuiAccordionSummary-content": {
    margin: 0,
  },
};

export const filterListBox = {
  ...flexCol("4px"),
  maxHeight: "300px",
  overflow: "auto",
};

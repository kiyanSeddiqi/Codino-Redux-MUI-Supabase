import { red } from "@mui/material/colors";
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

export const filterAccordion = {
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

export const filterAccordionTitle = {
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
  overflowY: "auto",
  overflowX: "hidden",
  scrollbarWidth: "auto",
  "&::-webkit-scrollbar": {
    width: "6px",
    mr: 1,
  },
  "&::-webkit-scrollbar-track": {
    bgcolor: "menuItemBg",
  },
  "&::-webkit-scrollbar-thumb": {
    bgcolor: "primary.main",
    borderRadius: "10px",
  },
};

export const filterOption = {
  "& .MuiFormControlLabel-label": {
    fontSize: "12px",
  },
  gap: "10px",
  mr: 0,
};

export const filterOptionCheckbox = {
  "&.Mui-checked": {
    color: "primary.main",
  },
  "& .MuiSvgIcon-root": {
    color: "primary.main",
  },
  p: 0,
};

export const activeFilterBtn = {
  borderRadius: "6px",
  border: 1,
  borderColor: "primary.main",
};

export const notFoundMsg = (theme) => ({
  color: theme.palette.mode === "dark" ? "accent.main" : red[700],
  fontSize: {
    xs: "16px",
    lg: "20px",
  },
});

export const switchboxStyle = (theme) => ({
  width: 60,
  height: 34,
  p: 0,

  "& .MuiSwitch-switchBase": {
    p: 0,
    transitionDuration: "500ms",
    top: "5px",
    left: "5px",

    "&.Mui-checked": {
      transform: "translateX(25.5px) rotate(90deg)",
      color: "#fff",

      "& + .MuiSwitch-track": {
        bgcolor: "primary.main",
        opacity: 1,
      },
    },
  },

  "& .MuiSwitch-thumb": {
    width: 24,
    height: 24,
    boxShadow: "none",
    borderRadius: "8px",
  },

  "& .MuiSwitch-track": {
    borderRadius: "10px",
    bgcolor: "divider",
    opacity: 1,
  },
});

export const switchBoxlLabel = {
  "& .MuiFormControlLabel-label": {
    fontSize: {
      xs: "14px",
      xl: "16px",
    },
  },
  mr: 0,
  gap: "10px",
};

export const sortContainer = {
  display: {
    xs: "none",
    lg: "flex",
  },
  alignItems: "center",
  gap: "10px",
};

export const sortMobileContainer = (theme) => ({
  display: {
    xs: "flex",
    lg: "none",
  },
  gap: 2.5,
  "& button": {
    borderRadius: "8px",
    gap: "12px",
    width: "100%",
    py: "16px",
  },
  flexWrap: "nowrap",
  [theme.breakpoints.down(480)]: {
    flexWrap: "wrap",
  },
});

export const coursesCardCotainer = {
  display: "grid",
  gridTemplateColumns: {
    xs: "repeat(1, minmax(0, 1fr))",
    md: "repeat(3, minmax(0, 1fr))",
    xl: "repeat(4, minmax(0, 1fr))",
  },
  columnGap: 2.5,
  rowGap: 4,
  width: "100%",
};

export const sortMobileBadge = (theme) => ({
  p: "4px 12px",
  borderRadius: "8px",
  display: "grid",
  placeItems: "center",
  fontSize: "14px",
  bgcolor: "primary.main",
  color: theme.palette.mode === "dark" ? "secondary.contrastText" : "#fff",
  lineHeight: "16px",
  minWidth: 24,
});

export const filterModalStyle = {
  display: { lg: "none", xs: "block" },
  "& .MuiDialog-paper": {
    p: { xs: "16px 16px 8px", sm: "20px 32px 8px", md: 2 },
    m: 0,
    gap: 2,
    borderRadius: { xs: "16px 16px 0 0", md: "8px" },
    minWidth: { md: "50%" },
    position: { xs: "fixed", md: "static" },
    bottom: { xs: 0 },
    width: {
      xs: "100%",
      md: "50%",
    },
    maxWidth: "100%",
    bgcolor: "background.default",
  },

  "& .MuiBackdrop-root": {
    backdropFilter: "blur(6px)",
  },
};

export const filterModalTitle = {
  ...flexBox(1),
  p: 0,
  color: "text.secondary",
  fontWeight: "600",
  fontSize: {
    xs: "16px",
    md: "18px",
  },
};

export const sortModalList = {
  "& .MuiListItemText-root": {
    textAlign: "right",
  },
  "& .MuiListItem-root": {
    p: 0,
  },
  "& .MuiListItemButton-root": {
    px: 1,
    py: 2,
  },
};

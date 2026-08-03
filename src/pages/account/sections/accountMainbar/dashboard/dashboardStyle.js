import { flexCol } from "../../../../../styles/globalStyles";

export const dashboardCardContainer = {
  display: "flex",
  alignItems: "flex-start",
  gap: { xs: 2, lg: 4 },
  flexDirection: {
    xs: "column",
    md: "row",
  },
};

export const dashboardCard = {
  p: 2.5,
  border: 1,
  borderColor: "divider",
  borderRadius: 2,
  ...flexCol(2.5),
  width: "100%",
  minHeight: "227px",
};

export const mySuggestedCourses = {
  ...flexCol(2.5),
  mt: 2.5,
};

export const favoriteListDialog = {
  "& .MuiDialog-paper": {
    ...flexCol(2),
    p: 2,
    borderRadius: "8px",
    bgcolor: "background.default",
    m: 0,
    width: "fit-content",
    minWidth: "400px",
    maxHeight: "90svh",
  },

  "& .MuiBackdrop-root": {
    backdropFilter: "blur(6px)",
  },
};

export const favoriteListTitle = {
  fontSize: "18px",
  fontWeight: 600,
  p: 0,
};

export const favoriteListGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: "10px",
};

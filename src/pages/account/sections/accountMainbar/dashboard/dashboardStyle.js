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

export const dashboardUserImg = {
  width: "100%",
  height: "100%",
  borderRadius: "100%",
  objectFit: "cover",
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
    width: "400px",
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
